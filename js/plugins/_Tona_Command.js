
// ****************************************************************************************************************************
// Tona_Command
// ----------------------------------------------------------------------------------------------------------------------------


// ****************************************************************************************************************************
// 汎用：テスト
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Action_Test = function() {

	$_tona_resultAction.push([$_tona_Const_ActionType_Message, "めっせーじ"]);
}

// ****************************************************************************************************************************
// 汎用：次のアクションを取得
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Action_GetNextAction = function() {
    
    if ($_tona_resultAction.length == 0) {
        $_tona_result = 0;
    }
    else {
        var action = $_tona_resultAction.shift();

        $_tona_result = action[0];
        if ($_tona_result == $_tona_Const_ActionType_Message) {
            $gameVariables.setValue(1, action[1]);
        }
    }
}

// ****************************************************************************************************************************
// ロビー：酒場：仲間を勧誘
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype._tona_Lobby_ShowPubStatus = function() {
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


