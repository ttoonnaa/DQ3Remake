
// ****************************************************************************************************************************
// Tona_Main
// ----------------------------------------------------------------------------------------------------------------------------

(function() {

	// データベースを作成
	_tona_CreateDatabase();

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