
// **************************************************************
// Window_Status
// --------------------------------------------------------------

(function() {

	// 性格を表示

	Window_StatusBase.prototype.drawActorPersonality = function(actor, x, y, width) {
	    width = width || 270;
	    this.resetTextColor();
	    this.drawText(actor.personalityName(), x, y, width);
	};

	Window_Status.prototype.drawBlock1 = function() {
	    const y = this.block1Y();
	    this.drawActorName(this._actor, 6, y, 168);
	    this.drawActorClass(this._actor, 192, y, 168);
	    this.drawActorPersonality(this._actor, 432, y, 270);
	};
})();

