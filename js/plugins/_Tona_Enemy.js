
// ****************************************************************************************************************************
// Game_Enemy
// ----------------------------------------------------------------------------------------------------------------------------

(function() {

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

