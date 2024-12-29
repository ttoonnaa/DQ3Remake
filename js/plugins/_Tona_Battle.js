
// ****************************************************************************************************************************
// バトル：物理攻撃のダメージ計算式
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype._tona_physicalDamage = function(target) {

	// https://hyperwiki.jp/dq3rhd2d/damage-calc/

	// 運の良さによるダメージ補正は無しにする

	let atk = Math.min(this.atk, 850);
	let def = target.def;

	let rate = Math.random() * 0.2 + 0.9;
	let base = atk * (1700 - atk) / 2000 * (1700 - def) / 2000 * 0.7 * rate;
	let value = (atk - def) * (1700 - Math.max(atk, def)) / 2000 * 0.6;

	return base + value;
}

// ****************************************************************************************************************************
// バトル：攻撃呪文のダメージ計算式
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype._tona_magicalDamage = function(target, min, max) {

	// https://hyperwiki.jp/dq3rhd2d/damage-calc/

	// 元の計算式はレベルごとに設定された基準を採用してるがやめる
	// 代わりに、呪文ごとに設定された基準を採用する
	// 「呪文ごとに設定された基準」= その呪文のダメージの中央値（つまりメラなら10程度）

	let mat = this.mat;

	let center = (min + max) / 2;
	let rate = _tona_Limit(((mat - center) / 2 + center) / center, 1, 1.3);
	let value = (max - min + 1) * Math.random() + min;

	return value * rate;
}

// ****************************************************************************************************************************
// バトル：回復呪文のダメージ計算式
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype._tona_healDamage = function(target, min, max) {

	let value = (max - min + 1) * Math.random() + min;

	return value;
}

// ****************************************************************************************************************************
// 計算式のエイリアス（エディターで指定する計算式で使う）
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.PD = function(target) {
	return BattleManager._tona_physicalDamage(target);
}

Game_BattlerBase.prototype.MD = function(target, min, max) {
	return BattleManager._tona_magicalDamage(target, min, max);
}

Game_BattlerBase.prototype.HD = function(target, min, max) {
	return BattleManager._tona_healDamage(target, min, max);
}

// ****************************************************************************************************************************
// バトラー：パラメータ上昇・下降率を 25% → 50% に変更
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.paramBuffRate = function(paramId) {

	// やっぱり 25% でいいや…（リメイク計算式の都合）

    switch (paramId) {
    case 0:  return this._buffs[paramId] * 0.25 + 1.0;
    case 1:  return this._buffs[paramId] * 0.25 + 1.0;
    case 2:  return this._buffs[paramId] * 0.25 + 1.0;
    case 3:  return this._buffs[paramId] * 0.25 + 1.0;
    case 4:  return this._buffs[paramId] * 0.25 + 1.0;
    case 5:  return this._buffs[paramId] * 0.25 + 1.0;
    case 6:  return this._buffs[paramId] * 0.25 + 1.0;
    case 7:  return this._buffs[paramId] * 0.25 + 1.0;
    default: return this._buffs[paramId] * 0.25 + 1.0;
    }
};

// ****************************************************************************************************************************
// バトラー：ステートを与える
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.addNewState = function(stateId) {
    if (stateId === this.deathStateId()) {
        this.die();
    }
	this._tona_eraseConflictState(stateId);		// 追加：衝突するステートを消去
    var restricted = this.isRestricted();
    this._states.push(stateId);
    this.sortStates();
    if (!restricted && this.isRestricted()) {
        this.onRestrict();
    }
};

// ****************************************************************************************************************************
// バトラー：衝突するステートを解除する
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype._tona_eraseConflictState = function(stateId) {

	var groups = [
	];

	for (var g = 0; g < groups.length; g++) {
		if (groups[g].indexOf(stateId) >= 0) {
			for (var i = 0; i < groups[g].length; i++) {
				if (groups[g][i] != stateId) {
					this.eraseState(groups[g][i]);
				}
			}
		}
	}
}

// ****************************************************************************************************************************
// バトラー：ターン回復のバグを修正
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.updateStateTurns = function(timing) {
    for (const stateId of this._states) {
        let state = $dataStates[stateId];
        if (state.autoRemovalTiming === timing && this._stateTurns[stateId] > 0) {
            this._stateTurns[stateId]--;
        }
    };
};

Game_Battler.prototype.onAllActionsEnd = function() {
    this.clearResult();
    this.updateStateTurns(1);
    this.removeStatesAuto(1);
    this.removeBuffsAuto();
};

Game_Battler.prototype.onTurnEnd = function() {
    this.clearResult();
    this.regenerateAll();
    this.updateStateTurns(2);
    this.updateBuffTurns();
    this.removeStatesAuto(2);
};

// ****************************************************************************************************************************
// バトラー：Hidden の判定にニフラム・バシルーラ状態を加える
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.isHidden = function() {
    return this._hidden || this.isStateAffected($_tona_Const_StateId_Nifuramu) || this.isStateAffected($_tona_Const_StateId_Bashiruura);
};

// ****************************************************************************************************************************
// エネミー：アクションのターン条件がおかしかったので修正
// ----------------------------------------------------------------------------------------------------------------------------

Game_Enemy.prototype.meetsTurnCondition = function(param1, param2) {
    var n = $gameTroop.turnCount();
    if (param2 === 0) {
        return n === param1;
    } else {
        return n >= 0 && n >= param1 && n % param2 === param1 % param2;
    }
};

// ****************************************************************************************************************************
// アクション：攻撃順位の決定方法をＤＱ３形式に変更
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.speed = function() {

    if (this.item()) {
        if (this.item().speed >= 1000) {         // 1000 以上の場合は必ず先行（防御・疾風突きなど）
	        return this.item().speed;
        }
    }

    let speed = this.subject().agi;

    if (this.item()) {
        speed += this.item().speed;
    }
    if (this.isAttack()) {
        speed += this.subject().attackSpeed();
    }

    let x = 136;
    for (let i = 0; i < 16; i++) {
        x += Math.randomInt(32);
    }
    x %= 256;

    speed = (speed + 20) * x / 256;

    return speed;
};

// ****************************************************************************************************************************
// アクション：グループ攻撃
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype._tona_isForGroup = function() {

	return this.item().meta._tona_groupRange != null;
}

Game_Action.prototype.targetsForAlive = function(unit) {

	// グループ攻撃は「敵単体」指定になっています
	// コマンド時にターゲットを選択できるようにするためです
	// なので isForOne の手前で判定します

	// ★ここからグループ処理追加
    if (this._tona_isForGroup()) {

		// ターゲットが Troop のときのみ処理
		if (unit === $gameTroop) {
			return this._tona_targetsForTroopSmoothGroup(unit);
		}
		else {

			// ターゲットが Party の場合は全員をターゲット
			return unit.aliveMembers();
		}
	}

	// ★ここから元の処理
    else if (this.isForOne()) {

        if (this._targetIndex < 0) {
            return [unit.randomTarget()];
        } else {
            return [unit.smoothTarget(this._targetIndex)];
        }
    } else {
        return unit.aliveMembers();
    }
};

Game_Action.prototype._tona_targetsForTroopSmoothGroup = function(troop) {

	let target;
	let targets = [];

	// 単体の Smooth ターゲットを取得する
    if (this._targetIndex < 0) {
        target = troop.randomTarget();
    } else {
        target = troop.smoothTarget(this._targetIndex);
    }

	// 隣合う同じ種類の敵をターゲットに追加する
	let targetIndex = target.index();
	let targetEnemyId = target.enemyId();
	let members = troop.members();

	for (let i = targetIndex; i >= 0 && members[i].enemyId() === targetEnemyId; i--) {
		if (members[i].isAlive()) {
			targets.push(members[i]);
		}
	}
	for (let i = targetIndex + 1; i < members.length && members[i].enemyId() === targetEnemyId; i++) {
		if (members[i].isAlive()) {
			targets.push(members[i]);
		}
	}
	targets.sort((a, b) => a.index() - b.index());
	return targets;
}

// ****************************************************************************************************************************
// アクション：魔法反射率にマホカンタ状態を加える
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.itemMrf = function(target) {
    if (this.isMagical()) {
        if (target.states().map(function(state) {
            return state.id;
        }).contains($_tona_Const_StateId_Mahokanta)) {
            return 1;
        }
        else {
            return target.mrf;
        }
    } else {
        return 0;
    }
};

// ****************************************************************************************************************************
// アクション：運の良さ補正値
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.lukEffectAdd = function(target) {
    return (this.subject().luk - target.luk) * 0.001;
};

// ****************************************************************************************************************************
// アクション：クリティカルの運の良さ補正
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.itemCri = function(target) {

	// 回避を基準に考える
	if (this.item().damage.critical) {
		let chance = 1 - this.subject().cri * (1 - target.cev);
		if (chance < 1) {
		    chance -= Math.max(this.lukEffectAdd(target), 0.0);		// ★引き算に変更
			return 1 - chance;
		}
	}

	return 0;
};

// ****************************************************************************************************************************
// アクション：回避の運の良さ補正
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.itemEvaDef = function(target) {
    if (this.isPhysical()) {
        return target.eva;
    } else if (this.isMagical()) {
        return target.mev;
    } else {
        return 0;
    }
};

Game_Action.prototype.itemEva = function(target) {

	let chance = 1 - this.itemEvaDef(target);
	if (chance < 1) {
	    chance += Math.min(this.lukEffectAdd(target), 0.0);		// ★足し算に変更
		return 1 - chance;
	}

	return 0;
};

// ****************************************************************************************************************************
// アクション：状態異常の運の良さ補正
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.itemEffectAddAttackState = function(target, effect) {
    for (const stateId of this.subject().attackStates()) {
        let chance = effect.value1;
        chance *= target.stateRate(stateId);
        chance *= this.subject().attackStatesRate(stateId);
        chance += Math.min(this.lukEffectAdd(target), 0.0);		// ★足し算に変更
        if (Math.random() < chance) {
            target.addState(stateId);
            this.makeSuccess(target);
        }
    }
};

Game_Action.prototype.itemEffectAddNormalState = function(target, effect) {
    let chance = effect.value1;
    if (!this.isCertainHit()) {
        chance *= target.stateRate(effect.dataId);
        chance += Math.min(this.lukEffectAdd(target), 0.0);		// ★足し算に変更
    }
    if (Math.random() < chance) {
        target.addState(effect.dataId);
        this.makeSuccess(target);
    }
};

Game_Action.prototype.itemEffectAddDebuff = function(target, effect) {
	let change = 1;
    chance *= target.debuffRate(effect.dataId);
    chance += Math.min(this.lukEffectAdd(target), 0.0);			// ★足し算に変更
    if (Math.random() < chance) {
        target.addDebuff(effect.dataId, effect.value1);
        this.makeSuccess(target);
    }
};

// ****************************************************************************************************************************
// アクション：開始処理
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.applyGlobal = function() {
    for (const effect of this.item().effects) {
        if (effect.code === Game_Action.EFFECT_COMMON_EVENT) {
            $gameTemp.reserveCommonEvent(effect.dataId);
        }
    }
    this.updateLastUsed();
    this.updateLastSubject();

    // ★ここから追加
    if (this.isSkill()) {
        if (this.item().meta._tona_callEnemy != null) {
			this._tona_CallEnemy_Start(parseInt(this.item().meta._tona_callEnemy));
        }
    }
}

// ****************************************************************************************************************************
// バトル：仲間呼び
// ----------------------------------------------------------------------------------------------------------------------------

var $_tona_Battle_CallEnemyTemorary = 0;

function _tona_Battle_CallEnemyTemorary() {
    this.enemyId = 0;
    this.enemyIdList = 0;
    this.enemyBitmap = 0;
    this.intervalId = 0;
};

Game_Action.prototype._tona_CallEnemy_Start = function(param) {
    var subject = BattleManager._subject;
    if (subject instanceof Game_Enemy) {

        // 読み込み終わるまでのウェイト
        BattleManager._logWindow._waitCount = 100000;
        if ((typeof param) === 'number') {
            var enemyId = param > 0 ? param : subject._enemyId;
            $_tona_Battle_CallEnemyTemorary = new _tona_Battle_CallEnemyTemorary();
            $_tona_Battle_CallEnemyTemorary.enemyId = enemyId;
            $_tona_Battle_CallEnemyTemorary.enemyIdList = [];
            $_tona_Battle_CallEnemyTemorary.enemyBitmap = ImageManager.loadEnemy($dataEnemies[enemyId].battlerName, $dataEnemies[enemyId].battlerHue);  // Loading...
            $_tona_Battle_CallEnemyTemorary.intervalId = setInterval("_tona_Battle_CallEnemy_Update()", 30);
        }
        else if (param.length > 0) {
            var enemyId = param[0];
            $_tona_Battle_CallEnemyTemorary = new _tona_Battle_CallEnemyTemorary();
            $_tona_Battle_CallEnemyTemorary.enemyId = enemyId;
            $_tona_Battle_CallEnemyTemorary.enemyIdList = param.slice(1);
            $_tona_Battle_CallEnemyTemorary.enemyBitmap = ImageManager.loadEnemy($dataEnemies[enemyId].battlerName, $dataEnemies[enemyId].battlerHue);  // Loading...
            $_tona_Battle_CallEnemyTemorary.intervalId = setInterval("_tona_Battle_CallEnemy_Update()", 30);
        }
        else {
            console.log("仲間呼びに失敗");
        }
    }
}

function _tona_Battle_CallEnemy_Update() {

    // 読み込みが終わっていない場合は何もしない
    if (!($_tona_Battle_CallEnemyTemorary.enemyBitmap.width > 0)) {
        return;
    }

    var dataEnemy = $dataEnemies[$_tona_Battle_CallEnemyTemorary.enemyId];

    var resultX = -1;
    var resultY = 436;
    var resultY = 436 - (dataEnemy.meta._tona_pos_y != null ? dataEnemy.meta._tona_pos_y : 0);
    var enemySprite = $_tona_Battle_CallEnemyTemorary.enemyBitmap;

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
        $dataTroops[$_tona_Const_TroopId_RandomEnemy].members.push(
            { "enemyId": $_tona_Battle_CallEnemyTemorary.enemyId, "x": resultX, "y": resultY, "hidden": false }
        );
        // エネミーをセットアップ
        var enemy = new Game_Enemy($_tona_Battle_CallEnemyTemorary.enemyId, resultX, resultY);
        $gameTroop._enemies.push(enemy);
        $gameTroop.makeUniqueNames();
        // スプライトを追加
        var sprite = new Sprite_Enemy(enemy);
        SceneManager._scene._spriteset._battleField.addChild(sprite);
        SceneManager._scene._spriteset._enemySprites.push(sprite);
    }

    // まだ呼ぶべきエネミーがいる場合
    if ($_tona_Battle_CallEnemyTemorary.enemyIdList.length > 0) {
        var enemyId = $_tona_Battle_CallEnemyTemorary.enemyId;
        $_tona_Battle_CallEnemyTemorary.enemyId = $_tona_Battle_CallEnemyTemorary.enemyIdList[0];
        $_tona_Battle_CallEnemyTemorary.enemyIdList = $_tona_Battle_CallEnemyTemorary.enemyIdList.slice(1);
        $_tona_Battle_CallEnemyTemorary.enemyBitmap = ImageManager.loadEnemy($dataEnemies[enemyId].battlerName, $dataEnemies[enemyId].battlerHue);  // Loading...
    }
    // もうエネミーがいない場合
    else {
        // ウェイト終了
        BattleManager._logWindow._waitCount = 0;
        clearInterval($_tona_Battle_CallEnemyTemorary.intervalId);
        // テンポラリを削除
        $_tona_Battle_CallEnemyTemorary = 0;
    }
};

// ****************************************************************************************************************************
// バトル：身代わり
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype._tona_isUkenagashi = function() {

	return this._states.includes($_tona_Const_StateId_Ukenagashi) && this.canMove();
};

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
	if (target._tona_isUkenagashi()) {
		const rand = Math.randomInt(8);

		// 5/8 で敵に受け流し
		if (rand < 5) {
	        var substitute = target.opponentsUnit()._tona_ukenagashiBattler(target);
	        if (substitute && target !== substitute) {
	            this._logWindow._tona_displayUkenagashi(substitute, target);
	            return substitute;
	        }
	    }
		// 2/8 で味方に受け流し
		else if (rand < 7) {
	        var substitute = target.friendsUnit()._tona_ukenagashiBattler(target);
	        if (substitute && target !== substitute) {
	            this._logWindow._tona_displayUkenagashi(substitute, target);
	            return substitute;
	        }
	    }
	}

    return target;
};

BattleManager.checkSubstitute = function(target) {

	// 身代わりの判定条件を変更

	// 修正前：必中でない、かつ HP 1/4 未満
	// 修正後：常時 75%、必中でもかばう、HP 関係なくかばう

    return target.isDying() && this._action.isForOpponent() && (this._action.isForOne() || this._action.isForRandom());
};

Game_Unit.prototype.substituteBattler = function(target) {

	// かばう候補に自分が入ってたので修正

    var members = this.members();
    for (var i = 0; i < members.length; i++) {
        if (members[i] !== target && members[i].isSubstitute()) {
            return members[i];
        }
    }
    return null;
};

// ****************************************************************************************************************************
// バトル：受け流し
// ----------------------------------------------------------------------------------------------------------------------------

Game_Unit.prototype._tona_ukenagashiBattler = function(target) {

    var members = this.members().filter(member => member !== target && member.isAlive());
	if (members.length > 0) {
		return members[Math.randomInt(members.length)];
	}

    return null;
};

Window_BattleLog.prototype._tona_displayUkenagashi = function(substitute, target) {
    const targetName = target.name();
    const text = targetName + "は攻撃を受け流した！";
    this.push("performSubstitute", substitute, target);
    this.push("addText", text);
};

// ****************************************************************************************************************************
// トループ：もらえる経験値
// ----------------------------------------------------------------------------------------------------------------------------

Game_Troop.prototype.expTotal = function() {

	// パーティー人数で分割

    return Math.ceil(this.deadMembers().reduce(function(r, enemy) {
        return r + enemy.exp();
    }, 0) / $gameParty.size());
};




