
// ****************************************************************************************************************************
// アクション：攻撃順位の決定方法をＤＱ３形式に変更
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.speed = function() {

    if (this.item()) {
        if (this.item().speed >= 1000) {         // 1000 以上の場合は必ず先行（防御・疾風突きなど）
	        return this.item().speed;
        }
    }

    var speed = this.subject().agi;

    if (this.item()) {
        speed += this.item().speed;
    }
    if (this.isAttack()) {
        speed += this.subject().attackSpeed();
    }

    var x = 136;
    for (var i = 0; i < 16; i++) {
        x += Math.randomInt(32);
    }
    x %= 256;

    speed = (speed + 20) * x / 256;

    return speed;
};

// ****************************************************************************************************************************
// アクション：命中タイプ
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.tona_isStateHit = function() {
	return this.item().meta.tona_hitType === $tona_HitType_State;
}

Game_Action.prototype.isCertainHit = function() {
	return this.item().hitType === Game_Action.HITTYPE_CERTAIN && !this.tona_isStateHit();
}

Game_Action.prototype.isPhysical = function() {
	return this.item().hitType === Game_Action.HITTYPE_PHYSICAL && !this.tona_isStateHit();
}

Game_Action.prototype.isMagical = function() {
	return this.item().hitType === Game_Action.HITTYPE_MAGICAL && !this.tona_isStateHit();
}

// ****************************************************************************************************************************
// アクション：グループ攻撃を判定
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.tona_isForGroup = function() {
	return this.item().meta.tona_groupRange != null;
}

// ****************************************************************************************************************************
// アクション：ターゲットの選択が必要
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.needsSelection = function() {

	// グループ攻撃の場合も選択が必要にする
	return this.tona_isForGroup() || this.checkItemScope([1, 7, 9, 12]);
};

// ****************************************************************************************************************************
// アクション：グローバルアクション判定
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.tona_hasGroupAction = function() {
	return this.item().meta.tona_globalAction != null;
}

// ****************************************************************************************************************************
// アクション：運の良さ補正値
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.lukEffectAdd = function(target) {
    return (this.subject().luk - target.luk) * 0.001;
};

// ****************************************************************************************************************************
// アクション：クリティカル率
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.itemCri = function(target) {

	// 回避を基準に考える
	if (this.item().damage.critical) {

		var chance = 1 - this.subject().tona_cri() * (1 - target.cev);
		if (chance < 1) {
		    chance -= Math.max(this.lukEffectAdd(target), 0.0);		// ★引き算に変更
			return 1 - chance;
		}
	}

	return 0;
};

// ****************************************************************************************************************************
// アクション：回避率（サブ）
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.tona_itemEvaValue = function(target) {
    if (this.isPhysical()) {
        return target.eva;
    } else if (this.isMagical()) {
        return target.mev;
    } else {
        return 0;
    }
};

// ****************************************************************************************************************************
// アクション：回避率
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.itemEva = function(target) {

	var chance = 1 - this.tona_itemEvaValue(target);
	if (chance < 1) {
	    chance += Math.min(this.lukEffectAdd(target), 0.0);		// ★足し算に変更
		return 1 - chance;
	}

	return 0;
};

// ****************************************************************************************************************************
// アクション：もろば斬り判定
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.tona_isMoroha = function() {

	// スキル：もろば斬り
	if (this.item().meta.tona_moroha != null) {
		return true;
	}

	// ▲もろはのつるぎ

	return false;
};

// ****************************************************************************************************************************
// アクション：すてみ判定
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.tona_isSutemi = function() {

	// スキル：すてみ
	if (this.item().meta.tona_sutemi != null) {
		return true;
	}

	return false;
}

// ****************************************************************************************************************************
// アクション：グループ攻撃のターゲットをスムースに選ぶ
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.tona_targetsForTroopSmoothGroup = function(troop) {
	var target;
	var targets = [];

	// 単体の Smooth ターゲットを取得する
    if (this._targetIndex < 0) {
        target = troop.randomTarget();
    }
    else {
        target = troop.smoothTarget(this._targetIndex);
    }

	// 隣合う同じ種類の敵をターゲットに追加する
	var targetIndex = target.index();
	var targetEnemyId = target.enemyId();
	var members = troop.members();

	for (var i = targetIndex; i >= 0 && members[i].enemyId() === targetEnemyId; i--) {
		if (members[i].isAlive()) {
			targets.push(members[i]);
		}
	}
	for (var i = targetIndex + 1; i < members.length && members[i].enemyId() === targetEnemyId; i++) {
		if (members[i].isAlive()) {
			targets.push(members[i]);
		}
	}
	targets.sort((a, b) => a.index() - b.index());
	return targets;
}

// ****************************************************************************************************************************
// アクション：ターゲットの選択をグループ攻撃に対応
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.targetsForAlive = function(unit) {

	// ★ここからグループ処理追加
    if (this.tona_isForGroup()) {

		// ターゲットが Troop のときのみ処理
		if (unit === $gameTroop) {
			return this.tona_targetsForTroopSmoothGroup(unit);
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
        }
        else {
            return [unit.smoothTarget(this._targetIndex)];
        }
    }
    else {
        return unit.aliveMembers();
    }
};

// ****************************************************************************************************************************
// アクション：ダメージ計算
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.makeDamageValue = function(target, critical) {
    const item = this.item();
    const baseValue = this.evalDamageFormula(target);

	// ダメージ倍率を求める
	var rate = this.calcElementRate(target);
    if (this.isPhysical()) {
        rate *= target.pdr;
    }
    if (this.isMagical()) {
        rate *= target.mdr;
    }
    if (baseValue < 0) {
        rate *= target.rec;
    }

	// ★減少の処理
	if (item.meta.tona_damageReduction) {
		var redctionRate = [1, 0.8, 0.6, 0.5, 0.3, 0.2];
		var redctionIndex = Math.min(this.tona_targetCounter - 1, redctionRate.length - 1);
		rate *= redctionRate[redctionIndex];
	}

	// ★分散の処理
	if (item.meta.tona_damageSpread) {
		var redctionRate = [1.5, 1, 0.75, 0.6, 0.5];
		var redctionIndex = Math.min(this.tona_targetCount - 1, redctionRate.length - 1);
		rate *= redctionRate[redctionIndex];
	}

	// ダメージ倍率を適用
	var value = baseValue * rate;

	// ダメージ倍率が 0 でなく、ダメージが 1 以下の場合は 50% で 1 ダメージ
	if (rate > 0 && value >= 0 && value < 1) {
		value = Math.randomInt(2);
	}

	// ▲メタル系の処理

	// クリティカルはこの後に計算（場合により属性などが上書きされる）
    if (critical) {
        value = this.applyCritical(target, value);
    }

    value = this.tona_applySutemi(value, target);	// ★すてみの処理
    value = this.applyGuard(value, target);
    value = Math.round(value);
    return value;
};

// ****************************************************************************************************************************
// アクション：追加属性を取得する
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.tona_additionalElements = function() {

	if (this.isSkill()) {
		if (this.item().meta.tona_additionalElements != null) {
			return eval(this.item().meta.tona_additionalElements);
		}
	}

	return [];
}

// ****************************************************************************************************************************
// アクション：属性を取得する
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.tona_elements = function() {
	var elements = [];

	// 「通常攻撃」属性の場合は使用者の属性
    if (this.item().damage.elementId < 0) {
		elements = this.subject().attackElements();
	}
    else {
        elements.push(this.item().damage.elementId);
    }

	// 追加属性を加える
	if (this.item().meta.tona_additionalElements != null) {
		elements = elements.concat(this.tona_additionalElements());
	}

	return elements;
}

// ****************************************************************************************************************************
// アクション：ダメージの属性補正を計算
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.calcElementRate = function(target) {
	var elements = this.tona_elements();

	// 最も効果の高い属性を選ぶ（★重要）
    return this.elementsMaxRate(target, elements);
};

// ****************************************************************************************************************************
// アクション：反映（グローバル）
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
        if (this.item().meta.tona_callEnemy != null) {
			this.tona_callEnemy_start(eval(this.item().meta.tona_callEnemy));
        }
    }
}

// ****************************************************************************************************************************
// アクション：反映
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.apply = function(target) {
    const result = target.result();
    this.subject().clearResult();
    result.clear();
    result.used = this.testApply(target);
    result.missed = result.used && Math.random() >= this.itemHit(target);
    result.evaded = !result.missed && Math.random() < this.itemEva(target);
    result.physical = this.isPhysical();
    result.drain = this.isDrain();
    result.moroha = this.tona_isMoroha();	// ★もろはの処理を追加
    result.sutemi = this.tona_isSutemi();	// ★すてみの処理を追加

    if (result.isHit()) {
        if (this.item().damage.type > 0) {
            result.critical = Math.random() < this.itemCri(target);
            const value = this.makeDamageValue(target, result.critical);
            this.executeDamage(target, value);
        }
        for (const effect of this.item().effects) {
            this.applyItemEffect(target, effect);
        }
        this.applyItemUserEffect(target);
    }

	// ★すてみの処理を追加
    if (result.sutemi) {
	    if (result.used) {
	    	this.subject().addState($tona_StateId_Sutemi);
		}
    }

    this.updateLastTarget(target);

	// ★チェインスキル
	if (this.item().meta.tona_chainSkill != null) {
	    if (result.isHit()) {
			var skillId = eval(this.item().meta.tona_chainSkill);
			var chainAction = new Game_Action(this.subject());
			chainAction.setSkill(skillId);
			chainAction.setTarget(target.index());
			this.subject()._actions.push(chainAction);
		}
	}
};

// ****************************************************************************************************************************
// アクション：クリティカルを反映
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.applyCritical = function(target, value) {

	// https://hyperwiki.jp/dq3rhd2d/damage-calc/

	var subject = this.subject();
	var atk = Math.min(subject.atk, 850);
	var def = target.def;
	var base = atk * (2000 - atk) / 2000 * 0.7 * 1.2;
	var add = (atk - def) * (1700 - Math.max(atk, def)) / 2000 * 0.6;

	return Math.max(value * 1.2, base + Math.max(0, add));
}

// ****************************************************************************************************************************
// アクション：防御を反映
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.applyGuard = function(damage, target) {

	if (damage > 0) {
		if (target.tona_isGreatGuard()) {
			return damage / (10 * target.grd);
		}
		else if (target.isGuard()) {
			return damage / (2 * target.grd);
		}
	}

	return damage;
}

// ****************************************************************************************************************************
// アクション：すてみを反映
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.tona_applySutemi = function(damage, target) {

	if (damage > 0) {
		if (target.tona_isSutemi()) {
			return damage * 2;
		}
	}

	return damage;
}

// ****************************************************************************************************************************
// アクション：ＨＰダメージ
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.executeHpDamage = function(target, value) {
    if (this.isDrain()) {
        value = Math.min(target.hp, value);
    }
    this.makeSuccess(target);
    target.gainHp(-value);
    if (value > 0) {
        target.onDamage(value);
    }
    this.gainDrainedHp(value);
    this.tona_executeMorohaDamage(value);	// ★もろはの処理を追加
};

// ****************************************************************************************************************************
// アクション：もろはダメージ
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.tona_executeMorohaDamage = function(value) {
    if (this.tona_isMoroha()) {
        var damageTarget = this.subject();
		var morohaValue = Math.ceil(value * 0.3);
	    damageTarget.gainHp(-morohaValue);
    	if (morohaValue > 0) {
        	damageTarget.onDamage(morohaValue);
        }
    }
};

// ****************************************************************************************************************************
// アクション：状態異常を与える
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.itemEffectAddAttackState = function(target, effect) {
    for (const stateId of this.subject().attackStates()) {
        var chance = effect.value1;
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
    var chance = effect.value1;
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
	var chance = 1;
    chance *= target.debuffRate(effect.dataId);
    chance += Math.min(this.lukEffectAdd(target), 0.0);			// ★足し算に変更
    if (Math.random() < chance) {
        target.addDebuff(effect.dataId, effect.value1);
        this.makeSuccess(target);
    }
};

// ****************************************************************************************************************************
// アクション：準備する
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.prepare = function() {

	// ★追加：魅了を考慮する

    if (this.subject().tona_isMiryou() && !this._forcing) {
        this.tona_setMiryou();
    }
    else if (this.subject().isConfused() && !this._forcing) {
        this.setConfusion();
    }
};

// ****************************************************************************************************************************
// アクション：魅了時のアクションを設定
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.tona_setMiryou = function() {
	this.subject().tona_setMiryouAction();
}

// ****************************************************************************************************************************
// アクション：ターゲット候補を上げる
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.itemTargetCandidates = function() {

	// ★追加：魅了を考慮する

    if (!this.isValid()) {
        return [];
    }
    else if (this.isForOpponent()) {
		if (this.subject().isConfused()) {
	        return this.friendsUnit().aliveMembers();
		}
		else {
	        return this.opponentsUnit().aliveMembers();
		}
    }
    else if (this.isForUser()) {
        return [this.subject()];
    }
    else if (this.isForDeadFriend()) {
		if (this.subject().isConfused()) {
	        return this.opponentsUnit().deadMembers();
		}
		else {
	        return this.friendsUnit().deadMembers();
		}
    }
    else {
		if (this.subject().isConfused()) {
	        return this.opponentsUnit().aliveMembers();
		}
		else {
	        return this.friendsUnit().aliveMembers();
		}
    }
};

// ****************************************************************************************************************************
// アクション：ターゲットを作成する
// ----------------------------------------------------------------------------------------------------------------------------

Game_Action.prototype.makeTargets = function() {
    const targets = [];

	// ★追加：魅了時のターゲット
    if (!this._forcing && this.subject().tona_isMiryou()) {

	    if (this.isForEveryone()) {
	        targets.push(...this.targetsForEveryone());
	    }
	    else if (this.isForOpponent()) {
	        targets.push(...this.targetsForFriends());
	    }
	    else if (this.isForFriend()) {
	        targets.push(...this.targetsForOpponents());
	    }
    }

    // ここから通常の処理
    else if (!this._forcing && this.subject().isConfused()) {
        targets.push(this.confusionTarget());
    }
    else if (this.isForEveryone()) {
        targets.push(...this.targetsForEveryone());
    }
    else if (this.isForOpponent()) {
        targets.push(...this.targetsForOpponents());
    }
    else if (this.isForFriend()) {
        targets.push(...this.targetsForFriends());
    }
    return this.repeatTargets(targets);
}






