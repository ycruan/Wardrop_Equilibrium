//date: 012617
function getObj() {
	var paths = [
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
			desc: 'I-210 E',
			len: 7321,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
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
			desc: 'E Walnut St',
			len: 6684,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1495886, lng:-118.128066},
				{lat:34.142919, lng:-118.1280232},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
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
	];

	var data = [
		{
			time: '05:00 AM',
			routes: [
				{duration: 11.6, pathId:0},
				{duration: 11.8, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 11.8, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 11.8, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 11.6, pathId:0},
				{duration: 11.8, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 11.8, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 11.8, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.0, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 12.7, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.5, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.5, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 12.5, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 12.5, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 12.5, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 16.4, pathId:2},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 12.5, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.0, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 13.8, pathId:3},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 13.8, pathId:3},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 13.8, pathId:3},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 13.7, pathId:3},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 12.7, pathId:1},
				{duration: 13.7, pathId:3},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 12.5, pathId:1},
				{duration: 13.8, pathId:3},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 12.7, pathId:1},
				{duration: 14.0, pathId:3},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 12.5, pathId:1},
				{duration: 13.8, pathId:3},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 12.7, pathId:1},
				{duration: 14.0, pathId:3},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 14.2, pathId:3},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 14.1, pathId:3},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 13.3, pathId:0},
				{duration: 13.3, pathId:1},
				{duration: 14.1, pathId:3},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 12.5, pathId:1},
				{duration: 14.8, pathId:3},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 13.3, pathId:0},
				{duration: 13.1, pathId:1},
				{duration: 14.5, pathId:3},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 13.3, pathId:1},
				{duration: 14.7, pathId:3},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 13.0, pathId:1},
				{duration: 14.9, pathId:3},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 13.1, pathId:1},
				{duration: 14.7, pathId:3},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 12.9, pathId:1},
				{duration: 14.6, pathId:3},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 12.8, pathId:1},
				{duration: 14.8, pathId:3},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 12.8, pathId:1},
				{duration: 14.7, pathId:3},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 13.4, pathId:0},
				{duration: 13.4, pathId:1},
				{duration: 14.4, pathId:3},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 13.2, pathId:1},
				{duration: 14.9, pathId:3},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 12.7, pathId:1},
				{duration: 15.0, pathId:3},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 12.6, pathId:1},
				{duration: 15.3, pathId:3},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 12.8, pathId:1},
				{duration: 15.2, pathId:3},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 12.9, pathId:1},
				{duration: 15.1, pathId:3},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 13.6, pathId:1},
				{duration: 14.8, pathId:4},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 13.6, pathId:1},
				{duration: 15.6, pathId:3},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 13.4, pathId:1},
				{duration: 15.3, pathId:3},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 13.3, pathId:1},
				{duration: 14.6, pathId:4},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 13.4, pathId:1},
				{duration: 15.6, pathId:3},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 13.3, pathId:1},
				{duration: 15.2, pathId:3},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 13.4, pathId:1},
				{duration: 15.3, pathId:3},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 14.0, pathId:1},
				{duration: 15.0, pathId:3},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 13.2, pathId:1},
				{duration: 15.1, pathId:3},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 13.1, pathId:1},
				{duration: 15.3, pathId:3},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 13.1, pathId:1},
				{duration: 15.7, pathId:3},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 13.3, pathId:1},
				{duration: 14.7, pathId:4},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 13.1, pathId:1},
				{duration: 14.8, pathId:4},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 13.2, pathId:1},
				{duration: 14.7, pathId:4},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 13.7, pathId:1},
				{duration: 15.0, pathId:4},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 14.1, pathId:1},
				{duration: 15.4, pathId:3},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 14.5, pathId:1},
				{duration: 15.2, pathId:3},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 13.9, pathId:1},
				{duration: 14.6, pathId:4},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 13.9, pathId:1},
				{duration: 15.3, pathId:4},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 13.5, pathId:1},
				{duration: 14.8, pathId:4},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 13.6, pathId:1},
				{duration: 14.4, pathId:4},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 13.9, pathId:1},
				{duration: 13.3, pathId:5},
				{duration: 14.5, pathId:4},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 13.9, pathId:1},
				{duration: 15.3, pathId:4},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 13.3, pathId:1},
				{duration: 14.9, pathId:4},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 13.3, pathId:1},
				{duration: 14.8, pathId:4},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 13.5, pathId:1},
				{duration: 15.3, pathId:4},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 13.4, pathId:1},
				{duration: 15.6, pathId:4},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 13.1, pathId:1},
				{duration: 15.4, pathId:4},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 13.5, pathId:1},
				{duration: 15.0, pathId:4},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 14.1, pathId:1},
				{duration: 15.3, pathId:4},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 14.5, pathId:1},
				{duration: 15.3, pathId:4},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 15.4, pathId:1},
				{duration: 15.0, pathId:4},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 15.5, pathId:4},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 15.4, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 17.3, pathId:6},
				{duration: 17.7, pathId:4},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 16.5, pathId:7},
				{duration: 18.1, pathId:8},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 12.1, pathId: 0},
				{duration: 12.8, pathId: 1},
				{duration: 15.8, pathId: 2},
				{duration: 14.7, pathId: 3},
				{duration: 15.1, pathId: 4},
				{duration: 13.3, pathId: 5},
				{duration: 17.3, pathId: 6},
				{duration: 16.5, pathId: 7},
				{duration: 18.1, pathId: 8},
			]
		}
	];

	return {
		O: 'A',
		D: 'B',
		minDuration: 11.6,
		maxDuration: 18.1,
		paths: paths,
		data: data
	}
};