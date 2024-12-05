
// **************************************************************
// Game_Actor
// --------------------------------------------------------------

(function() {

	var Game_Actor_initMembers = Game_Actor.prototype.initMembers;
	Game_Actor.prototype.initMembers = function() {
		Game_Actor_initMembers.call(this);

		this._personality = 1;
	};

	Game_Actor.prototype.personality = function() {
	    return this._personality;
	};

	Game_Actor.prototype.personalityName = function() {
		return $_tona_Personality[this._personality].name;
	};

	Game_Actor.prototype.setPersonality = function(personality) {
	    this._personality = personality;
	};
})();


