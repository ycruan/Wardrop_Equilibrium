//date: 010417
function getObj() {
	var paths = [
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
			desc: 'E Del Mar Blvd',
			len: 7059,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1496535, lng:-118.1535906},
				{lat:34.1512557, lng:-118.1457319},
				{lat:34.1512423, lng:-118.141515},
				{lat:34.140383, lng:-118.141367},
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
	];

	var data = [
		{
			time: '06:00 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 12.0, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 12.7, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 16.4, pathId:2},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 16.5, pathId:2},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 12.5, pathId:1},
				{duration: 16.4, pathId:2},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 16.7, pathId:2},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 16.8, pathId:2},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 16.6, pathId:2},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 13.0, pathId:1},
				{duration: 16.8, pathId:2},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 12.8, pathId:1},
				{duration: 16.8, pathId:2},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 12.8, pathId:1},
				{duration: 16.7, pathId:2},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 13.0, pathId:1},
				{duration: 16.8, pathId:2},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 13.1, pathId:1},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 12.8, pathId:1},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 12.9, pathId:1},
				{duration: 16.8, pathId:2},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 13.0, pathId:1},
				{duration: 17.0, pathId:2},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 13.2, pathId:1},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 13.3, pathId:0},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 13.3, pathId:0},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 17.7, pathId:2},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 16.0, pathId:3},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 18.2, pathId:2},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 18.0, pathId:2},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 18.2, pathId:2},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 18.5, pathId:2},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 18.7, pathId:2},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 18.8, pathId:2},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 13.4, pathId:0},
				{duration: 18.2, pathId:2},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 17.9, pathId:2},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 17.9, pathId:2},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 17.7, pathId:2},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 17.9, pathId:2},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 17.9, pathId:4},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 18.0, pathId:2},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 17.8, pathId:2},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 17.3, pathId:2},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 13.4, pathId:0},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 17.5, pathId:2},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 17.7, pathId:2},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 17.3, pathId:2},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 17.2, pathId:2},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 14.8, pathId:3},
				{duration: 17.8, pathId:2},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 17.3, pathId:2},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.1, pathId:3},
				{duration: 17.8, pathId:2},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 18.2, pathId:2},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 12.8, pathId: 0},
				{duration: 12.4, pathId: 1},
				{duration: 16.8, pathId: 2},
				{duration: 15.3, pathId: 3},
				{duration: 17.9, pathId: 4},
			]
		}
	];

	return {
		O: 'A',
		D: 'B',
		minDuration: 11.8,
		maxDuration: 18.8,
		paths: paths,
		data: data
	}
};