
// ****************************************************************************************************************************
// バトラー：呪文のダメージ計算式
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype._tona_magicalDamage = function(value) {

	// ダメージ = Lerp(賢, value, value * 1.3);
	// これが基本概念。賢さが value 以上だとダメージが伸び始める。
	// ダメージの伸びを半分にした式を実際は採用。

	let mat = this.mat;

	return _tona_Lerp((mat - value) / 2 + value, value, value * 1.3);
}

// エイリアス（エディターで指定する計算式で使う）
Game_BattlerBase.prototype.MD = function(value) {
	return this._tona_magicalDamage(value);
}

// ****************************************************************************************************************************
// バトラー：パラメータ上昇・下降率を 25% → 50% に変更
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.paramBuffRate = function(paramId) {

    switch (paramId) {
    case 0:  return this._buffs[paramId] * 0.50 + 1.0;
    case 1:  return this._buffs[paramId] * 0.50 + 1.0;
    case 2:  return this._buffs[paramId] * 0.25 + 1.0;  // 攻撃力は25%
    case 3:  return this._buffs[paramId] * 0.50 + 1.0;
    case 4:  return this._buffs[paramId] * 0.50 + 1.0;
    case 5:  return this._buffs[paramId] * 0.50 + 1.0;
    case 6:  return this._buffs[paramId] * 0.50 + 1.0;
    case 7:  return this._buffs[paramId] * 0.50 + 1.0;
    default: return this._buffs[paramId] * 0.50 + 1.0;
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
	let aliveMembers = troop.aliveMembers();

	for (let i = targetIndex - 1; i >= 0 && aliveMembers[i].enemyId() === targetEnemyId; i--) {
		targets.push(aliveMembers[i]);
	}
	for (let i = targetIndex + 1; i < aliveMembers.length && aliveMembers[i].enemyId() === targetEnemyId; i++) {
		targets.push(aliveMembers[i]);
	}
	targets.sort((a, b) => b.index() - a.index());
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
// バトル：身代わり判定の条件を変更
// ----------------------------------------------------------------------------------------------------------------------------

// 前：必中でない、かつ HP 1/4 未満
// 後：常時 75%、必中でもかばう、HP 関係なくかばう

BattleManager.checkSubstitute = function(target) {

    return target.isDying() && this._action.isForOpponent() && (this._action.isForOne() || this._action.isForRandom());
};

// ****************************************************************************************************************************
// ユニット：身代わりのバグを修正
// ----------------------------------------------------------------------------------------------------------------------------

// かばう候補に自分が入ってたので修正

BattleManager.applySubstitute = function(target) {
    if (this.checkSubstitute(target)) {
        var substitute = target.friendsUnit().substituteBattler(target);
        if (substitute && target !== substitute) {
            this._logWindow.displaySubstitute(substitute, target);
            return substitute;
        }
    }
    return target;
};

Game_Unit.prototype.substituteBattler = function(target) {
    var members = this.members();
    for (var i = 0; i < members.length; i++) {
        if (members[i] !== target && members[i].isSubstitute()) {
            return members[i];
        }
    }
};

// ****************************************************************************************************************************
// トループ：もらえる経験値
// ----------------------------------------------------------------------------------------------------------------------------

Game_Troop.prototype.expTotal = function() {

	// ４倍してからパーティー人数で分割

    return Math.ceil(this.deadMembers().reduce(function(r, enemy) {
        return r + enemy.exp();
    }, 0) * 4 / $gameParty.size());
};




