
// ****************************************************************************************************************************
// Window_Status
// ----------------------------------------------------------------------------------------------------------------------------

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

// ****************************************************************************************************************************
// Window_PubStatusCommand
// ----------------------------------------------------------------------------------------------------------------------------

function Window_PubStatusCommand() {
    this.initialize(...arguments);
}

Window_PubStatusCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_PubStatusCommand.prototype.constructor = Window_PubStatusCommand;

Window_PubStatusCommand.prototype.initialize = function(rect) {
    Window_HorzCommand.prototype.initialize.call(this, rect);
};

Window_PubStatusCommand.prototype.maxCols = function() {
    return 2;
};

Window_PubStatusCommand.prototype.makeCommandList = function() {
    this.addCommand("この子に決めた！", "yes");
    this.addCommand("やり直す", "no");
};

// ****************************************************************************************************************************
// Scene_PubStatus
// ----------------------------------------------------------------------------------------------------------------------------

function Scene_PubStatus() {
    this.initialize(...arguments);
}

Scene_PubStatus.prototype = Object.create(Scene_Status.prototype);
Scene_PubStatus.prototype.constructor = Scene_PubStatus;

Scene_PubStatus.prototype.initialize = function() {
    Scene_Status.prototype.initialize.call(this);
};

Scene_PubStatus.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createStatusWindow();
    this.createStatusParamsWindow();
    this.createStatusEquipWindow();
    this.createCommandWindow();

	var actor = $gameActors.actor($tona_pub_inviteData.actorId);
    this.setActor(actor);
    this.refreshActor();
};

Scene_PubStatus.prototype.createStatusWindow = function() {
    const rect = this.statusWindowRect();
    this._statusWindow = new Window_Status(rect);
    this.addWindow(this._statusWindow);
};

Scene_PubStatus.prototype.createCommandWindow = function() {
    const rect = this.commandWindowRect();
    this._commandWindow = new Window_PubStatusCommand(rect);
    this._commandWindow.setHandler("cancel", this.onCommandNo.bind(this));
    this._commandWindow.setHandler("yes", this.onCommandYes.bind(this));
    this._commandWindow.setHandler("no", this.onCommandNo.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_Status.prototype.commandWindowRect = function() {
    const ww = Graphics.boxWidth;
    const wh = this.calcWindowHeight(2, false);
    const wx = 0;
    const wy = this.mainAreaBottom() - wh;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_PubStatus.prototype.needsPageButtons = function() {
    return false;
};

Scene_PubStatus.prototype.setActor = function(actor) {
    this._actor = actor;
};

Scene_PubStatus.prototype.refreshActor = function() {
    const actor = this.actor();
    this._statusWindow.setActor(actor);
    this._statusParamsWindow.setActor(actor);
    this._statusEquipWindow.setActor(actor);
};

Scene_PubStatus.prototype.onCommandYes = function() {

	$tona_result = 1;

	this.popScene();
}

Scene_PubStatus.prototype.onCommandNo = function() {

	$tona_result = 0;

	this.popScene();
}



