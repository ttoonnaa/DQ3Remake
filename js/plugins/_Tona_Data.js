
// ****************************************************************************************************************************
// データベースを作成する
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_CreateDatabase() {

	$_tona_Name = [];
	$_tona_Name[1] = { name: "ソラ" };
	$_tona_Name[2] = { name: "ロボコ" };
	$_tona_Name[3] = { name: "ミコ" };
	$_tona_Name[4] = { name: "スイセイ" };
	$_tona_Name[5] = { name: "アズキ" };
	$_tona_Name[6] = { name: "メル" };
	$_tona_Name[7] = { name: "アキ" };
	$_tona_Name[8] = { name: "ハアト" };
	$_tona_Name[9] = { name: "フブキ" };
	$_tona_Name[10] = { name: "マツリ" };
	$_tona_Name[11] = { name: "コロネ" };
	$_tona_Name[12] = { name: "オカユ" };
	$_tona_Name[13] = { name: "ミオ" };
	$_tona_Name[14] = { name: "アクア" };
	$_tona_Name[15] = { name: "シオン" };
	$_tona_Name[16] = { name: "アヤメ" };
	$_tona_Name[17] = { name: "チョコ" };
	$_tona_Name[18] = { name: "スバル" };
	$_tona_Name[19] = { name: "ペコラ" };
	$_tona_Name[20] = { name: "マリン" };
	$_tona_Name[21] = { name: "ノエル" };
	$_tona_Name[22] = { name: "フレア" };
	$_tona_Name[23] = { name: "カナタ" };
	$_tona_Name[24] = { name: "トワ" };
	$_tona_Name[25] = { name: "ワタメ" };
	$_tona_Name[26] = { name: "ルーナ" };
	$_tona_Name[27] = { name: "ラミィ" };
	$_tona_Name[28] = { name: "ポルカ" };
	$_tona_Name[29] = { name: "ボタン" };
	$_tona_Name[30] = { name: "ネネ" };
	$_tona_Name[31] = { name: "ラプラス" };
	$_tona_Name[32] = { name: "ルイ" };
	$_tona_Name[33] = { name: "コヨリ" };
	$_tona_Name[34] = { name: "クロエ" };
	$_tona_Name[35] = { name: "イロハ" };

	$_tona_Face = [];
	$_tona_Face[1] = { name: "_Chara001", index: 0 };
	$_tona_Face[2] = { name: "_Chara002", index: 0 };
	$_tona_Face[3] = { name: "_Chara003", index: 0 };
	$_tona_Face[4] = { name: "_Chara004", index: 0 };
	$_tona_Face[5] = { name: "_Chara005", index: 0 };
	$_tona_Face[6] = { name: "_Chara006", index: 0 };
	$_tona_Face[7] = { name: "_Chara007", index: 0 };
	$_tona_Face[8] = { name: "_Chara008", index: 0 };
	$_tona_Face[9] = { name: "_Chara009", index: 0 };
	$_tona_Face[10] = { name: "_Chara010", index: 0 };
	$_tona_Face[11] = { name: "_Chara011", index: 0 };
	$_tona_Face[12] = { name: "_Chara012", index: 0 };
	$_tona_Face[13] = { name: "_Chara013", index: 0 };
	$_tona_Face[14] = { name: "_Chara014", index: 0 };
	$_tona_Face[15] = { name: "_Chara015", index: 0 };
	$_tona_Face[16] = { name: "_Chara016", index: 0 };
	$_tona_Face[17] = { name: "_Chara017", index: 0 };
	$_tona_Face[18] = { name: "_Chara018", index: 0 };

	// [HP、MP、力、守、魔、体、速、運]

	$_tona_Personality = [];
	$_tona_Personality[1] = { name: "あたまでっかち", params: [0,0,-1,1,2,-1,0,-2] };
	$_tona_Personality[2] = { name: "あまえんぼう", params: [0,0,-1,-2,0,-1,0,1] };
	$_tona_Personality[3] = { name: "いくじなし", params: [0,0,-1,-2,2,-1,-2,2] };
	$_tona_Personality[4] = { name: "いっぴきおおかみ", params: [0,0,1,2,1,2,1,-2] };
	$_tona_Personality[5] = { name: "いのちしらず", params: [0,0,1,-3,0,2,2,1] };
	$_tona_Personality[6] = { name: "うっかりもの", params: [0,0,-1,-1,-2,0,2,-2] };
	$_tona_Personality[7] = { name: "おおぐらい", params: [0,0,1,2,-3,1,-3,-2] };
	$_tona_Personality[8] = { name: "おせっかい", params: [0,0,0,0,-2,1,-1,0] };
	$_tona_Personality[9] = { name: "おちょうしもの", params: [0,0,0,0,1,-1,2,1] };
	$_tona_Personality[10] = { name: "おっちょこちょい", params: [0,0,-1,0,-2,-2,2,-1] };
	$_tona_Personality[11] = { name: "がんこもの", params: [0,0,1,2,-3,2,-3,-2] };
	$_tona_Personality[12] = { name: "がんばりや", params: [0,0,1,1,0,1,-1,-2] };
	$_tona_Personality[13] = { name: "きれもの", params: [0,0,0,-1,3,-2,2,-2] };
	$_tona_Personality[14] = { name: "くろうにん", params: [0,0,1,2,-1,2,-2,-2] };
	$_tona_Personality[15] = { name: "ごうけつ", params: [0,0,3,0,-2,0,-2,-2] };
	$_tona_Personality[16] = { name: "さびしがりや", params: [0,0,0,-2,1,-2,-1,1] };
	$_tona_Personality[17] = { name: "しあわせもの", params: [0,0,-1,-1,0,-1,0,2] };
	$_tona_Personality[18] = { name: "しょうじきもの", params: [0,0,0,0,0,0,-1,-1] };
	$_tona_Personality[19] = { name: "ずのうめいせき", params: [0,0,-1,-1,2,0,0,-1] };
	$_tona_Personality[20] = { name: "すばしっこい", params: [0,0,-1,-1,0,-1,2,-2] };
	$_tona_Personality[21] = { name: "セクシーギャル", params: [0,0,1,0,1,1,2,2] };
	$_tona_Personality[22] = { name: "せけんしらず", params: [0,0,0,-2,-2,-1,-1,2] };
	$_tona_Personality[23] = { name: "タフネス", params: [0,0,2,2,-2,3,-1,-2] };
	$_tona_Personality[24] = { name: "ちからじまん", params: [0,0,2,-1,-2,0,-2,-2] };
	$_tona_Personality[25] = { name: "つよき", params: [0,0,2,1,-2,0,-1,-2] };
	$_tona_Personality[26] = { name: "てつじん", params: [0,0,1,3,0,2,-2,-2] };
	$_tona_Personality[27] = { name: "でんこうせっか", params: [0,0,0,-1,0,0,3,0] };
	$_tona_Personality[28] = { name: "なきむし", params: [0,0,-1,-2,1,0,-1,2] };
	$_tona_Personality[29] = { name: "なまけもの", params: [0,0,1,-2,-2,2,-3,1] };
	$_tona_Personality[30] = { name: "ぬけめがない", params: [0,0,-1,1,2,-1,1,0] };
	$_tona_Personality[31] = { name: "ねっけつ", params: [0,0,1,2,-1,1,0,-3] };
	$_tona_Personality[32] = { name: "のんきもの", params: [0,0,0,1,0,1,-2,0] };
	$_tona_Personality[33] = { name: "ひっこみじあん", params: [0,0,1,-2,1,2,-3,-1] };
	$_tona_Personality[34] = { name: "ひねくれもの", params: [0,0,-2,1,1,-2,2,2] };
	$_tona_Personality[35] = { name: "ふつう", params: [0,0,0,0,0,0,0,0] };
	$_tona_Personality[36] = { name: "ブルジョワ", params: [0,0,0,-2,1,-1,-2,3] };
	$_tona_Personality[37] = { name: "へこたれない", params: [0,0,0,-1,-1,2,0,0] };
	$_tona_Personality[38] = { name: "まけずぎらい", params: [0,0,-1,0,-1,1,1,-1] };
	$_tona_Personality[39] = { name: "みえっぱり", params: [0,0,1,1,0,-1,1,-1] };
	$_tona_Personality[40] = { name: "むっつりスケベ", params: [0,0,1,1,1,2,-1,-1] };
	$_tona_Personality[41] = { name: "やさしいひと", params: [0,0,1,1,1,1,-1,-1] };
	$_tona_Personality[42] = { name: "ラッキーパーソン", params: [0,0,0,0,0,0,1,3] };
	$_tona_Personality[43] = { name: "らんぼうもの", params: [0,0,2,1,-3,-1,-1,-2] };
	$_tona_Personality[44] = { name: "ロマンチスト", params: [0,0,0,-1,1,0,1,0] };
	$_tona_Personality[45] = { name: "わがまま", params: [0,0,-1,-1,-1,-1,1,-1] };
	$_tona_Personality[46] = { name: "わんぱく", params: [0,0,1,-2,-2,-2,1,-1] };

	// 性格の偏りを補正する

	for (var i = 1; i <= 46; i++) {
		for (var p = 0; p < 9; p++) {
			switch ($_tona_Personality[i][p]) {
			case -3:	$_tona_Personality[i][p] = -6;
			case -2:	$_tona_Personality[i][p] = -3;
			case -1:	$_tona_Personality[i][p] = 0;
			case  0:	$_tona_Personality[i][p] = 0;
			case  1:	$_tona_Personality[i][p] = 3;
			case  2:	$_tona_Personality[i][p] = 6;
			case  3:	$_tona_Personality[i][p] = 9;
			}
		}
	}

	// クエスト
	_tona_CreateQuestDatabase();

	// エネミー
	_tona_CreateEnemyDatabase();

	// レベルアイテム
	_tona_CreateLevelItemDatabase();

	// ショップ
	_tona_CreateShopDatabase();
}

// ****************************************************************************************************************************
// データベースを作成する：クエスト
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_CreateQuestDatabase() {

    var quests = [];
	var hagureFull = [];

	quests[1] = { name: "アリアハン大陸", level: 2, waves: [], levelResult: 3 };
    quests[1].waves[1] = { mapId: 3, eventNum: 10, level: 1, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };
    quests[1].waves[2] = { mapId: 3, eventNum: 10, level: 2, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };
    quests[1].waves[3] = { mapId: 3, eventNum: 10, level: 2, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Field4" };

	quests[2] = { name: "岬の洞窟", level: 3, waves: [], levelResult: 4 };
    quests[2].waves[1] = { mapId: 4, eventNum: 10, level: 3, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon2" };
    quests[2].waves[2] = { mapId: 4, eventNum: 10, level: 3, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon2" };
    quests[2].waves[3] = { mapId: 4, eventNum: 10, level: 3, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon2" };

	quests[3] = { name: "ナジミの塔", level: 4, waves: [], levelResult: 5 };
    quests[3].waves[1] = { mapId: 3, eventNum: 10, level: 4, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon6" };
    quests[3].waves[2] = { mapId: 3, eventNum: 10, level: 4, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon6" };
    quests[3].waves[3] = { mapId: 3, eventNum: 10, level: 4, maxEnemyNum: 8, hagureRate: 0, hagure: hagureFull, bgmName: "Dungeon6" };

	// レベルから Gold を設定
	for (var questId in quests) {
		var quest = quests[questId];
		for (var waveId = 1; waveId < quest.waves.length; waveId++) {
			var wave = quest.waves[waveId];
			if (wave.gold == null) {
				wave.gold = wave.level * 4;
			}
		}
	}

	$_tona_quest = quests;
}

// ****************************************************************************************************************************
// データベースを作成する：エネミー
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_CreateEnemyDatabase() {

	let enemies = [];

	// リメイク攻略本の順に並べます

	// attr: [メラ, ギラ, イオ, ヒャド, バギ, デイン, 炎, 氷, 物理]
	// regist1: [ザキ, 急所, メガ, バシ, ニフ, MP, おたけび, 転倒]
	// regist2: [攻Ｄ, 防Ｄ, 速Ｄ, 耐Ｄ, マヒ, 眠り, 混乱, 幻惑, 封印]

	enemies[1]   = { name: "", attr: [5,4,3,3,3,2,4,3,3], regist1: [4,4,4,4,3,4,4,4], regist2: [4,4,4,4,4,4,4,4,0] };	// スライム
	enemies[2]   = { name: "", attr: [3,3,3,3,4,3,3,3,3], regist1: [4,4,4,4,3,4,4,0], regist2: [4,4,4,4,4,4,4,4,0] };	// おおがらす
	enemies[3]   = { name: "", attr: [3,3,3,1,3,3,3,1,3], regist1: [4,4,4,4,3,4,4,3], regist2: [4,4,4,4,4,4,4,4,0] };	// 
	enemies[4]   = { name: "", attr: [5,4,3,3,3,3,4,3,3], regist1: [4,4,4,4,3,4,3,4], regist2: [4,4,4,4,4,4,4,4,0] };	// 
	enemies[5]   = { name: "", attr: [3,3,4,3,4,3,3,3,3], regist1: [4,4,4,4,3,4,2,0], regist2: [4,4,4,4,4,4,4,2,4] };	// 
	enemies[6]   = { name: "", attr: [2,2,3,4,3,4,2,4,3], regist1: [4,4,4,4,3,4,3,3], regist2: [4,4,4,4,4,4,4,4,0] };	// 
	enemies[7]   = { name: "", attr: [3,3,3,3,3,2,3,3,3], regist1: [4,4,4,4,3,4,3,4], regist2: [4,4,4,4,3,3,3,4,0] };	// 
	enemies[8]   = { name: "", attr: [2,2,2,2,2,3,2,3,3], regist1: [3,4,4,4,3,4,4,4], regist2: [4,4,4,4,4,4,3,4,4] };	// 
	enemies[9]   = { name: "", attr: [3,3,3,3,4,3,3,3,3], regist1: [4,4,4,4,3,4,2,0], regist2: [4,4,4,4,4,4,4,4,0] };	// 
	enemies[10]  = { name: "", attr: [1,1,1,1,1,2,1,1,3], regist1: [2,3,4,4,0,2,3,0], regist2: [4,4,4,4,3,2,3,4,3] };	// 
	enemies[11]  = { name: "", attr: [3,3,3,1,3,3,3,1,3], regist1: [4,4,4,3,3,4,4,3], regist2: [4,4,3,4,4,2,3,4,4] };	// 

	//enemies[99]  = { name: "", attr: [3,3,3,3,3,3,3,3,3], regist1: [3,3,3,3,3,3,3,3], regist2: [3,3,3,3,3,3,3,3,3] };	// 

	$_tona_enemy = enemies;
}

// ****************************************************************************************************************************
// データベースを作成する：レベル道具
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_CreateLevelItemDatabase() {

	$_tona_levelWeapons = [
		[],
		[111, 112, 41],		// Lv.1		ひのきのぼう、こんぼう、ブロンズナイフ
		[1],	// Lv.2		どうのつるぎ
		[42],	// Lv.3		せいなるナイフ
		[81],	// Lv.4		くさりがま
		[82],	// Lv.5		とげのムチ
		[61],	// Lv.6		まどうしのつえ
		[31],	// Lv.7		てつのやり
		[51],	// Lv.8		てつのつめ
		[3],	// Lv.9		はがねのはりせん
		[2],	// Lv.10	はがねのつるぎ
		[32],	// Lv.11	ホーリーランス
		[21],	// Lv.12	てつのオノ
		[],		// Lv.13	ねむりの杖、まふうじの杖
	];

	$_tona_levelArmors = [
		[],
		[86, 87, 108],		// Lv.1		布の服、たびびとの服、けいこぎ
		[71],	// Lv.2		皮のよろい
		[],
		[72],	// Lv.4		カメのこうら
		[117],	// Lv.5		レザーマント
		[73],	// Lv.6		こうらのよろい
		[74],	// Lv.7		くさりかたびら
		[95],	// Lv.8		きぬのローブ
		[],		// Lv.9		ぶとうぎ
		[114],	// Lv.10	てつのまえかけ
		[111],	// Lv.11	かわのこしまき
		[88],	// Lv.12	みかわしのふく
		[],		// Lv.13	マジカルスカート
		[75],	// Lv.14	てつのよろい
	];

	$_tona_levelShields = [
		[],
		[18],	// Lv.1		おなべのフタ
		[1],	// Lv.2		皮の盾
		[],
		[2],	// Lv.4		うろこの盾
		[],
		[],
		[],
		[3],	// Lv.8		せいどうの盾
		[],
		[],
		[4],	// Lv.11	てつの盾
		[],
		[19],	// Lv.13	シルバートレイ
	];

	$_tona_levelHelmets = [
		[],
		[],
		[41],	// Lv.2		皮のぼうし
		[50],	// Lv.3		ターバン
		[],
		[42],	// lv.5		はねぼうし
		[],
		[43],	// Lv.7		きのぼうし
		[52],	// Lv.8		毛皮のフード
		[],
		[46],	// Lv.10	とんがりぼうし
		[],
		[31],	// Lv.12	てつかぶと
		[44],	// Lv.13	インテリハット
	];
}

// ****************************************************************************************************************************
// データベースを作成する：ショップ
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_CreateShopDatabase() {

	$_tona_shopWeaponList = [
		111, 112, 41, 1, 42, 81, 82, 61, 31, 51,
		3, 2, 32, 21,
	];

	$_tona_shopArmorList = [
		86, 87, 108, 71, 72, 117, 73, 74, 95,
		114, 111, 88, 75,
		18, 1, 2, 3, 4, 19,
		41, 50, 42, 43, 52, 46, 31, 44,
	];

	$_tona_shopItemList = [
		11,
	];
}

// ****************************************************************************************************************************
// データベースを上書きする
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_OverrideDatabase(object) {

    if (false) {}

	// アクター
	//else if (object === $dataActors) {
    //    _tona_OverrideActorDatabase();
    //}
	// エネミー
	else if (object === $dataEnemies) {
        _tona_OverrideEnemyDatabase();
    }
    // クラス
	else if (object === $dataClasses) {
        _tona_OverrideClassDatabase();
    }
    // 武器
	else if (object === $dataWeapons) {
        _tona_OverrideWeaponDatabase();
    }
    // 防具
	else if (object === $dataArmors) {
        _tona_OverrideArmorDatabase();
    }
}

// ****************************************************************************************************************************
// エネミーのデータベースを上書き
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_OverrideEnemyDatabase() {

    var attrRate = [0, 10, 70, 100, 130, 160];
    var statRate = [0, 0, 30, 70, 100, 100];

	for (var i = 1; i < $_tona_enemy.length; i++) {
		var tonaEnemy = $_tona_enemy[i];

		// 守備力を調整する
		$dataEnemies[i].params[3] = Math.floor($dataEnemies[i].params[3] * 2 / 3);

		// 特徴を設定する
		$dataEnemies[i].traits = [];
	    $dataEnemies[i].traits.push({ "code": 31, "dataId":  1, "value": 0 });				// 攻撃持続性：物理
	    $dataEnemies[i].traits.push({ "code": 22, "dataId":  0, "value": 1 });				// 命中率＋１００％

    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  1, "value": attrRate[tonaEnemy.attr[8]] / 100 });		// 物理
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  2, "value": attrRate[tonaEnemy.attr[0]] / 100 });		// メラ
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  3, "value": attrRate[tonaEnemy.attr[1]] / 100 });		// ギラ
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  4, "value": attrRate[tonaEnemy.attr[2]] / 100 });		// イオ
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  5, "value": attrRate[tonaEnemy.attr[3]] / 100 });		// ヒャド
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  6, "value": attrRate[tonaEnemy.attr[4]] / 100 });		// バギ
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  7, "value": attrRate[tonaEnemy.attr[5]] / 100 });		// デイン
    	$dataEnemies[i].traits.push({ "code": 11, "dataId":  9, "value": attrRate[tonaEnemy.attr[6]] / 100 });		// 炎
    	$dataEnemies[i].traits.push({ "code": 11, "dataId": 10, "value": attrRate[tonaEnemy.attr[7]] / 100 });		// 氷
    	$dataEnemies[i].traits.push({ "code": 11, "dataId": 11, "value": attrRate[tonaEnemy.regist1[5]] / 100 });	// MP吸収

	    $dataEnemies[i].traits.push({ "code": 12, "dataId":  2, "value": statRate[tonaEnemy.regist2[0]] / 100 });	// 攻撃力↓
	    $dataEnemies[i].traits.push({ "code": 12, "dataId":  3, "value": statRate[tonaEnemy.regist2[1]] / 100 });	// 防御力↓
	    $dataEnemies[i].traits.push({ "code": 12, "dataId":  6, "value": statRate[tonaEnemy.regist2[2]] / 100 });	// 敏捷性↓

	    $dataEnemies[i].traits.push({ "code": 13, "dataId":  1, "value": statRate[tonaEnemy.regist1[0]] / 100 });	// 戦闘不能
	    $dataEnemies[i].traits.push({ "code": 13, "dataId":  7, "value": statRate[tonaEnemy.regist2[4]] / 100 });	// 麻痺
	    $dataEnemies[i].traits.push({ "code": 13, "dataId":  8, "value": statRate[tonaEnemy.regist2[5]] / 100 });	// ラリホー
	    $dataEnemies[i].traits.push({ "code": 13, "dataId":  9, "value": statRate[tonaEnemy.regist2[6]] / 100 });	// メダパニ
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 10, "value": statRate[tonaEnemy.regist2[7]] / 100 });	// マヌーサ
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 11, "value": statRate[tonaEnemy.regist2[8]] / 100 });	// マホトーン
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 12, "value": statRate[tonaEnemy.regist1[0]] / 100 });	// ザキ
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 13, "value": statRate[tonaEnemy.regist1[1]] / 100 });	// 急所
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 14, "value": statRate[tonaEnemy.regist1[2]] / 100 });	// メガンテ
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 15, "value": statRate[tonaEnemy.regist1[3]] / 100 });	// バシルーラ
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 16, "value": statRate[tonaEnemy.regist1[4]] / 100 });	// ニフラム
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 17, "value": statRate[tonaEnemy.regist1[6]] / 100 });	// おたけび
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 18, "value": statRate[tonaEnemy.regist1[7]] / 100 });	// 転倒
	    $dataEnemies[i].traits.push({ "code": 13, "dataId": 19, "value": statRate[tonaEnemy.regist2[3]] / 100 });	// 呪文耐性ダウン
	}
}

// ****************************************************************************************************************************
// クラスのデータベースを上書き
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_OverrideClassDatabase() {

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
    var attrRate = [0, 10, 70, 100, 130, 160];
    var statRate = [0, 0, 30, 70, 100, 100];

	for (var i = 1; i <= $_tona_Const_ClassCount; i++) {

	    $dataClasses[i].traits.push({ "code": 13, "dataId":  1, "value": statRate[3] / 100 });	// 戦闘不能
	    $dataClasses[i].traits.push({ "code": 13, "dataId":  7, "value": statRate[3] / 100 });	// 麻痺
	    $dataClasses[i].traits.push({ "code": 13, "dataId":  8, "value": statRate[3] / 100 });	// ラリホー
	    $dataClasses[i].traits.push({ "code": 13, "dataId":  9, "value": statRate[3] / 100 });	// メダパニ
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 10, "value": statRate[3] / 100 });	// マヌーサ
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 11, "value": statRate[3] / 100 });	// マホトーン
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 12, "value": statRate[3] / 100 });	// ザキ
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 13, "value": statRate[3] / 100 });	// 急所
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 14, "value": statRate[3] / 100 });	// メガンテ
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 15, "value": statRate[3] / 100 });	// バシルーラ
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 16, "value": statRate[3] / 100 });	// ニフラム
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 17, "value": statRate[3] / 100 });	// おたけび
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 18, "value": statRate[3] / 100 });	// 転倒
	    $dataClasses[i].traits.push({ "code": 13, "dataId": 19, "value": statRate[3] / 100 });	// 呪文耐性ダウン
	}
}

// ****************************************************************************************************************************
// 武器のデータベースを上書き
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_OverrideWeaponDatabase() {

	var cnt = $dataWeapons.length;

	for (var i = 0; i < cnt; i++) {
		var weapon = $dataWeapons[i];
		if (weapon != null) {
			weapon._tona_canEquipClasses = [];

			var equip = weapon.meta._tona_equip;
			if (equip != null) {
				weapon._tona_canEquipClasses = eval(equip);
			}
		}
	}

	// レベルを設定
	for (var level = 1; level < $_tona_levelWeapons.length; level++) {
		var levelWeapons = $_tona_levelWeapons[level];
		for (var i = 0; i < levelWeapons.length; i++) {
			var weaponId = levelWeapons[i];
			$dataWeapons[weaponId].meta.level = level;
		}
	}
}

// ****************************************************************************************************************************
// 防具のデータベースを上書き
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_OverrideArmorDatabase() {

	var cnt = $dataArmors.length;

	for (var i = 0; i < cnt; i++) {
		var armor = $dataArmors[i];
		if (armor != null) {
			armor._tona_canEquipClasses = [];

			var equip = armor.meta._tona_equip;
			if (equip != null) {
				armor._tona_canEquipClasses = eval(equip);
			}
		}
	}

	// レベルを設定
	for (var level = 1; level < $_tona_levelArmors.length; level++) {
		var levelArmors = $_tona_levelArmors[level];
		for (var i = 0; i < levelArmors.length; i++) {
			var armorId = levelArmors[i];
			$dataArmors[armorId].meta.level = level;
		}
	}
	for (var level = 1; level < $_tona_levelShields.length; level++) {
		var levelArmors = $_tona_levelShields[level];
		for (var i = 0; i < levelArmors.length; i++) {
			var armorId = levelArmors[i];
			$dataArmors[armorId].meta.level = level;
		}
	}
	for (var level = 1; level < $_tona_levelHelmets.length; level++) {
		var levelArmors = $_tona_levelHelmets[level];
		for (var i = 0; i < levelArmors.length; i++) {
			var armorId = levelArmors[i];
			$dataArmors[armorId].meta.level = level;
		}
	}
}

// ****************************************************************************************************************************
// セーブデータを構築
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_CreateSaveData() {

    if (typeof($_tona_saveData) === 'undefined') {
        $_tona_saveData = {};
    }

    // パーティー
    if ($_tona_saveData.partyLevel == null) {
        $_tona_saveData.partyLevel = 2;
    }

    // 武器解禁
    if ($_tona_saveData.weaponAppearState == null) {
        $_tona_saveData.weaponAppearState = {};
    }

    // 防具解禁
    if ($_tona_saveData.armorAppearState == null) {
        $_tona_saveData.armorAppearState = {};
    }

    // 道具解禁
    if ($_tona_saveData.itemAppearState == null) {
        $_tona_saveData.itemAppearState = {};
    }

    // クエストクリア
    if ($_tona_saveData.questClearFlag == null) {
        $_tona_saveData.questClearFlag = {};
    }

    // クエスト登場
    if ($_tona_saveData.questAppearState == null) {
        $_tona_saveData.questAppearState = {};
    }
}

// ****************************************************************************************************************************
// Lv 付近のモンスターを探す
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_FindLevelEnemies(level) {

	var enemyIds = [];

	for (var i = 1; i < $dataEnemies.length; i++) {
		var enemy = $dataEnemies[i];
		if (enemy.meta._tona_level != null) {
			if (level - 2 <= enemy.meta._tona_level && enemy.meta._tona_level <= level) {
				enemyIds.push(i);
			}
		}
	}

	return enemyIds;
}


// ****************************************************************************************************************************
// データを更新
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_UpdateData(showMessage) {

	// 武器解禁
	for (let i = 0; i < $_tona_shopWeaponList.length; i++) {
		var weaponId = $_tona_shopWeaponList[i];

		// レベルが設定されている武器について
		if ($dataWeapons[weaponId].meta.level != null) {

			// まだ解禁していない武器の場合
			if (!$_tona_saveData.weaponAppearState[weaponId]) {

	            // 条件を満たしているかを判定
	            if ($dataWeapons[weaponId].meta.level <= $_tona_saveData.partyLevel) {
					$_tona_saveData.weaponAppearState[weaponId] = 2;

					if (showMessage) {
						$_tona_resultAction.push([$_tona_Const_ActionType_SoundItem2]);
						$_tona_resultAction.push([$_tona_Const_ActionType_Message, "武器屋に『" + $dataWeapons[weaponId].name + "』が追加されました！"]);
					}
				}
			}
		}
	}

	// 防具解禁
	for (let i = 0; i < $_tona_shopArmorList.length; i++) {
		var armorId = $_tona_shopArmorList[i];

		// レベルが設定されている防具について
		if ($dataArmors[armorId].meta.level != null) {

			// まだ解禁していない武器の場合
			if (!$_tona_saveData.armorAppearState[armorId]) {

	            // 条件を満たしているかを判定
	            if ($dataArmors[armorId].meta.level <= $_tona_saveData.partyLevel) {
					$_tona_saveData.armorAppearState[armorId] = 2;

					if (showMessage) {
						$_tona_resultAction.push([$_tona_Const_ActionType_SoundItem2]);
						$_tona_resultAction.push([$_tona_Const_ActionType_Message, "防具屋に『" + $dataArmors[armorId].name + "』が追加されました！"]);
					}
				}
			}
		}
	}

	// 道具解禁
	for (let i = 0; i < $_tona_shopItemList.length; i++) {
		var itemId = $_tona_shopItemList[i];

		// レベルが設定されている道具について
		if ($dataItems[itemId].meta.level != null) {

			// まだ解禁していない道具の場合
			if (!$_tona_saveData.itemAppearState[itemId]) {

	            // 条件を満たしているかを判定
	            if ($dataItems[itemId].meta.level <= $_tona_saveData.partyLevel) {
					$_tona_saveData.itemAppearState[itemId] = 2;

					if (showMessage) {
						$_tona_resultAction.push([$_tona_Const_ActionType_SoundItem2]);
						$_tona_resultAction.push([$_tona_Const_ActionType_Message, "道具屋に『" + $dataItems[itemId].name + "』が追加されました！"]);
					}
				}
			}
		}
	}

	// クエスト解禁
	for (let questId = 1; questId < $_tona_quest.length; questId++) {
		var quest = $_tona_quest[questId];

		// まだ解禁していないクエストの場合
		if (!$_tona_saveData.questAppearState[questId]) {

            // 条件を満たしているかを判定
            if (quest.level <= $_tona_saveData.partyLevel) {
				$_tona_saveData.questAppearState[questId] = 2;

				if (showMessage) {
					$_tona_resultAction.push([$_tona_Const_ActionType_SoundItem2]);
					$_tona_resultAction.push([$_tona_Const_ActionType_Message, "クエスト『" + quest.name + "』が追加されました！"]);
				}
			}
		}
	}
}


















