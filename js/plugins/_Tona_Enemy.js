
// ****************************************************************************************************************************
// Game_Enemy
// ----------------------------------------------------------------------------------------------------------------------------

(function() {

	// ****************************************************************************************************************************
	// エネミー：レベルを定義
	// ----------------------------------------------------------------------------------------------------------------------------

	Object.defineProperty(Game_Enemy.prototype, "level", {
	    get: function() {
	        return this.enemy().tona_level;
	    },
	    configurable: true
	});

	// ****************************************************************************************************************************
	// エネミー：はぐれ判定
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Enemy.prototype.tona_isHagure = function() {

		return this.enemy().tona_isHagure != null;
	}

	/// ****************************************************************************************************************************
	/// エネミー：パラメーターを計算
	/// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Enemy_paramPlus = Game_Enemy.prototype.paramPlus;

	Game_Enemy.prototype.paramPlus = function(paramId) {
    	var param = Game_Enemy_paramPlus.call(this, paramId);

		// はぐれの場合の追加
	    if (this.tona_isHagure()) {

			// 武器
			var weaponIds = this.tona_weaponIds;
			for (var i = 0; i < weaponIds.length; i++) {
				var weaponId = weaponIds[i];
				param += $dataWeapons[weaponId].params[paramId];
			}

			// 防具
			var armorIds = this.tona_armorIds;
			for (var i = 0; i < armorIds.length; i++) {
				var armorId = armorIds[i];
				param += $dataArmors[armorId].params[paramId];
			}
	    }

	    return param;
    }

	// ****************************************************************************************************************************
	// エネミー：会心率
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Enemy.prototype.tona_cri = function() {
		return this.cri;
	}

	/// ****************************************************************************************************************************
	/// エネミー：特徴を取得する
	/// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Enemy_traitObjects = Game_Enemy.prototype.traitObjects;

	Game_Enemy.prototype.traitObjects = function() {
    	var objects = Game_Enemy_traitObjects.call(this);

		// はぐれの場合の追加
	    if (this.tona_isHagure()) {

			// クラス
			var klassId = this.enemy().tona_klassId;
			objects = objects.concat([$dataClasses[klassId]]);

			// 武器
			var weaponIds = this.tona_weaponIds;
			for (var i = 0; i < weaponIds.length; i++) {
				var weaponId = weaponIds[i];
				objects = objects.concat([$dataWeapons[weaponId]]);
			}

			// 防具
			var armorIds = this.tona_armorIds;
			for (var i = 0; i < armorIds.length; i++) {
				var armorId = armorIds[i];
				objects = objects.concat([$dataArmors[armorId]]);
			}
	    }

		return objects;
	}

	// ****************************************************************************************************************************
	// エネミー：アクションを作成
	// ----------------------------------------------------------------------------------------------------------------------------

	var Game_Enemy_makeActions = Game_Enemy.prototype.makeActions;
	Game_Enemy.prototype.makeActions = function() {
	    this.clearActions();

	    // はぐれの場合はAI処理
	    if (this.tona_isHagure()) {
	        if (this.canMove()) {
	            this._actions = this.tona_makeHagureActions();
	        }
	        this.setActionState('waiting');
	    }
	    else {
	        Game_Enemy_makeActions.call(this);
	    }
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
})();


