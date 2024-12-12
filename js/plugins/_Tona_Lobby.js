
// ****************************************************************************************************************************
// Tona_Lobby
// ----------------------------------------------------------------------------------------------------------------------------

var $_tona_PubMaxActorId = 16;
var $_tona_PubMaxParty = 8;
var $_tona_PubInviteData = {};

// ****************************************************************************************************************************
// 酒場：actorId を決める
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_Pub_NewActorId() {

	for (var i = 2; i <= $_tona_PubMaxActorId; i++) {
		if ($gameActors.actor(i).name() == "") {
			return i;
		}
	}

	return 0;
}

// ****************************************************************************************************************************
// 酒場：勧誘：作成
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Pub_InviteCreate = function() {

	// actorId を決める
	// 枠がいっぱいだったら 0 を返す

	var actorId = _tona_Pub_NewActorId();
	if (actorId == 0) {
		$_tona_result = 0;
		return;
	}

	// 勧誘データを作成
	$_tona_PubInviteData = {};
	$_tona_PubInviteData.actorId = actorId;

	// 成功を返す
	$_tona_result = 1;
}

// ****************************************************************************************************************************
// 酒場：勧誘：職業を設定する
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Pub_InviteSetClassId = function(classId) {

	$_tona_PubInviteData.classId = classId;
}

// ****************************************************************************************************************************
// 酒場：勧誘：アクターを作成する
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Pub_InviteCreateActor = function() {
	var actorId = $_tona_PubInviteData.actorId;
	var actor = $gameActors.actor(actorId);
	var classId = $_tona_PubInviteData.classId;

	// アクターを作成
	actor._tona_setupWithClass(actorId, classId);

	// 名前を決める
	actor.setName($_tona_Name[Math.randomInt($_tona_Name.length - 1) + 1].name);

	// 性格を決める
	actor.setPersonalityId(Math.randomInt($_tona_Personality.length - 1) + 1);
}

// ****************************************************************************************************************************
// 酒場：勧誘：仲間に加える
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Pub_InviteThis = function() {
	var actorId = $_tona_PubInviteData.actorId;

	$gameParty.addActor(actorId);
}

// ****************************************************************************************************************************
// 酒場：勧誘：破棄
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Pub_InviteDelete = function() {
	var actorId = $_tona_PubInviteData.actorId;
	var actor = $gameActors.actor(actorId);

	// アクターを初期化する
	actor.setup(actorId);

	// 勧誘情報を初期化する
	$_tona_PubInviteData = {};
}

// ****************************************************************************************************************************
// 酒場：勧誘：クリア
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Pub_InviteClear = function() {

	// 勧誘情報を初期化する
	$_tona_PubInviteData = {};
}

// ****************************************************************************************************************************
// 酒場：勧誘：ウィンドウを表示する
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Pub_InviteShowWindow = function() {
	var resultList = [];
    var choices = [];

	SceneManager.push(Scene_PubStatus);

    //choices.push("武器を購入");
    //resultList.push(1);
    //
    //choices.push("防具を購入");
    //resultList.push(2);
    //
    //choices.push("道具を購入");
    //resultList.push(3);
    //
    //choices.push("キャンセル");
    //resultList.push(-1);
    //
    //$gameMessage.setChoices(choices, 0, resultList.length - 1);
    //$gameMessage.setChoiceBackground(1);
    //$gameMessage.setChoicePositionType(0);
    //$gameMessage.setChoiceCallback(function(n) {
    //    //$_hq_result = resultList[n];
    //}.bind(this));
    //
    //this.setWaitMode('message');
};




