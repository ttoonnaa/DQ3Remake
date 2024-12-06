
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

		console.log(this);
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
		for (var i = 0; i < 8; i++) {
			this._paramBase[i] = klass.params[i][1];
		}
	}

	// ****************************************************************************************************************************
	// レベルアップ
	// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Actor_levelUp = Game_Actor.prototype.levelUp;
	Game_Actor.prototype.levelUp = function() {
		Game_Actor_levelUp.call(this);

		var klass = this.currentClass();
		var personality = this.personality();

		// 性格を考慮して paramBase を計算
		for (var i = 0; i < 8; i++) {
			var paramBase = this._paramBase[i];
			var paramBaseAmari = this._paramBaseAmari[i];
			var paramDiff = klass.params[i][this._level] - klass.params[i][this._level - 1];

			paramBase += Math.floor(paramDiff * (100 + personality.params[i]) / 100);
			paramBaseAmari += paramDiff * (100 + personality.params[i]) % 100;

			while (paramBaseAmari >= 100) {
				paramBase ++;
				paramBaseAmari -= 100;
			}

			this._paramBase[i] += paramBase;
			this._paramBaseAmari[i] = paramBaseAmari;
		}

	    this.refresh();
	};

	// ****************************************************************************************************************************
	// 転職
	// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Actor_changeClass = Game_Actor.prototype.changeClass;
	Game_Actor.prototype.changeClass = function(classId, keepExp) {
		Game_Actor_changeClass.call(this, classId, keepExp);

		// paramBase を半分にする（切り上げ）
		for (var i = 0; i < 8; i++) {
			this._paramBase[i] = Math.ceil(this._paramBase[i] / 2);
			this._paramBaseAmari[i] = 0;
		}

	    this.refresh();
	}

})();













