
// ****************************************************************************************************************************
// Tona_Data
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_CreateDatabase() {

	// [HP、MP、力、守、魔、体、速、運]

	$_tona_Personality = {};
	$_tona_Personality[1] = { name: "あたまでっかち", params: [0,0,-10,10,20,-10,0,-20] };
	$_tona_Personality[2] = { name: "あまえんぼう", params: [0,0,-10,-20,0,-10,0,10] };
	$_tona_Personality[3] = { name: "いくじなし", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[4] = { name: "いっぴきおおかみ", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[5] = { name: "いのちしらず", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[6] = { name: "うっかりもの", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[7] = { name: "おおぐらい", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[8] = { name: "ブルジョワ", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[9] = { name: "おせっかい", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[10] = { name: "おちょうしもの", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[11] = { name: "おっちょこちょい", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[12] = { name: "つよき", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[13] = { name: "がんこもの", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[14] = { name: "がんばりや", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[15] = { name: "きれもの", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[16] = { name: "くろうにん", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[17] = { name: "ごうけつ", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[18] = { name: "さびしがりや", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[19] = { name: "しあわせもの", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[20] = { name: "しょうじきもの", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[21] = { name: "ずのうめいせき", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[22] = { name: "すばしっこい", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[23] = { name: "セクシーギャル", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[24] = { name: "せけんしらず", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[25] = { name: "タフネス", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[26] = { name: "ちからじまん", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[27] = { name: "てつじん", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[28] = { name: "でんこうせっか", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[29] = { name: "なきむし", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[30] = { name: "なまけもの", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[31] = { name: "ぬけめがない", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[32] = { name: "ねっけつ", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[33] = { name: "のんきもの", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[34] = { name: "ひっこみじあん", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[35] = { name: "ひねくれもの", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[36] = { name: "ふつう", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[37] = { name: "へこたれない", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[38] = { name: "まけずぎらい", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[39] = { name: "みえっぱり", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[40] = { name: "むっつりスケベ", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[41] = { name: "やさしいひと", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[42] = { name: "ラッキーパーソン", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[43] = { name: "らんぼうもの", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[44] = { name: "ロマンチスト", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[45] = { name: "わがまま", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[46] = { name: "わんぱく", params: [0,0,0,0,0,0,0,0] };

	// 性格の偏りを補正する

	// [-40,-30,-20,-10,  0, 10, 20, 30, 40, 50] =>
	// [  0,  0,  0,  0,  0,  5, 10, 15, 20, 25]

	for (var i = 1; i <= 46; i++) {
		for (var p = 0; p < 9; p++) {
			switch ($_tona_Personality[i][p]) {
			case (-40)	$_tona_Personality[i][p] = 0
			case (-30)	$_tona_Personality[i][p] = 0
			case (-20)	$_tona_Personality[i][p] = 0
			case (-10)	$_tona_Personality[i][p] = 0
			case (  0)	$_tona_Personality[i][p] = 0
			case ( 10)	$_tona_Personality[i][p] = 5
			case ( 20)	$_tona_Personality[i][p] = 10
			case ( 30)	$_tona_Personality[i][p] = 15
			case ( 40)	$_tona_Personality[i][p] = 20
			case ( 50)	$_tona_Personality[i][p] = 25
			}
		}
	}
}

// ****************************************************************************************************************************
// クラスのデータベースを上書き
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_Data_OverrideClassDatabase() {

    // ゆうしゃ
	$dataClasses[1].params[2] = [0,17,20,23,26,29,32,35,38,41,44,47,50,53,56,59,62,65,68,71,75];
	$dataClasses[1].params[3] = [0,5,6,7,8,9,10,11,12,13,14,15,16,17,17,18,19,20,21,22,23];
	$dataClasses[1].params[4] = [0,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26,28];
	$dataClasses[1].params[5] = [0,9,12,15,18,21,23,26,29,32,35,37,40,43,46,49,51,54,57,60,63];
	$dataClasses[1].params[6] = [0,11,13,15,17,19,21,22,24,26,28,30,32,34,35,37,39,41,43,45,47];
	$dataClasses[1].params[7] = [0,6,8,10,11,13,15,16,18,20,22,23,25,27,28,30,32,33,35,37,39];

    // せんし
	$dataClasses[2].params[2] = [0,14,18,22,27,31,35,39,44,48,52,56,61,65,69,73,78,82,86,90,95];
	$dataClasses[2].params[3] = [0,3,4,4,5,5,6,6,7,7,8,8,8,9,9,10,10,11,11,12,12];
	$dataClasses[2].params[4] = [0,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
	$dataClasses[2].params[5] = [0,13,16,20,23,27,30,33,37,40,44,47,50,54,57,61,64,67,71,74,78];
	$dataClasses[2].params[6] = [0,7,8,9,10,11,12,13,14,15,16,16,17,18,19,20,21,22,23,24,25];
	$dataClasses[2].params[7] = [0,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

	// そうりょ
	$dataClasses[3].params[2] = [0,8,10,12,14,15,17,19,21,22,24,26,28,29,31,33,35,36,38,40,42];
	$dataClasses[3].params[3] = [0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
	$dataClasses[3].params[4] = [0,9,11,13,16,18,20,22,25,27,29,31,34,36,38,40,43,45,47,49,52];
	$dataClasses[3].params[5] = [0,9,12,14,17,20,22,25,27,30,33,35,38,40,43,46,48,51,53,56,59];
	$dataClasses[3].params[6] = [0,8,10,12,14,16,18,19,21,23,25,27,29,31,32,34,36,38,40,42,44];
	$dataClasses[3].params[7] = [0,9,12,15,18,20,23,26,29,31,34,37,40,42,45,48,51,53,56,59,62];

	// まほうつかい
	$dataClasses[4].params[2] = [0,5,6,7,8,9,10,10,11,12,13,14,15,16,16,17,18,19,20,21,22];
	$dataClasses[4].params[3] = [0,7,8,9,10,11,12,13,14,15,16,16,17,18,19,20,21,22,23,24,25];
	$dataClasses[4].params[6] = [0,16,18,20,22,23,25,27,29,30,32,34,36,37,39,41,43,44,46,48,50];
	$dataClasses[4].params[5] = [0,7,9,11,13,16,18,20,22,24,27,29,31,33,35,38,40,42,44,46,49];
	$dataClasses[4].params[4] = [0,12,14,16,19,21,23,26,28,30,33,35,37,39,42,44,46,49,51,53,56];
	$dataClasses[4].params[7] = [0,8,12,15,19,23,26,30,34,37,41,45,48,52,56,59,63,67,70,74,78];
}


