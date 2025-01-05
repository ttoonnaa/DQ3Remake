
// ****************************************************************************************************************************
// バトル：影を作る
// ----------------------------------------------------------------------------------------------------------------------------

function tona_createKageEnemy(level) {

	// 正体となるエネミーを選択（レベル+2までのエネミーが登場）
	var enemyIds = tona_findLevelEnemies(level + 2);
	var enemyId = enemyIds[Math.randomInt(enemyIds.length)];
	var src = $dataEnemies[enemyId];

	// Temp 枠に正体のデータをコピー
	var dst = $dataEnemies[$tona_EnemyId_KageTemp];

	// データは固定なのでシャローコピーで問題ない
	dst.tona_level = src.tona_level;
	dst.params = src.params;
	dst.exp = src.exp;
	dst.gold = src.gold;
	dst.dropItems = src.dropItems;
	dst.actions = src.actions;
	dst.trais = src.traits;
	dst.meta = JSON.parse(JSON.stringify(src.meta));
	delete dst.meta.tona_posY;

	console.log("謎の影=", src.name, dst);
}

// ****************************************************************************************************************************
// バトル：仲間呼び
// ----------------------------------------------------------------------------------------------------------------------------

var $tona_battle_callEnemyTemorary = 0;

function tona_battle_callEnemyTemorary() {
    this.enemyId = 0;
    this.enemyIdList = 0;
    this.enemyBitmap = 0;
    this.intervalId = 0;
};

Game_Action.prototype.tona_callEnemy_start = function(param) {
    var subject = BattleManager._subject;
    if (subject instanceof Game_Enemy) {
		var enemyId = 0;

		// エネミーIDを決定する
        if ((typeof param) === 'number') {
            enemyId = param > 0 ? param : subject._enemyId;
        }
        else if (param.length > 0) {
            enemyId = param[0];
        }
        else {
            console.log("仲間呼びに失敗");
        }

		// 謎の影の場合は Temp に変換
		if (enemyId == $tona_EnemyId_Kage) {
			$enemyId = $tona_EnemyId_KageTemp;
		}

        $tona_battle_callEnemyTemorary = new tona_battle_callEnemyTemorary();
        $tona_battle_callEnemyTemorary.enemyId = enemyId;
        $tona_battle_callEnemyTemorary.enemyIdList = [];
        $tona_battle_callEnemyTemorary.enemyBitmap = ImageManager.loadEnemy($dataEnemies[enemyId].battlerName, $dataEnemies[enemyId].battlerHue);  // Loading...
        $tona_battle_callEnemyTemorary.intervalId = setInterval("tona_battle_callEnemy_update()", 30);

        // 読み込み終わるまでのウェイト
        BattleManager._logWindow._waitCount = 100000;
    }
}

function tona_battle_callEnemy_update() {

    // 読み込みが終わっていない場合は何もしない
    if (!($tona_battle_callEnemyTemorary.enemyBitmap.width > 0)) {
        return;
    }

    var dataEnemy = $dataEnemies[$tona_battle_callEnemyTemorary.enemyId];

    var resultX = -1;
    var resultY = 436 - (dataEnemy.meta.tona_posY != null ? dataEnemy.meta.tona_posY : 0);
    var enemySprite = $tona_battle_callEnemyTemorary.enemyBitmap;

    // 現在のエネミーの配置を調べる
    var poses = [[0, 0]];
    for (var i = 0; i < $gameTroop._enemies.length; i++) {
        var enemy = $gameTroop._enemies[i];
        if (enemy.isAlive()) {
            var sprite = ImageManager.loadEnemy(enemy.battlerName(), enemy.battlerHue());  // キャッシュにいるはず
            poses.push([enemy._screenX - sprite.width / 2, enemy._screenX + sprite.width / 2]);
        }
    }
    poses.push([Graphics.boxWidth, Graphics.boxWidth]);
    // 配置をソートするよ
    poses.sort(function(a, b) { if (a[0] < b[0]) return -1; if (a[0] > b[0]) return 1; return 0; });
    // 間に配置できるかな…？
    for (var i = 0; i < poses.length - 1; i++) { 
        if (poses[i + 1][0] - poses[i][1] >= enemySprite.width) {
            // 左右寄せに配置した場合の座標を求める
            var leftAttach = poses[i][1] + enemySprite.width / 2;
            var rightAttach = poses[i + 1][0] - enemySprite.width / 2;
            // 中央に配置できたなら確定
            if (leftAttach < Graphics.boxWidth / 2 && Graphics.boxWidth / 2 < rightAttach) {
                resultX = Graphics.boxWidth / 2;
                break;
            }
            // できるだけ中央に近い位置に配置
            resultX = Math.abs(leftAttach - Graphics.boxWidth / 2) < Math.abs(resultX - Graphics.boxWidth / 2) ? leftAttach : resultX;
            resultX = Math.abs(rightAttach - Graphics.boxWidth / 2) < Math.abs(resultX - Graphics.boxWidth / 2) ? rightAttach : resultX;
        }
    }
    // 配置できた場合
    if (resultX >= 0) {
        // エネミーデータを追加
        $dataTroops[$tona_TroopId_RandomEnemy].members.push(
            { "enemyId": $tona_battle_callEnemyTemorary.enemyId, "x": resultX, "y": resultY, "hidden": false }
        );
        // エネミーをセットアップ
        var enemy = new Game_Enemy($tona_battle_callEnemyTemorary.enemyId, resultX, resultY);
        $gameTroop._enemies.push(enemy);
        $gameTroop.makeUniqueNames();
        // スプライトを追加
        var sprite = new Sprite_Enemy(enemy);
        SceneManager._scene._spriteset._battleField.addChild(sprite);
        SceneManager._scene._spriteset._enemySprites.push(sprite);
    }

    // まだ呼ぶべきエネミーがいる場合
    if ($tona_battle_callEnemyTemorary.enemyIdList.length > 0) {
        var enemyId = $tona_battle_callEnemyTemorary.enemyId;
        $tona_battle_callEnemyTemorary.enemyId = $tona_battle_callEnemyTemorary.enemyIdList[0];
        $tona_battle_callEnemyTemorary.enemyIdList = $tona_battle_callEnemyTemorary.enemyIdList.slice(1);
        $tona_battle_callEnemyTemorary.enemyBitmap = ImageManager.loadEnemy($dataEnemies[enemyId].battlerName, $dataEnemies[enemyId].battlerHue);  // Loading...
    }
    // もうエネミーがいない場合
    else {
        // ウェイト終了
        BattleManager._logWindow._waitCount = 0;
        clearInterval($tona_battle_callEnemyTemorary.intervalId);
        // テンポラリを削除
        $tona_battle_callEnemyTemorary = 0;
    }
};

// ****************************************************************************************************************************
// バトル：身代わりや受け流しによる対象移動
// ----------------------------------------------------------------------------------------------------------------------------

BattleManager.applySubstitute = function(target) {

	// 身代わり
	// substituteBattler に引数が増えたので修正
    if (this.checkSubstitute(target)) {
        var substitute = target.friendsUnit().substituteBattler(target);
        if (substitute && target !== substitute) {
            this._logWindow.displaySubstitute(substitute, target);
            return substitute;
        }
    }

	// 受け流し
	if (target.tona_isUkenagashi()) {
		const rand = Math.randomInt(8);

		// 5/8 で敵に受け流し
		if (rand < 5) {
	        var substitute = target.opponentsUnit().tona_ukenagashiBattler(target);
	        if (substitute && target !== substitute) {
	            this._logWindow.tona_displayUkenagashi(substitute, target);
	            return substitute;
	        }
	    }
		// 2/8 で味方に受け流し
		else if (rand < 7) {
	        var substitute = target.friendsUnit().tona_ukenagashiBattler(target);
	        if (substitute && target !== substitute) {
	            this._logWindow.tona_displayUkenagashi(substitute, target);
	            return substitute;
	        }
	    }
	}

    return target;
};

// ****************************************************************************************************************************
// バトル：身代わりが発動するアクションかどうか判定（Game_Action に入れるべきでは？）
// ----------------------------------------------------------------------------------------------------------------------------

BattleManager.checkSubstitute = function(target) {

	// 身代わりの判定条件を変更

	// 修正前：必中でない、かつ HP 1/4 未満
	// 修正後：常時 75%、必中でもかばう、HP 関係なくかばう

    return target.isDying() && this._action.isForOpponent() && (this._action.isForOne() || this._action.isForRandom());
};

// ****************************************************************************************************************************
// ウィンドウ：受け流し結果を表示
// ----------------------------------------------------------------------------------------------------------------------------

Window_BattleLog.prototype.tona_displayUkenagashi = function(substitute, target) {
    const targetName = target.name();
    const text = targetName + "は攻撃を受け流した！";
    this.push("performSubstitute", substitute, target);
    this.push("addText", text);
};





