
// ****************************************************************************************************************************
// Tona_Lobby
// ----------------------------------------------------------------------------------------------------------------------------


// ****************************************************************************************************************************
// 酒場：actorId を決める
// ----------------------------------------------------------------------------------------------------------------------------

function tona_pub_newActorId() {

	for (var i = 2; i <= $tona_MaxActorId; i++) {
		if ($gameActors.actor(i).name() == "") {
			return i;
		}
	}

	return 0;
}

// ****************************************************************************************************************************
// 酒場：name を決める
// ----------------------------------------------------------------------------------------------------------------------------

function tona_pub_newName() {

	var name;

	tona_pub_newNameId_loop: while (true) {
		name = $tona_name[Math.randomInt($tona_name.length - 1) + 1];

		for (var i = 1; i <= $tona_MaxActorId; i++) {
			var actor = $gameActors.actor(i);
			if (actor.name() == "") {
				if (actor.name() == name.name) {
					continue tona_pub_newNameId_loop;
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

function tona_pub_newFace() {

	var face;

	tona_pub_newFace_loop: while (true) {
		face = $tona_face[Math.randomInt($tona_face.length - 1) + 1];

		for (var i = 1; i <= $tona_MaxActorId; i++) {
			var actor = $gameActors.actor(i);
			if (actor.name() == "") {
				if (actor.faceName() == face.name && actor.faceIndex() == face.index) {
					continue tona_pub_newFace_loop;
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

function tona_pub_newPersonality() {

	var personalityId;

	tona_pub_newPersonality_loop: while (true) {
		personalityId = Math.randomInt($tona_personality.length - 1) + 1;

		for (var i = 1; i <= $tona_MaxActorId; i++) {
			var actor = $gameActors.actor(i);
			if (actor.name() != "") {
				if (actor._tona_personalityId == personalityId) {
					continue tona_pub_newPersonality_loop;
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

Game_Interpreter.prototype.tona_pub_inviteCreate = function() {

	// actorId を決める
	// 枠がいっぱいだったら 0 を返す

	var actorId = tona_pub_newActorId();
	if (actorId == 0) {
		$tona_result = 0;
		return;
	}

	// 勧誘データを作成
	$tona_pub_inviteData = {};
	$tona_pub_inviteData.actorId = actorId;

	// 成功を返す
	$tona_result = 1;
}

// ****************************************************************************************************************************
// 酒場：勧誘：作成（勇者）
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_pub_inviteCreateHero = function() {

	// 勧誘データを作成
	$tona_pub_inviteData = {};
	$tona_pub_inviteData.actorId = 1;
	$tona_pub_inviteData.classId = 1;
}

// ****************************************************************************************************************************
// 酒場：勧誘：職業を選択する
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_pub_inviteSelectClass = function() {
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
		$tona_result = resultList[n];
        $tona_pub_inviteData.classId = resultList[n];
    }.bind(this));

    this.setWaitMode('message');
};

// ****************************************************************************************************************************
// 酒場：勧誘：職業を設定する
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_pub_inviteSetClassId = function(classId) {

	$tona_pub_inviteData.classId = classId;
}

// ****************************************************************************************************************************
// 酒場：勧誘：アクターを作成する
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_pub_inviteCreateActor = function() {
	var actorId = $tona_pub_inviteData.actorId;
	var actor = $gameActors.actor(actorId);
	var classId = $tona_pub_inviteData.classId;

	// ステータスを決める
	var name = tona_pub_newName();
	var face = tona_pub_newFace();
	var personalityId = tona_pub_newPersonality();

	// 職業からアクターを作成
	actor.tona_setupWithClass(actorId, classId);
	actor.setName(name.name);
	actor.setFaceImage(face.name, face.index);
	actor.tona_setPersonality(personalityId);

	// 歩行グラは透明にする（勇者のみデフォルト）
	if (actorId == 1) {
		actor.setCharacterImage("Actor1", 1);
	}
	else {
		actor.setCharacterImage("", 0);
	}

	// 種を与える
	for (var i = 0; i < 5; i++) {
		var paramId = Math.randomInt(6) + 2;
		var value = Math.randomInt(3) + 1;
		actor.tona_addParamPlus(paramId, value);
	}

	// パラメーターを補正
	actor.tona_refreshParam();

	// 全回復
	actor.recoverAll();

	// 顔グラを準備しておく
    ImageManager.loadFace(actor.faceName());
}

// ****************************************************************************************************************************
// 酒場：勧誘：仲間に加える
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_pub_inviteThis = function() {
	var actorId = $tona_pub_inviteData.actorId;

	$gameParty.addActor(actorId);
}

// ****************************************************************************************************************************
// 酒場：勧誘：仲間を破棄
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_pub_inviteDelete = function() {
	var actorId = $tona_pub_inviteData.actorId;
	var actor = $gameActors.actor(actorId);

	// アクターを初期化する
	actor.setup(actorId);

	// 勧誘情報を初期化する
	$tona_pub_inviteData = {};
}

// ****************************************************************************************************************************
// 酒場：勧誘：クリア
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_pub_inviteClear = function() {

	// 勧誘情報を初期化する
	$tona_pub_inviteData = {};
}

// ****************************************************************************************************************************
// 酒場：勧誘：ウィンドウを表示する
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_pub_inviteShowWindow = function() {
	var resultList = [];
    var choices = [];

	SceneManager.push(Scene_PubStatus);
};

// ****************************************************************************************************************************
// ロビー：ショップメニューを表示
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_lobby_showShopMenu = function() {
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
        $tona_result = resultList[n];
    }.bind(this));

    this.setWaitMode('message');
};

// ****************************************************************************************************************************
// ロビー：ショップを開く
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_lobby_openWeaponShop = function() {
    var kouho = $tona_shopWeaponList;
    var goods = [];

    for (var i = 0; i < kouho.length; i++) {
        var weaponId = kouho[i];
        if ($tona_saveData.weaponAppearState[weaponId]) {
            goods.push([1, weaponId, 0, 0]);
        }
    }
    SceneManager.push(Scene_Shop);
    SceneManager.prepareNextScene(goods, false);
}

Game_Interpreter.prototype.tona_lobby_openArmorShop = function() {
    var kouho = $tona_shopArmorList;
    var goods = [];

    for (var i = 0; i < kouho.length; i++) {
        var armorId = kouho[i];
        if ($tona_saveData.armorAppearState[armorId]) {
            goods.push([2, armorId, 0, 0]);
        }
    }
    SceneManager.push(Scene_Shop);
    SceneManager.prepareNextScene(goods, false);
}

Game_Interpreter.prototype.tona_lobby_openItemShop = function() {
    var kouho = $tona_shopItemList;
    var goods = [];

    for (var i = 0; i < kouho.length; i++) {
        var itemId = kouho[i];
//        if ($tona_saveData.itemAppearState[itemId]) {
            goods.push([0, itemId, 0, 0]);
//        }
    }
    SceneManager.push(Scene_Shop);
    SceneManager.prepareNextScene(goods, false);
}

// ****************************************************************************************************************************
// ロビー：クエストメニューを表示
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_lobby_showQuestMenu = function() {
	var resultList = [];
    var choices = [];

	// クエスト解禁
	for (var questId = $tona_quest.length - 1; questId >= 1 ; questId--) {
		var quest = $tona_quest[questId];
		if ($tona_saveData.questAppearState[questId]) {
		    choices.push(quest.name);		resultList.push(questId);
		}
	}

    choices.push("キャンセル");	resultList.push(0);

    $gameMessage.setChoices(choices, 0, resultList.length - 1);
    $gameMessage.setChoiceBackground(1);
    $gameMessage.setChoicePositionType(0);
    $gameMessage.setChoiceCallback(function(n) {
        $tona_result = resultList[n];
    }.bind(this));

    this.setWaitMode('message');
};












