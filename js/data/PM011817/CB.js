//date: 011817
function getObj() {
	var paths = [
		{
			desc: 'Huntington Dr and E California Blvd',
			len: 8645,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1297752, lng:-118.079442},
				{lat:34.1358393, lng:-118.0807411},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E California Blvd and E Del Mar Blvd',
			len: 8693,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Huntington Dr and E California Blvd',
			len: 8526,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1271133, lng:-118.0910336},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E California Blvd and E Del Mar Blvd',
			len: 8731,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1314031, lng:-118.0607952},
				{lat:34.13245089999999, lng:-118.0608215},
				{lat:34.1320219, lng:-118.0642157},
				{lat:34.1320198, lng:-118.065231},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E California Blvd',
			len: 8088,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1314031, lng:-118.0607952},
				{lat:34.13245089999999, lng:-118.0608215},
				{lat:34.1320219, lng:-118.0642157},
				{lat:34.1320198, lng:-118.065231},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Huntington Dr and E California Blvd',
			len: 8403,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1297752, lng:-118.079442},
				{lat:34.1358393, lng:-118.0807411},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E California Blvd',
			len: 8050,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 17.9, pathId:1},
				{duration: 18.2, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 17.3, pathId:2},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 17.6, pathId:2},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 17.7, pathId:2},
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 17.8, pathId:1},
				{duration: 17.8, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 17.0, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 16.5, pathId:0},
				{duration: 17.1, pathId:2},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 18.7, pathId:2},
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 17.8, pathId:1},
				{duration: 19.7, pathId:2},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 17.8, pathId:1},
				{duration: 17.5, pathId:3},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.3, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 18.1, pathId:1},
				{duration: 18.6, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 18.8, pathId:2},
				{duration: 19.4, pathId:1},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 19.2, pathId:2},
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 17.4, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 18.1, pathId:2},
				{duration: 19.3, pathId:1},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 18.0, pathId:2},
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 18.2, pathId:2},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 18.0, pathId:2},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 17.2, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 18.0, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 18.3, pathId:2},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 17.4, pathId:2},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 17.8, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 19.2, pathId:1},
				{duration: 19.4, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.8, pathId:2},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 18.6, pathId:1},
				{duration: 18.8, pathId:2},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 18.2, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 19.5, pathId:1},
				{duration: 18.1, pathId:4},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 19.4, pathId:1},
				{duration: 17.9, pathId:4},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 17.8, pathId:4},
				{duration: 19.3, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 18.6, pathId:1},
				{duration: 17.4, pathId:4},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 17.7, pathId:4},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 18.1, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 18.3, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 18.2, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 18.5, pathId:2},
				{duration: 19.4, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.3, pathId:2},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 19.2, pathId:2},
				{duration: 20.1, pathId:1},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 19.1, pathId:1},
				{duration: 19.0, pathId:2},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 19.1, pathId:2},
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 18.6, pathId:2},
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 19.5, pathId:2},
				{duration: 21.2, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 18.8, pathId:2},
				{duration: 20.6, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 18.8, pathId:2},
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 18.6, pathId:2},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 17.7, pathId:2},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 17.6, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 16.5, pathId:0},
				{duration: 17.6, pathId:2},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 17.6, pathId:2},
				{duration: 18.1, pathId:1},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 17.8, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 16.5, pathId:0},
				{duration: 17.9, pathId:2},
				{duration: 18.2, pathId:1},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 18.0, pathId:2},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 18.4, pathId:2},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 18.7, pathId:3},
				{duration: 20.0, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 20.4, pathId:2},
				{duration: 20.6, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 18.2, pathId:2},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 18.0, pathId:2},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 17.8, pathId:2},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 18.2, pathId:2},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 18.2, pathId:1},
				{duration: 17.7, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 18.2, pathId:2},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 18.1, pathId:2},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 18.0, pathId:2},
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 18.6, pathId:2},
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 19.1, pathId:2},
				{duration: 20.0, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 18.7, pathId:2},
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 18.0, pathId:2},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 18.5, pathId:5},
				{duration: 20.3, pathId:2},
				{duration: 19.7, pathId:6},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 18.1, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 18.4, pathId:2},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 18.5, pathId:2},
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 19.7, pathId:2},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.6, pathId:3},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 18.8, pathId:2},
				{duration: 19.4, pathId:1},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 19.4, pathId:1},
				{duration: 18.8, pathId:2},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 18.1, pathId:2},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 19.4, pathId:2},
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 18.7, pathId:2},
				{duration: 20.1, pathId:1},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 17.9, pathId:2},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 19.1, pathId:1},
				{duration: 19.4, pathId:2},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 18.9, pathId:1},
				{duration: 19.0, pathId:2},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 17.8, pathId:3},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 18.2, pathId:2},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 18.7, pathId:2},
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 18.5, pathId:2},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 19.4, pathId:1},
				{duration: 19.8, pathId:3},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 20.1, pathId:1},
				{duration: 19.4, pathId:3},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 18.2, pathId:2},
				{duration: 18.7, pathId:1},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 19.1, pathId:2},
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 19.2, pathId:2},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 18.2, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 17.9, pathId:2},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 18.1, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 18.2, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 18.2, pathId:1},
				{duration: 18.5, pathId:2},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:2},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 18.3, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 18.8, pathId:2},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 17.9, pathId:2},
				{duration: 18.2, pathId:1},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 17.9, pathId:1},
				{duration: 17.9, pathId:2},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.4, pathId:2},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 19.1, pathId:3},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 20.3, pathId:2},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 21.3, pathId:1},
				{duration: 21.4, pathId:2},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 20.0, pathId:2},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.7, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.6, pathId:1},
				{duration: 17.9, pathId:2},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 18.5, pathId:1},
				{duration: 18.6, pathId:2},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 17.8, pathId:2},
				{duration: 18.1, pathId:1},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 17.4, pathId:2},
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 17.8, pathId:2},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 17.4, pathId:2},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 18.1, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 18.1, pathId:2},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 18.0, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 17.5, pathId:1},
				{duration: 18.2, pathId:2},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 17.9, pathId:1},
				{duration: 18.4, pathId:2},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.6, pathId:2},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 17.9, pathId:2},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 17.6, pathId: 0},
				{duration: 18.8, pathId: 1},
				{duration: 18.4, pathId: 2},
				{duration: 18.7, pathId: 3},
				{duration: 17.8, pathId: 4},
				{duration: 18.5, pathId: 5},
				{duration: 19.7, pathId: 6},
			]
		}
	];

	return {
		O: 'C',
		D: 'B',
		minDuration: 16.5,
		maxDuration: 21.4,
		paths: paths,
		data: data
	}
};