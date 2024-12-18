
// ****************************************************************************************************************************
// 現在のクエスト構造体
// ----------------------------------------------------------------------------------------------------------------------------

_tona_QuestNow = function() {
    this.questId = 0;
    this.waveId = 0;
    this.progress = 0;
    this.eventList = [];
    this.gotGold = 0;

	this.getQuestNow = function() {
		return $_tona_quest[this.questId];
	}
    this.getWaveNow = function() {
		return $_tona_quest[this.questId].waves[this.waveId];
    }
}

// ****************************************************************************************************************************
// Interpreter：クエスト名を変数に取得
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Quest_GetQuestNameToVariable = function(questId) {
    $gameVariables.setValue(1, $_tona_quest[questId].name);
};

Game_Interpreter.prototype._tona_Quest_GetQuestNowNameToVariable = function() {
    $gameVariables.setValue(1, $_tona_questNow.getQuestNow().name);
};

// ****************************************************************************************************************************
// Interpreter：クエストを設定
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Quest_SetQuest = function(questId) {

    $_tona_questNow.questId = questId;
    $_tona_questNow.waveId = 1;
    $_tona_questNow.progress = -1;
    $_tona_questNow.eventList = [];
    $_tona_questNow.gotGold = 0;
};

// ****************************************************************************************************************************
// Interpreter：次の wave へ
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Quest_ToNextWave = function() {

    $_tona_questNow.waveId += 1;
    $_tona_questNow.progress = -1;
    $_tona_questNow.eventList = [];
};

// ****************************************************************************************************************************
// Interpreter：マップへ移動
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Quest_MoveToMap = function() {
    var mapId = $_tona_questNow.getWaveNow().mapId;

    // マップIDを初期化（強制的に再読み込みを発生させる）
    $gameMap._mapId = -1;
    // 場所移動
    $gamePlayer.reserveTransfer(mapId, 4, 6, 6, 2);
    // 移動待ち
    this.setWaitMode('transfer');
}

// ****************************************************************************************************************************
// Interpreter：クエストＢＧＭを再生
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Quest_PlayBgm = function() {

    // BGM 再生
    _tona_PlayBgm($_tona_questNow.getWaveNow().bgmName);
}

// ****************************************************************************************************************************
// Interpreter：イベント情報を準備
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Quest_ReadyMap = function() {
    var waveNum = $_tona_questNow.getQuestNow().waves.length - 1;
    var eventNum = $_tona_questNow.getWaveNow().eventNum;

    $_tona_questNow.eventList = [];
    for (var i = 0; i < eventNum; i++) {

        // ゴール
        if (i == eventNum - 1) {
            if ($_tona_questNow.waveId == waveNum) {
                $_tona_questNow.eventList.push($_tona_Const_QuestEventType_Goal);
	            continue;
            }
            else {
                $_tona_questNow.eventList.push($_tona_Const_QuestEventType_NextWave);
	            continue;
            }
        }

        // 通常のマス
        var value = Math.floor(Math.random() * 100);

        // バトル
        if (value < 50) {
            $_tona_questNow.eventList.push($_tona_Const_QuestEventType_Battle);
        }
        // ゴールド
        else if (value < 100) {
            $_tona_questNow.eventList.push($_tona_Const_QuestEventType_Gold);
        }
	}
}

// ****************************************************************************************************************************
// Interpreter：イベントを構築
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Quest_CreateMapEvent = function() {
    var event;
	var eventNum = $_tona_questNow.eventList.length;

    for (var i = 0; i < eventNum; i++) {

        if (false) {}
        else if ($_tona_questNow.eventList[i] == $_tona_Const_QuestEventType_Battle) {
            event = _tona_AddEmptyEvent(12 + 8 * i, 6);
            event.setImage("Monster", 2);
            event.setDirection(4);
        }
        else if ($_tona_questNow.eventList[i] == $_tona_Const_QuestEventType_Boss) {
            event = _tona_AddEmptyEvent(12 + 8 * i, 6);
            event.setImage("Monster", 3);
            event.setDirection(4);
        }
        else if ($_tona_questNow.eventList[i] == $_tona_Const_QuestEventType_Gold) {
            event = _tona_AddEmptyEvent(12 + 8 * i, 6);
            event.setImage("!Chest", 4);
            event.setDirection(2);
        }
        else if ($_tona_questNow.eventList[i] == $_tona_Const_QuestEventType_Item) {
            event = _tona_AddEmptyEvent(12 + 8 * i, 6);
            event.setImage("!Chest", 5);
            event.setDirection(2);
        }
        else if ($_tona_questNow.eventList[i] == $_tona_Const_QuestEventType_NextWave) {
            event = _tona_AddEmptyEvent(12 + 8 * i, 6);
            event.setImage("!Door2", 7);
            event.setDirection(2);
        }
        else if ($_tona_questNow.eventList[i] == $_tona_Const_QuestEventType_Goal) {
            event = _tona_AddEmptyEvent(12 + 8 * i, 6);
            event.setImage("!Crystal", 3);
            event.setDirection(2);
        }
    }
}

// ****************************************************************************************************************************
// Interpreter：マップからイベントを削除
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Quest_ClearMapEvent = function() {
    $dataMap.events = [];
    $gameMap._events = [];
    SceneManager._scene._spriteset._characterSprites = [];
}

// ****************************************************************************************************************************
// Interpreter：次のイベントへ
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Quest_ToNextEvent = function() {
    $_tona_questNow.progress ++;

    // 結果変数にイベントを入れておく
    $_tona_result = $_tona_questNow.eventList[$_tona_questNow.progress];
}

// ****************************************************************************************************************************
// Interpreter：クエスト成功
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Quest_SuccessQuest = function() {
    $_tona_resultAction = [];

	// クエスト成功
    $_tona_saveData.questClearFlag[$_tona_questNow.questId] = 1;
    $_tona_saveData.partyLevel = Math.max($_tona_saveData.partyLevel, $_tona_questNow.getQuestNow().levelResult);

    // チェックポイント処理
    $_tona_resultAction.push([$_tona_Const_ActionType_Message, "合計で " + $_tona_questNow.gotGold + " Gold を獲得！"]);

    // データを更新
    _tona_UpdateData(true);
}

// ****************************************************************************************************************************
// Interpreter：ランダムバトル
// ----------------------------------------------------------------------------------------------------------------------------

var $_tona_randomBattleCreateTemorary = 0;

_tona_randomBattleCreateTemorary = function() {
    this.done = 0;
    this.step = 0;
    this.questId = 0;
    this.maxIndex = 0;
    this.kouho = 0;
    this.hagure = 0;
    this.result = 0;
    this.maxWidth = 0;
    this.maxEnemyNum = 0;
    this.totalWidth = 0;
    this.totalWidthPlus = 0;
    this.enemyId = 0;
    this.enemyBitmap = 0;
};

Game_Interpreter.prototype._tona_Quest_CreateRandomBattle_Start = function() {
	var wave = $_tona_questNow.getWaveNow();

console.log("_tona_Quest_CreateRandomBattle_Start");

    $_tona_randomBattleCreateTemorary = new _tona_randomBattleCreateTemorary();
    $_tona_randomBattleCreateTemorary.done = 0;
    $_tona_randomBattleCreateTemorary.step = 1;
    $_tona_randomBattleCreateTemorary.questId = $_tona_questNow.questId;
    $_tona_randomBattleCreateTemorary.mapId = $_tona_questNow.waveId;
    $_tona_randomBattleCreateTemorary.monsters = wave.monster.concat();
    $_tona_randomBattleCreateTemorary.hagureRate = wave.hagureRate;
    $_tona_randomBattleCreateTemorary.hagure = wave.hagure.concat();
    $_tona_randomBattleCreateTemorary.result = [];
    $_tona_randomBattleCreateTemorary.maxWidth = Graphics.boxWidth;
    $_tona_randomBattleCreateTemorary.maxEnemyNum = wave.maxEnemyNum;
    $_tona_randomBattleCreateTemorary.totalWidth = 0;
    $_tona_randomBattleCreateTemorary.totalWidthPlus = 0;
    $_tona_randomBattleCreateTemorary.enemyId = 0;
    $_tona_randomBattleCreateTemorary.enemyBitmap = 0;

    // 敵の最大数
    if ($_tona_randomBattleCreateTemorary.maxEnemyNum == null) {
        $_tona_randomBattleCreateTemorary.maxEnemyNum = 5;
    }

    // はぐれを作っておく
    //_tona_CreateHagureEnemy($_tona_questNow.getWaveNow().level);
};

Game_Interpreter.prototype._tona_Quest_CreateRandomBattle_IsFinish = function() {
    return $_tona_randomBattleCreateTemorary.done;
};

Game_Interpreter.prototype._tona_Quest_CreateRandomBattle_Update = function() {

    // ステップ１
    if ($_tona_randomBattleCreateTemorary.step == 1) {

        // エネミーを選択
        if (Math.random() < $_tona_randomBattleCreateTemorary.hagureRate) {
            var index = Math.floor(Math.random() * $_tona_randomBattleCreateTemorary.hagure.length);
        	$_tona_randomBattleCreateTemorary.enemyId = $_tona_randomBattleCreateTemorary.hagure[index];
        }
        else {
            var index = Math.floor(Math.random() * $_tona_randomBattleCreateTemorary.monsters.length);
            $_tona_randomBattleCreateTemorary.enemyId = $_tona_randomBattleCreateTemorary.monsters[index];
        }
		// 画像読み込み開始
        var enemy = $dataEnemies[$_tona_randomBattleCreateTemorary.enemyId];
        $_tona_randomBattleCreateTemorary.enemyBitmap = ImageManager.loadEnemy(enemy.battlerName, enemy.battlerHue);  // Loading...
        $_tona_randomBattleCreateTemorary.step = 2;
    }
    if ($_tona_randomBattleCreateTemorary.step == 2) {

        // 読み込み終わったら次へ
        if ($_tona_randomBattleCreateTemorary.enemyBitmap.width > 0) {
            $_tona_randomBattleCreateTemorary.step = 3;
        }
        else {
            return;
        }
    }
    if ($_tona_randomBattleCreateTemorary.step == 3) {
        var enemy = $dataEnemies[$_tona_randomBattleCreateTemorary.enemyId];

        // 配置開始
        var maxWidth = $_tona_randomBattleCreateTemorary.maxWidth;
        var enemyId = $_tona_randomBattleCreateTemorary.enemyId;
        var enemyBitmapWidth = $_tona_randomBattleCreateTemorary.enemyBitmap.width;
        var enemyBitmapHeight = $_tona_randomBattleCreateTemorary.enemyBitmap.height;
        // 何匹まで配置できるだろう…？（まずは画面最大幅で計算）
        var maxNum = Math.min(Math.floor(maxWidth / (enemyBitmapWidth)), $_tona_randomBattleCreateTemorary.maxWidth);
        // クエストごとの配置最大数で制限（同じくまずはデフォルトの最大数で計算）
        maxNum = Math.min(maxNum, $_tona_randomBattleCreateTemorary.maxEnemyNum);
        // エネミーごとの配置最大数で制限
        if (enemy.json !== undefined && enemy.json['numMax'] !== undefined) {
            maxNum = Math.min(maxNum, enemy.json['numMax']);
        }
        // 配置する数を決める
        var num = _tona_SquareIntegerRand(maxNum) + 1;
        // 配置数を画面の残り幅で制限
        num = Math.min(num, Math.floor((maxWidth - $_tona_randomBattleCreateTemorary.totalWidth) / (enemyBitmapWidth)));
        // 配置数を残り配置数で制限
        num = Math.min(num, $_tona_randomBattleCreateTemorary.maxEnemyNum - $_tona_randomBattleCreateTemorary.result.length);
        // 配置する
        for (var i = 0; i < num; i++) {
            $_tona_randomBattleCreateTemorary.result.push([enemyId, enemyBitmapWidth, $_tona_randomBattleCreateTemorary.totalWidth]);
            $_tona_randomBattleCreateTemorary.totalWidth += enemyBitmapWidth;
        }
        // ５匹以上配置した場合は抜ける
        if ($_tona_randomBattleCreateTemorary.result >= 5) {
            $_tona_randomBattleCreateTemorary.step = 4;
        }
        // 画面占有率の確率でも抜ける
        else if (Math.floor(Math.random() * maxWidth) < $_tona_randomBattleCreateTemorary.totalWidth) {
            $_tona_randomBattleCreateTemorary.step = 4;
        }
        else {
            $_tona_randomBattleCreateTemorary.step = 1;  // 次の候補へ
        }
    }
    if ($_tona_randomBattleCreateTemorary.step == 4) {

        // 左端の位置を求める
        var offsetX = (Graphics.boxWidth - $_tona_randomBattleCreateTemorary.totalWidth) / 2;
        // トループにエネミーを作成していく
        $dataTroops[$_tona_Const_TroopId_RandomEnemy].members = [];
        for (var i = 0; i < $_tona_randomBattleCreateTemorary.result.length; i++) {
            var enemyId = $_tona_randomBattleCreateTemorary.result[i][0];
            var enemy = $dataEnemies[enemyId];
            var x = Math.floor(offsetX + $_tona_randomBattleCreateTemorary.result[i][2] + $_tona_randomBattleCreateTemorary.result[i][1] / 2);
            var y = 436 - ((enemy.json !== undefined && enemy.json['y'] !== undefined) ? enemy.json['y'] : 0);
            $dataTroops[$_tona_Const_TroopId_RandomEnemy].members.push({"enemyId":enemyId,"x":x,"y":y,"hidden":false});
        }
        $_tona_randomBattleCreateTemorary.step = 99;
        // 処理終了
        $_tona_randomBattleCreateTemorary.done = 1;
    }
}

// ****************************************************************************************************************************
// Interpreter：ランダム Gold
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Quest_CreateRandomGold = function() {
    $_tona_resultAction = [];

    var gold = $_tona_questNow.getWaveNow().gold;
    $gameParty.gainGold(gold);

    $_tona_questNow.gotGold += gold;
    $_tona_resultAction.push([$_tona_Const_ActionType_Message, gold + " Gold 手に入れた！"]);
}

