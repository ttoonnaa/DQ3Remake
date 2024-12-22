
// ****************************************************************************************************************************
// 定数
// ----------------------------------------------------------------------------------------------------------------------------

// データ数
var $_tona_Const_ClassCount = 10;

// アクション
var $_tona_Const_ActionType_Message = 1;
var $_tona_Const_ActionType_SoundItem2 = 2;

// クエストイベント
var $_tona_Const_QuestEventType_None = 0;
var $_tona_Const_QuestEventType_NextWave = 1;
var $_tona_Const_QuestEventType_Goal = 2;
var $_tona_Const_QuestEventType_Battle = 10;
var $_tona_Const_QuestEventType_Boss = 11;
var $_tona_Const_QuestEventType_Gold = 12;
var $_tona_Const_QuestEventType_Item = 13;

// トループ
var $_tona_Const_TroopId_RandomEnemy = 1;

// ステート
var $_tona_Const_StateId_Nifuramu = 12;
var $_tona_Const_StateId_Bashiruura = 13;
var $_tona_Const_StateId_Mahokanta = 14;
var $_tona_Const_StateId_Ukenagashi = 36;

// ****************************************************************************************************************************
// データベース読み込み後の編集
// ----------------------------------------------------------------------------------------------------------------------------

(function() {

	var DataManager_onLoad = DataManager.onLoad;
	DataManager.onLoad = function(object) {
		DataManager_onLoad.call(this, object);
		_tona_OverrideDatabase(object);
	}
})();

// ****************************************************************************************************************************
// マップデータをグローバルに読み込んでおくシステム
// ----------------------------------------------------------------------------------------------------------------------------

DataManager._tona_OnLoadMapData = function(object) {
    var array;
    this.extractMetadata(object);
    array = object.events;
    if (Array.isArray(array)) {
        for (var i = 0; i < array.length; i++) {
            var data = array[i];
            if (data && data.note !== undefined) {
                this.extractMetadata(data);
            }
        }
    }
};

DataManager._tona_LoadMapData = function(name, src) {
    var xhr = new XMLHttpRequest();
    var url = 'data/' + src;
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');
    xhr.onload = function() {
        if (xhr.status < 400) {
            window[name] = JSON.parse(xhr.responseText);
            DataManager._tona_OnLoadMapData(window[name]);
        }
    };
    xhr.onerror = function() {
        DataManager._errorUrl = DataManager._errorUrl || url;
    };
    window[name] = null;
    xhr.send();
};

function _tona_StoreLoadMapData(mapId, name) {
    var fileName = 'Map%1.json'.format(mapId.padZero(3));
    DataManager._tona_LoadMapData(name, fileName);
};

// ****************************************************************************************************************************
// セーブロードを拡張し、$_tona_saveData をセーブロードの対象にする
// ----------------------------------------------------------------------------------------------------------------------------

(function() {

    _DataManager_makeSaveContents = DataManager.makeSaveContents;
    DataManager.makeSaveContents = function() {
        var contents = _DataManager_makeSaveContents.call(this);
        contents._tona_saveData = $_tona_saveData;
        return contents;
    }
})();

(function() {

    _DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function(contents) {
        _DataManager_extractSaveContents.call(this, contents);
        $_tona_saveData = contents._tona_saveData;
        _tona_CreateSaveData();   // セーブデータを構築することで増えたパラメータを補正
    }
})();

// ****************************************************************************************************************************
// 汎用：イベントを追加
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_CopyMapEvent(srcEventId, dstX, dstY) {

    // 出力先のマップID
    var dstMapId = $gameMap.mapId();
    // 出力先のイベントIDを決定
    var dstEventId = $dataMap.events.length;
    // イベントデータをコピーする
    $dataMap.events.push($dataMap.events[srcEventId]);

    // イベントを作成
    var event = new Game_Event(dstMapId, dstEventId);
    // イベントの位置を設定
    event.locate(dstX, dstY);
    // イベントをマップに追加
    $gameMap._events.push(event);
    // イベント用のスプライトを追加
    SceneManager._scene._spriteset._tona_AddEventSprite(event);

    return event;
};

function _tona_AddEmptyEvent(dstX, dstY) {
    var event;

    // コピー元の空のイベントID
    var srcEventId = 1;
    // 出力先のマップID
    var dstMapId = this._transfer ? $gamePlayer.newMapId() : $gameMap.mapId();
    // 出力先のイベントIDを決定
    var dstEventId = $dataMap.events.length;
    // イベントデータをコピーする
    $dataMap.events.push($_tona_mapDataStore.events[srcEventId]);

    // イベントを作成
    event = new Game_Event(dstMapId, dstEventId);
    // イベントの位置を設定
    event.locate(dstX, dstY);
    // イベントをマップに追加
    $gameMap._events.push(event);
    // イベント用のスプライトを追加
    SceneManager._scene._spriteset._tona_AddEventSprite(event);

    return event;
};

// ****************************************************************************************************************************
// 汎用：パーティーが満員かを判定する
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_PartyIsFull() {

	return $gameParty.size() == $_tona_PubMaxParty;
}

// ****************************************************************************************************************************
// 汎用：マップのスプライトセットにイベントのスプライトを追加
// ----------------------------------------------------------------------------------------------------------------------------

Spriteset_Map.prototype._tona_AddEventSprite = function(event) {
    var sprite = new Sprite_Character(event)
    this._characterSprites.push(sprite);
    this._tilemap.addChild(sprite);
};

// ****************************************************************************************************************************
// 汎用：BGM を再生
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_PlayBgm(name) {
    AudioManager.playBgm({name:name, pan: 0, volume:100, pitch:90});
};

// ****************************************************************************************************************************
// 汎用：Lerp
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_Lerp(value, min, max) {
	return Math.max(Math.min(value, max), min);
};

// ****************************************************************************************************************************
// 汎用：偏った乱数
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_SquareIntegerRand(value) {
    return Math.floor(Math.pow(Math.random(), 2) * value);
};

// ****************************************************************************************************************************
// 汎用：シャッフル
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_ArrayShuffle(arr) {
	var newArr = [];

	while (arr.length > 0) {
		var index = Math.randomInt(arr.length);
		newArr.push(arr[index]);
		arr.splice(index, 1);
	}

	return newArr;
};




