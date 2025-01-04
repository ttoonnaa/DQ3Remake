
// ****************************************************************************************************************************
// 定数
// ----------------------------------------------------------------------------------------------------------------------------

// データ数
var $tona_ClassCount = 10;

// バランス
var $tona_MaxParty = 10;
var $tona_MaxActorId = 10;

// アクション
var $tona_ActionType_Message = 1;
var $tona_ActionType_SoundItem2 = 2;

// クエストイベント
var $tona_QuestEventType_None = 0;
var $tona_QuestEventType_NextWave = 1;
var $tona_QuestEventType_Goal = 2;
var $tona_QuestEventType_Battle = 10;
var $tona_QuestEventType_Boss = 11;
var $tona_QuestEventType_Gold = 12;
var $tona_QuestEventType_Item = 13;

// トループ
var $tona_TroopId_RandomEnemy = 1;

// ステート
var $tona_StateId_Zaki = 12;
var $tona_StateId_VitalPoint = 13;
var $tona_StateId_Nifuramu = 16;
var $tona_StateId_Bashirura = 15;
var $tona_StateId_Ukenagashi = 36;
var $tona_StateId_GreatGuard = 39;
var $tona_StateId_Sutemi = 40;

// 命中タイプ
var $tona_HitType_State = 3;

// ****************************************************************************************************************************
// データベース読み込み後の編集
// ----------------------------------------------------------------------------------------------------------------------------

var tona_DataManager_onLoad = DataManager.onLoad;

DataManager.onLoad = function(object) {
	tona_DataManager_onLoad.call(this, object);
	tona_overrideDatabase(object);
}

// ****************************************************************************************************************************
// マップデータをグローバルに読み込んでおくシステム
// ----------------------------------------------------------------------------------------------------------------------------

DataManager.tona_onLoadMapData = function(object) {
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

DataManager.tona_loadMapData = function(name, src) {
    var xhr = new XMLHttpRequest();
    var url = 'data/' + src;
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');
    xhr.onload = function() {
        if (xhr.status < 400) {
            window[name] = JSON.parse(xhr.responseText);
            DataManager.tona_onLoadMapData(window[name]);
        }
    };
    xhr.onerror = function() {
        DataManager._errorUrl = DataManager._errorUrl || url;
    };
    window[name] = null;
    xhr.send();
};

function tona_storeLoadMapData(mapId, name) {
    var fileName = 'Map%1.json'.format(mapId.padZero(3));
    DataManager.tona_loadMapData(name, fileName);
};

// ****************************************************************************************************************************
// セーブロードを拡張し、$tona_saveData をセーブロードの対象にする
// ----------------------------------------------------------------------------------------------------------------------------

var tona_DataManager_makeSaveContents = DataManager.makeSaveContents;

DataManager.makeSaveContents = function() {
    var contents = tona_DataManager_makeSaveContents.call(this);
    contents.tona_saveData = $tona_saveData;
    return contents;
}

var tona_DataManager_extractSaveContents = DataManager.extractSaveContents;

DataManager.extractSaveContents = function(contents) {
    tona_DataManager_extractSaveContents.call(this, contents);
    $tona_saveData = contents.tona_saveData;
    tona_updateSaveData();   // セーブデータを構築することで増えたパラメータを補正
}

// ****************************************************************************************************************************
// 汎用：イベントを追加
// ----------------------------------------------------------------------------------------------------------------------------

function tona_copyMapEvent(srcEventId, dstX, dstY) {

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
    SceneManager._scene._spriteset.tona_addEventSprite(event);

    return event;
};

function tona_addEmptyEvent(dstX, dstY) {
    var event;

    // コピー元の空のイベントID
    var srcEventId = 1;
    // 出力先のマップID
    var dstMapId = this._transfer ? $gamePlayer.newMapId() : $gameMap.mapId();
    // 出力先のイベントIDを決定
    var dstEventId = $dataMap.events.length;
    // イベントデータをコピーする
    $dataMap.events.push($tona_mapDataStore.events[srcEventId]);

    // イベントを作成
    event = new Game_Event(dstMapId, dstEventId);
    // イベントの位置を設定
    event.locate(dstX, dstY);
    // イベントをマップに追加
    $gameMap._events.push(event);
    // イベント用のスプライトを追加
    SceneManager._scene._spriteset.tona_addEventSprite(event);

    return event;
};

// ****************************************************************************************************************************
// 汎用：パーティーが満員かを判定する
// ----------------------------------------------------------------------------------------------------------------------------

function tona_partyIsFull() {

	return $gameParty.size() == $tona_MaxParty;
}

// ****************************************************************************************************************************
// 汎用：マップのスプライトセットにイベントのスプライトを追加
// ----------------------------------------------------------------------------------------------------------------------------

Spriteset_Map.prototype.tona_addEventSprite = function(event) {
    var sprite = new Sprite_Character(event)
    this._characterSprites.push(sprite);
    this._tilemap.addChild(sprite);
};

// ****************************************************************************************************************************
// 汎用：BGM を再生
// ----------------------------------------------------------------------------------------------------------------------------

function tona_playBgm(name) {
    AudioManager.playBgm({name:name, pan: 0, volume:100, pitch:90});
};

// ****************************************************************************************************************************
// 汎用：Limit
// ----------------------------------------------------------------------------------------------------------------------------

function tona_limit(value, min, max) {
	return Math.max(Math.min(value, max), min);
};

// ****************************************************************************************************************************
// 汎用：偏った乱数
// ----------------------------------------------------------------------------------------------------------------------------

function tona_squareIntegerRand(value) {
    return Math.floor(Math.pow(Math.random(), 2) * value);
};

// ****************************************************************************************************************************
// 汎用：配列をシャッフル
// ----------------------------------------------------------------------------------------------------------------------------

function tona_arrayShuffle(arr) {
	var newArr = [];

	while (arr.length > 0) {
		var index = Math.randomInt(arr.length);
		newArr.push(arr[index]);
		arr.splice(index, 1);
	}

	return newArr;
};

// ****************************************************************************************************************************
// 汎用：配列をユニーク
// ----------------------------------------------------------------------------------------------------------------------------

function tona_arrayUniq(arr) {
	return [...new Set(arr)];
}

// ****************************************************************************************************************************
// 汎用：数値を取得（eval）
// ----------------------------------------------------------------------------------------------------------------------------

function tona_evalNum(value, def) {

	value = eval(value);

	return tona_toNum(value, def);
}

// ****************************************************************************************************************************
// 汎用：数値を取得
// ----------------------------------------------------------------------------------------------------------------------------

function tona_toNum(value, def) {

	def = def ?? 0;

	if (typeof value === 'number' && isFinite(value)) {
		return value;
	}

	if (typeof value === 'string') {
		const parsed = parseFloat(value.trim());
		if (isFinite(parsed)) {
			return parsed;
		}
	}

	return def;
}


