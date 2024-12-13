
// ****************************************************************************************************************************
// Tona_Main
// ----------------------------------------------------------------------------------------------------------------------------

(function() {

    console.log('initialize...');

	// マップデータストア
    $_tona_mapDataStore = {};

	// マップ１番をロードしておく
	_tona_StoreLoadMapData(1, '$_tona_mapDataStore');

	// データベースを作成
	_tona_CreateDatabase();

	// セーブデータ
    _tona_CreateSaveData();

	// 一時データ：結果
    $_tona_result = 0;

    // 一時データ：アクション
    $_tona_resultAction = [];

    // 一時データ：現在のクエスト
    $_tona_questNow = new _tona_QuestNow();

})();





