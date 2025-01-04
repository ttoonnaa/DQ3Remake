
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
	// エネミー：もどき判定
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Enemy.prototype.tona_isModoki = function() {

		return enemy().tona_isModoki;
	}

	// ****************************************************************************************************************************
	// エネミー：会心率
	// ----------------------------------------------------------------------------------------------------------------------------

	Game_Enemy.prototype.tona_cri = function() {
		return this.cri;
	}

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


