
// ****************************************************************************************************************************
// Tona_Main
// ----------------------------------------------------------------------------------------------------------------------------

(function() {

    console.log('initialize...');

	// マップデータストア
    $tona_mapDataStore = {};

	// マップ１番をロードしておく
	tona_storeLoadMapData(1, '$tona_mapDataStore');

	// データベースを作成
	tona_createDatabase();

	// セーブデータ
    tona_createSaveData();

	// 一時データ：結果
    $tona_result = 0;

    // 一時データ：アクション
    $tona_resultAction = [];

    // 一時データ：現在のクエスト
    $tona_questNow = new tona_QuestNow();

	// 一時データ：現在の勧誘
	$tona_pub_inviteData = {};

})();





