
// ****************************************************************************************************************************
// 汎用：次のアクションを取得
// ----------------------------------------------------------------------------------------------------------------------------

Game_Interpreter.prototype.tona_action_getNextAction = function() {
    
    if ($tona_resultAction.length == 0) {
        $tona_result = 0;
    }
    else {
        var action = $tona_resultAction.shift();

        $tona_result = action[0];
        if ($tona_result == $tona_ActionType_Message) {
            $gameVariables.setValue(1, action[1]);
        }
    }
}



