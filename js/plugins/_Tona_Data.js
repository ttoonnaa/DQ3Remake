
// ****************************************************************************************************************************
// データベースを作成する
// ----------------------------------------------------------------------------------------------------------------------------

function tona_createDatabase() {

	$tona_name = [];
	$tona_name[1] = { name: "ソラ" };
	$tona_name[2] = { name: "ロボコ" };
	$tona_name[3] = { name: "ミコ" };
	$tona_name[4] = { name: "スイセイ" };
	$tona_name[5] = { name: "アズキ" };
	$tona_name[6] = { name: "メル" };
	$tona_name[7] = { name: "アキ" };
	$tona_name[8] = { name: "ハアト" };
	$tona_name[9] = { name: "フブキ" };
	$tona_name[10] = { name: "マツリ" };
	$tona_name[11] = { name: "コロネ" };
	$tona_name[12] = { name: "オカユ" };
	$tona_name[13] = { name: "ミオ" };
	$tona_name[14] = { name: "アクア" };
	$tona_name[15] = { name: "シオン" };
	$tona_name[16] = { name: "アヤメ" };
	$tona_name[17] = { name: "チョコ" };
	$tona_name[18] = { name: "スバル" };
	$tona_name[19] = { name: "ペコラ" };
	$tona_name[20] = { name: "マリン" };
	$tona_name[21] = { name: "ノエル" };
	$tona_name[22] = { name: "フレア" };
	$tona_name[23] = { name: "カナタ" };
	$tona_name[24] = { name: "トワ" };
	$tona_name[25] = { name: "ワタメ" };
	$tona_name[26] = { name: "ルーナ" };
	$tona_name[27] = { name: "ラミィ" };
	$tona_name[28] = { name: "ポルカ" };
	$tona_name[29] = { name: "ボタン" };
	$tona_name[30] = { name: "ネネ" };
	$tona_name[31] = { name: "ラプラス" };
	$tona_name[32] = { name: "ルイ" };
	$tona_name[33] = { name: "コヨリ" };
	$tona_name[34] = { name: "クロエ" };
	$tona_name[35] = { name: "イロハ" };

	$tona_face = [];
	$tona_face[1] = { name: "_Chara001", index: 0 };
	$tona_face[2] = { name: "_Chara002", index: 0 };
	$tona_face[3] = { name: "_Chara003", index: 0 };
	$tona_face[4] = { name: "_Chara004", index: 0 };
	$tona_face[5] = { name: "_Chara005", index: 0 };
	$tona_face[6] = { name: "_Chara006", index: 0 };
	$tona_face[7] = { name: "_Chara007", index: 0 };
	$tona_face[8] = { name: "_Chara008", index: 0 };
	$tona_face[9] = { name: "_Chara009", index: 0 };
	$tona_face[10] = { name: "_Chara010", index: 0 };
	$tona_face[11] = { name: "_Chara011", index: 0 };
	$tona_face[12] = { name: "_Chara012", index: 0 };
	$tona_face[13] = { name: "_Chara013", index: 0 };
	$tona_face[14] = { name: "_Chara014", index: 0 };
	$tona_face[15] = { name: "_Chara015", index: 0 };
	$tona_face[16] = { name: "_Chara016", index: 0 };
	$tona_face[17] = { name: "_Chara017", index: 0 };
	$tona_face[18] = { name: "_Chara018", index: 0 };

	// [HP、MP、力、守、魔、体、速、運]

	$tona_personality = [];
	$tona_personality[1] = { name: "あたまでっかち", params: [0,0,-1,1,2,-1,0,-2] };
	$tona_personality[2] = { name: "あまえんぼう", params: [0,0,-1,-2,0,-1,0,1] };
	$tona_personality[3] = { name: "いくじなし", params: [0,0,-1,-2,2,-1,-2,2] };
	$tona_personality[4] = { name: "いっぴきおおかみ", params: [0,0,1,2,1,2,1,-2] };
	$tona_personality[5] = { name: "いのちしらず", params: [0,0,1,-3,0,2,2,1] };
	$tona_personality[6] = { name: "うっかりもの", params: [0,0,-1,-1,-2,0,2,-2] };
	$tona_personality[7] = { name: "おおぐらい", params: [0,0,1,2,-3,1,-3,-2] };
	$tona_personality[8] = { name: "おせっかい", params: [0,0,0,0,-2,1,-1,0] };
	$tona_personality[9] = { name: "おちょうしもの", params: [0,0,0,0,1,-1,2,1] };
	$tona_personality[10] = { name: "おっちょこちょい", params: [0,0,-1,0,-2,-2,2,-1] };
	$tona_personality[11] = { name: "がんこもの", params: [0,0,1,2,-3,2,-3,-2] };
	$tona_personality[12] = { name: "がんばりや", params: [0,0,1,1,0,1,-1,-2] };
	$tona_personality[13] = { name: "きれもの", params: [0,0,0,-1,3,-2,2,-2] };
	$tona_personality[14] = { name: "くろうにん", params: [0,0,1,2,-1,2,-2,-2] };
	$tona_personality[15] = { name: "ごうけつ", params: [0,0,3,0,-2,0,-2,-2] };
	$tona_personality[16] = { name: "さびしがりや", params: [0,0,0,-2,1,-2,-1,1] };
	$tona_personality[17] = { name: "しあわせもの", params: [0,0,-1,-1,0,-1,0,2] };
	$tona_personality[18] = { name: "しょうじきもの", params: [0,0,0,0,0,0,-1,-1] };
	$tona_personality[19] = { name: "ずのうめいせき", params: [0,0,-1,-1,2,0,0,-1] };
	$tona_personality[20] = { name: "すばしっこい", params: [0,0,-1,-1,0,-1,2,-2] };
	$tona_personality[21] = { name: "セクシーギャル", params: [0,0,1,0,1,1,2,2] };
	$tona_personality[22] = { name: "せけんしらず", params: [0,0,0,-2,-2,-1,-1,2] };
	$tona_personality[23] = { name: "タフネス", params: [0,0,2,2,-2,3,-1,-2] };
	$tona_personality[24] = { name: "ちからじまん", params: [0,0,2,-1,-2,0,-2,-2] };
	$tona_personality[25] = { name: "つよき", params: [0,0,2,1,-2,0,-1,-2] };
	$tona_personality[26] = { name: "てつじん", params: [0,0,1,3,0,2,-2,-2] };
	$tona_personality[27] = { name: "でんこうせっか", params: [0,0,0,-1,0,0,3,0] };
	$tona_personality[28] = { name: "なきむし", params: [0,0,-1,-2,1,0,-1,2] };
	$tona_personality[29] = { name: "なまけもの", params: [0,0,1,-2,-2,2,-3,1] };
	$tona_personality[30] = { name: "ぬけめがない", params: [0,0,-1,1,2,-1,1,0] };
	$tona_personality[31] = { name: "ねっけつ", params: [0,0,1,2,-1,1,0,-3] };
	$tona_personality[32] = { name: "のんきもの", params: [0,0,0,1,0,1,-2,0] };
	$tona_personality[33] = { name: "ひっこみじあん", params: [0,0,1,-2,1,2,-3,-1] };
	$tona_personality[34] = { name: "ひねくれもの", params: [0,0,-2,1,1,-2,2,2] };
	$tona_personality[35] = { name: "ふつう", params: [0,0,0,0,0,0,0,0] };
	$tona_personality[36] = { name: "ブルジョワ", params: [0,0,0,-2,1,-1,-2,3] };
	$tona_personality[37] = { name: "へこたれない", params: [0,0,0,-1,-1,2,0,0] };
	$tona_personality[38] = { name: "まけずぎらい", params: [0,0,-1,0,-1,1,1,-1] };
	$tona_personality[39] = { name: "みえっぱり", params: [0,0,1,1,0,-1,1,-1] };
	$tona_personality[40] = { name: "むっつりスケベ", params: [0,0,1,1,1,2,-1,-1] };
	$tona_personality[41] = { name: "やさしいひと", params: [0,0,1,1,1,1,-1,-1] };
	$tona_personality[42] = { name: "ラッキーパーソン", params: [0,0,0,0,0,0,1,3] };
	$tona_personality[43] = { name: "らんぼうもの", params: [0,0,2,1,-3,-1,-1,-2] };
	$tona_personality[44] = { name: "ロマンチスト", params: [0,0,0,-1,1,0,1,0] };
	$tona_personality[45] = { name: "わがまま", params: [0,0,-1,-1,-1,-1,1,-1] };
	$tona_personality[46] = { name: "わんぱく", params: [0,0,1,-2,-2,-2,1,-1] };

	// 性格のパラメーターを実際に値に修正する

	for (var i = 1; i < $tona_personality.length; i++) {
		for (var p = 0; p < 8; p++) {
			switch ($tona_personality[i].params[p]) {
			case -3:	$tona_personality[i].params[p] = -6;	break;
			case -2:	$tona_personality[i].params[p] = -3;	break;
			case -1:	$tona_personality[i].params[p] = 0;		break;
			case  0:	$tona_personality[i].params[p] = 0;		break;
			case  1:	$tona_personality[i].params[p] = 3;		break;
			case  2:	$tona_personality[i].params[p] = 6;		break;
			case  3:	$tona_personality[i].params[p] = 9;		break;
			}
		}
	}

	// クエスト
	tona_createQuestDatabase();

	// エネミー
	tona_createEnemyDatabase();

	// ショップ
	tona_createShopDatabase();
}

// ****************************************************************************************************************************
// データベースを作成する：クエスト
// ----------------------------------------------------------------------------------------------------------------------------

function tona_createQuestDatabase() {

    var quests = [];
	var hagureFull = [];

	quests[1] = { name: "アリアハン周辺", level: 1, waves: [], levelResult: 2, reward: { kind: 1, dataId: 1 } };
    quests[1].waves[1] = { mapId: 3, eventNum: 10, level: 1, maxEnemyNum: 3, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };

	quests[2] = { name: "レーベ周辺", level: 2, waves: [], levelResult: 3, reward: { kind: 1, dataId: 1 } };
    quests[2].waves[1] = { mapId: 3, eventNum: 10, level: 2, maxEnemyNum: 4, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };
    quests[2].waves[2] = { mapId: 3, eventNum: 10, level: 2, maxEnemyNum: 4, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };

	quests[3] = { name: "岬の洞窟", level: 3, waves: [], levelResult: 4, reward: { kind: 1, dataId: 1 } };
    quests[3].waves[1] = { mapId: 4, eventNum: 10, level: 3, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon2" };
    quests[3].waves[2] = { mapId: 4, eventNum: 10, level: 3, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon2" };
    quests[3].waves[3] = { mapId: 4, eventNum: 10, level: 3, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon2" };

	quests[4] = { name: "ナジミの塔", level: 4, waves: [], levelResult: 5, reward: { kind: 1, dataId: 1 } };
    quests[4].waves[1] = { mapId: 5, eventNum: 10, level: 4, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon6" };
    quests[4].waves[2] = { mapId: 5, eventNum: 10, level: 4, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon6" };
    quests[4].waves[3] = { mapId: 5, eventNum: 10, level: 4, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon6" };

	quests[5] = { name: "いざないの洞窟", level: 5, waves: [], levelResult: 6, reward: { kind: 1, dataId: 1 } };
    quests[5].waves[1] = { mapId: 6, eventNum: 10, level: 5, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon2" };
    quests[5].waves[2] = { mapId: 6, eventNum: 10, level: 5, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon2" };
    quests[5].waves[3] = { mapId: 6, eventNum: 10, level: 5, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon2" };

	quests[6] = { name: "ロマリア周辺", level: 6, waves: [], levelResult: 7, reward: { kind: 1, dataId: 1 } };
    quests[6].waves[1] = { mapId: 3, eventNum: 10, level: 6, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };
    quests[6].waves[2] = { mapId: 3, eventNum: 10, level: 6, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };
    quests[6].waves[3] = { mapId: 3, eventNum: 10, level: 6, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };

	quests[7] = { name: "カザーブ周辺", level: 7, waves: [], levelResult: 8, reward: { kind: 1, dataId: 1 } };
    quests[7].waves[1] = { mapId: 7, eventNum: 10, level: 7, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field1" };
    quests[7].waves[2] = { mapId: 7, eventNum: 10, level: 7, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field1" };
    quests[7].waves[3] = { mapId: 7, eventNum: 10, level: 7, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field1" };

	quests[8] = { name: "シャンパーニの塔", level: 8, waves: [], levelResult: 9, reward: { kind: 1, dataId: 1 } };
    quests[8].waves[1] = { mapId: 5, eventNum: 10, level: 8, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon6" };
    quests[8].waves[2] = { mapId: 5, eventNum: 10, level: 8, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon6" };
    quests[8].waves[3] = { mapId: 5, eventNum: 10, level: 8, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon6" };

	quests[9] = { name: "ノアニール周辺", level: 9, waves: [], levelResult: 10, reward: { kind: 1, dataId: 1 } };
    quests[9].waves[1] = { mapId: 8, eventNum: 10, level: 9, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Theme6" };
    quests[9].waves[2] = { mapId: 8, eventNum: 10, level: 9, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Theme6" };
    quests[9].waves[3] = { mapId: 8, eventNum: 10, level: 9, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Theme6" };

	quests[10] = { name: "地底の湖", level: 10, waves: [], levelResult: 11, reward: { kind: 1, dataId: 1 } };
    quests[10].waves[1] = { mapId: 9, eventNum: 10, level: 10, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon2" };
    quests[10].waves[2] = { mapId: 9, eventNum: 10, level: 10, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon2" };
    quests[10].waves[3] = { mapId: 9, eventNum: 10, level: 10, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon2" };

	quests[11] = { name: "アッサラーム周辺", level: 11, waves: [], levelResult: 12, reward: { kind: 1, dataId: 1 } };
    quests[11].waves[1] = { mapId: 3, eventNum: 10, level: 11, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };
    quests[11].waves[2] = { mapId: 3, eventNum: 10, level: 11, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };
    quests[11].waves[3] = { mapId: 3, eventNum: 10, level: 11, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };

	quests[12] = { name: "イシス砂漠", level: 12, waves: [], levelResult: 13, reward: { kind: 1, dataId: 1 } };
    quests[12].waves[1] = { mapId: 10, eventNum: 10, level: 12, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon3" };
    quests[12].waves[2] = { mapId: 10, eventNum: 10, level: 12, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon3" };
    quests[12].waves[3] = { mapId: 10, eventNum: 10, level: 12, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon3" };

	quests[13] = { name: "ピラミッド", level: 13, waves: [], levelResult: 14, reward: { kind: 1, dataId: 1 } };
    quests[13].waves[1] = { mapId: 11, eventNum: 10, level: 13, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon4" };
    quests[13].waves[2] = { mapId: 11, eventNum: 10, level: 13, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon4" };
    quests[13].waves[3] = { mapId: 11, eventNum: 10, level: 13, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon4" };

	quests[14] = { name: "ポルトガ周辺", level: 14, waves: [], levelResult: 15, reward: { kind: 1, dataId: 1 } };
    quests[14].waves[1] = { mapId: 3, eventNum: 10, level: 14, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };
    quests[14].waves[2] = { mapId: 3, eventNum: 10, level: 14, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };
    quests[14].waves[3] = { mapId: 3, eventNum: 10, level: 14, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };

	quests[15] = { name: "バハラタ周辺", level: 15, waves: [], levelResult: 16, reward: { kind: 1, dataId: 1 } };
    quests[15].waves[1] = { mapId: 8, eventNum: 10, level: 15, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Theme6" };
    quests[15].waves[2] = { mapId: 8, eventNum: 10, level: 15, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Theme6" };
    quests[15].waves[3] = { mapId: 8, eventNum: 10, level: 15, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Theme6" };

	quests[16] = { name: "人さらいのアジト", level: 16, waves: [], levelResult: 17, reward: { kind: 1, dataId: 1 } };
    quests[16].waves[1] = { mapId: 10, eventNum: 10, level: 16, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon3" };
    quests[16].waves[2] = { mapId: 10, eventNum: 10, level: 16, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon3" };
    quests[16].waves[3] = { mapId: 10, eventNum: 10, level: 16, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon3" };

	quests[17] = { name: "ダーマ周辺", level: 17, waves: [], levelResult: 18, reward: { kind: 1, dataId: 1 } };
    quests[17].waves[1] = { mapId: 7, eventNum: 10, level: 17, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field1" };
    quests[17].waves[2] = { mapId: 7, eventNum: 10, level: 17, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field1" };
    quests[17].waves[3] = { mapId: 7, eventNum: 10, level: 17, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field1" };

	quests[18] = { name: "大海原", level: 18, waves: [], levelResult: 19, reward: { kind: 1, dataId: 1 } };
    quests[18].waves[1] = { mapId: 12, eventNum: 10, level: 18, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Ship1" };
    quests[18].waves[2] = { mapId: 12, eventNum: 10, level: 18, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Ship1" };
    quests[18].waves[3] = { mapId: 12, eventNum: 10, level: 18, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Ship1" };

	quests[19] = { name: "ガルナの塔", level: 19, waves: [], levelResult: 20, reward: { kind: 1, dataId: 1 } };
    quests[19].waves[1] = { mapId: 5, eventNum: 10, level: 19, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon6" };
    quests[19].waves[2] = { mapId: 5, eventNum: 10, level: 19, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon6" };
    quests[19].waves[3] = { mapId: 5, eventNum: 10, level: 19, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon6" };

	quests[20] = { name: "ムオル周辺", level: 20, waves: [], levelResult: 21, reward: { kind: 1, dataId: 1 } };
    quests[20].waves[1] = { mapId: 10, eventNum: 10, level: 20, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Battle5" };
    quests[20].waves[2] = { mapId: 10, eventNum: 10, level: 20, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Battle5" };
    quests[20].waves[3] = { mapId: 10, eventNum: 10, level: 20, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Battle5" };

	// レベルから Gold を設定
	for (var questId = 1; questId < quests.length; questId++) {
		var quest = quests[questId];
		for (var waveId = 1; waveId < quest.waves.length; waveId++) {
			var wave = quest.waves[waveId];
			if (wave.gold == null) {
				wave.gold = wave.level * 4 * 3;		// ×3：バランス調整
			}
		}
	}

	$tona_quest = quests;
}

// ****************************************************************************************************************************
// データベースを作成する：エネミー
// ----------------------------------------------------------------------------------------------------------------------------

function tona_createEnemyDatabase() {

	var enemies = [];

	// リメイク攻略本の順に並べます

	// attr: [メラ, ギラ, イオ, ヒャド, バギ, デイン, 炎, 氷, 物理]
	// regist1: [ザキ, 急所, メガ, バシ, ニフ, MP, おたけび, 転倒]
	// regist2: [攻Ｄ, 防Ｄ, 速Ｄ, 耐Ｄ, マヒ, 眠り, 混乱, 幻惑, 封印]

	enemies[11]  = { name: "", attr: [5,4,3,3,3,2,4,3,3], regist1: [4,4,4,4,3,4,4,4], regist2: [4,4,4,4,4,4,4,4,0] };	// スライム
	enemies[12]  = { name: "", attr: [3,3,3,3,4,3,3,3,3], regist1: [4,4,4,4,3,4,4,0], regist2: [4,4,4,4,4,4,4,4,0] };	// おおがらす
	enemies[13]  = { name: "", attr: [3,3,3,1,3,3,3,1,3], regist1: [4,4,4,4,3,4,4,3], regist2: [4,4,4,4,4,4,4,4,0] };	// 
	enemies[14]  = { name: "", attr: [5,4,3,3,3,3,4,3,3], regist1: [4,4,4,4,3,4,3,4], regist2: [4,4,4,4,4,4,4,4,0] };	// 
	enemies[15]  = { name: "", attr: [3,3,4,3,4,3,3,3,3], regist1: [4,4,4,4,3,4,2,0], regist2: [4,4,4,4,4,4,4,2,4] };	// 
	enemies[16]  = { name: "", attr: [2,2,3,4,3,4,2,4,3], regist1: [4,4,4,4,3,4,3,3], regist2: [4,4,4,4,4,4,4,4,0] };	// 
	enemies[17]  = { name: "", attr: [3,3,3,3,3,2,3,3,3], regist1: [4,4,4,4,3,4,3,4], regist2: [4,4,4,4,3,3,3,4,0] };	// 
	enemies[18]  = { name: "", attr: [2,2,2,2,2,3,2,3,3], regist1: [3,4,4,4,3,4,4,4], regist2: [4,4,4,4,4,4,3,4,4] };	// 
	enemies[19]  = { name: "", attr: [3,3,3,3,4,3,3,3,3], regist1: [4,4,4,4,3,4,2,0], regist2: [4,4,4,4,4,4,4,4,0] };	// 
	enemies[20]  = { name: "", attr: [1,1,1,1,1,2,1,1,3], regist1: [2,3,4,4,0,2,3,0], regist2: [4,4,4,4,3,2,3,4,3] };	// 
	enemies[21]  = { name: "", attr: [3,3,3,1,3,3,3,1,3], regist1: [4,4,4,3,3,4,4,3], regist2: [4,4,3,4,4,2,3,4,4] };	// 
	enemies[22]  = { name: "", attr: [3,3,3,2,2,3,3,1,3], regist1: [4,4,4,4,3,4,3,4], regist2: [4,3,4,4,4,4,4,4,0] };	// 
	enemies[23]  = { name: "", attr: [3,3,4,3,3,3,3,3,3], regist1: [4,4,4,4,3,3,2,4], regist2: [4,4,4,4,4,4,4,4,4] };	// 
	enemies[24]  = { name: "", attr: [2,2,3,4,3,4,1,4,3], regist1: [4,4,4,4,3,4,3,3], regist2: [4,4,4,4,4,4,4,4,0] };	// 
	enemies[25]  = { name: "", attr: [3,3,4,2,4,4,3,2,3], regist1: [4,4,4,4,3,4,4,0], regist2: [4,3,4,4,4,4,4,4,2] };	// 
	enemies[26]  = { name: "", attr: [5,4,3,3,3,4,4,3,3], regist1: [0,0,4,4,4,4,0,4], regist2: [4,4,4,4,0,0,4,4,4] };	// 
	enemies[27]  = { name: "", attr: [2,2,2,4,4,3,1,4,3], regist1: [4,4,4,3,3,4,4,0], regist2: [4,4,3,4,0,4,4,4,0] };	// 
	enemies[28]  = { name: "", attr: [3,3,2,3,2,4,3,3,2], regist1: [4,4,4,2,3,4,2,4], regist2: [4,4,2,4,4,4,3,4,0] };	// 
	enemies[29]  = { name: "", attr: [2,2,2,3,3,4,1,3,3], regist1: [0,0,4,4,4,4,0,3], regist2: [4,3,4,4,0,2,0,4,0] };	// 
	enemies[30]  = { name: "", attr: [2,2,4,4,4,2,1,4,2], regist1: [3,4,4,3,3,4,4,0], regist2: [4,4,3,4,0,3,4,0,4] };	// 
	enemies[31]  = { name: "", attr: [5,4,3,3,3,3,4,3,3], regist1: [4,4,4,4,3,4,4,4], regist2: [4,3,4,4,4,2,4,4,0] };	// 
	enemies[32]  = { name: "", attr: [2,2,2,3,3,3,1,3,3], regist1: [4,4,4,4,3,4,2,4], regist2: [4,4,4,4,4,4,4,4,0] };	// 
	enemies[33]  = { name: "", attr: [3,3,3,2,4,4,3,2,3], regist1: [4,4,4,3,3,4,4,0], regist2: [4,4,3,4,4,4,4,3,0] };	// 
	enemies[34]  = { name: "", attr: [5,4,2,3,3,4,5,3,3], regist1: [0,0,4,3,4,3,0,4], regist2: [4,3,3,4,0,0,3,4,3] };	// 
	enemies[35]  = { name: "", attr: [3,3,3,3,3,3,3,3,2], regist1: [0,0,4,2,3,0,0,0], regist2: [4,4,2,4,0,4,0,4,0] };	// 
	enemies[36]  = { name: "", attr: [2,2,2,3,3,3,1,3,3], regist1: [4,4,4,4,3,4,4,4], regist2: [4,3,4,4,4,2,4,4,0] };	// 
	enemies[37]  = { name: "", attr: [3,3,2,2,4,5,3,1,3], regist1: [0,4,4,3,3,3,4,0], regist2: [4,4,3,4,4,4,3,4,4] };	// 
	enemies[38]  = { name: "", attr: [2,2,2,3,4,3,2,3,3], regist1: [4,4,4,2,3,3,2,0], regist2: [4,4,3,4,4,4,4,2,4] };	// 
	enemies[39]  = { name: "", attr: [2,2,2,4,4,3,1,4,3], regist1: [3,4,4,3,3,4,4,0], regist2: [4,4,3,4,4,4,3,4,2] };	// 
	enemies[40]  = { name: "", attr: [3,3,3,1,1,3,3,1,3], regist1: [4,4,4,2,3,4,4,4], regist2: [4,3,2,4,4,4,4,4,0] };	// 
	enemies[41]  = { name: "", attr: [1,1,2,3,1,3,1,4,2], regist1: [4,4,4,4,3,4,2,4], regist2: [4,4,3,4,4,4,3,2,3] };	// 
	enemies[42]  = { name: "", attr: [5,4,3,3,3,4,5,3,3], regist1: [0,0,4,4,4,4,0,4], regist2: [4,3,3,4,0,0,4,4,0] };	// 
	enemies[43]  = { name: "", attr: [1,1,1,4,3,3,0,4,3], regist1: [4,4,4,3,3,4,2,4], regist2: [4,4,3,4,4,4,4,4,0] };	// 
	enemies[44]  = { name: "", attr: [1,1,2,4,3,4,1,4,3], regist1: [3,4,4,4,2,4,3,3], regist2: [4,4,4,4,4,2,4,3,3] };	// 
	enemies[45]  = { name: "", attr: [1,1,1,1,1,1,1,1,3], regist1: [2,0,4,2,4,3,3,0], regist2: [4,4,2,4,4,2,3,2,4] };	// 
	enemies[46]  = { name: "", attr: [5,4,3,1,1,4,5,1,3], regist1: [0,0,4,2,4,4,0,4], regist2: [4,4,3,4,0,0,4,2,0] };	// 
	enemies[47]  = { name: "", attr: [4,4,1,2,2,2,4,2,2], regist1: [2,2,4,0,0,4,2,2], regist2: [4,3,3,4,3,2,3,4,4] };	// 
	enemies[48]  = { name: "", attr: [2,2,2,2,1,3,3,3,3], regist1: [3,4,4,2,3,3,4,4], regist2: [4,3,3,4,4,4,3,4,3] };	// 
	enemies[49]  = { name: "", attr: [2,2,2,1,3,2,2,1,3], regist1: [3,4,4,4,3,4,4,4], regist2: [4,4,4,4,4,3,3,4,3] };	// 
	enemies[50]  = { name: "", attr: [1,1,2,3,4,4,1,3,3], regist1: [4,4,4,4,3,4,2,0], regist2: [4,4,4,4,4,4,4,4,4] };	// 
	enemies[51]  = { name: "", attr: [5,4,3,3,3,4,5,3,3], regist1: [0,0,4,4,4,3,0,4], regist2: [4,4,4,4,0,0,4,2,4] };	// 
	enemies[52]  = { name: "", attr: [2,2,2,2,2,4,2,3,3], regist1: [3,4,4,4,3,4,4,4], regist2: [4,2,4,4,4,3,2,2,4] };	// 
	enemies[53]  = { name: "", attr: [0,0,1,5,4,2,0,5,2], regist1: [3,4,4,3,3,4,4,0], regist2: [4,4,3,4,0,4,4,4,4] };	// 
	enemies[54]  = { name: "", attr: [3,3,4,2,4,3,3,2,3], regist1: [4,4,4,4,3,4,3,4], regist2: [4,4,4,4,4,4,4,3,0] };	// 
	enemies[55]  = { name: "", attr: [5,4,4,3,3,4,5,3,3], regist1: [0,0,4,4,3,4,0,4], regist2: [4,4,4,4,0,0,4,4,0] };	// 
	enemies[56]  = { name: "", attr: [3,3,3,4,2,4,3,4,3], regist1: [3,4,4,4,3,4,4,0], regist2: [4,3,4,4,4,4,3,4,0] };	// 
	enemies[57]  = { name: "", attr: [3,3,3,3,3,3,3,3,3], regist1: [3,4,4,4,3,4,4,4], regist2: [4,3,4,4,4,4,4,4,0] };	// 
	enemies[58]  = { name: "", attr: [2,2,2,1,2,4,2,1,2], regist1: [3,4,4,3,2,3,3,3], regist2: [4,3,3,4,3,4,3,4,4] };	// 
	enemies[59]  = { name: "", attr: [2,2,2,1,2,4,2,2,3], regist1: [4,4,4,3,2,4,3,0], regist2: [4,4,3,4,0,4,4,3,0] };	// 

	enemies[60]  = { name: "", attr: [3,3,3,1,3,4,3,1,3], regist1: [2,4,4,4,3,4,4,0], regist2: [4,3,4,4,4,4,4,4,3] };	// 
	enemies[61]  = { name: "", attr: [3,3,3,1,3,4,3,1,3], regist1: [3,4,4,3,2,4,4,2], regist2: [4,4,4,4,4,3,4,4,0] };	// 
	enemies[62]  = { name: "", attr: [3,3,2,1,2,4,3,1,3], regist1: [3,4,4,4,2,4,2,4], regist2: [4,4,4,4,4,3,3,3,0] };	// 
	enemies[63]  = { name: "", attr: [1,1,1,1,1,4,1,1,3], regist1: [2,4,4,4,2,3,4,0], regist2: [3,1,3,3,3,2,2,3,2] };	// 
	enemies[64]  = { name: "", attr: [3,3,4,2,2,4,3,1,3], regist1: [3,4,4,2,2,3,4,0], regist2: [4,4,4,4,4,4,4,4,3] };	// 
	enemies[65]  = { name: "", attr: [2,2,2,4,4,3,2,4,3], regist1: [4,4,4,3,3,4,2,0], regist2: [4,4,4,4,0,3,4,4,2] };	// 
	enemies[66]  = { name: "", attr: [1,1,1,4,1,3,1,4,2], regist1: [4,4,4,2,2,4,3,4], regist2: [4,2,3,4,4,2,4,4,0] };	// 
	enemies[67]  = { name: "", attr: [3,3,3,1,3,4,3,1,3], regist1: [3,4,4,3,2,4,3,2], regist2: [4,4,3,4,4,4,4,3,0] };	// 
	enemies[68]  = { name: "", attr: [1,1,3,4,3,3,1,4,3], regist1: [4,4,4,4,3,4,4,4], regist2: [4,4,4,4,4,4,4,4,3] };	// 
	enemies[69]  = { name: "", attr: [5,4,3,2,3,3,4,2,3], regist1: [4,4,4,4,3,4,4,4], regist2: [4,4,4,4,4,4,4,4,0] };	// 
	enemies[70]  = { name: "", attr: [0,0,0,0,0,0,0,0,3], regist1: [0,3,0,0,0,4,2,3], regist2: [4,0,0,4,4,0,3,0,0] };	// 
	enemies[71]  = { name: "", attr: [2,2,3,4,3,3,1,4,3], regist1: [3,4,4,4,2,4,4,4], regist2: [4,3,4,4,4,4,4,3,0] };	// 
	enemies[72]  = { name: "", attr: [3,3,4,4,1,5,3,4,3], regist1: [3,4,4,2,3,4,4,0], regist2: [4,4,4,4,4,4,4,2,3] };	// 
	enemies[73]  = { name: "", attr: [3,3,3,4,4,3,3,4,3], regist1: [4,4,4,3,3,4,4,4], regist2: [4,4,3,4,4,4,4,4,0] };	// 
	enemies[74]  = { name: "", attr: [1,1,1,3,1,2,0,3,3], regist1: [3,4,4,2,3,4,4,0], regist2: [4,3,4,4,4,3,4,3,0] };	// 
	enemies[75]  = { name: "", attr: [1,1,2,4,2,3,2,4,3], regist1: [2,4,4,3,2,3,4,4], regist2: [4,2,3,4,4,3,3,3,3] };	// 
	enemies[76]  = { name: "", attr: [2,2,2,3,3,3,2,3,3], regist1: [3,4,4,4,2,4,4,4], regist2: [4,4,4,4,4,2,3,3,0] };	// 
	enemies[77]  = { name: "", attr: [5,4,3,3,3,4,5,3,3], regist1: [0,0,4,3,3,4,0,4], regist2: [4,3,3,4,0,0,3,4,0] };	// 
	enemies[78]  = { name: "", attr: [3,3,3,2,1,3,3,1,3], regist1: [3,4,4,4,2,4,4,4], regist2: [4,3,4,4,4,3,4,2,3] };	// 
	enemies[79]  = { name: "", attr: [0,0,0,0,0,0,0,0,3], regist1: [0,3,0,0,0,2,2,0], regist2: [4,0,0,4,0,0,0,0,0] };	// 
	enemies[80]  = { name: "", attr: [2,2,2,2,2,2,3,3,3], regist1: [3,4,4,3,2,4,4,4], regist2: [4,3,3,4,4,4,4,4,2] };	// 
	enemies[81]  = { name: "", attr: [1,1,1,3,2,4,1,3,3], regist1: [0,0,4,3,3,3,0,3], regist2: [4,2,3,4,0,2,3,3,3] };	// 
	enemies[82]  = { name: "", attr: [5,4,3,3,4,5,4,3,3], regist1: [2,3,4,4,3,3,4,4], regist2: [4,3,3,4,4,3,3,4,2] };	// 
	enemies[83]  = { name: "", attr: [2,2,1,1,2,3,3,1,3], regist1: [2,4,4,4,0,4,4,4], regist2: [4,4,4,4,4,3,4,4,4] };	// 
	enemies[84]  = { name: "", attr: [1,1,1,1,1,2,1,1,2], regist1: [3,4,4,4,3,3,3,3], regist2: [4,2,4,4,3,2,3,4,3] };	// 
	enemies[85]  = { name: "", attr: [2,2,2,2,2,3,3,3,3], regist1: [3,4,4,3,2,4,4,4], regist2: [4,4,3,4,4,4,4,3,0] };	// 
	enemies[86]  = { name: "", attr: [2,2,3,2,2,1,1,1,2], regist1: [0,0,4,0,2,4,0,0], regist2: [4,4,4,4,0,0,0,4,0] };	// 
	enemies[87]  = { name: "", attr: [1,1,1,1,1,2,2,2,3], regist1: [2,3,4,2,0,2,3,0], regist2: [4,2,3,4,3,2,2,4,3] };	// 
	enemies[88]  = { name: "", attr: [2,2,1,3,4,4,2,3,3], regist1: [0,4,4,4,2,2,4,0], regist2: [4,3,4,4,4,3,3,4,2] };	// 
	enemies[89]  = { name: "", attr: [2,2,2,2,4,4,1,3,3], regist1: [2,3,4,3,2,2,4,4], regist2: [4,2,3,4,4,3,4,4,3] };	// 
	enemies[90]  = { name: "", attr: [1,1,1,1,1,1,1,1,2], regist1: [2,2,4,0,0,3,2,2], regist2: [4,3,2,4,3,2,0,3,2] };	// 

	//enemies[99]  = { name: "", attr: [3,3,3,3,3,3,3,3,3], regist1: [3,3,3,3,3,3,3,3], regist2: [3,3,3,3,3,3,3,3,3] };	// 

	$tona_enemy = enemies;
}

// ****************************************************************************************************************************
// データベースを作成する：ショップ
// ----------------------------------------------------------------------------------------------------------------------------

function tona_createShopDatabase() {

	$tona_shopWeaponList = [
		 71,  72,  27,   1,  28,  54,  55,  39,  21,  31,
		 56,   3,  45,  41,   2,  22,  17,  73,  43,  76,
		 58,  33,  23,  74,  59,  42,  18,  75,   5,  52,
		 24,  60,  34,  35,  47,  10,  13,  11,
	];

	$tona_shopArmorList = [
		116, 117, 138, 101, 102, 103, 104, 139, 144, 118,
		119, 105, 106, 121, 129, 107, 127, 124, 146, 109,
		110, 130, 112,
		 18,   1,   2,   3,   4,  19,  14,   5,   6,  15,
		  7,   8,   9,  16,  10,  17,
		 61,  70,  63,  64,  66,  51,  73,  65,  74,  71,
		 52,  54,  56,  57,  58,  79,
	];

	$tona_shopItemList = [
		11, 12, 13, 15, 16, 17, 19, 20, 21, 22, 23, 25,
	];
}

// ****************************************************************************************************************************
// データベースを上書きする
// ----------------------------------------------------------------------------------------------------------------------------

function tona_overrideDatabase(object) {

    if (false) {}

	// アクター
	//else if (object === $dataActors) {
    //    tona_overrideActorDatabase();
    //}
	// エネミー
	else if (object === $dataEnemies) {
        tona_overrideEnemyDatabase();
    }
    // クラス
	else if (object === $dataClasses) {
        tona_overrideClassDatabase();
    }
    // 武器
	else if (object === $dataWeapons) {
        tona_overrideWeaponDatabase();
    }
    // 防具
	else if (object === $dataArmors) {
        tona_overrideArmorDatabase();
    }
    // 道具
	else if (object === $dataItems) {
        tona_overrideItemDatabase();
    }
}

// ****************************************************************************************************************************
// エネミーのデータベースを上書き
// ----------------------------------------------------------------------------------------------------------------------------

function tona_overrideEnemyDatabase() {

    var elemRate = [0, 10, 70, 100, 130, 160];
    var statRate = [0, 0, 30, 70, 100, 100];

	for (var i = 1; i < $tona_enemy.length; i++) {
		var enemy = $tona_enemy[i];
		if (enemy == null || $dataEnemies[i].name == "") {
			continue;
		}

		// レベルを設定する
		$dataEnemies[i].tona_level = tona_evalNum($dataEnemies[i].meta.tona_level);

		// 守備力を調整する
		$dataEnemies[i].params[3] = Math.floor($dataEnemies[i].params[3] * 0.85);

		// バハラタ付近の敵が頭おかしいのでさらに調整
		if ([49, 50, 51, 52, 53].includes(i)) {
			$dataEnemies[i].params[3] = Math.floor($dataEnemies[i].params[3] * 0.85);
		}

		// 運の良さを設定する
		$dataEnemies[i].params[7] = Math.floor($dataEnemies[i].tona_level * 2.5);

		// 経験値を調整する
		$dataEnemies[i].exp = Math.ceil($dataEnemies[i].exp / 8);

		// 特徴を設定する
	    $dataEnemies[i].traits.push({ "code": 31, "dataId":  1, "value": 0 });				// 攻撃持続性：物理
	    $dataEnemies[i].traits.push({ "code": 22, "dataId":  0, "value": 1 });				// 命中率＋１００％

    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  1, "value": elemRate[enemy.attr[8]] / 100 });		// 物理
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  2, "value": elemRate[enemy.attr[0]] / 100 });		// メラ
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  3, "value": elemRate[enemy.attr[1]] / 100 });		// ギラ
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  4, "value": elemRate[enemy.attr[2]] / 100 });		// イオ
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  5, "value": elemRate[enemy.attr[3]] / 100 });		// ヒャド
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  6, "value": elemRate[enemy.attr[4]] / 100 });		// バギ
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  7, "value": elemRate[enemy.attr[5]] / 100 });		// デイン
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  9, "value": elemRate[enemy.attr[6]] / 100 });		// 炎
    	$dataEnemies[i].traits.push({ "code": 11, "dataId": 10, "value": elemRate[enemy.attr[7]] / 100 });		// 氷
    	$dataEnemies[i].traits.push({ "code": 11, "dataId": 11, "value": elemRate[enemy.regist1[5]] / 100 });	// MP吸収

	    $dataEnemies[i].traits.push({ "code": 12, "dataId":  2, "value": statRate[enemy.regist2[0]] / 100 });	// 攻撃力↓
	    $dataEnemies[i].traits.push({ "code": 12, "dataId":  3, "value": statRate[enemy.regist2[1]] / 100 });	// 防御力↓
	    $dataEnemies[i].traits.push({ "code": 12, "dataId":  6, "value": statRate[enemy.regist2[2]] / 100 });	// 敏捷性↓

	    $dataEnemies[i].traits.push({ "code": 13, "dataId":  1, "value": statRate[enemy.regist1[0]] / 100 });	// 戦闘不能
	    $dataEnemies[i].traits.push({ "code": 13, "dataId":  7, "value": statRate[enemy.regist2[4]] / 100 });	// 麻痺
	    $dataEnemies[i].traits.push({ "code": 13, "dataId":  8, "value": statRate[enemy.regist2[5]] / 100 });	// ラリホー
	    $dataEnemies[i].traits.push({ "code": 13, "dataId":  9, "value": statRate[enemy.regist2[6]] / 100 });	// メダパニ
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 10, "value": statRate[enemy.regist2[7]] / 100 });	// マヌーサ
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 11, "value": statRate[enemy.regist2[8]] / 100 });	// マホトーン
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 12, "value": statRate[enemy.regist1[0]] / 100 });	// ザキ
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 13, "value": statRate[enemy.regist1[1]] / 100 });	// 急所
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 14, "value": statRate[enemy.regist1[2]] / 100 });	// メガンテ
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 15, "value": statRate[enemy.regist1[3]] / 100 });	// バシルーラ
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 16, "value": statRate[enemy.regist1[4]] / 100 });	// ニフラム
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 17, "value": statRate[enemy.regist1[6]] / 100 });	// おたけび
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 18, "value": statRate[enemy.regist1[7]] / 100 });	// 転倒
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 19, "value": statRate[enemy.regist2[3]] / 100 });	// 呪文耐性ダウン

		//console.log(i, $dataEnemies[i].name, Math.floor(($dataEnemies[i].params[2] / $dataEnemies[i].params[3]) * 100) / 100);

		// 特効を設定する
		if ($dataEnemies[i].meta.tona_elements != null) {
			var tona_elements = eval($dataEnemies[i].meta.tona_elements);
			for (const element of tona_elements) {
				switch (element) {
		    	case 21:	$dataEnemies[i].traits.push({ "code": 11, "dataId": element, "value": 1.3 });	break;	// ゾンビ特効
		    	case 22:	$dataEnemies[i].traits.push({ "code": 11, "dataId": element, "value": 1.3 });	break;	// ドラゴン特効
		    	case 23:	$dataEnemies[i].traits.push({ "code": 11, "dataId": element, "value": 1.3 });	break;	// 飛行特効
		    	}
			}
		}
	}
}

// ****************************************************************************************************************************
// クラスのデータベースを上書き
// ----------------------------------------------------------------------------------------------------------------------------

function tona_overrideClassDatabase() {

    // ゆうしゃ
	$dataClasses[1].params[2] = [0,10,13,17,20,24,27,31,34,38,41,45,48,52,55,59,62,66,69,73,76,80,84,88,92,96,100,104,108,112,116,120,124,128,132,136,140,144,148,152,156];
	$dataClasses[1].params[3] = [0,11,13,15,17,20,22,24,26,29,31,33,35,38,40,42,44,47,49,51,53,55,58,61,64,66,69,72,75,77,80,83,86,88,91,94,97,99,102,105,108];
	$dataClasses[1].params[4] = [0,6,8,11,13,16,18,21,23,26,28,31,33,36,38,41,43,46,48,51,53,56,60,64,68,71,75,79,83,86,90,94,98,101,105,109,113,116,120,124,128];
	$dataClasses[1].params[5] = [0,11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,56,59,62,65,68,72,77,82,87,91,96,101,106,110,115,120,125,129,134,139,144,148,153,158,163];
	$dataClasses[1].params[6] = [0,7,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,49,52,54,57,61,65,69,72,76,80,84,87,91,95,99,102,106,110,114,117,121,125,129];
	$dataClasses[1].params[7] = [0,9,11,14,16,19,21,24,26,29,31,34,36,39,41,44,46,49,51,54,56,59,62,65,68,71,74,77,80,83,86,89,92,95,98,101,104,107,110,113,116];

    // せんし
	$dataClasses[2].params[2] = [0,11,14,18,22,26,29,33,37,41,44,48,52,56,59,63,67,71,74,78,82,86,91,96,101,105,110,115,120,124,129,134,139,143,148,153,158,162,167,172,177];
	$dataClasses[2].params[3] = [0,13,15,18,20,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111,114,117,120];
	$dataClasses[2].params[4] = [0,3,4,6,7,9,10,12,13,15,16,18,19,21,22,24,25,27,28,30,31,32,34,36,38,39,41,43,45,46,48,50,52,53,55,57,59,60,62,64,66];
	$dataClasses[2].params[5] = [0,13,16,20,24,28,31,35,39,43,46,50,54,58,61,65,69,73,76,80,84,89,94,99,105,110,115,120,126,131,136,141,147,152,157,162,168,173,178,183,189];
	$dataClasses[2].params[6] = [0,6,7,9,11,13,14,16,18,20,21,23,25,27,28,30,32,34,35,37,39,41,44,46,49,51,54,56,59,61,64,66,69,71,74,76,79,81,84,86,89];
	$dataClasses[2].params[7] = [0,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,47,50,53,55,58,61,64,66,69,72,75,77,80,83,86,88,91,94,97];

    // ぶとうか
	$dataClasses[3].params[2] = [0,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58,61,64,67,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170];
	$dataClasses[3].params[3] = [0,10,12,15,18,21,23,26,29,32,34,37,40,43,45,48,51,54,56,59,62,65,68,71,74,77,80,83,86,89,92,95,98,101,104,107,110,113,116,119,122];
	$dataClasses[3].params[4] = [0,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,49,52,55,57,60,63,66,68,71,74,77,79,82,85,88,90,93,96,99];
	$dataClasses[3].params[5] = [0,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58,61,64,67,71,75,79,84,88,92,96,101,105,109,113,118,122,126,130,135,139,143,147,152];
	$dataClasses[3].params[6] = [0,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77,81,85,89,94,99,104,108,113,118,123,127,132,137,142,146,151,156,161,165,170,175,180];
	$dataClasses[3].params[7] = [0,3,5,8,11,14,16,19,22,25,27,30,33,36,38,41,44,47,49,52,55,59,64,68,73,77,82,86,91,95,100,104,109,113,118,122,127,131,136,140,145];

	// まほうつかい
	$dataClasses[4].params[2] = [0,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85];
	$dataClasses[4].params[3] = [0,10,12,14,16,19,21,23,25,28,30,32,34,37,39,41,43,46,48,50,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102];
	$dataClasses[4].params[4] = [0,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,73,78,82,87,91,96,100,105,109,114,118,123,127,132,136,141,145,150,154,159];
	$dataClasses[4].params[5] = [0,8,10,13,15,18,20,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,61,64,68,71,74,77,81,84,87,90,94,97,100,103,107,110,113,116,120];
	$dataClasses[4].params[6] = [0,7,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,49,52,54,58,62,66,71,75,79,83,88,92,96,100,105,109,113,117,122,126,130,134,139];
	$dataClasses[4].params[7] = [0,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58,61,64,68,73,78,83,87,92,97,102,106,111,116,121,125,130,135,140,144,149,154,159];

	// そうりょ
	$dataClasses[5].params[2] = [0,7,9,11,13,16,18,20,22,25,27,29,31,34,36,38,40,43,45,47,49,51,54,57,60,62,65,68,71,73,76,79,82,84,87,90,93,95,98,101,104];
	$dataClasses[5].params[3] = [0,11,13,15,17,20,22,24,26,29,31,33,35,38,40,42,44,47,49,51,53,56,59,62,65,68,71,74,77,80,83,86,89,92,95,98,101,104,107,110,113];
	$dataClasses[5].params[4] = [0,11,13,15,17,20,22,24,26,29,31,33,35,38,40,42,44,47,49,51,53,56,59,62,65,68,71,74,77,80,83,86,89,92,95,98,101,104,107,110,113];
	$dataClasses[5].params[5] = [0,9,11,14,17,20,22,25,28,31,33,36,39,42,44,47,50,53,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97,100,103,106,109,112,115,118,121];
	$dataClasses[5].params[6] = [0,7,9,11,13,16,18,20,22,25,27,29,31,34,36,38,40,43,45,47,49,52,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97,100,103,106,109];
	$dataClasses[5].params[7] = [0,5,6,8,10,12,13,15,17,19,20,22,24,26,27,29,31,33,34,36,38,41,45,49,53,56,60,64,68,71,75,79,83,86,90,94,98,101,105,109,113];

	// しょうにん
	$dataClasses[6].params[2] = [0,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,56,59,62,65,69,73,77,81,85,89,93,97,101,105,109,113,117,121,125,129,133,137,141,145];
	$dataClasses[6].params[3] = [0,10,12,14,16,19,21,23,25,28,30,32,34,37,39,41,43,46,48,50,52,55,58,61,65,68,71,74,78,81,84,87,91,94,97,100,104,107,110,113,117];
	$dataClasses[6].params[4] = [0,11,13,15,17,20,22,24,26,29,31,33,35,38,40,42,44,47,49,51,53,54,56,58,60,61,63,65,67,68,70,72,74,75,77,79,81,82,84,86,88];
	$dataClasses[6].params[5] = [0,12,15,19,23,27,30,34,38,42,45,49,53,57,60,64,68,72,75,79,83,87,91,95,99,103,107,111,115,119,123,127,131,135,139,143,147,151,155,159,163];
	$dataClasses[6].params[6] = [0,3,4,6,8,10,11,13,15,17,18,20,22,24,25,27,29,31,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76];
	$dataClasses[6].params[7] = [0,6,7,9,11,13,14,16,18,20,21,23,25,27,28,30,32,34,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79];

	// あそびにん
	$dataClasses[7].params[2] = [0,7,8,10,11,13,14,16,17,19,20,22,23,25,26,28,29,31,32,34,35,37,40,42,45,47,50,52,55,57,60,62,65,67,70,72,75,77,80,82,85];
	$dataClasses[7].params[3] = [0,10,12,15,17,20,22,25,27,30,32,35,37,40,42,45,47,50,52,55,57,60,63,66,70,73,76,79,83,86,89,92,96,99,102,105,109,112,115,118,122];
	$dataClasses[7].params[4] = [0,3,5,7,9,12,14,16,18,21,23,25,27,30,32,34,36,39,41,43,45,45,46,47,48,48,49,50,51,51,52,53,54,54,55,56,57,57,58,59,60];
	$dataClasses[7].params[5] = [0,11,13,16,19,22,24,27,30,33,35,38,41,44,46,49,52,55,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111,114,117,120,123];
	$dataClasses[7].params[6] = [0,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97,101,105,109,113,117,121,125,129,133,137,141,145,149,153,157,161];
	$dataClasses[7].params[7] = [0,15,21,28,34,41,47,54,60,67,73,80,86,93,99,106,112,119,125,132,138,142,147,151,156,160,165,169,174,178,183,187,192,196,201,205,210,214,219,223,228];

	// とうぞく
	$dataClasses[8].params[2] = [0,8,10,13,15,18,20,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97,100,103,106,109,112,115];
	$dataClasses[8].params[3] = [0,10,12,14,16,19,21,23,25,28,30,32,34,37,39,41,43,46,48,50,52,54,56,58,61,63,65,67,70,72,74,76,79,81,83,85,88,90,92,94,97];
	$dataClasses[8].params[4] = [0,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85];
	$dataClasses[8].params[5] = [0,10,12,15,17,20,22,25,27,30,32,35,37,40,42,45,47,50,52,55,57,61,65,69,73,77,81,85,89,93,97,101,105,109,113,117,121,125,129,133,137];
	$dataClasses[8].params[6] = [0,11,15,20,25,30,34,39,44,49,53,58,63,68,72,77,82,87,91,96,101,106,111,116,121,126,131,136,141,146,151,156,161,166,171,176,181,186,191,196,201];
	$dataClasses[8].params[7] = [0,5,7,9,11,14,16,18,20,23,25,27,29,32,34,36,38,41,43,45,47,50,53,56,60,63,66,69,73,76,79,82,86,89,92,95,99,102,105,108,112];

	// まものつかい
	$dataClasses[9].params[2] = [0,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,79,82,85,88,92,95,98,101,105,108,111,114,118,121,124,127,131];
	$dataClasses[9].params[3] = [0,10,12,14,16,19,21,23,25,28,30,32,34,37,39,41,43,46,48,50,52,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97,100,103,106,109,112];
	$dataClasses[9].params[4] = [0,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84];
	$dataClasses[9].params[5] = [0,10,12,15,17,20,22,25,27,30,32,35,37,40,42,45,47,50,52,55,57,61,65,69,74,78,82,86,91,95,99,103,108,112,116,120,125,129,133,137,142];
	$dataClasses[9].params[6] = [0,10,12,15,17,20,22,25,27,30,32,35,37,40,42,45,47,50,52,55,57,59,61,63,66,68,70,72,75,77,79,81,84,86,88,90,93,95,97,99,102];
	$dataClasses[9].params[7] = [0,5,7,10,13,16,18,21,24,27,29,32,35,38,40,43,46,49,51,54,57,59,62,65,68,70,73,76,79,81,84,87,90,92,95,98,101,103,106,109,112];

	// けんじゃ
	$dataClasses[10].params[2] = [0,0,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107];
	$dataClasses[10].params[3] = [0,0,2,5,8,11,13,16,19,22,24,27,30,33,35,38,41,44,46,49,52,54,56,58,61,63,65,67,70,72,74,76,79,81,83,85,88,90,92,94,97];
	$dataClasses[10].params[4] = [0,0,3,7,10,14,17,21,24,28,31,35,38,42,45,49,52,56,59,63,66,69,73,76,80,83,87,90,94,97,101,104,108,111,115,118,122,125,129,132,136];
	$dataClasses[10].params[5] = [0,0,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,59,62,65,68,70,73,76,79,81,84,87,90,92,95,98,101,103,106,109,112];
	$dataClasses[10].params[6] = [0,0,2,5,8,11,13,16,19,22,24,27,30,33,35,38,41,44,46,49,52,55,58,61,65,68,71,74,78,81,84,87,91,94,97,100,104,107,110,113,117];
	$dataClasses[10].params[7] = [0,0,1,3,4,6,7,9,10,12,13,15,16,18,19,21,22,24,25,27,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68];

	// 経験値テーブル
	$dataClasses[1].expTable = [0,0,29,87,174,304,499,792,1232,1891,2880,4364,6218,8534,11428,15045,19114,23690,28837,34627,41141,48468,56711,65983,76413,88147,101347,116196,132901,151694,172836,196621,223378,253480,287344,325440,368298,416512,470752,531771,600417,677644,764524,862263,960002,1057741,1155480,1253219,1350958,1448697,1546436,1644175,1741914,1839653,1937392,2035131,2132870,2230609,2328348,2426087,2523826,2621565,2719304,2817043,2914782,3012521,3110260,3207999,3305738,3403477,3501216,3598915,3696694,3794433,3892172,3989911,4087650,4185389,4283128,4380867,4478606,4576345,4674084,4771823,4869562,4967301,5065040,5162779,5260518,5358257,5455996,5553735,5651474,5749213,5846952,5944691,6042430,6140169,6237908,6335647];
	$dataClasses[2].expTable = [0,0,12,36,84,156,264,426,669,1033,1579,2398,3627,5163,7083,9483,12483,16233,20920,26779,34102,42340,51608,62034,73763,86957,101801,118500,137286,158421,182197,208945,239036,272888,310972,353816,402015,456239,517241,585868,663073,749928,847639,945350,1043061,1140772,1238483,1336194,1433905,1531616,1629327,1727038,1824749,1922460,2020171,2117882,2215593,2313304,2411015,2508726,2606437,2704148,2801859,2899570,2997281,3094992,3192703,3290414,3388125,3485836,3583547,3681258,3778969,3876680,3974391,4072102,4169813,4267524,4365235,4462946,4560657,4658368,4756079,4853790,4951501,5049212,5146923,5244634,5342345,5440056,5537767,5635478,5733189,5830900,5928611,6026322,6124033,6221744,6319455,6417166];
	$dataClasses[3].expTable = [0,0,18,54,126,234,396,639,1003,1549,2369,3598,5441,7745,10625,14225,18725,24350,30678,37797,45805,54814,64949,76350,89176,103605,119837,138098,158641,181751,207749,236996,269898,306912,348552,395397,448097,507384,574081,649115,733528,828492,935326,1055514,1190725,1325936,1461147,1596358,1731569,1866780,2001991,2137202,2272413,2407624,2542835,2678046,2813257,2948468,3083679,3218890,3354101,3489312,3624523,3759734,3894945,4030156,4165367,4300578,4435789,4571000,4706211,4841422,4976633,5111844,5247055,5382266,5517477,5652688,5787899,5923110,6058321,6193532,6328743,6463954,6599165,6734376,6869587,7004798,7140009,7275220,7410431,7545642,7680853,7816064,7951275,8086486,8221697,8356908,8492119,8627330];
	$dataClasses[4].expTable = [0,0,15,45,105,195,330,532,835,1290,1973,2997,4533,6453,8853,11853,15603,20290,25563,31495,38169,45676,54121,63622,74310,86334,99861,115078,132197,151456,173121,197494,224913,255758,290458,329495,373412,422818,478399,540927,611271,690408,779436,879592,992268,1119028,1245788,1372548,1499308,1626068,1752828,1879588,2006348,2133108,2259868,2386628,2513388,2640148,2766908,2893668,3020428,3147188,3273948,3400708,3527468,3654228,3780988,3907748,4034508,4161268,4288028,4414788,4541548,4668308,4795068,4921828,5048588,5175348,5302108,5428868,5555628,5682388,5809148,5935908,6062668,6189428,6316188,6442948,6569708,6696468,6823228,6949988,7076748,7203508,7330268,7457028,7583788,7710548,7837308,7964068];
	$dataClasses[5].expTable = [0,0,14,42,98,182,308,497,780,1205,1842,2798,4232,6024,8264,11064,14564,18939,24407,30559,37479,45263,54020,63872,74955,87423,101450,117229,134981,154952,177419,202694,231128,263116,299102,339585,385128,436364,494004,558849,631799,713867,806194,910061,1026912,1143763,1260614,1377465,1494316,1611167,1728018,1844869,1961720,2078571,2195422,2312273,2429124,2545975,2662826,2779677,2896528,3013379,3130230,3247081,3363932,3480783,3597634,3714485,3831336,3948187,4065038,4181889,4298740,4415591,4532442,4649293,4766144,4882995,4999846,5116697,5233548,5350399,5467250,5584101,5700952,5817803,5934654,6051505,6168356,6285207,6402058,6518909,6635760,6752611,6869462,6986313,7103164,7220015,7336866,7453717];
	$dataClasses[6].expTable = [0,0,10,30,70,130,220,355,557,860,1315,1998,3022,4302,5902,7902,10402,13527,17433,22315,27807,33985,40935,48754,57550,67445,78577,91100,105188,121037,138867,158925,181490,206876,235435,267563,303707,344368,390112,441573,499467,564597,637868,720298,813032,905766,998500,1091234,1183968,1276702,1369436,1462170,1554904,1647638,1740372,1833106,1925840,2018574,2111308,2204042,2296776,2389510,2482244,2574978,2667712,2760446,2853180,2945914,3038648,3131382,3224116,3316850,3409584,3502318,3595052,3687786,3780520,3873254,3965988,4058722,4151456,4244190,4336924,4429658,4522392,4615126,4707860,4800594,4893328,4986062,5078796,5171530,5264264,5356998,5449732,5542466,5635200,5727934,5820668,5913402];
	$dataClasses[7].expTable = [0,0,11,33,77,143,242,390,612,946,1447,2198,3324,4732,6492,8692,11442,14879,19175,24545,31258,38810,47306,56863,67614,79709,93316,108623,125844,145217,167012,191531,219114,250145,285055,324329,368511,418216,474134,537042,607813,687430,776998,877762,991121,1104480,1217839,1331198,1444557,1557916,1671275,1784634,1897993,2011352,2124711,2238070,2351429,2464788,2578147,2691506,2804865,2918224,3031583,3144942,3258301,3371660,3485019,3598378,3711737,3825096,3938455,4051814,4165173,4278532,4391891,4505250,4618609,4731968,4845327,4958686,5072045,5185404,5298763,5412122,5525481,5638840,5752199,5865558,5978917,6092276,6205635,6318994,6432353,6545712,6659071,6772430,6885789,6999148,7112507,7225866];
	$dataClasses[8].expTable = [0,0,13,39,78,136,223,353,548,840,1278,1935,2920,4397,6243,8550,11433,15036,19539,25167,32202,40116,49019,59034,70300,82974,97232,113272,131317,151617,174454,200145,229047,261561,298139,339289,385582,437661,496249,562160,636309,719726,813570,907414,1001258,1095102,1188946,1282790,1376634,1470478,1564322,1658166,1752010,1845854,1939698,2033542,2127386,2221230,2315074,2408918,2502762,2596606,2690450,2784294,2878138,2971982,3065826,3159670,3253514,3347358,3441202,3535046,3628890,3722734,3816578,3910422,4004266,4098110,4191954,4285798,4379642,4473486,4567330,4661174,4755018,4848862,4942706,5036550,5130394,5224238,5318082,5411926,5505770,5599614,5693458,5787302,5881146,5974990,6068834,6162678];
	$dataClasses[9].expTable = [0,0,29,87,174,304,499,792,1232,1891,2880,4364,6218,8534,11428,15045,19114,23690,28837,34627,41141,48468,56711,65983,76413,88147,101347,116196,132901,151694,172836,196621,223378,253480,287344,325440,368298,416512,470752,531771,600417,677644,764524,862263,960002,1057741,1155480,1253219,1350958,1448697,1546436,1644175,1741914,1839653,1937392,2035131,2132870,2230609,2328348,2426087,2523826,2621565,2719304,2817043,2914782,3012521,3110260,3207999,3305738,3403477,3501216,3598915,3696694,3794433,3892172,3989911,4087650,4185389,4283128,4380867,4478606,4576345,4674084,4771823,4869562,4967301,5065040,5162779,5260518,5358257,5455996,5553735,5651474,5749213,5846952,5944691,6042430,6140169,6237908,6335647];
	$dataClasses[10].expTable = [0,0,20,60,140,260,440,710,1115,1722,2633,3999,6047,8607,11807,15807,20807,27057,34869,43657,53543,64664,77175,91250,107083,124895,144933,167475,192835,221365,253461,289568,330188,375885,427293,485126,550188,623383,705726,798362,902577,1019818,1151714,1300096,1448478,1596860,1745242,1893624,2042006,2190388,2338770,2487152,2635534,2783916,2932298,3080680,3229062,3377444,3525826,3674208,3822590,3970972,4119354,4267736,4416118,4564500,4712882,4861264,5009646,5158028,5306410,5454792,5603174,5751556,5899938,6048320,6196702,6345084,6493466,6641848,6790230,6938612,7086994,7235376,7383758,7532140,7680522,7828904,7977286,8125668,8274050,8422432,8570814,8719196,8867578,9015960,9164342,9312724,9461106,9609488];

	// 特徴
	for (var i = 1; i <= $tona_ClassCount; i++) {

	    $dataClasses[i].traits.push({ "code": 13, "dataId":  1, "value": 0.7 });	// 戦闘不能
	    $dataClasses[i].traits.push({ "code": 13, "dataId":  7, "value": 0.7 });	// 麻痺
	    $dataClasses[i].traits.push({ "code": 13, "dataId":  8, "value": 0.7 });	// ラリホー
	    $dataClasses[i].traits.push({ "code": 13, "dataId":  9, "value": 0.7 });	// メダパニ
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 10, "value": 0.7 });	// マヌーサ
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 11, "value": 0.7 });	// マホトーン
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 12, "value": 0.7 });	// ザキ
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 13, "value": 0.7 });	// 急所
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 14, "value": 0.7 });	// メガンテ
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 15, "value": 0.7 });	// バシルーラ
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 16, "value": 0.7 });	// ニフラム
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 17, "value": 0.7 });	// おたけび
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 18, "value": 0.7 });	// 転倒
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 19, "value": 0.7 });	// 呪文耐性ダウン
	}
}

// ****************************************************************************************************************************
// 武器のデータベースを上書き
// ----------------------------------------------------------------------------------------------------------------------------

function tona_overrideWeaponDatabase() {

	var cnt = $dataWeapons.length;

	// 初期化
	for (var i = 1; i < cnt; i++) {
		var weapon = $dataWeapons[i];
		weapon.tona_level = 0;
		weapon.tona_canEquipClasses = [];

		// 攻撃力を調整する
		weapon.params[2] = Math.floor(weapon.params[2] * 1.5);

		// レベル
		if (weapon.meta.tona_level != null) {
			weapon.tona_level = eval(weapon.meta.tona_level);
		}

		// 装備可能クラス
		if (weapon.meta.tona_equip != null) {
			weapon.tona_canEquipClasses = eval(weapon.meta.tona_equip);
		}
	}
}

// ****************************************************************************************************************************
// 防具のデータベースを上書き
// ----------------------------------------------------------------------------------------------------------------------------

function tona_overrideArmorDatabase() {

	var cnt = $dataArmors.length;

	// 初期化
	for (var i = 1; i < cnt; i++) {
		var armor = $dataArmors[i];
		armor.tona_level = 0;
		armor.tona_canEquipClasses = [];

		// レベル
		if (armor.meta.tona_level != null) {
			armor.tona_level = eval(armor.meta.tona_level);
		}

		// 装備可能クラス
		if (armor.meta.tona_equip != null) {
			armor.tona_canEquipClasses = eval(armor.meta.tona_equip);
		}
	}
}

// ****************************************************************************************************************************
// 道具のデータベースを上書き
// ----------------------------------------------------------------------------------------------------------------------------

function tona_overrideItemDatabase() {

	var cnt = $dataItems.length;

	// 初期化
	for (var i = 1; i < cnt; i++) {
		var item = $dataItems[i];
		item.tona_level = 0;

		// レベル
		if (item.meta.tona_level != null) {
			item.tona_level = eval(item.meta.tona_level);
		}
	}
}

// ****************************************************************************************************************************
// セーブデータを作成
// ----------------------------------------------------------------------------------------------------------------------------

function tona_createSaveData() {

    if (typeof $tona_saveData === 'undefined') {
        $tona_saveData = {};
    }

	tona_updateSaveData();
}

// ****************************************************************************************************************************
// セーブデータを更新
// ----------------------------------------------------------------------------------------------------------------------------

function tona_updateSaveData() {

    // パーティー
    if ($tona_saveData.partyLevel == null) {
        $tona_saveData.partyLevel = 1;
    }

    // 武器解禁
    if ($tona_saveData.weaponAppearState == null) {
        $tona_saveData.weaponAppearState = {};
    }

    // 防具解禁
    if ($tona_saveData.armorAppearState == null) {
        $tona_saveData.armorAppearState = {};
    }

    // 道具解禁
    if ($tona_saveData.itemAppearState == null) {
        $tona_saveData.itemAppearState = {};
    }

    // クエストクリア
    if ($tona_saveData.questClearFlag == null) {
        $tona_saveData.questClearFlag = {};
    }

    // クエスト登場
    if ($tona_saveData.questAppearState == null) {
        $tona_saveData.questAppearState = {};
    }
}

// ****************************************************************************************************************************
// Lv 付近のモンスターを探す
// ----------------------------------------------------------------------------------------------------------------------------

function tona_findLevelEnemies(level) {

	var enemyIds = [];

	for (var i = 1; i < $tona_enemy.length; i++) {
		var enemy = $dataEnemies[i];
		if (enemy == null || $dataEnemies[i].name == "") {
			continue;
		}
		if (level - 2 <= enemy.tona_level && enemy.tona_level <= level) {
			enemyIds.push(i);
		}
	}

	return enemyIds;
}

// ****************************************************************************************************************************
// アイテムを取得
// ----------------------------------------------------------------------------------------------------------------------------

function tona_getItem(kind, dataId) {

	switch (kind) {
	case 1:		return $dataItems[dataId];
	case 2:		return $dataWeapons[dataId];
	case 3:		return $dataArmors[dataId];
	}

	return null;
}

// ****************************************************************************************************************************
// データを更新
// ----------------------------------------------------------------------------------------------------------------------------

function tona_updateData(showMessage) {

	// 武器解禁
	for (var i = 0; i < $tona_shopWeaponList.length; i++) {
		var weaponId = $tona_shopWeaponList[i];

		// レベルが設定されている武器について
		if ($dataWeapons[weaponId].tona_level > 0) {

			// まだ解禁していない武器の場合
			if (!$tona_saveData.weaponAppearState[weaponId]) {

	            // 条件を満たしているかを判定
	            if ($dataWeapons[weaponId].tona_level <= $tona_saveData.partyLevel) {
					$tona_saveData.weaponAppearState[weaponId] = 2;

					if (showMessage) {
						$tona_resultAction.push([$tona_ActionType_SoundItem2]);
						$tona_resultAction.push([$tona_ActionType_Message, "武器屋に『" + $dataWeapons[weaponId].name + "』が追加されました！"]);
					}
				}
			}
		}
	}

	// 防具解禁
	for (var i = 0; i < $tona_shopArmorList.length; i++) {
		var armorId = $tona_shopArmorList[i];

		// レベルが設定されている防具について
		if ($dataArmors[armorId].tona_level > 0) {

			// まだ解禁していない武器の場合
			if (!$tona_saveData.armorAppearState[armorId]) {

	            // 条件を満たしているかを判定
	            if ($dataArmors[armorId].tona_level <= $tona_saveData.partyLevel) {
					$tona_saveData.armorAppearState[armorId] = 2;

					if (showMessage) {
						$tona_resultAction.push([$tona_ActionType_SoundItem2]);
						$tona_resultAction.push([$tona_ActionType_Message, "防具屋に『" + $dataArmors[armorId].name + "』が追加されました！"]);
					}
				}
			}
		}
	}

	// 道具解禁
	for (var i = 0; i < $tona_shopItemList.length; i++) {
		var itemId = $tona_shopItemList[i];

		// レベルが設定されている道具について
		if ($dataItems[itemId].tona_level > 0) {

			// まだ解禁していない道具の場合
			if (!$tona_saveData.itemAppearState[itemId]) {

	            // 条件を満たしているかを判定
	            if ($dataItems[itemId].tona_level <= $tona_saveData.partyLevel) {
					$tona_saveData.itemAppearState[itemId] = 2;

					if (showMessage) {
						$tona_resultAction.push([$tona_ActionType_SoundItem2]);
						$tona_resultAction.push([$tona_ActionType_Message, "道具屋に『" + $dataItems[itemId].name + "』が追加されました！"]);
					}
				}
			}
		}
	}

	// クエスト解禁
	for (var questId = 1; questId < $tona_quest.length; questId++) {
		var quest = $tona_quest[questId];

		// まだ解禁していないクエストの場合
		if (!$tona_saveData.questAppearState[questId]) {

            // 条件を満たしているかを判定
            if (quest.level <= $tona_saveData.partyLevel) {
				$tona_saveData.questAppearState[questId] = 2;

				if (showMessage) {
					$tona_resultAction.push([$tona_ActionType_SoundItem2]);
					$tona_resultAction.push([$tona_ActionType_Message, "クエスト『" + quest.name + "』が追加されました！"]);
				}
			}
		}
	}
}


















