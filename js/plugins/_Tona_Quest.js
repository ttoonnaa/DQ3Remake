
// ****************************************************************************************************************************
// 現在のクエスト構造体
// ----------------------------------------------------------------------------------------------------------------------------

function tona_QuestNow() {
    this.initialize(...arguments);
}

tona_QuestNow.prototype.initialize = function() {
    this._questId = 0;
    this._waveId = 0;
    this._progress = 0;
    this._eventList = [];
    this._gotGold = 0;
    this._losed = 0;
};

tona_QuestNow.prototype.quest = function() {
	return $tona_quest[this._questId];
}

tona_QuestNow.prototype.wave = function() {
	return $tona_quest[this._questId].waves[this._waveId];
}

// ****************************************************************************************************************************
// Interpreter：クエスト名を変数に取得
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_getQuestNameToVariable = function(questId) {
    $gameVariables.setValue(1, $tona_quest[questId].name);
};

Game_Interpreter.prototype.tona_quest_getQuestNowNameToVariable = function() {
    $gameVariables.setValue(1, $tona_questNow.quest().name);
};

// ****************************************************************************************************************************
// Interpreter：クエストを初期化
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_initialize = function() {
    $tona_questNow = new tona_QuestNow();
}

// ****************************************************************************************************************************
// Interpreter：クエストを設定
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_setQuest = function(questId) {
    $tona_questNow._questId = questId;
    $tona_questNow._waveId = 1;
    $tona_questNow._progress = -1;
    $tona_questNow._eventList = [];
    $tona_questNow._gotGold = 0;
    $tona_questNow._losed = 0;
};

// ****************************************************************************************************************************
// Interpreter：次の wave へ
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_toNextWave = function() {

    $tona_questNow._waveId += 1;
    $tona_questNow._progress = -1;
    $tona_questNow._eventList = [];
};

// ****************************************************************************************************************************
// Interpreter：マップへ移動
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_moveToMap = function() {
    var mapId = $tona_questNow.wave().mapId;

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

Game_Interpreter.prototype.tona_quest_playBgm = function() {

    // BGM 再生
    tona_playBgm($tona_questNow.wave().bgmName);
}

// ****************************************************************************************************************************
// Interpreter：イベント情報を準備
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_readyMap = function() {
    var waveNum = $tona_questNow.quest().waves.length - 1;
    var eventNum = $tona_questNow.wave().eventNum;

    $tona_questNow._eventList = [];
    for (var i = 0; i < eventNum; i++) {

        // ゴール
        if (i == eventNum - 1) {
            if ($tona_questNow._waveId == waveNum) {
                $tona_questNow._eventList.push($tona_QuestEventType_Goal);
	            continue;
            }
            else {
                $tona_questNow._eventList.push($tona_QuestEventType_NextWave);
	            continue;
            }
        }

        // 通常のマス
        var value = Math.floor(Math.random() * 100);

        // バトル
        if (value < 50) {
            $tona_questNow._eventList.push($tona_QuestEventType_Battle);
        }
        // ゴールド
        else if (value < 100) {
            $tona_questNow._eventList.push($tona_QuestEventType_Gold);
        }
	}
}

// ****************************************************************************************************************************
// Interpreter：イベントを構築
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_createMapEvent = function() {
    var event;
	var eventNum = $tona_questNow._eventList.length;

    for (var i = 0; i < eventNum; i++) {

        if (false) {}
        else if ($tona_questNow._eventList[i] == $tona_QuestEventType_Battle) {
            event = tona_addEmptyEvent(12 + 8 * i, 6);
            event.setImage("Monster", 2);
            event.setDirection(4);
        }
        else if ($tona_questNow._eventList[i] == $tona_QuestEventType_Boss) {
            event = tona_addEmptyEvent(12 + 8 * i, 6);
            event.setImage("Monster", 3);
            event.setDirection(4);
        }
        else if ($tona_questNow._eventList[i] == $tona_QuestEventType_Gold) {
            event = tona_addEmptyEvent(12 + 8 * i, 6);
            event.setImage("!Chest", 4);
            event.setDirection(2);
        }
        else if ($tona_questNow._eventList[i] == $tona_QuestEventType_Item) {
            event = tona_addEmptyEvent(12 + 8 * i, 6);
            event.setImage("!Chest", 5);
            event.setDirection(2);
        }
        else if ($tona_questNow._eventList[i] == $tona_QuestEventType_NextWave) {
            event = tona_addEmptyEvent(12 + 8 * i, 6);
            event.setImage("!Door2", 7);
            event.setDirection(2);
        }
        else if ($tona_questNow._eventList[i] == $tona_QuestEventType_Goal) {
            event = tona_addEmptyEvent(12 + 8 * i, 6);
            event.setImage("!Crystal", 3);
            event.setDirection(2);
        }
    }
}

// ****************************************************************************************************************************
// Interpreter：マップからイベントを削除
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_clearMapEvent = function() {
    $dataMap.events = [];
    $gameMap._events = [];
    SceneManager._scene._spriteset._characterSprites = [];
}

// ****************************************************************************************************************************
// Interpreter：次のイベントへ
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_toNextEvent = function() {
    $tona_questNow._progress ++;

    // 結果変数にイベントを入れておく
    $tona_result = $tona_questNow._eventList[$tona_questNow._progress];
}

// ****************************************************************************************************************************
// Interpreter：クエスト成功
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_successQuest = function() {
    $tona_resultAction = [];

	var lastCleared = $tona_saveData.questClearFlag[$tona_questNow._questId];

	// クエスト成功
    $tona_saveData.questClearFlag[$tona_questNow._questId] = 1;
    $tona_saveData.partyLevel = Math.max($tona_saveData.partyLevel, $tona_questNow.quest().levelResult);

    // チェックポイント処理
    $tona_resultAction.push([$tona_ActionType_Message, "合計で " + $tona_questNow._gotGold + " Gold を獲得！"]);

	// 初回報酬
	if (lastCleared != 1) {
		var reward = $tona_questNow.quest().reward;
		var item = tona_getItem(reward.kind, reward.dataId);
		$gameParty.gainItem(item, 1);
	    $tona_resultAction.push([$tona_ActionType_Message, "初回報酬：" + item.name + " を獲得！"]);
	}

    // データを更新
    tona_updateData(true);
}

// ****************************************************************************************************************************
// Interpreter：クエスト失敗
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_failQuest = function() {
	$tona_questNow._losed = 1;
}

// ****************************************************************************************************************************
// Interpreter：クエスト失敗判定
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_isFailedQuest = function() {
	return $tona_questNow._losed == 1;
}

// ****************************************************************************************************************************
// Interpreter：ランダムバトル
// ----------------------------------------------------------------------------------------------------------------------------

var $tona_randomBattleCreateTemorary = 0;

tona_randomBattleCreateTemorary = function() {
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

Game_Interpreter.prototype.tona_quest_createRandomBattle_start = function() {
	var wave = $tona_questNow.wave();

    $tona_randomBattleCreateTemorary = new tona_randomBattleCreateTemorary();
    $tona_randomBattleCreateTemorary.done = 0;
    $tona_randomBattleCreateTemorary.step = 1;
    $tona_randomBattleCreateTemorary.questId = $tona_questNow._questId;
    $tona_randomBattleCreateTemorary.mapId = $tona_questNow._waveId;
    $tona_randomBattleCreateTemorary.monsters = tona_findLevelEnemies(wave.level);
    $tona_randomBattleCreateTemorary.hagureRate = wave.hagureRate;
    $tona_randomBattleCreateTemorary.hagure = wave.hagure.concat();
    $tona_randomBattleCreateTemorary.result = [];
    $tona_randomBattleCreateTemorary.maxWidth = Graphics.boxWidth;
    $tona_randomBattleCreateTemorary.maxEnemyNum = wave.maxEnemyNum;
    $tona_randomBattleCreateTemorary.totalWidth = 0;
    $tona_randomBattleCreateTemorary.totalWidthPlus = 0;
    $tona_randomBattleCreateTemorary.enemyId = 0;
    $tona_randomBattleCreateTemorary.enemyBitmap = 0;

    // 敵の最大数
    if ($tona_randomBattleCreateTemorary.maxEnemyNum == null) {
        $tona_randomBattleCreateTemorary.maxEnemyNum = 5;
    }

    // 謎の影を作っておく
    tona_createKageEnemy($tona_questNow.wave().level);

    // はぐれを作っておく
    tona_createHagureEnemy($tona_questNow.wave().level);
};

Game_Interpreter.prototype.tona_quest_createRandomBattle_isFinish = function() {
    return $tona_randomBattleCreateTemorary.done;
};

Game_Interpreter.prototype.tona_quest_createRandomBattle_update = function() {

    // ステップ１
    if ($tona_randomBattleCreateTemorary.step == 1) {

        // エネミーを選択
        if (Math.random() < $tona_randomBattleCreateTemorary.hagureRate) {
            var index = Math.floor(Math.random() * $tona_randomBattleCreateTemorary.hagure.length);
        	$tona_randomBattleCreateTemorary.enemyId = $tona_randomBattleCreateTemorary.hagure[index];
        }
        else {
            var index = Math.floor(Math.random() * $tona_randomBattleCreateTemorary.monsters.length);
            $tona_randomBattleCreateTemorary.enemyId = $tona_randomBattleCreateTemorary.monsters[index];
        }
		// 謎の影の場合は Temp に変換
		if ($tona_randomBattleCreateTemorary.enemyId == $tona_EnemyId_Kage) {
			$tona_randomBattleCreateTemorary.enemyId = $tona_EnemyId_KageTemp;
		}
		// 画像読み込み開始
        var enemy = $dataEnemies[$tona_randomBattleCreateTemorary.enemyId];
        $tona_randomBattleCreateTemorary.enemyBitmap = ImageManager.loadEnemy(enemy.battlerName, enemy.battlerHue);  // Loading...
        $tona_randomBattleCreateTemorary.step = 2;
    }
    if ($tona_randomBattleCreateTemorary.step == 2) {

        // 読み込み終わったら次へ
        if ($tona_randomBattleCreateTemorary.enemyBitmap.width > 0) {
            $tona_randomBattleCreateTemorary.step = 3;
        }
        else {
            return;
        }
    }
    if ($tona_randomBattleCreateTemorary.step == 3) {
        var enemy = $dataEnemies[$tona_randomBattleCreateTemorary.enemyId];

        // 配置開始
        var maxWidth = $tona_randomBattleCreateTemorary.maxWidth;
        var enemyId = $tona_randomBattleCreateTemorary.enemyId;
        var enemyBitmapWidth = $tona_randomBattleCreateTemorary.enemyBitmap.width;
        var enemyBitmapHeight = $tona_randomBattleCreateTemorary.enemyBitmap.height;
        // 何匹まで配置できるだろう…？（まずは画面最大幅で計算）
        var maxNum = Math.min(Math.floor(maxWidth / (enemyBitmapWidth)), $tona_randomBattleCreateTemorary.maxWidth);
        // クエストごとの配置最大数で制限（同じくまずはデフォルトの最大数で計算）
        maxNum = Math.min(maxNum, $tona_randomBattleCreateTemorary.maxEnemyNum);
        // エネミーごとの配置最大数で制限
        if (enemy.meta.tona_maxNum != null) {
            maxNum = Math.min(maxNum, eval(enemy.meta.tona_maxNum));
        }
        // 配置する数を決める
        var num = tona_squareIntegerRand(maxNum) + 1;
        // 配置数を画面の残り幅で制限
        num = Math.min(num, Math.floor((maxWidth - $tona_randomBattleCreateTemorary.totalWidth) / (enemyBitmapWidth)));
        // 配置数を残り配置数で制限
        num = Math.min(num, $tona_randomBattleCreateTemorary.maxEnemyNum - $tona_randomBattleCreateTemorary.result.length);
        // 配置する
        for (var i = 0; i < num; i++) {
            $tona_randomBattleCreateTemorary.result.push([enemyId, enemyBitmapWidth, $tona_randomBattleCreateTemorary.totalWidth]);
            $tona_randomBattleCreateTemorary.totalWidth += enemyBitmapWidth;
        }
        // ５匹以上配置した場合は抜ける
        if ($tona_randomBattleCreateTemorary.result >= 5) {
            $tona_randomBattleCreateTemorary.step = 4;
        }
        // 画面占有率の確率でも抜ける
        else if (Math.floor(Math.random() * maxWidth) < $tona_randomBattleCreateTemorary.totalWidth) {
            $tona_randomBattleCreateTemorary.step = 4;
        }
        else {
            $tona_randomBattleCreateTemorary.step = 1;  // 次の候補へ
        }
    }
    if ($tona_randomBattleCreateTemorary.step == 4) {

        // 左端の位置を求める
        var offsetX = (Graphics.boxWidth - $tona_randomBattleCreateTemorary.totalWidth) / 2;
        // トループにエネミーを作成していく
        $dataTroops[$tona_TroopId_RandomEnemy].members = [];
        for (var i = 0; i < $tona_randomBattleCreateTemorary.result.length; i++) {
            var enemyId = $tona_randomBattleCreateTemorary.result[i][0];
            var enemy = $dataEnemies[enemyId];
            var x = Math.floor(offsetX + $tona_randomBattleCreateTemorary.result[i][2] + $tona_randomBattleCreateTemorary.result[i][1] / 2);
            var y = 436 - (enemy.meta.tona_posY != null ? enemy.meta.tona_posY : 0);
            $dataTroops[$tona_TroopId_RandomEnemy].members.push({"enemyId": enemyId, "x": x ,"y": y, "hidden": false});
        }
        $tona_randomBattleCreateTemorary.step = 99;
        // 処理終了
        $tona_randomBattleCreateTemorary.done = 1;
    }
}

// ****************************************************************************************************************************
// Interpreter：ランダム Gold
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_quest_createRandomGold = function() {
    $tona_resultAction = [];

    var gold = $tona_questNow.wave().gold;
    $gameParty.gainGold(gold);

    $tona_questNow._gotGold += gold;
    $tona_resultAction.push([$tona_ActionType_Message, gold + " Gold 手に入れた！"]);
}
