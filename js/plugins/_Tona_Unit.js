
// ****************************************************************************************************************************
// ユニット：かばう状態のバトラーを探す
// ----------------------------------------------------------------------------------------------------------------------------

Game_Unit.prototype.substituteBattler = function(target) {

	// かばう候補に自分が入ってたので修正

    var members = this.members();
    for (var i = 0; i < members.length; i++) {
        if (members[i] !== target && members[i].isSubstitute()) {
            return members[i];
        }
    }
    return null;
};

// ****************************************************************************************************************************
// ユニット：受け流し先のバトラーを探す
// ----------------------------------------------------------------------------------------------------------------------------

Game_Unit.prototype.tona_ukenagashiBattler = function(target) {

	// 自身は受け流し先にならない

    var members = this.members().filter(member => member !== target && member.isAlive());
	if (members.length > 0) {
		return members[Math.randomInt(members.length)];
	}

    return null;
};

