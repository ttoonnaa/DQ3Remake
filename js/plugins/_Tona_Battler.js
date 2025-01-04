
// ****************************************************************************************************************************
// バトラー：会心率
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.tona_cri = function() {
	return 0;
}

// ****************************************************************************************************************************
// バトラー：物理攻撃のダメージ計算式（非幅ダメージ）
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.tona_physicalDamage = function(target) {

	// https://hyperwiki.jp/dq3rhd2d/damage-calc/

	// 運の良さによるダメージ補正は無しにする

	var atk = Math.min(this.atk, 850);
	var def = target.def;
	var rate = Math.random() * 0.2 + 0.9;
	var base = atk * (1700 - atk) / 2000 * (1700 - def) / 2000 * 0.7 * rate;
	var add = (atk - def) * (1700 - Math.max(atk, def)) / 2000 * 0.6;

	return base + add;
}

// ****************************************************************************************************************************
// バトラー：攻撃呪文のダメージ計算式
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.tona_magicalDamage = function(target, min, max) {

	// https://hyperwiki.jp/dq3rhd2d/damage-calc/

	// 元の計算式はレベルごとに設定された基準を採用してるがやめる
	// 代わりに、呪文ごとに設定された基準を採用する
	// 「呪文ごとに設定された基準」= その呪文のダメージの中央値（つまりメラなら10程度）

	var mat = this.mat;
	var center = (min + max) / 2;
	var rate = tona_limit(((mat - center) / 2 + center) / center, 1, 1.3);
	var value = (max - min + 1) * Math.random() + min;

	return value * rate;
}

// ****************************************************************************************************************************
// バトラー：回復呪文のダメージ計算式
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.tona_healDamage = function(target, min, max) {

	var value = (max - min + 1) * Math.random() + min;

	return value;
}

// ****************************************************************************************************************************
// バトラー：範囲ダメージ計算式
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.tona_rangeDamage = function(target, min, max) {

	var value = (max - min + 1) * Math.random() + min;

	return value;
}

// ****************************************************************************************************************************
// バトラー：計算式のエイリアス（エディターで指定する計算式で使う）
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.PD = function(target) {
	return this.tona_physicalDamage(target);
}

Game_BattlerBase.prototype.MD = function(target, min, max) {
	return this.tona_magicalDamage(target, min, max);
}

Game_BattlerBase.prototype.HD = function(target, min, max) {
	return this.tona_healDamage(target, min, max);
}

Game_BattlerBase.prototype.RD = function(target, min, max) {
	return this.tona_rangeDamage(target, min, max);
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
// バトラー：リフレッシュ
// ----------------------------------------------------------------------------------------------------------------------------

Game_Battler.prototype.refresh = function() {
    Game_BattlerBase.prototype.refresh.call(this);

    if (this.hp === 0) {
        this.addState(this.deathStateId());
    }
	// ★追加：ザキや急所状態なら死亡させる
    else if (this.isStateAffected($tona_StateId_Zaki) || this.isStateAffected($tona_StateId_VitalPoint)) {
        this.addState(this.deathStateId());
    }
    else {
        this.removeState(this.deathStateId());
    }
};

// ****************************************************************************************************************************
// バトラー：ステートを与える
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.addNewState = function(stateId) {
    if (stateId === this.deathStateId()) {
        this.die();
    }
	this.tona_eraseConflictState(stateId);		// ★追加：衝突するステートを消去
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

Game_BattlerBase.prototype.tona_eraseConflictState = function(stateId) {

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
        var state = $dataStates[stateId];
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
    return this._hidden || this.isStateAffected($tona_StateId_Nifuramu) || this.isStateAffected($tona_StateId_Bashirura);
};

// ****************************************************************************************************************************
// バトラー：受け流し状態を判定
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.tona_isUkenagashi = function() {
	return this.isStateAffected($tona_StateId_Ukenagashi) && this.canMove();
};

// ****************************************************************************************************************************
// バトラー：大ぼうぎょ状態を判定
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.tona_isGreatGuard = function() {
	return this.isStateAffected($tona_StateId_GreatGuard) && this.canMove();
};

// ****************************************************************************************************************************
// バトラー：すてみ状態を判定
// ----------------------------------------------------------------------------------------------------------------------------

Game_BattlerBase.prototype.tona_isSutemi = function() {
	return this.isStateAffected($tona_StateId_Sutemi);
};



