//date: 012517
function getObj() {
	var paths = [
		{
			desc: 'I-210 E',
			len: 7239,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1496535, lng:-118.1535906},
				{lat:34.1512557, lng:-118.1457319},
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
			len: 6803,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1457732, lng:-118.1606984},
				{lat:34.1457518, lng:-118.1559385},
				{lat:34.1407442, lng:-118.155908},
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
	];

	var data = [
		{
			time: '05:00 AM',
			routes: [
				{duration: 11.5, pathId:0},
				{duration: 14.0, pathId:1},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 11.5, pathId:0},
				{duration: 13.9, pathId:1},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 11.5, pathId:0},
				{duration: 12.9, pathId:2},
				{duration: 13.9, pathId:1},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 11.4, pathId:0},
				{duration: 13.8, pathId:1},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 11.3, pathId:0},
				{duration: 12.8, pathId:2},
				{duration: 14.0, pathId:1},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 11.4, pathId:0},
				{duration: 12.8, pathId:2},
				{duration: 14.0, pathId:1},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 11.4, pathId:0},
				{duration: 12.8, pathId:2},
				{duration: 14.0, pathId:1},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 11.4, pathId:0},
				{duration: 12.9, pathId:2},
				{duration: 14.0, pathId:1},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 11.4, pathId:0},
				{duration: 12.9, pathId:2},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 11.4, pathId:0},
				{duration: 12.9, pathId:2},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 11.5, pathId:0},
				{duration: 12.8, pathId:2},
				{duration: 14.3, pathId:1},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 11.5, pathId:0},
				{duration: 12.8, pathId:2},
				{duration: 14.3, pathId:1},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 11.5, pathId:0},
				{duration: 12.8, pathId:2},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 11.5, pathId:0},
				{duration: 12.9, pathId:2},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 11.5, pathId:0},
				{duration: 12.9, pathId:2},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 13.0, pathId:2},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 13.0, pathId:2},
				{duration: 14.9, pathId:1},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 13.0, pathId:2},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 11.6, pathId:0},
				{duration: 13.0, pathId:2},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 13.2, pathId:2},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 13.2, pathId:2},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 13.3, pathId:2},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 13.4, pathId:2},
				{duration: 14.6, pathId:1},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 13.3, pathId:2},
				{duration: 14.6, pathId:1},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 13.4, pathId:2},
				{duration: 14.5, pathId:1},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 13.4, pathId:2},
				{duration: 14.4, pathId:1},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 11.6, pathId:0},
				{duration: 13.2, pathId:2},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 11.6, pathId:0},
				{duration: 13.2, pathId:2},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 11.6, pathId:0},
				{duration: 13.2, pathId:2},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 11.6, pathId:0},
				{duration: 13.3, pathId:2},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 13.3, pathId:2},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 13.3, pathId:2},
				{duration: 14.3, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 13.4, pathId:2},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 13.6, pathId:2},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 13.6, pathId:2},
				{duration: 14.4, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 14.0, pathId:2},
				{duration: 14.4, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 14.4, pathId:1},
				{duration: 14.1, pathId:2},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 14.3, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 14.4, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 13.7, pathId:2},
				{duration: 14.5, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 13.9, pathId:2},
				{duration: 14.5, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 14.5, pathId:1},
				{duration: 14.2, pathId:2},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 14.2, pathId:2},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 14.4, pathId:2},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 14.5, pathId:2},
				{duration: 14.9, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 14.5, pathId:2},
				{duration: 14.9, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 14.7, pathId:2},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 14.9, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 14.2, pathId:2},
				{duration: 14.9, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 14.2, pathId:2},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 14.0, pathId:2},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 15.4, pathId:1},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 14.5, pathId:2},
				{duration: 15.4, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 14.3, pathId:2},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 14.1, pathId:2},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 14.4, pathId:2},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 14.4, pathId:2},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 14.6, pathId:2},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 14.9, pathId:1},
				{duration: 14.9, pathId:2},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 14.4, pathId:2},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 14.3, pathId:2},
				{duration: 15.4, pathId:1},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 13.9, pathId:3},
				{duration: 14.1, pathId:0},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 14.5, pathId:2},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 12.9, pathId:3},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 12.9, pathId:3},
				{duration: 13.7, pathId:0},
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 17.0, pathId:1},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 13.3, pathId:0},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 18.9, pathId:4},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 19.5, pathId:4},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 19.3, pathId:4},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 18.2, pathId:5},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 18.4, pathId:5},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 18.0, pathId:5},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 18.3, pathId:5},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 17.5, pathId:5},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 17.6, pathId:5},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 17.2, pathId:4},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 17.5, pathId:5},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 17.6, pathId:4},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 17.8, pathId:4},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 17.9, pathId:4},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 17.7, pathId:4},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 17.7, pathId:4},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 17.4, pathId:4},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 21.3, pathId:4},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 19.9, pathId:4},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 19.1, pathId:4},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 12.8, pathId: 0},
				{duration: 15.3, pathId: 1},
				{duration: 13.6, pathId: 2},
				{duration: 13.2, pathId: 3},
				{duration: 18.6, pathId: 4},
				{duration: 17.9, pathId: 5},
			]
		}
	];

	return {
		O: 'A',
		D: 'B',
		minDuration: 11.3,
		maxDuration: 21.3,
		paths: paths,
		data: data
	}
};