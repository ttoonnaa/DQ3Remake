
// ****************************************************************************************************************************
// Tona_Main
// ----------------------------------------------------------------------------------------------------------------------------

(function() {

	// データベースを作成
	_tona_CreateDatabase();

	// 一時データ：結果
    $_tona_result = 0;

    // 一時データ：アクション
    $_tona_resultAction = [];

})();

// ****************************************************************************************************************************
// データベース読み込み後の編集
// ----------------------------------------------------------------------------------------------------------------------------

(function() {

	var DataManager_onLoad = DataManager.onLoad;
	DataManager.onLoad = function(object) {
		DataManager_onLoad.call(this, object);
		_tona_modifyDatabase(object);
	}
})();

function _tona_modifyDatabase(object) {

    if (false) {}

	// アクター
	//else if (object === $dataActors) {
    //    _tona_Data_OverrideActorDatabase();
    //}
	// エネミー
	//else if (object === $dataEnemies) {
    //    _tona_Data_OverrideEnemyDatabase();
    //}
    // クラス
	else if (object === $dataClasses) {
        _tona_Data_OverrideClassDatabase();
    }
}

// ****************************************************************************************************************************
// パーティーが満員かを判定する
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_Util_PartyIsFull() {

	return $gameParty.size() == $_tona_PubMaxParty;
}

