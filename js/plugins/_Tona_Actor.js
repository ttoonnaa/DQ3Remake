
// ****************************************************************************************************************************
// Game_Actor
// ----------------------------------------------------------------------------------------------------------------------------

(function() {

	// ****************************************************************************************************************************
	// アクター：初期化
	// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Actor_initMembers = Game_Actor.prototype.initMembers;

	Game_Actor.prototype.initMembers = function() {
		Game_Actor_initMembers.call(this);
		this.clearParamBase();
	};

	// ****************************************************************************************************************************
	// アクター：セットアップ
	// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Actor_setup = Game_Actor.prototype.setup;

	Game_Actor.prototype.setup = function(actorId) {
		Game_Actor_setup.call(this, actorId);

		// 性格を設定して改めてセットアップ
		this.tona_setPersonality(1);
		this.setupParamBase();
	    this.recoverAll();
	};

	// ****************************************************************************************************************************
	// アクター：職業を指定してセットアップ
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Actor.prototype.tona_setupWithClass = function(actorId, classId) {
	    const actor = $dataActors[actorId];
	    this._actorId = actorId;
	    this._name = actor.name;
	    this._nickname = actor.nickname;
	    this._profile = actor.profile;
	    this._classId = classId;
	    this._level = actor.initialLevel;
	    this.initImages();
	    this.initExp();
	    this.initSkills();
	    this.initEquips(actor.equips);
	    this.clearParamPlus();
	    this.recoverAll();

		// 性格を設定して改めてセットアップ
		this.tona_setPersonality(1);
		this.setupParamBase();
	    this.recoverAll();
	};

	// ****************************************************************************************************************************
	// アクター：性格
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Actor.prototype.tona_personality = function() {
		return $tona_personality[this._tona_personalityId];
	};

	Game_Actor.prototype.tona_setPersonality = function(personalityId) {
	    this._tona_personalityId = personalityId;
	};

	Game_Actor.prototype.tona_personalityName = function() {
		return this.tona_personality().name;
	};

	// ****************************************************************************************************************************
	// アクター：パラメーター
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

		// レベル１の値で初期化する（HP、MP を除く）
		for (var i = 2; i < 8; i++) {
			this._paramBase[i] = klass.params[i][1];
		}

		// パラメーターを補正
		this.tona_refreshParam();
	}

	// ****************************************************************************************************************************
	// アクター：経験値を取得
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Actor.prototype.changeExp = function(exp, show) {
	    this._exp[this._classId] = Math.max(exp, 0);
	    const lastLevel = this._level;
	    const lastSkills = this.skills();

		let params1 = [];
		let params2 = [];

		for (let i = 0; i < 8; i++) {
			params1[i] = this._paramBase[i] + this._paramPlus[i];
		}
	    while (!this.isMaxLevel() && this.currentExp() >= this.nextLevelExp()) {
	        this.levelUp();
	    }
	    while (this.currentExp() < this.currentLevelExp()) {
	        this.levelDown();
	    }
	    if (show && this._level > lastLevel) {

			for (let i = 0; i < 8; i++) {
				params2[i] = this._paramBase[i] + this._paramPlus[i] - params1[i];
			}

	        this.displayLevelUp(this.findNewSkills(lastSkills), params2);
	    }
	    this.refresh();
	};

	// ****************************************************************************************************************************
	// アクター：レベルアップ
	// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Actor_levelUp = Game_Actor.prototype.levelUp;

	Game_Actor.prototype.levelUp = function() {
		Game_Actor_levelUp.call(this);

		// レベル 0 -> 1 は成長しない（レベル 0 の値がダミーのため）
		if (this.level >= 2) {

			var klass = this.currentClass();
			var personality = this.tona_personality();

			// 性格を考慮して paramBase を計算
			for (var i = 2; i < 8; i++) {
				var paramDiff = klass.params[i][this._level] - klass.params[i][this._level - 1];
				this._paramBase[i] += Math.floor(paramDiff * (100 + personality.params[i]) / 100);
				this._paramBaseAmari[i] += paramDiff * (100 + personality.params[i]) % 100;
			}
		}

		// パラメーターを補正
		this.tona_refreshParam();
	    this.refresh();
	};

	// ****************************************************************************************************************************
	// アクター：レベルアップを表示
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Actor.prototype.displayLevelUp = function(newSkills, changeParams) {
	    const text = TextManager.levelUp.format(
	        this._name,
	        TextManager.level,
	        this._level
	    );
	    $gameMessage.newPage();
	    $gameMessage.add(text);

	    $gameMessage.newPage();
	    $gameMessage.add("最大HP +"  + changeParams[0] + "　最大MP +"  + changeParams[1]);
	    $gameMessage.add("攻撃力 +"  + changeParams[2] + "　守備力 +"  + changeParams[3]);
	    $gameMessage.add("体力 +"  + changeParams[5] + "　賢さ +"  + changeParams[4]);
	    $gameMessage.add("素早さ +"  + changeParams[6] + "　運の良さ +"  + changeParams[7]);

		if (newSkills.length > 0) {
		    $gameMessage.newPage();
		    for (const skill of newSkills) {
		        $gameMessage.add(TextManager.obtainSkill.format(skill.name));
		    }
		}
	};

	// ****************************************************************************************************************************
	// アクター：パラメーターを補正
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Actor.prototype.tona_refreshParam = function() {

		// HPを計算（体力の2倍、種の分も含む）
		this._paramBase[0] = (this._paramBase[5] + this._paramPlus[5]) * 2;
		this._paramBaseAmari[0] = this._paramBaseAmari[5] * 2;

		// MPを計算（賢さの2倍、種の分も含む）
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
	// アクター：種を与える
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Actor.prototype.tona_addParamPlus = function(paramId, value) {
		this._paramPlus[paramId] += value;
	}

	// ****************************************************************************************************************************
	// アクター：転職
	// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Actor_changeClass = Game_Actor.prototype.changeClass;

	Game_Actor.prototype.tona_changeClass = function(classId) {

		// 新しいクラスの経験値を 0 にする
		this._exp[classId] = 0;

		// クラスチェンジ
		this.changeClass(classId, false);

		// paramBase を半分にする（切り上げ）
		for (var i = 0; i < 8; i++) {
			this._paramBase[i] = Math.ceil(this._paramBase[i] / 2);
			this._paramBaseAmari[i] = 0;
		}

	    this.refresh();
	}

	// ****************************************************************************************************************************
	// アクター：経験値曲線
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Actor.prototype.expForLevel = function(level) {
	    return this.currentClass().expTable[level];
	};

	// ****************************************************************************************************************************
	// アクター：武器を装備可能
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Actor.prototype.canEquipWeapon = function(item) {
		return item.tona_canEquipClasses.includes(this._classId);
	};

	// ****************************************************************************************************************************
	// アクター：防具を装備可能
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Actor.prototype.canEquipArmor = function(item) {
		return item.tona_canEquipClasses.includes(this._classId);
	};

})();













