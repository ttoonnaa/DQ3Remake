
// ****************************************************************************************************************************
// Tona_Lobby
// ----------------------------------------------------------------------------------------------------------------------------

var $_tona_PubMaxActorId = 16;
var $_tona_PubMaxParty = 10;
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
// 酒場：name を決める
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_Pub_NewName() {

	let name;

	_tona_Pub_NewNameId_Loop: while (true) {

		name = $_tona_Name[Math.randomInt($_tona_Name.length - 1) + 1];

		for (var i = 2; i <= $_tona_PubMaxActorId; i++) {
			let actor = $gameActors.actor(i);
			if (actor.name() == "") {
				if (actor.name() == name.name) {
					continue _tona_Pub_NewNameId_Loop;
				}
			}
		}

		break;
	}

	return name;
}

// ****************************************************************************************************************************
// 酒場：face を決める
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_Pub_NewFace() {

	let face;

	_tona_Pub_NewFace_Loop: while (true) {

		face = $_tona_Face[Math.randomInt($_tona_Face.length - 1) + 1];

		for (var i = 2; i <= $_tona_PubMaxActorId; i++) {
			let actor = $gameActors.actor(i);
			if (actor.name() == "") {
				if (actor.faceName() == face.name && actor.faceIndex() == face.index) {
					continue _tona_Pub_NewFace_Loop;
				}
			}
		}

		break;
	}

	return face;
}

// ****************************************************************************************************************************
// 酒場：性格を決める
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_Pub_NewPersonality() {

	let personalityId;

	_tona_Pub_NewPersonality_Loop: while (true) {

		personalityId = Math.randomInt($_tona_Personality.length - 1) + 1;

		for (var i = 2; i <= $_tona_PubMaxActorId; i++) {
			let actor = $gameActors.actor(i);
			if (actor.name() == "") {
				if (actor._personalityId == personalityId) {
					continue _tona_Pub_NewPersonality_Loop;
				}
			}
		}

		break;
	}

	return personalityId;
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
// 酒場：勧誘：作成（勇者）
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Pub_InviteCreateHero = function() {

	// 勧誘データを作成
	$_tona_PubInviteData = {};
	$_tona_PubInviteData.actorId = 1;
	$_tona_PubInviteData.classId = 1;
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
    choices.push("キャンセル");    	resultList.push(0);

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
	var name = _tona_Pub_NewName();
	actor.setName(name.name);

	// 顔グラを決める
	var face = _tona_Pub_NewFace();
	actor.setFaceImage(face.name, face.index);

	// 歩行グラは透明にする（勇者のみデフォルト）
	if (actorId == 1) {
		actor.setCharacterImage("Actor1", 1);
	}
	else {
		actor.setCharacterImage("", 0);
	}

	// 性格を決める
	var personalityId = _tona_Pub_NewPersonality();
	actor.setPersonalityId(personalityId);

	// 種を与える
	for (var i = 0; i < 5; i++) {
		var paramId = Math.randomInt(6) + 2;
		var value = Math.randomInt(3) + 1;
		actor._tona_addParamPlus(paramId, value);
	}

	// パラメーターを補正
	actor._tona_refreshParam();

	// 全回復
	actor.recoverAll();

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
// 酒場：勧誘：仲間を破棄
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
// ショップ：ショップを開く
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Lobby_OpenWeaponShop = function() {
    var kouho = $_tona_shopWeaponList;
    var goods = [];

    for (var i = 0; i < kouho.length; i++) {
        var weaponId = kouho[i];
        if ($_tona_saveData.weaponAppearState[weaponId]) {
            goods.push([1, weaponId, 0, 0]);
        }
    }
    SceneManager.push(Scene_Shop);
    SceneManager.prepareNextScene(goods, false);
}

Game_Interpreter.prototype._tona_Lobby_OpenArmorShop = function() {
    var kouho = $_tona_shopArmorList;
    var goods = [];

    for (var i = 0; i < kouho.length; i++) {
        var armorId = kouho[i];
        if ($_tona_saveData.armorAppearState[armorId]) {
            goods.push([2, armorId, 0, 0]);
        }
    }
    SceneManager.push(Scene_Shop);
    SceneManager.prepareNextScene(goods, false);
}

Game_Interpreter.prototype._tona_Lobby_OpenItemShop = function() {
    var kouho = $_tona_shopItemList;
    var goods = [];

    for (var i = 0; i < kouho.length; i++) {
        var itemId = kouho[i];
//        if ($_tona_saveData.itemAppearState[itemId]) {
            goods.push([0, itemId, 0, 0]);
//        }
    }
    SceneManager.push(Scene_Shop);
    SceneManager.prepareNextScene(goods, false);
}

// ****************************************************************************************************************************
// クエスト：メニューを表示
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Quest_ShowMenu = function() {
	var resultList = [];
    var choices = [];

	// クエスト解禁
	for (let questId = 1; questId < $_tona_quest.length; questId++) {
		var quest = $_tona_quest[questId];
		if ($_tona_saveData.questAppearState[questId]) {
		    choices.push(quest.name);		resultList.push(questId);
		}
	}

    choices.push("キャンセル");	resultList.push(-1);

    $gameMessage.setChoices(choices, 0, resultList.length - 1);
    $gameMessage.setChoiceBackground(1);
    $gameMessage.setChoicePositionType(0);
    $gameMessage.setChoiceCallback(function(n) {
        $_tona_result = resultList[n];
    }.bind(this));

    this.setWaitMode('message');
};












