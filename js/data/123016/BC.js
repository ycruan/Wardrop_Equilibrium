//date: 010217
function getObj() {
	var paths = [
		{
			desc: 'San Pasqual St and E California Blvd',
			len: 8325,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd',
			len: 8333,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378295, lng:-118.1130643},
				{lat:34.1358717, lng:-118.11307},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 9302,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd and E Colorado Blvd/Historic Rte 66 E',
			len: 9999,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1482891, lng:-118.0506708},
				{lat:34.1473239, lng:-118.0503517},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-210 E',
			len: 10817,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1516532, lng:-118.1229664},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 9601,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378295, lng:-118.1130643},
				{lat:34.1419678, lng:-118.1131253},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd and E California Blvd',
			len: 8958,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.131696, lng:-118.0522276},
				{lat:34.1328969, lng:-118.0511984},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-210 E',
			len: 10783,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.151764, lng:-118.1213142},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 8932,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1358393, lng:-118.0807411},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 8840,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.1407929, lng:-118.0596168},
				{lat:34.1379342, lng:-118.0590513},
				{lat:34.13808119999999, lng:-118.0538652},
				{lat:34.1367357, lng:-118.0542288},
				{lat:34.1366918, lng:-118.0531414},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 9092,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 10406,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1482891, lng:-118.0506708},
				{lat:34.1473239, lng:-118.0503517},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'San Pasqual St and Huntington Dr',
			len: 8648,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd and Huntington Dr',
			len: 8538,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 9216,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1358393, lng:-118.0807411},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd',
			len: 8328,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 10122,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1482891, lng:-118.0506708},
				{lat:34.1473239, lng:-118.0503517},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd',
			len: 8320,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378593, lng:-118.1108255},
				{lat:34.1358712, lng:-118.1106292},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd and E California Blvd',
			len: 8971,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 10098,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.14719110000001, lng:-118.0817092},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.8, pathId:3},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.2, pathId:4},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 20.0, pathId:6},
				{duration: 18.8, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 20.0, pathId:6},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 19.0, pathId:5},
				{duration: 21.5, pathId:7},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 21.0, pathId:8},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 19.0, pathId:5},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 20.9, pathId:9},
				{duration: 19.8, pathId:10},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.7, pathId:11},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 19.6, pathId:12},
				{duration: 20.2, pathId:4},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.4, pathId:13},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 19.8, pathId:10},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.9, pathId:9},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 19.0, pathId:5},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 19.0, pathId:5},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.0, pathId:5},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.9, pathId:9},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 19.8, pathId:2},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 20.0, pathId:14},
				{duration: 18.8, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 19.8, pathId:10},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 19.8, pathId:10},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 19.0, pathId:5},
				{duration: 18.8, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 19.5, pathId:15},
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.6, pathId:16},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 18.2, pathId:18},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 17.6, pathId:19},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 18.2, pathId:18},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 19.8, pathId:10},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 18.2, pathId:18},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.8, pathId:1},
				{duration: 18.2, pathId:18},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.8, pathId:1},
				{duration: 18.2, pathId:18},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.8, pathId:1},
				{duration: 18.2, pathId:18},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.8, pathId:1},
				{duration: 18.2, pathId:18},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 17.4, pathId:17},
				{duration: 18.2, pathId:18},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.2, pathId: 0},
				{duration: 18.8, pathId: 1},
				{duration: 19.8, pathId: 2},
				{duration: 20.8, pathId: 3},
				{duration: 20.2, pathId: 4},
				{duration: 19.0, pathId: 5},
				{duration: 20.0, pathId: 6},
				{duration: 21.5, pathId: 7},
				{duration: 21.0, pathId: 8},
				{duration: 20.9, pathId: 9},
				{duration: 19.8, pathId: 10},
				{duration: 20.7, pathId: 11},
				{duration: 19.6, pathId: 12},
				{duration: 20.4, pathId: 13},
				{duration: 20.0, pathId: 14},
				{duration: 19.5, pathId: 15},
				{duration: 20.6, pathId: 16},
				{duration: 17.4, pathId: 17},
				{duration: 18.2, pathId: 18},
				{duration: 17.6, pathId: 19},
			]
		}
	];

	return {
		O: 'B',
		D: 'C',
		minDuration: 17.4,
		maxDuration: 21.5,
		paths: paths,
		data: data
	}
};