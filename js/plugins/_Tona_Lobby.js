
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
// 酒場：勧誘：職業を選択する
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Pub_InviteSelectClass = function() {
	var resultList = [];
    var choices = [];

    choices.push("せんし");    		resultList.push(2);
    choices.push("ぶとうか");    	resultList.push(3);
    choices.push("まほうつかい");   resultList.push(4);
    choices.push("そうりょ");    	resultList.push(5);
    choices.push("しょうにん");    	resultList.push(6);
    choices.push("あそびにん");    	resultList.push(7);
    choices.push("とうぞく");		resultList.push(8);
    choices.push("まものつかい");   resultList.push(9);
    choices.push("キャンセル");    	resultList.push(-1);

    $gameMessage.setChoices(choices, 0, resultList.length - 1);
    $gameMessage.setChoiceBackground(1);
    $gameMessage.setChoicePositionType(0);
    $gameMessage.setChoiceCallback(function(n) {
		$_tona_result = resultList[n];
        $_tona_PubInviteData.classId = resultList[n];
    }.bind(this));

    this.setWaitMode('message');
};

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

	// 職業からアクターを作成
	actor._tona_setupWithClass(actorId, classId);

	// 名前を決める
	var name = $_tona_Name[Math.randomInt($_tona_Name.length - 1) + 1];
	actor.setName(name.name);

	// 顔グラを決める
	var face = $_tona_Face[Math.randomInt($_tona_Face.length - 1) + 1];
	actor.setFaceImage(face.name, face.index);

	// 性格を決める
	var personalityId = Math.randomInt($_tona_Personality.length - 1) + 1;
	actor.setPersonalityId(personalityId);

	// 装備を設定する

	// スキルを設定する

	// 種を与える
	for (var i = 0; i < 5; i++) {
		var paramId = Math.randomInt(6) + 2;
		var value = Math.randomInt(3) + 1;
		actor._tona_addParamPlus(paramId, value);
	}

	// 顔グラを準備しておく
    ImageManager.loadFace(actor.faceName());
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
};

// ****************************************************************************************************************************
// ショップ：メニューを表示
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Shop_ShowMenu = function() {
	var resultList = [];
    var choices = [];

    choices.push("武器屋");		resultList.push(1);
    choices.push("防具屋");		resultList.push(2);
    choices.push("道具屋");		resultList.push(3);
    choices.push("キャンセル");	resultList.push(-1);

    $gameMessage.setChoices(choices, 0, resultList.length - 1);
    $gameMessage.setChoiceBackground(1);
    $gameMessage.setChoicePositionType(0);
    $gameMessage.setChoiceCallback(function(n) {
        $_tona_result = resultList[n];
    }.bind(this));

    this.setWaitMode('message');
};

// ****************************************************************************************************************************
// Interpreter：ショップを開く
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Lobby_OpenWeaponShop = function() {
    var kouho = $_tona_lobbyWeaponList;
    var goods = [];

    for (var i = 0; i < kouho.length; i++) {
        var index = kouho[i];
        if ($_tona_saveData.weaponAppearState[index]) {
            goods.push([1, index, 0, 0]);
        }
    }
    SceneManager.push(Scene_Shop);
    SceneManager.prepareNextScene(goods, false);
}

Game_Interpreter.prototype._tona_Lobby_OpenArmorShop = function() {
    var kouho = $_tona_lobbyArmorList;
    var goods = [];

    for (var i = 0; i < kouho.length; i++) {
        var index = kouho[i];
        if ($_tona_saveData.armorAppearState[index]) {
            goods.push([2, index, 0, 0]);
        }
    }
    SceneManager.push(Scene_Shop);
    SceneManager.prepareNextScene(goods, false);
}

Game_Interpreter.prototype._tona_Lobby_OpenItemShop = function() {
    var kouho = $_tona_lobbyItemList;
    var goods = [];

    for (var i = 0; i < kouho.length; i++) {
        var index = kouho[i];
        if ($_tona_saveData.itemAppearState[index]) {
            goods.push([0, index, 0, 0]);
        }
    }
    SceneManager.push(Scene_Shop);
    SceneManager.prepareNextScene(goods, false);
}














