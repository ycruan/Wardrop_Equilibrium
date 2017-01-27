//date: 012617
function getObj() {
	var paths = [
		{
			desc: 'I-210 E',
			len: 7424,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1516336, lng:-118.1382962},
				{lat:34.1512964, lng:-118.134001},
				{lat:34.1512574, lng:-118.1325064},
				{lat:34.1406832, lng:-118.1323725},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'W Del Mar Blvd',
			len: 6756,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1447409, lng:-118.1602664},
				{lat:34.1446706, lng:-118.1559374},
				{lat:34.1407442, lng:-118.155908},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Cordova St',
			len: 6761,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1494834, lng:-118.1459641},
				{lat:34.1422703, lng:-118.1458956},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 E',
			len: 7637,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1517638, lng:-118.1263372},
				{lat:34.151771, lng:-118.1224831},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Green St',
			len: 6715,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1495323, lng:-118.1414659},
				{lat:34.1445623, lng:-118.1414546},
				{lat:34.144621, lng:-118.122885},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 6833,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1495323, lng:-118.1414659},
				{lat:34.140383, lng:-118.141367},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'W Del Mar Blvd',
			len: 6774,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1496447, lng:-118.1564016},
				{lat:34.1407442, lng:-118.155908},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 E',
			len: 7397,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1516336, lng:-118.1382962},
				{lat:34.1512964, lng:-118.134001},
				{lat:34.1512661, lng:-118.1320423},
				{lat:34.1513054, lng:-118.1280972},
				{lat:34.1409536, lng:-118.1280159},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 6814,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1457732, lng:-118.1606984},
				{lat:34.1457518, lng:-118.1559385},
				{lat:34.1446706, lng:-118.1559374},
				{lat:34.14452740000001, lng:-118.1460202},
				{lat:34.1404332, lng:-118.1459003},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Cordova St',
			len: 6776,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1495323, lng:-118.1414659},
				{lat:34.1421134, lng:-118.1413756},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 E',
			len: 7309,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1516336, lng:-118.1382962},
				{lat:34.1512964, lng:-118.134001},
				{lat:34.1512661, lng:-118.1320423},
				{lat:34.1513054, lng:-118.1280972},
				{lat:34.142919, lng:-118.1280232},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Walnut St',
			len: 6807,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1495808, lng:-118.1324143},
				{lat:34.1406832, lng:-118.1323725},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 E',
			len: 7341,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1516336, lng:-118.1382962},
				{lat:34.1512964, lng:-118.134001},
				{lat:34.1512661, lng:-118.1320423},
				{lat:34.1513054, lng:-118.1280972},
				{lat:34.144583, lng:-118.128031},
				{lat:34.144621, lng:-118.122885},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 6831,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1494834, lng:-118.1459641},
				{lat:34.1404332, lng:-118.1459003},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Corson St',
			len: 6943,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1496535, lng:-118.1535906},
				{lat:34.1512557, lng:-118.1457319},
				{lat:34.1512661, lng:-118.1320423},
				{lat:34.1513054, lng:-118.1280972},
				{lat:34.144583, lng:-118.128031},
				{lat:34.144621, lng:-118.122885},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 E',
			len: 7625,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1517638, lng:-118.1263372},
				{lat:34.151771, lng:-118.1224831},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 6814,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1496376, lng:-118.1505871},
				{lat:34.1406106, lng:-118.1504283},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 7185,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1457732, lng:-118.1606984},
				{lat:34.1457518, lng:-118.1559385},
				{lat:34.1407442, lng:-118.155908},
				{lat:34.1407491, lng:-118.154104},
				{lat:34.1424063, lng:-118.1540972},
				{lat:34.1424275, lng:-118.150434},
				{lat:34.1406106, lng:-118.1504283},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 19.3, pathId:2},
				{duration: 18.8, pathId:3},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 17.6, pathId:3},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 17.6, pathId:4},
				{duration: 18.9, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 17.8, pathId:4},
				{duration: 18.8, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 17.6, pathId:4},
				{duration: 18.2, pathId:2},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 17.6, pathId:4},
				{duration: 19.5, pathId:2},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 17.7, pathId:4},
				{duration: 18.9, pathId:2},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 17.6, pathId:4},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 18.3, pathId:5},
				{duration: 20.9, pathId:2},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 17.7, pathId:5},
				{duration: 19.7, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 16.5, pathId:6},
				{duration: 20.3, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 17.1, pathId:7},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 17.5, pathId:7},
				{duration: 20.3, pathId:8},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 17.4, pathId:7},
				{duration: 17.8, pathId:5},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 17.3, pathId:5},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 16.9, pathId:9},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 16.7, pathId:9},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 16.8, pathId:9},
				{duration: 21.4, pathId:2},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 16.6, pathId:9},
				{duration: 21.2, pathId:2},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 16.0, pathId:9},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 17.3, pathId:9},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 17.2, pathId:9},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 16.4, pathId:7},
				{duration: 17.3, pathId:9},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 17.5, pathId:10},
				{duration: 18.0, pathId:9},
				{duration: 19.1, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 17.5, pathId:11},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 17.5, pathId:11},
				{duration: 17.4, pathId:9},
				{duration: 18.7, pathId:2},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 16.8, pathId:9},
				{duration: 18.6, pathId:2},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 16.8, pathId:9},
				{duration: 19.1, pathId:2},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 15.9, pathId:9},
				{duration: 18.2, pathId:2},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 15.5, pathId:9},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 15.6, pathId:9},
				{duration: 18.5, pathId:2},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 16.9, pathId:9},
				{duration: 19.7, pathId:2},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 15.8, pathId:9},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 15.9, pathId:7},
				{duration: 16.7, pathId:9},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 15.8, pathId:7},
				{duration: 18.4, pathId:2},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 15.3, pathId:7},
				{duration: 15.9, pathId:9},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 16.1, pathId:7},
				{duration: 17.4, pathId:2},
				{duration: 16.4, pathId:9},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 16.1, pathId:9},
				{duration: 17.8, pathId:2},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 15.5, pathId:7},
				{duration: 15.8, pathId:9},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 15.5, pathId:7},
				{duration: 16.0, pathId:9},
				{duration: 17.7, pathId:2},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 15.7, pathId:9},
				{duration: 17.7, pathId:2},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 15.6, pathId:9},
				{duration: 18.0, pathId:2},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 16.2, pathId:9},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 15.8, pathId:10},
				{duration: 15.7, pathId:7},
				{duration: 17.9, pathId:2},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 15.7, pathId:7},
				{duration: 16.4, pathId:9},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 15.5, pathId:7},
				{duration: 17.9, pathId:2},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 15.4, pathId:9},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 15.9, pathId:9},
				{duration: 17.8, pathId:2},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 14.9, pathId:9},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 15.1, pathId:9},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 15.5, pathId:9},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 15.5, pathId:9},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 15.6, pathId:9},
				{duration: 16.7, pathId:10},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 16.6, pathId:9},
				{duration: 18.7, pathId:2},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 15.7, pathId:9},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 15.7, pathId:7},
				{duration: 16.2, pathId:9},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 16.4, pathId:12},
				{duration: 15.3, pathId:9},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 15.5, pathId:9},
				{duration: 18.5, pathId:2},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 16.6, pathId:9},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 16.2, pathId:9},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 17.1, pathId:4},
				{duration: 18.1, pathId:2},
				{duration: 17.3, pathId:9},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 16.2, pathId:7},
				{duration: 16.9, pathId:9},
				{duration: 17.9, pathId:2},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 16.3, pathId:9},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 16.3, pathId:9},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 16.4, pathId:9},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 16.5, pathId:7},
				{duration: 17.2, pathId:9},
				{duration: 18.7, pathId:2},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 16.6, pathId:7},
				{duration: 19.0, pathId:2},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 16.6, pathId:9},
				{duration: 19.1, pathId:2},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 16.3, pathId:7},
				{duration: 17.2, pathId:9},
				{duration: 19.1, pathId:2},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 18.3, pathId:2},
				{duration: 17.6, pathId:9},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 16.8, pathId:7},
				{duration: 18.9, pathId:2},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 17.4, pathId:13},
				{duration: 19.3, pathId:2},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 17.8, pathId:13},
				{duration: 19.6, pathId:2},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 18.0, pathId:2},
				{duration: 17.2, pathId:7},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 18.1, pathId:13},
				{duration: 18.6, pathId:2},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 16.5, pathId:7},
				{duration: 19.1, pathId:2},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 17.0, pathId:9},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 18.0, pathId:9},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 18.0, pathId:13},
				{duration: 17.5, pathId:9},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 16.9, pathId:9},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 17.9, pathId:14},
				{duration: 17.8, pathId:9},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 17.4, pathId:7},
				{duration: 22.8, pathId:2},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 17.7, pathId:4},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 18.0, pathId:4},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 17.8, pathId:9},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 16.8, pathId:7},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 17.0, pathId:7},
				{duration: 17.9, pathId:9},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 16.7, pathId:9},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 16.0, pathId:9},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 15.6, pathId:9},
				{duration: 20.1, pathId:15},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 15.1, pathId:9},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 15.4, pathId:9},
				{duration: 21.4, pathId:2},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 17.2, pathId:9},
				{duration: 19.7, pathId:2},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 16.6, pathId:9},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 15.8, pathId:16},
				{duration: 19.9, pathId:2},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 16.4, pathId:9},
				{duration: 19.6, pathId:2},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 16.3, pathId:9},
				{duration: 18.3, pathId:2},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 16.4, pathId:9},
				{duration: 18.6, pathId:2},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 17.4, pathId:2},
				{duration: 17.2, pathId:14},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 16.9, pathId:9},
				{duration: 16.9, pathId:17},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 15.4, pathId:9},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 15.8, pathId:9},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 15.7, pathId:9},
				{duration: 17.5, pathId:2},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 16.8, pathId:14},
				{duration: 16.5, pathId:9},
				{duration: 18.6, pathId:2},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 14.8, pathId:9},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 16.4, pathId:9},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 16.1, pathId:9},
				{duration: 17.2, pathId:2},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 16.1, pathId:14},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 16.5, pathId:14},
				{duration: 16.3, pathId:9},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 15.9, pathId:9},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 15.6, pathId:9},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 14.7, pathId:9},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 14.7, pathId:9},
				{duration: 17.2, pathId:2},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 16.1, pathId:9},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 15.1, pathId:9},
				{duration: 18.4, pathId:2},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 16.1, pathId:9},
				{duration: 17.5, pathId:2},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 16.2, pathId:9},
				{duration: 17.3, pathId:2},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 16.3, pathId:7},
				{duration: 16.9, pathId:9},
				{duration: 18.3, pathId:2},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 16.1, pathId:7},
				{duration: 16.5, pathId:9},
				{duration: 17.8, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 19.0, pathId: 0},
				{duration: 19.1, pathId: 1},
				{duration: 18.7, pathId: 2},
				{duration: 18.2, pathId: 3},
				{duration: 17.6, pathId: 4},
				{duration: 17.8, pathId: 5},
				{duration: 16.5, pathId: 6},
				{duration: 16.3, pathId: 7},
				{duration: 20.3, pathId: 8},
				{duration: 16.3, pathId: 9},
				{duration: 16.7, pathId: 10},
				{duration: 17.5, pathId: 11},
				{duration: 16.4, pathId: 12},
				{duration: 17.8, pathId: 13},
				{duration: 16.9, pathId: 14},
				{duration: 20.1, pathId: 15},
				{duration: 15.8, pathId: 16},
				{duration: 16.9, pathId: 17},
			]
		}
	];

	return {
		O: 'A',
		D: 'B',
		minDuration: 14.7,
		maxDuration: 22.8,
		paths: paths,
		data: data
	}
};