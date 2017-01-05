//date: 010417
function getObj() {
	var paths = [
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
			desc: 'W Del Mar Blvd',
			len: 7473,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1532843, lng:-118.156929},
				{lat:34.1434094, lng:-118.1552765},
				{lat:34.1414783, lng:-118.1559232},
				{lat:34.1407442, lng:-118.155908},
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
			desc: 'I-210 E',
			len: 7657,
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
				{lat:34.1426642, lng:-118.121331},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 E',
			len: 8143,
			pts: [
				{lat:34.160321, lng:-118.1689301},
				{lat:34.1600506, lng:-118.1686433},
				{lat:34.1599496, lng:-118.1690553},
				{lat:34.1589292, lng:-118.168704},
				{lat:34.1590835, lng:-118.1678156},
				{lat:34.1453297, lng:-118.16397},
				{lat:34.1470962, lng:-118.1632231},
				{lat:34.1472979, lng:-118.161522},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1517638, lng:-118.1263372},
				{lat:34.151771, lng:-118.1224831},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.1426642, lng:-118.121331},
				{lat:34.1426314, lng:-118.1228682},
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
			desc: 'I-210 E',
			len: 8111,
			pts: [
				{lat:34.160321, lng:-118.1689301},
				{lat:34.1600506, lng:-118.1686433},
				{lat:34.1599496, lng:-118.1690553},
				{lat:34.1589292, lng:-118.168704},
				{lat:34.1590835, lng:-118.1678156},
				{lat:34.1453297, lng:-118.16397},
				{lat:34.1470962, lng:-118.1632231},
				{lat:34.1472979, lng:-118.161522},
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
			desc: 'I-210 E',
			len: 7634,
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
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1414292, lng:-118.122859},
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
			desc: 'I-210 E',
			len: 7669,
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
				{lat:34.1426642, lng:-118.121331},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 16.6, pathId:2},
				{duration: 17.6, pathId:1},
				{duration: 18.9, pathId:3},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 16.8, pathId:4},
				{duration: 17.9, pathId:1},
				{duration: 16.7, pathId:0},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 16.9, pathId:4},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 16.5, pathId:4},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 17.1, pathId:4},
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 17.5, pathId:5},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 16.7, pathId:4},
				{duration: 17.6, pathId:1},
				{duration: 18.1, pathId:3},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 15.7, pathId:6},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 15.3, pathId:6},
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 15.4, pathId:7},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 16.4, pathId:8},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 15.7, pathId:8},
				{duration: 14.8, pathId:7},
				{duration: 17.1, pathId:3},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 15.2, pathId:8},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 14.8, pathId:8},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 14.4, pathId:8},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 13.8, pathId:8},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 13.1, pathId:9},
				{duration: 17.4, pathId:1},
				{duration: 15.9, pathId:10},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 12.8, pathId:8},
				{duration: 15.7, pathId:3},
				{duration: 17.5, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 13.5, pathId:8},
				{duration: 16.8, pathId:1},
				{duration: 16.9, pathId:3},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 16.3, pathId:1},
				{duration: 17.1, pathId:3},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 13.7, pathId:8},
				{duration: 16.2, pathId:1},
				{duration: 17.3, pathId:3},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 13.6, pathId:8},
				{duration: 16.2, pathId:1},
				{duration: 17.3, pathId:3},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 15.9, pathId:1},
				{duration: 16.3, pathId:3},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 13.8, pathId:8},
				{duration: 15.9, pathId:1},
				{duration: 16.9, pathId:3},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 16.0, pathId:1},
				{duration: 16.4, pathId:3},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 12.6, pathId:8},
				{duration: 15.9, pathId:1},
				{duration: 15.9, pathId:3},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 15.4, pathId:1},
				{duration: 16.3, pathId:3},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 15.8, pathId:1},
				{duration: 16.1, pathId:3},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 12.6, pathId:8},
				{duration: 15.4, pathId:3},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 15.6, pathId:3},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 12.8, pathId:8},
				{duration: 15.6, pathId:1},
				{duration: 15.6, pathId:3},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 15.7, pathId:1},
				{duration: 15.6, pathId:3},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 13.0, pathId:8},
				{duration: 15.7, pathId:1},
				{duration: 15.6, pathId:3},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 13.1, pathId:8},
				{duration: 15.9, pathId:1},
				{duration: 15.8, pathId:3},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 15.6, pathId:3},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 12.7, pathId:8},
				{duration: 15.3, pathId:3},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 13.1, pathId:8},
				{duration: 15.6, pathId:3},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 13.6, pathId:8},
				{duration: 15.7, pathId:1},
				{duration: 16.1, pathId:3},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 13.7, pathId:8},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 13.6, pathId:8},
				{duration: 16.0, pathId:1},
				{duration: 16.0, pathId:3},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 15.1, pathId:3},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 13.1, pathId:8},
				{duration: 15.3, pathId:3},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 13.1, pathId:8},
				{duration: 15.6, pathId:3},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 15.3, pathId:3},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 15.2, pathId:3},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 13.0, pathId:8},
				{duration: 15.1, pathId:3},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 13.4, pathId:8},
				{duration: 15.4, pathId:3},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 12.8, pathId:8},
				{duration: 15.1, pathId:3},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 12.5, pathId:8},
				{duration: 14.6, pathId:3},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 15.2, pathId:3},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 15.4, pathId:3},
				{duration: 15.7, pathId:1},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 15.3, pathId:3},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 15.7, pathId:3},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 13.4, pathId:8},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 13.5, pathId:8},
				{duration: 15.5, pathId:3},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 15.2, pathId:3},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 13.4, pathId:8},
				{duration: 15.4, pathId:3},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 14.9, pathId:3},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 15.2, pathId:3},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 13.0, pathId:8},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 13.0, pathId:8},
				{duration: 15.6, pathId:3},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 15.7, pathId:3},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 13.4, pathId:8},
				{duration: 15.7, pathId:3},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 15.3, pathId:3},
				{duration: 17.3, pathId:1},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 12.8, pathId:8},
				{duration: 15.3, pathId:3},
				{duration: 17.0, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 12.8, pathId:8},
				{duration: 15.3, pathId:3},
				{duration: 17.7, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 13.7, pathId:8},
				{duration: 16.3, pathId:3},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 15.6, pathId:3},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 13.5, pathId:8},
				{duration: 16.0, pathId:3},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 15.7, pathId:3},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 15.8, pathId:3},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 16.0, pathId:3},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 12.7, pathId:8},
				{duration: 15.3, pathId:3},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 12.8, pathId:8},
				{duration: 15.2, pathId:3},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 15.2, pathId:3},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 15.3, pathId:3},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 13.0, pathId:8},
				{duration: 15.4, pathId:3},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 13.8, pathId:8},
				{duration: 16.2, pathId:1},
				{duration: 16.2, pathId:3},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 13.1, pathId:8},
				{duration: 15.5, pathId:3},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 13.1, pathId:8},
				{duration: 15.4, pathId:3},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 12.7, pathId:8},
				{duration: 14.8, pathId:3},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 12.5, pathId:8},
				{duration: 14.7, pathId:3},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 12.6, pathId:8},
				{duration: 14.8, pathId:3},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 12.5, pathId:8},
				{duration: 14.7, pathId:3},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 12.6, pathId:8},
				{duration: 14.8, pathId:3},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 12.6, pathId:8},
				{duration: 14.8, pathId:3},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 15.5, pathId:3},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 12.8, pathId:8},
				{duration: 15.0, pathId:3},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 15.2, pathId:3},
				{duration: 15.7, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 12.6, pathId:8},
				{duration: 14.8, pathId:3},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 16.1, pathId:3},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 13.8, pathId:8},
				{duration: 15.9, pathId:3},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 15.4, pathId:3},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 15.6, pathId:3},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 15.3, pathId:3},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 15.1, pathId:3},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 13.0, pathId:8},
				{duration: 14.9, pathId:3},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 13.0, pathId:8},
				{duration: 14.7, pathId:3},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 15.0, pathId:3},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 15.0, pathId:3},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 13.7, pathId:8},
				{duration: 15.9, pathId:1},
				{duration: 15.9, pathId:3},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 13.7, pathId:8},
				{duration: 15.9, pathId:1},
				{duration: 15.8, pathId:3},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 15.7, pathId:3},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 13.3, pathId:8},
				{duration: 16.0, pathId:3},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 13.5, pathId:8},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 17.0, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 13.1, pathId:8},
				{duration: 16.2, pathId:1},
				{duration: 16.1, pathId:3},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 13.0, pathId:8},
				{duration: 15.8, pathId:3},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 13.1, pathId:8},
				{duration: 15.9, pathId:3},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 13.2, pathId:8},
				{duration: 15.6, pathId:3},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 12.9, pathId:8},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 13.8, pathId:8},
				{duration: 15.6, pathId:1},
				{duration: 16.1, pathId:3},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 13.4, pathId:8},
				{duration: 15.7, pathId:1},
				{duration: 15.8, pathId:3},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 13.8, pathId:8},
				{duration: 15.7, pathId:1},
				{duration: 16.0, pathId:3},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 16.8, pathId: 0},
				{duration: 16.4, pathId: 1},
				{duration: 16.6, pathId: 2},
				{duration: 15.7, pathId: 3},
				{duration: 16.8, pathId: 4},
				{duration: 17.5, pathId: 5},
				{duration: 15.5, pathId: 6},
				{duration: 15.1, pathId: 7},
				{duration: 13.2, pathId: 8},
				{duration: 13.1, pathId: 9},
				{duration: 15.9, pathId: 10},
			]
		}
	];

	return {
		O: 'A',
		D: 'B',
		minDuration: 12.5,
		maxDuration: 18.9,
		paths: paths,
		data: data
	}
};