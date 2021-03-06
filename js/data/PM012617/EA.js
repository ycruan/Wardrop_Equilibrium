//date: 012617
function getObj() {
	var paths = [
		{
			desc: 'I-210 W',
			len: 27210,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'I-210 W',
			len: 25605,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'I-210 W',
			len: 26032,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1142771, lng:-117.9828281},
				{lat:34.1182721, lng:-117.984304},
				{lat:34.1355607, lng:-117.9774705},
				{lat:34.1357256, lng:-117.9816735},
				{lat:34.1355366, lng:-117.9835759},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'I-210 W',
			len: 24942,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'I-210 W',
			len: 25423,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1294805, lng:-118.0016281},
				{lat:34.129492, lng:-118.00381},
				{lat:34.13223079999999, lng:-118.0038271},
				{lat:34.1321219, lng:-118.0008884},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'I-210 W',
			len: 26252,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1142771, lng:-117.9828281},
				{lat:34.1182721, lng:-117.984304},
				{lat:34.1355607, lng:-117.9774705},
				{lat:34.1357256, lng:-117.9816735},
				{lat:34.1355366, lng:-117.9835759},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1491878, lng:-118.1660435},
				{lat:34.1494888, lng:-118.1664969},
				{lat:34.1527743, lng:-118.1677937},
				{lat:34.1534115, lng:-118.1678964},
				{lat:34.1551098, lng:-118.1685474},
				{lat:34.1561843, lng:-118.1676456},
				{lat:34.1590835, lng:-118.1678156},
				{lat:34.1589292, lng:-118.168704},
				{lat:34.1602998, lng:-118.1691704},
				{lat:34.160321, lng:-118.1689301},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 27.5, pathId:0},
				{duration: 28.2, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 27.1, pathId:2},
				{duration: 28.0, pathId:1},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 27.5, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 28.8, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 27.5, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 27.7, pathId:0},
				{duration: 28.1, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 27.8, pathId:0},
				{duration: 27.8, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 27.6, pathId:0},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 28.5, pathId:0},
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 28.4, pathId:0},
				{duration: 28.7, pathId:1},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 28.7, pathId:2},
				{duration: 30.4, pathId:1},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 29.7, pathId:0},
				{duration: 31.7, pathId:1},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 29.6, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 30.5, pathId:0},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 29.3, pathId:1},
				{duration: 30.4, pathId:0},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 30.9, pathId:0},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 30.1, pathId:0},
				{duration: 29.7, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 29.8, pathId:0},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 29.9, pathId:0},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 30.7, pathId:0},
				{duration: 30.0, pathId:1},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 30.9, pathId:0},
				{duration: 30.3, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 30.6, pathId:0},
				{duration: 31.4, pathId:1},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 31.4, pathId:0},
				{duration: 32.3, pathId:1},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 31.4, pathId:0},
				{duration: 32.6, pathId:1},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 31.4, pathId:0},
				{duration: 31.9, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 30.9, pathId:0},
				{duration: 32.4, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 31.7, pathId:0},
				{duration: 32.8, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 32.0, pathId:0},
				{duration: 31.6, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 32.2, pathId:0},
				{duration: 31.3, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 31.7, pathId:0},
				{duration: 32.1, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 32.0, pathId:0},
				{duration: 33.3, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 31.5, pathId:0},
				{duration: 32.0, pathId:1},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 32.7, pathId:0},
				{duration: 31.8, pathId:1},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 31.9, pathId:0},
				{duration: 34.0, pathId:1},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 31.2, pathId:0},
				{duration: 32.4, pathId:3},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 32.2, pathId:0},
				{duration: 32.6, pathId:3},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 32.6, pathId:0},
				{duration: 34.8, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 32.5, pathId:0},
				{duration: 32.6, pathId:1},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 32.6, pathId:0},
				{duration: 32.6, pathId:1},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 32.4, pathId:0},
				{duration: 33.7, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 33.6, pathId:0},
				{duration: 34.1, pathId:1},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 33.6, pathId:0},
				{duration: 33.9, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 32.6, pathId:0},
				{duration: 33.6, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 33.1, pathId:0},
				{duration: 33.9, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 33.4, pathId:0},
				{duration: 33.7, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 33.9, pathId:0},
				{duration: 34.7, pathId:1},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 34.6, pathId:0},
				{duration: 34.1, pathId:1},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 34.4, pathId:0},
				{duration: 33.6, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 34.8, pathId:0},
				{duration: 34.1, pathId:1},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 34.9, pathId:0},
				{duration: 34.8, pathId:4},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 33.7, pathId:5},
				{duration: 35.5, pathId:4},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 35.5, pathId:5},
				{duration: 36.5, pathId:1},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 35.2, pathId:5},
				{duration: 37.6, pathId:1},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 35.2, pathId:5},
				{duration: 36.5, pathId:1},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 35.1, pathId:5},
				{duration: 36.0, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 36.8, pathId:0},
				{duration: 35.4, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 37.4, pathId:0},
				{duration: 39.1, pathId:1},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 35.7, pathId:0},
				{duration: 37.9, pathId:1},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 35.1, pathId:0},
				{duration: 36.1, pathId:1},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 34.9, pathId:0},
				{duration: 35.9, pathId:1},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 36.5, pathId:0},
				{duration: 38.1, pathId:1},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 35.9, pathId:0},
				{duration: 36.7, pathId:1},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 36.1, pathId:0},
				{duration: 35.4, pathId:1},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 35.8, pathId:0},
				{duration: 36.5, pathId:1},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 36.3, pathId:0},
				{duration: 37.5, pathId:1},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 36.1, pathId:0},
				{duration: 38.4, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 37.0, pathId:0},
				{duration: 38.8, pathId:1},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 38.5, pathId:0},
				{duration: 38.9, pathId:4},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 38.1, pathId:0},
				{duration: 39.4, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 38.8, pathId:0},
				{duration: 38.6, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 38.5, pathId:0},
				{duration: 37.8, pathId:1},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 38.4, pathId:0},
				{duration: 38.0, pathId:1},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 38.0, pathId:0},
				{duration: 38.8, pathId:1},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 37.3, pathId:0},
				{duration: 37.9, pathId:1},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 37.3, pathId:0},
				{duration: 37.3, pathId:1},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 36.7, pathId:0},
				{duration: 36.5, pathId:1},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 37.0, pathId:0},
				{duration: 36.4, pathId:1},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 36.5, pathId:0},
				{duration: 36.5, pathId:1},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 36.6, pathId:0},
				{duration: 37.0, pathId:1},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 37.8, pathId:0},
				{duration: 37.6, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 36.7, pathId:0},
				{duration: 37.1, pathId:1},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 38.8, pathId:0},
				{duration: 38.8, pathId:1},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 36.7, pathId:1},
				{duration: 37.8, pathId:0},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 37.9, pathId:0},
				{duration: 37.7, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 37.0, pathId:0},
				{duration: 37.3, pathId:1},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 36.8, pathId:0},
				{duration: 36.9, pathId:1},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 37.1, pathId:0},
				{duration: 36.7, pathId:1},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 36.4, pathId:0},
				{duration: 36.8, pathId:1},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 37.5, pathId:0},
				{duration: 36.5, pathId:1},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 36.6, pathId:0},
				{duration: 39.2, pathId:1},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 37.4, pathId:0},
				{duration: 37.4, pathId:1},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 36.4, pathId:0},
				{duration: 37.7, pathId:1},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 36.2, pathId:0},
				{duration: 38.0, pathId:1},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 35.7, pathId:0},
				{duration: 39.0, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 35.6, pathId:0},
				{duration: 37.7, pathId:1},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 36.2, pathId:0},
				{duration: 37.9, pathId:1},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 37.7, pathId:0},
				{duration: 39.0, pathId:1},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 35.6, pathId:0},
				{duration: 35.0, pathId:1},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 34.5, pathId:0},
				{duration: 34.7, pathId:1},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 33.9, pathId:0},
				{duration: 34.1, pathId:1},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 33.9, pathId:0},
				{duration: 34.1, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 34.2, pathId:0},
				{duration: 33.8, pathId:1},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 34.5, pathId:0},
				{duration: 33.6, pathId:1},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 33.0, pathId:0},
				{duration: 33.3, pathId:1},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 33.1, pathId:0},
				{duration: 33.5, pathId:1},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 32.6, pathId:0},
				{duration: 32.5, pathId:1},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 32.5, pathId:0},
				{duration: 35.2, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 31.7, pathId:0},
				{duration: 32.5, pathId:1},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 31.1, pathId:0},
				{duration: 31.9, pathId:1},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 30.9, pathId:0},
				{duration: 31.5, pathId:1},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 30.6, pathId:0},
				{duration: 30.9, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 29.8, pathId:0},
				{duration: 30.2, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 29.0, pathId:0},
				{duration: 31.7, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 28.6, pathId:0},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 28.7, pathId:0},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 27.9, pathId:0},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 27.4, pathId:0},
				{duration: 28.3, pathId:1},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 27.1, pathId:0},
				{duration: 28.3, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 26.7, pathId:0},
				{duration: 27.9, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 26.1, pathId:0},
				{duration: 27.3, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 33.3, pathId: 0},
				{duration: 33.8, pathId: 1},
				{duration: 27.9, pathId: 2},
				{duration: 32.5, pathId: 3},
				{duration: 36.4, pathId: 4},
				{duration: 34.9, pathId: 5},
			]
		}
	];

	return {
		O: 'E',
		D: 'A',
		minDuration: 26.1,
		maxDuration: 39.4,
		paths: paths,
		data: data
	}
};