
// **************************************************************
// Game_Actor
// --------------------------------------------------------------

(function() {

	// **************************************************************
	// 初期化
	// --------------------------------------------------------------

	var Game_Actor_initMembers = Game_Actor.prototype.initMembers;
	Game_Actor.prototype.initMembers = function() {
		Game_Actor_initMembers.call(this);

		this._personality = 1;
		this.clearParamBase();
	};

	// **************************************************************
	// セットアップ
	// --------------------------------------------------------------

	var Game_Actor_setup = Game_Actor.prototype.setup;
	Game_Actor.prototype.setup = function(actorId) {
		Game_Actor_setup.call(this, actorId);

		this.setupParamBase();
	    this.recoverAll();
	};

	// **************************************************************
	// 性格
	// --------------------------------------------------------------

	Game_Actor.prototype.personality = function() {
	    return this._personality;
	};

	Game_Actor.prototype.personalityName = function() {
		return $_tona_Personality[this._personality].name;
	};

	Game_Actor.prototype.setPersonality = function(personality) {
	    this._personality = personality;
	};

	// **************************************************************
	// パラメーター
	// --------------------------------------------------------------

	Game_Actor.prototype.paramBase = function(paramId) {
	    return this._paramBase[paramId];
	};

	Game_Actor.prototype.clearParamBase = function() {
		this._paramBase = [0, 0, 0, 0, 0, 0, 0, 0];
		this._paramBaseAmari = [0, 0, 0, 0, 0, 0, 0, 0];
	}

	Game_Actor.prototype.setupParamBase = function() {
    	const actor = $dataActors[this._actorId];

		// レベル１の値で初期化する
		this._paramBase = [10, 10, 10, 10, 10, 10, 10, 10];
	}

	// **************************************************************
	// レベルアップ
	// --------------------------------------------------------------

	var Game_Actor_levelUp = Game_Actor.prototype.levelUp;
	Game_Actor.prototype.levelUp = function() {
		Game_Actor_levelUp.call(this);

		// 性格を考慮して paramBase を与える
		for (var i = 0; i < 8; i++) {
			this._paramBase[i] += 0;
		}
	};

	// **************************************************************
	// 転職
	// --------------------------------------------------------------

	var Game_Actor_changeClass = Game_Actor.prototype.changeClass;
	Game_Actor.prototype.changeClass = function(classId, keepExp) {
		Game_Actor_changeClass.call(this, classId, keepExp);

		// paramBase を半分にする（切り上げ）
		for (var i = 0; i < 8; i++) {
			this._paramBase[i] = Math.ceil(this._paramBase[i] / 2);
		}

	    this.refresh();
	}

})();













