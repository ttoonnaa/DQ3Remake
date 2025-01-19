
// ****************************************************************************************************************************
// はぐれを作成する
// ----------------------------------------------------------------------------------------------------------------------------

function tona_createHagureEnemy(level) {

	// 職業ごとにグラフィックが被らないようにする
	var faceIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
	faceIds = [0].concat(tona_arrayShuffle(faceIds));

	// 職業ごとにはぐれを作成
	for (var i = 1; i <= 10; i++) {
		tona_createHagureEnemyItem(210 + i, i, faceIds[i], level)
	}
}

// ****************************************************************************************************************************
// はぐれを作成する（個別）
// ----------------------------------------------------------------------------------------------------------------------------

function tona_createHagureEnemyItem(enemyId, klassId, faceId, level) {

	var enemy = $dataEnemies[enemyId];
	var klass = $dataClasses[klassId];
	var face = $tona_face[faceId];

	// 初期化
	enemy.traits = [];
	enemy.actions = [];
	enemy.tona_isHagure = true;
	enemy.tona_klassId = klassId;
	enemy.tona_level = level;
	enemy.tona_weaponIds = [];
	enemy.tona_armorIds = [];

	// グラフィックを設定
	enemy.battlerName = face.name;

	// 基本ステータス
	for (var prm = 2; prm < 8; prm++) {
		enemy.params[prm] = klass.params[prm][level];
	}

	// HPは体力の2倍
	enemy.params[0] = enemy.params[5] * 2;

	// MP無限
	enemy.params[1] = 999;

	// 報酬
	enemy.exp = Math.floor(level * level);

	// 装備
	tona_createHagureSetWeapon(enemy, 1, klassId, level);
	tona_createHagureSetArmor(enemy, 2, klassId, level);
	tona_createHagureSetArmor(enemy, 3, klassId, level);
	tona_createHagureSetArmor(enemy, 4, klassId, level);

	// 最終パラメーター（デバッグ表示用）
	enemy.tona_debugParams = [];
	for (var prm = 0; prm < 8; prm++) {
		enemy.tona_debugParams[prm] = enemy.params[prm];
		for (var i = 0; i < enemy.tona_weaponIds.length; i++) {
			enemy.tona_debugParams[prm] += $dataWeapons[enemy.tona_weaponIds[i]].params[prm];
		}
		for (var i = 0; i < enemy.tona_armorIds.length; i++) {
			enemy.tona_debugParams[prm] += $dataArmors[enemy.tona_armorIds[i]].params[prm];
		}
	}

	// 結果を表示する
	console.log(enemy);
}

// ****************************************************************************************************************************
// はぐれの武器を設定する
// ----------------------------------------------------------------------------------------------------------------------------

function tona_createHagureSetWeapon(enemy, etypeId, klassId, level) {

	var itemId = tona_createHagureSelectItem(enemy, $dataWeapons, etypeId, klassId, level);
	if (itemId > 0) {
		enemy.tona_weaponIds.push(itemId);
	}
}

// ****************************************************************************************************************************
// はぐれの防具を設定する
// ----------------------------------------------------------------------------------------------------------------------------

function tona_createHagureSetArmor(enemy, etypeId, klassId, level) {

	var itemId = tona_createHagureSelectItem(enemy, $dataArmors, etypeId, klassId, level);
	if (itemId > 0) {
		enemy.tona_armorIds.push(itemId);
	}
}

// ****************************************************************************************************************************
// はぐれのアイテムを選択する
// ----------------------------------------------------------------------------------------------------------------------------

function tona_createHagureSelectItem(enemy, items, etypeId, klassId, level) {

	var itemId = 0;
	for (var i = 1; i < items.length; i++) {
		var item = items[i];
		if (item.name != "") {

			// 指定レベル以下で装備できるもの
			if (item.etypeId == etypeId && item.tona_level <= level) {
				if (item.tona_canEquipClasses.includes(klassId)) {

					// レベルがより高ければ新しく選択
					if (itemId == 0 || item.tona_level > items[itemId].tona_level) {
						itemId = i;
					}
				}
			}
		}
	}

	return itemId;
}

// ****************************************************************************************************************************
// はぐれAI：アクションを作成
// ----------------------------------------------------------------------------------------------------------------------------

// アクション作成
Game_Enemy.prototype.tona_makeHagureActions = function() {

	var enemyId = this._enemyId;
    var klassId = $dataEnemies[enemyId].tona_klassId;
    var level = $dataEnemies[enemyId].tona_level;
    var actionList = [];
    var skillTable = [];

	// 死んでいる味方を検索しておく
	var friendUnit = this.friendsUnit();
    var deadFriends = friendUnit.members().filter(function(member) {
        return member.isDead();
    });

	// 死んでいる味方をランダムに選んで単体蘇生の対象にする
	var deadIndex = deadFriends.length == 0 ? -1 : Math.randomInt(deadFriends.length);

    // ＨＰが減っている味方を検索しておく
    var injuredFriends = friendUnit.members().filter(function(member) {
        return member.isAlive() && member._hp < member.mhp;
    });

	// 最もＨＰが減っている味方（割合で比較）を検索して単体回復の対象にする
	var healIndex = injuredFriends.length == 0 ? -1 : injuredFriends.reduce((a, b) => a._hp / a.mhp < b._hp / b.mhp ? a : b).index();

	// ****************************************************************************************************************************
	// もどきAI：ゆうしゃ
	// ----------------------------------------------------------------------------------------------------------------------------

	if (klassId == 1) {

		// 攻撃：70%
		// 支援：30%

		var attackSkill = [];
		var supportSkill = [];

		// 攻撃スキル
		if (level >= 40) {
			this.tona_addSkill(skillAttack, 13);	// ギガスラッシュ
			this.tona_addSkill(skillAttack, 13);	// ギガデイン
		}
		else if (level >= 40) {
			this.tona_addSkill(skillAttack, 13);	// ギガデイン
			this.tona_addSkill(skillAttack, 13);	// イオラ
		}
		else if (level >= 40) {
			this.tona_addSkill(skillAttack, 13);	// イオラ
		}
		else if (level >= 40) {
			this.tona_addSkill(skillAttack, 13);	// メラ
		}
	}

	// ****************************************************************************************************************************
	// もどきAI：せんし
	// ----------------------------------------------------------------------------------------------------------------------------

	else if (klassId == 2) {

		
	}

	// ****************************************************************************************************************************
	// もどきAI：後半
	// ----------------------------------------------------------------------------------------------------------------------------

	// スキルテーブルが空なら通常攻撃を入れる
	if (skillTable.length == 0) {
		this.tona_addSkill(skillTable, 1);		// 通常攻撃
	}

	// スキルテーブルをからスキルを選ぶ
    if (skillTable.length > 0) {
    	var node = skillTable;
		while (Array.isArray(node)) {
			node = tona_gacha(node);
		}

	    // スキルを設定
        var action = new Game_Action(this);
        action.setSkill(node.skillId);
        if (node.targetIndex >= 0) {
        	action.setTarget(node.targetIndex);
        }
        actionList.push(action);
	}

    return actionList;
}

// ****************************************************************************************************************************
// はぐれAI：スキルの候補を追加
// ----------------------------------------------------------------------------------------------------------------------------

Game_Enemy.prototype.tona_addSkill = function(kouhoList, skill, param) {

	// リストの場合
	if (Array.isArray(skill)) {

		if (skill.length == 0) {
			return;
		}

		// param = 重み
		if (param === undefined) {
			param = 1;
		}

        kouhoList.push( { node: skill, weight: param } );
	}
	// 整数の場合
	else {

		// param = ターゲット
		if (param === undefined) {
			param = -1;
		}

	    if (this.canUse($dataSkills[skill])) {
	        kouhoList.push( { node: { skillId: skill, targetIndex: param }, weight: 1 } );
	    }
	}
}
