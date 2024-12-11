
// ****************************************************************************************************************************
// Tona_Data
// ----------------------------------------------------------------------------------------------------------------------------

// アクション
var $_tona_Const_ActionType_Message = 1;

// ****************************************************************************************************************************
// データベースを作成する
// ----------------------------------------------------------------------------------------------------------------------------

function _tona_CreateDatabase() {

	$_tona_Name = {};
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
			case -40:	$_tona_Personality[i][p] = 0;
			case -30:	$_tona_Personality[i][p] = 0;
			case -20:	$_tona_Personality[i][p] = 0;
			case -10:	$_tona_Personality[i][p] = 0;
			case   0:	$_tona_Personality[i][p] = 0;
			case  10:	$_tona_Personality[i][p] = 5;
			case  20:	$_tona_Personality[i][p] = 10;
			case  30:	$_tona_Personality[i][p] = 15;
			case  40:	$_tona_Personality[i][p] = 20;
			case  50:	$_tona_Personality[i][p] = 25;
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

	// まほうつかい
	$dataClasses[4].params[2] = [0,5,6,7,8,9,10,10,11,12,13,14,15,16,16,17,18,19,20,21,22];
	$dataClasses[4].params[3] = [0,7,8,9,10,11,12,13,14,15,16,16,17,18,19,20,21,22,23,24,25];
	$dataClasses[4].params[6] = [0,16,18,20,22,23,25,27,29,30,32,34,36,37,39,41,43,44,46,48,50];
	$dataClasses[4].params[5] = [0,7,9,11,13,16,18,20,22,24,27,29,31,33,35,38,40,42,44,46,49];
	$dataClasses[4].params[4] = [0,12,14,16,19,21,23,26,28,30,33,35,37,39,42,44,46,49,51,53,56];
	$dataClasses[4].params[7] = [0,8,12,15,19,23,26,30,34,37,41,45,48,52,56,59,63,67,70,74,78];

	// そうりょ
	$dataClasses[5].params[2] = [0,8,10,12,14,15,17,19,21,22,24,26,28,29,31,33,35,36,38,40,42];
	$dataClasses[5].params[3] = [0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
	$dataClasses[5].params[4] = [0,9,11,13,16,18,20,22,25,27,29,31,34,36,38,40,43,45,47,49,52];
	$dataClasses[5].params[5] = [0,9,12,14,17,20,22,25,27,30,33,35,38,40,43,46,48,51,53,56,59];
	$dataClasses[5].params[6] = [0,8,10,12,14,16,18,19,21,23,25,27,29,31,32,34,36,38,40,42,44];
	$dataClasses[5].params[7] = [0,9,12,15,18,20,23,26,29,31,34,37,40,42,45,48,51,53,56,59,62];

	// 経験値テーブル
	$dataClasses[1].expTable = [0,0,29,87,174,304,499,792,1232,1891,2880,4364,6218,8534,11428,15045,19114,23690,28837,34627,41141,48468,56711,65983,76413,88147,101347,116196,132901,151694,172836,196621,223378,253480,287344,325440,368298,416512,470752,531771,600417,677644,764524,862263,960002,1057741,1155480,1253219,1350958,1448697,1546436,1644175,1741914,1839653,1937392,2035131,2132870,2230609,2328348,2426087,2523826,2621565,2719304,2817043,2914782,3012521,3110260,3207999,3305738,3403477,3501216,3598915,3696694,3794433,3892172,3989911,4087650,4185389,4283128,4380867,4478606,4576345,4674084,4771823,4869562,4967301,5065040,5162779,5260518,5358257,5455996,5553735,5651474,5749213,5846952,5944691,6042430,6140169,6237908,6335647];
	$dataClasses[2].expTable = [0,0,12,36,84,156,264,426,669,1033,1579,2398,3627,5163,7083,9483,12483,16233,20920,26779,34102,42340,51608,62034,73763,86957,101801,118500,137286,158421,182197,208945,239036,272888,310972,353816,402015,456239,517241,585868,663073,749928,847639,945350,1043061,1140772,1238483,1336194,1433905,1531616,1629327,1727038,1824749,1922460,2020171,2117882,2215593,2313304,2411015,2508726,2606437,2704148,2801859,2899570,2997281,3094992,3192703,3290414,3388125,3485836,3583547,3681258,3778969,3876680,3974391,4072102,4169813,4267524,4365235,4462946,4560657,4658368,4756079,4853790,4951501,5049212,5146923,5244634,5342345,5440056,5537767,5635478,5733189,5830900,5928611,6026322,6124033,6221744,6319455,6417166];
	$dataClasses[3].expTable = [0,0,18,54,126,234,396,639,1003,1549,2369,3598,5441,7745,10625,14225,18725,24350,30678,37797,45805,54814,64949,76350,89176,103605,119837,138098,158641,181751,207749,236996,269898,306912,348552,395397,448097,507384,574081,649115,733528,828492,935326,1055514,1190725,1325936,1461147,1596358,1731569,1866780,2001991,2137202,2272413,2407624,2542835,2678046,2813257,2948468,3083679,3218890,3354101,3489312,3624523,3759734,3894945,4030156,4165367,4300578,4435789,4571000,4706211,4841422,4976633,5111844,5247055,5382266,5517477,5652688,5787899,5923110,6058321,6193532,6328743,6463954,6599165,6734376,6869587,7004798,7140009,7275220,7410431,7545642,7680853,7816064,7951275,8086486,8221697,8356908,8492119,8627330];
	$dataClasses[4].expTable = [0,0,15,45,105,195,330,532,835,1290,1973,2997,4533,6453,8853,11853,15603,20290,25563,31495,38169,45676,54121,63622,74310,86334,99861,115078,132197,151456,173121,197494,224913,255758,290458,329495,373412,422818,478399,540927,611271,690408,779436,879592,992268,1119028,1245788,1372548,1499308,1626068,1752828,1879588,2006348,2133108,2259868,2386628,2513388,2640148,2766908,2893668,3020428,3147188,3273948,3400708,3527468,3654228,3780988,3907748,4034508,4161268,4288028,4414788,4541548,4668308,4795068,4921828,5048588,5175348,5302108,5428868,5555628,5682388,5809148,5935908,6062668,6189428,6316188,6442948,6569708,6696468,6823228,6949988,7076748,7203508,7330268,7457028,7583788,7710548,7837308,7964068];
	$dataClasses[5].expTable = [0,0,14,42,98,182,308,497,780,1205,1842,2798,4232,6024,8264,11064,14564,18939,24407,30559,37479,45263,54020,63872,74955,87423,101450,117229,134981,154952,177419,202694,231128,263116,299102,339585,385128,436364,494004,558849,631799,713867,806194,910061,1026912,1143763,1260614,1377465,1494316,1611167,1728018,1844869,1961720,2078571,2195422,2312273,2429124,2545975,2662826,2779677,2896528,3013379,3130230,3247081,3363932,3480783,3597634,3714485,3831336,3948187,4065038,4181889,4298740,4415591,4532442,4649293,4766144,4882995,4999846,5116697,5233548,5350399,5467250,5584101,5700952,5817803,5934654,6051505,6168356,6285207,6402058,6518909,6635760,6752611,6869462,6986313,7103164,7220015,7336866,7453717];
	$dataClasses[6].expTable = [0,0,10,30,70,130,220,355,557,860,1315,1998,3022,4302,5902,7902,10402,13527,17433,22315,27807,33985,40935,48754,57550,67445,78577,91100,105188,121037,138867,158925,181490,206876,235435,267563,303707,344368,390112,441573,499467,564597,637868,720298,813032,905766,998500,1091234,1183968,1276702,1369436,1462170,1554904,1647638,1740372,1833106,1925840,2018574,2111308,2204042,2296776,2389510,2482244,2574978,2667712,2760446,2853180,2945914,3038648,3131382,3224116,3316850,3409584,3502318,3595052,3687786,3780520,3873254,3965988,4058722,4151456,4244190,4336924,4429658,4522392,4615126,4707860,4800594,4893328,4986062,5078796,5171530,5264264,5356998,5449732,5542466,5635200,5727934,5820668,5913402];
	$dataClasses[7].expTable = [0,0,11,33,77,143,242,390,612,946,1447,2198,3324,4732,6492,8692,11442,14879,19175,24545,31258,38810,47306,56863,67614,79709,93316,108623,125844,145217,167012,191531,219114,250145,285055,324329,368511,418216,474134,537042,607813,687430,776998,877762,991121,1104480,1217839,1331198,1444557,1557916,1671275,1784634,1897993,2011352,2124711,2238070,2351429,2464788,2578147,2691506,2804865,2918224,3031583,3144942,3258301,3371660,3485019,3598378,3711737,3825096,3938455,4051814,4165173,4278532,4391891,4505250,4618609,4731968,4845327,4958686,5072045,5185404,5298763,5412122,5525481,5638840,5752199,5865558,5978917,6092276,6205635,6318994,6432353,6545712,6659071,6772430,6885789,6999148,7112507,7225866];
	$dataClasses[8].expTable = [0,0,20,60,140,260,440,710,1115,1722,2633,3999,6047,8607,11807,15807,20807,27057,34869,43657,53543,64664,77175,91250,107083,124895,144933,167475,192835,221365,253461,289568,330188,375885,427293,485126,550188,623383,705726,798362,902577,1019818,1151714,1300096,1448478,1596860,1745242,1893624,2042006,2190388,2338770,2487152,2635534,2783916,2932298,3080680,3229062,3377444,3525826,3674208,3822590,3970972,4119354,4267736,4416118,4564500,4712882,4861264,5009646,5158028,5306410,5454792,5603174,5751556,5899938,6048320,6196702,6345084,6493466,6641848,6790230,6938612,7086994,7235376,7383758,7532140,7680522,7828904,7977286,8125668,8274050,8422432,8570814,8719196,8867578,9015960,9164342,9312724,9461106,9609488];
	$dataClasses[9].expTable = [0,0,13,39,78,136,223,353,548,840,1278,1935,2920,4397,6243,8550,11433,15036,19539,25167,32202,40116,49019,59034,70300,82974,97232,113272,131317,151617,174454,200145,229047,261561,298139,339289,385582,437661,496249,562160,636309,719726,813570,907414,1001258,1095102,1188946,1282790,1376634,1470478,1564322,1658166,1752010,1845854,1939698,2033542,2127386,2221230,2315074,2408918,2502762,2596606,2690450,2784294,2878138,2971982,3065826,3159670,3253514,3347358,3441202,3535046,3628890,3722734,3816578,3910422,4004266,4098110,4191954,4285798,4379642,4473486,4567330,4661174,4755018,4848862,4942706,5036550,5130394,5224238,5318082,5411926,5505770,5599614,5693458,5787302,5881146,5974990,6068834,6162678];
	$dataClasses[10].expTable = [0,0,20,60,140,260,440,710,1115,1722,2633,3999,6047,8607,11807,15807,20807,27057,34869,43657,53543,64664,77175,91250,107083,124895,144933,167475,192835,221365,253461,289568,330188,375885,427293,485126,550188,623383,705726,798362,902577,1019818,1151714,1300096,1448478,1596860,1745242,1893624,2042006,2190388,2338770,2487152,2635534,2783916,2932298,3080680,3229062,3377444,3525826,3674208,3822590,3970972,4119354,4267736,4416118,4564500,4712882,4861264,5009646,5158028,5306410,5454792,5603174,5751556,5899938,6048320,6196702,6345084,6493466,6641848,6790230,6938612,7086994,7235376,7383758,7532140,7680522,7828904,7977286,8125668,8274050,8422432,8570814,8719196,8867578,9015960,9164342,9312724,9461106,9609488];
}












