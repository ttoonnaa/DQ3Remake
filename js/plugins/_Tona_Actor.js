
// ****************************************************************************************************************************
// Game_Actor
// ----------------------------------------------------------------------------------------------------------------------------

(function() {

	// ****************************************************************************************************************************
	// 初期化
	// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Actor_initMembers = Game_Actor.prototype.initMembers;
	Game_Actor.prototype.initMembers = function() {
		Game_Actor_initMembers.call(this);

		this._personalityId = 1;
		this.clearParamBase();
	};

	// ****************************************************************************************************************************
	// セットアップ
	// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Actor_setup = Game_Actor.prototype.setup;
	Game_Actor.prototype.setup = function(actorId) {
		Game_Actor_setup.call(this, actorId);

		this.setupParamBase();
	    this.recoverAll();
	};

	// ****************************************************************************************************************************
	// 性格
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Actor.prototype.personality = function() {
		return $_tona_Personality[this._personalityId];
	};

	Game_Actor.prototype.personalityName = function() {
		return $_tona_Personality[this._personalityId].name;
	};

	Game_Actor.prototype.setPersonalityId = function(personalityId) {
	    this._personalityId = _personalityId;
	};

	// ****************************************************************************************************************************
	// パラメーター
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Actor.prototype.paramBase = function(paramId) {
	    return this._paramBase[paramId];
	};

	Game_Actor.prototype.clearParamBase = function() {
		this._paramBase = [0, 0, 0, 0, 0, 0, 0, 0];
		this._paramBaseAmari = [0, 0, 0, 0, 0, 0, 0, 0];
	}

	Game_Actor.prototype.setupParamBase = function() {
		var klass = this.currentClass();

		// レベル１の値で初期化する
		for (var i = 2; i < 8; i++) {
			this._paramBase[i] = klass.params[i][1];
		}

		// パラメーターを補正
		this._tona_refreshParam();
	}

	// ****************************************************************************************************************************
	// レベルアップ
	// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Actor_levelUp = Game_Actor.prototype.levelUp;
	Game_Actor.prototype.levelUp = function() {
		Game_Actor_levelUp.call(this);

		// レベル 0 -> 1 は成長しない
		if (this.level >= 2) {

			var klass = this.currentClass();
			var personality = this.personality();

			// 性格を考慮して paramBase を計算
			for (var i = 2; i < 8; i++) {
				var paramDiff = klass.params[i][this._level] - klass.params[i][this._level - 1];
				this._paramBase[i] += Math.floor(paramDiff * (100 + personality.params[i]) / 100);
				this._paramBaseAmari[i] += paramDiff * (100 + personality.params[i]) % 100;
			}
		}

		// パラメーターを補正
		this._tona_refreshParam();
	    this.refresh();
	};

	// ****************************************************************************************************************************
	// パラメーターを補正
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Actor.prototype._tona_refreshParam = function() {

		// HPを計算（体力の2倍）（種の分も含む）
		this._paramBase[0] = (this._paramBase[5] + this._paramPlus[5]) * 2;
		this._paramBaseAmari[0] = this._paramBaseAmari[5] * 2;

		// MPを計算（賢さの2倍）（種の分も含む）
		this._paramBase[1] = (this._paramBase[4] + this._paramPlus[4]) * 2;
		this._paramBaseAmari[1] = this._paramBaseAmari[4] * 2;

		// 余りを繰り越し
		for (var i = 0; i < 8; i++) {
			while (this._paramBaseAmari[i] >= 100) {
				this._paramBase[i] ++;
				this._paramBaseAmari[i] -= 100;
			}
		}
	}

	// ****************************************************************************************************************************
	// 転職
	// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Actor_changeClass = Game_Actor.prototype.changeClass;
	Game_Actor.prototype.changeClass = function(classId, keepExp) {

		// 新しいクラスの経験値を 0 にしてから元の処理を呼ぶ
		this._exp[classId] = 0;

		Game_Actor_changeClass.call(this, classId, keepExp);

		// paramBase を半分にする（切り上げ）
		for (var i = 0; i < 8; i++) {
			this._paramBase[i] = Math.ceil(this._paramBase[i] / 2);
			this._paramBaseAmari[i] = 0;
		}

	    this.refresh();
	}

})();













