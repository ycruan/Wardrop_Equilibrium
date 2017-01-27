//date: 012617
function getObj() {
	var paths = [
		{
			desc: 'E California Blvd',
			len: 8055,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358717, lng:-118.11307},
				{lat:34.1378295, lng:-118.1130643},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Del Mar Blvd',
			len: 9013,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1305045, lng:-118.0730895},
				{lat:34.1422731, lng:-118.0732839},
				{lat:34.1414292, lng:-118.122859},
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
			desc: 'Huntington Dr and E Del Mar Blvd',
			len: 9169,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1271133, lng:-118.0910336},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 11344,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.14969749999999, lng:-118.0501737},
				{lat:34.1525409, lng:-118.1167602},
				{lat:34.1528691, lng:-118.1206175},
				{lat:34.1528709, lng:-118.1213202},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'San Pasqual St',
			len: 8001,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358393, lng:-118.0807411},
				{lat:34.1378043, lng:-118.0815129},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Huntington Dr and E California Blvd',
			len: 9653,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1318428, lng:-118.0545846},
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
			desc: 'Huntington Dr and San Pasqual St',
			len: 8523,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1271133, lng:-118.0910336},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
	];

	var data = [
		{
			time: '05:00 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 16.4, pathId:2},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 16.4, pathId:2},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.5, pathId:2},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.6, pathId:2},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.6, pathId:2},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.7, pathId:2},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 14.9, pathId:1},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 14.9, pathId:1},
				{duration: 16.9, pathId:2},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 16.8, pathId:2},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 16.8, pathId:2},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 16.9, pathId:2},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 17.3, pathId:2},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 17.0, pathId:2},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 17.0, pathId:2},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 16.8, pathId:2},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 15.5, pathId:1},
				{duration: 16.8, pathId:2},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 16.7, pathId:2},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.9, pathId:2},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 16.9, pathId:2},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 16.9, pathId:2},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 17.1, pathId:3},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 17.1, pathId:3},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 17.2, pathId:3},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 17.5, pathId:3},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 16.7, pathId:4},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.2, pathId:4},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 16.1, pathId:4},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 15.5, pathId:1},
				{duration: 16.0, pathId:4},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 15.7, pathId:1},
				{duration: 16.3, pathId:4},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 15.7, pathId:1},
				{duration: 16.6, pathId:5},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 17.4, pathId:1},
				{duration: 18.2, pathId:4},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 17.5, pathId:4},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.0, pathId:1},
				{duration: 16.8, pathId:4},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 16.7, pathId:1},
				{duration: 17.5, pathId:4},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 16.7, pathId:1},
				{duration: 17.7, pathId:4},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.9, pathId:4},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 16.5, pathId:1},
				{duration: 17.9, pathId:4},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 17.4, pathId:4},
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 16.2, pathId:1},
				{duration: 17.9, pathId:4},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 18.8, pathId:4},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 17.0, pathId:1},
				{duration: 17.8, pathId:4},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 17.9, pathId:1},
				{duration: 18.0, pathId:4},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 16.6, pathId:1},
				{duration: 17.9, pathId:4},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 16.6, pathId:1},
				{duration: 18.1, pathId:4},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 19.0, pathId:1},
				{duration: 18.8, pathId:4},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 16.9, pathId:1},
				{duration: 18.7, pathId:4},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 16.7, pathId:1},
				{duration: 17.8, pathId:4},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 17.6, pathId:4},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.5, pathId:4},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 19.2, pathId:4},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 17.5, pathId:6},
				{duration: 18.4, pathId:4},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 18.9, pathId:4},
				{duration: 18.8, pathId:7},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 17.7, pathId:8},
				{duration: 18.3, pathId:4},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 18.2, pathId:1},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 18.6, pathId:4},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 17.4, pathId:1},
				{duration: 17.7, pathId:9},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 17.5, pathId:4},
				{duration: 17.5, pathId:1},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 17.8, pathId:1},
				{duration: 18.0, pathId:4},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 16.1, pathId:1},
				{duration: 17.8, pathId:4},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.8, pathId:4},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 18.2, pathId:4},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 19.2, pathId:1},
				{duration: 19.4, pathId:4},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 18.5, pathId:4},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 17.9, pathId:4},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 16.8, pathId:1},
				{duration: 18.1, pathId:4},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 17.7, pathId:4},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 18.6, pathId:4},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.4, pathId:1},
				{duration: 19.2, pathId:4},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 16.9, pathId:1},
				{duration: 18.2, pathId:4},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 16.9, pathId:1},
				{duration: 17.4, pathId:4},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 18.0, pathId:4},
				{duration: 19.3, pathId:1},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 16.5, pathId:1},
				{duration: 17.5, pathId:4},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 16.6, pathId:1},
				{duration: 18.1, pathId:4},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 17.9, pathId:4},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.2, pathId:1},
				{duration: 17.9, pathId:4},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 16.9, pathId:1},
				{duration: 17.5, pathId:4},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 18.3, pathId:4},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 18.3, pathId:1},
				{duration: 18.9, pathId:4},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 16.9, pathId:1},
				{duration: 18.1, pathId:4},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 17.3, pathId:1},
				{duration: 18.9, pathId:4},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 17.4, pathId:1},
				{duration: 16.8, pathId:9},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 16.8, pathId:1},
				{duration: 17.3, pathId:4},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 16.5, pathId:0},
				{duration: 16.9, pathId:1},
				{duration: 17.0, pathId:4},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 16.3, pathId:0},
				{duration: 17.1, pathId:4},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 16.1, pathId: 0},
				{duration: 16.2, pathId: 1},
				{duration: 16.4, pathId: 2},
				{duration: 17.2, pathId: 3},
				{duration: 17.9, pathId: 4},
				{duration: 16.6, pathId: 5},
				{duration: 17.5, pathId: 6},
				{duration: 18.8, pathId: 7},
				{duration: 17.7, pathId: 8},
				{duration: 17.2, pathId: 9},
			]
		}
	];

	return {
		O: 'C',
		D: 'B',
		minDuration: 14.7,
		maxDuration: 19.4,
		paths: paths,
		data: data
	}
};