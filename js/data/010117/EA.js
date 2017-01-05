//date: 010417
function getObj() {
	var paths = [
		{
			desc: 'I-605 S',
			len: 36878,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0365449, lng:-118.02412},
				{lat:34.0412736, lng:-118.0599058},
				{lat:34.0425845, lng:-118.0631378},
				{lat:34.0739959, lng:-118.0729548},
				{lat:34.0726167, lng:-118.0732421},
				{lat:34.0695498, lng:-118.1492911},
				{lat:34.0696427, lng:-118.150266},
				{lat:34.0696153, lng:-118.1517271},
				{lat:34.1240392, lng:-118.1537235},
				{lat:34.124037, lng:-118.1543107},
				{lat:34.1389889, lng:-118.1541113},
				{lat:34.1532451, lng:-118.1565715},
				{lat:34.1588408, lng:-118.1584947},
				{lat:34.1621295, lng:-118.1579265},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.1579727, lng:-118.1633984},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'I-210 W',
			len: 25127,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1520362, lng:-118.1436111},
				{lat:34.1522443, lng:-118.1461941},
				{lat:34.1588408, lng:-118.1584947},
				{lat:34.1621295, lng:-118.1579265},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.1579727, lng:-118.1633984},
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
			desc: 'I-10 W',
			len: 31748,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0695498, lng:-118.1492911},
				{lat:34.0696427, lng:-118.150266},
				{lat:34.0696153, lng:-118.1517271},
				{lat:34.1240392, lng:-118.1537235},
				{lat:34.124037, lng:-118.1543107},
				{lat:34.1389889, lng:-118.1541113},
				{lat:34.1532451, lng:-118.1565715},
				{lat:34.1588408, lng:-118.1584947},
				{lat:34.1621295, lng:-118.1579265},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.1579727, lng:-118.1633984},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 27.7, pathId:0},
				{duration: 30.3, pathId:1},
				{duration: 36.7, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 26.9, pathId:0},
				{duration: 30.2, pathId:1},
				{duration: 36.6, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 26.7, pathId:0},
				{duration: 30.9, pathId:1},
				{duration: 39.5, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 26.4, pathId:0},
				{duration: 30.6, pathId:1},
				{duration: 44.1, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 26.2, pathId:0},
				{duration: 29.1, pathId:1},
				{duration: 38.5, pathId:3},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 25.8, pathId:0},
				{duration: 28.4, pathId:1},
				{duration: 38.4, pathId:3},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 25.7, pathId:0},
				{duration: 28.1, pathId:1},
				{duration: 38.2, pathId:3},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 25.0, pathId:0},
				{duration: 27.3, pathId:1},
				{duration: 40.2, pathId:2},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 24.7, pathId:0},
				{duration: 27.3, pathId:1},
				{duration: 40.6, pathId:2},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 24.4, pathId:0},
				{duration: 27.1, pathId:1},
				{duration: 39.9, pathId:2},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 24.6, pathId:0},
				{duration: 27.5, pathId:1},
				{duration: 38.6, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 24.3, pathId:0},
				{duration: 27.4, pathId:1},
				{duration: 37.8, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 25.3, pathId:0},
				{duration: 27.4, pathId:1},
				{duration: 37.5, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 24.9, pathId:0},
				{duration: 27.0, pathId:1},
				{duration: 36.5, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 25.0, pathId:0},
				{duration: 27.2, pathId:1},
				{duration: 37.5, pathId:2},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 25.1, pathId:0},
				{duration: 27.4, pathId:1},
				{duration: 36.7, pathId:2},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 25.3, pathId:0},
				{duration: 27.2, pathId:1},
				{duration: 36.9, pathId:2},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 25.4, pathId:0},
				{duration: 27.8, pathId:1},
				{duration: 37.1, pathId:2},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 24.1, pathId:0},
				{duration: 26.6, pathId:1},
				{duration: 36.5, pathId:2},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 24.1, pathId:0},
				{duration: 26.6, pathId:1},
				{duration: 36.5, pathId:2},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 23.8, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 35.3, pathId:2},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 23.9, pathId:0},
				{duration: 26.4, pathId:1},
				{duration: 35.6, pathId:2},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 23.9, pathId:0},
				{duration: 28.0, pathId:1},
				{duration: 35.2, pathId:2},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 23.8, pathId:0},
				{duration: 30.2, pathId:1},
				{duration: 35.3, pathId:2},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 23.8, pathId:0},
				{duration: 26.7, pathId:1},
				{duration: 34.5, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 23.4, pathId:0},
				{duration: 26.1, pathId:1},
				{duration: 33.7, pathId:2},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 26.1, pathId:1},
				{duration: 33.7, pathId:2},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 25.8, pathId:1},
				{duration: 33.4, pathId:2},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 22.4, pathId:0},
				{duration: 25.3, pathId:1},
				{duration: 33.3, pathId:2},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 25.5, pathId:1},
				{duration: 33.0, pathId:2},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 25.5, pathId:1},
				{duration: 32.6, pathId:2},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 22.4, pathId:0},
				{duration: 25.4, pathId:1},
				{duration: 32.7, pathId:2},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 22.2, pathId:0},
				{duration: 25.4, pathId:1},
				{duration: 33.2, pathId:2},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 22.2, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 32.8, pathId:2},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 22.2, pathId:0},
				{duration: 25.2, pathId:1},
				{duration: 33.0, pathId:2},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 25.7, pathId:1},
				{duration: 33.1, pathId:2},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 25.9, pathId:1},
				{duration: 33.0, pathId:2},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 22.7, pathId:0},
				{duration: 25.6, pathId:1},
				{duration: 32.9, pathId:2},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 22.5, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 33.7, pathId:2},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 22.4, pathId:0},
				{duration: 25.5, pathId:1},
				{duration: 33.1, pathId:2},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 22.7, pathId:0},
				{duration: 25.4, pathId:1},
				{duration: 32.9, pathId:2},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 22.3, pathId:0},
				{duration: 25.6, pathId:1},
				{duration: 32.7, pathId:2},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 25.8, pathId:1},
				{duration: 33.1, pathId:2},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 26.4, pathId:1},
				{duration: 33.4, pathId:2},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 26.4, pathId:1},
				{duration: 33.7, pathId:2},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 22.5, pathId:0},
				{duration: 26.1, pathId:1},
				{duration: 33.5, pathId:2},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 23.0, pathId:0},
				{duration: 26.4, pathId:1},
				{duration: 33.0, pathId:2},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 26.3, pathId:1},
				{duration: 33.0, pathId:2},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 22.5, pathId:0},
				{duration: 25.5, pathId:1},
				{duration: 33.5, pathId:2},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 22.4, pathId:0},
				{duration: 25.2, pathId:1},
				{duration: 33.2, pathId:2},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 22.4, pathId:0},
				{duration: 25.4, pathId:1},
				{duration: 33.5, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 22.3, pathId:0},
				{duration: 25.6, pathId:1},
				{duration: 34.0, pathId:2},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 22.3, pathId:0},
				{duration: 25.6, pathId:1},
				{duration: 33.3, pathId:2},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 25.7, pathId:1},
				{duration: 32.9, pathId:2},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 25.9, pathId:1},
				{duration: 33.3, pathId:2},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 25.9, pathId:1},
				{duration: 34.2, pathId:2},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 23.2, pathId:0},
				{duration: 26.4, pathId:1},
				{duration: 34.5, pathId:2},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 23.4, pathId:0},
				{duration: 26.5, pathId:1},
				{duration: 34.2, pathId:2},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 23.2, pathId:0},
				{duration: 26.4, pathId:1},
				{duration: 33.7, pathId:2},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 23.8, pathId:0},
				{duration: 26.1, pathId:4},
				{duration: 33.5, pathId:2},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 26.0, pathId:4},
				{duration: 34.3, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 23.1, pathId:0},
				{duration: 26.7, pathId:1},
				{duration: 33.9, pathId:2},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 23.0, pathId:0},
				{duration: 26.3, pathId:1},
				{duration: 34.0, pathId:2},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 34.4, pathId:2},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 23.1, pathId:0},
				{duration: 26.5, pathId:1},
				{duration: 34.4, pathId:2},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 22.7, pathId:0},
				{duration: 25.9, pathId:1},
				{duration: 34.3, pathId:2},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 25.9, pathId:1},
				{duration: 35.1, pathId:2},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 23.2, pathId:0},
				{duration: 26.7, pathId:1},
				{duration: 34.8, pathId:2},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 23.2, pathId:0},
				{duration: 26.7, pathId:1},
				{duration: 34.8, pathId:2},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 27.0, pathId:1},
				{duration: 34.7, pathId:2},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 34.5, pathId:2},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 23.8, pathId:0},
				{duration: 26.7, pathId:1},
				{duration: 34.6, pathId:2},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 26.6, pathId:1},
				{duration: 35.0, pathId:2},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 24.0, pathId:0},
				{duration: 27.1, pathId:1},
				{duration: 34.5, pathId:2},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 24.8, pathId:0},
				{duration: 27.9, pathId:1},
				{duration: 35.1, pathId:2},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 25.0, pathId:0},
				{duration: 28.1, pathId:1},
				{duration: 35.9, pathId:2},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 24.7, pathId:0},
				{duration: 27.0, pathId:1},
				{duration: 36.0, pathId:2},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 24.4, pathId:0},
				{duration: 27.0, pathId:1},
				{duration: 36.1, pathId:2},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 24.4, pathId:0},
				{duration: 26.9, pathId:1},
				{duration: 35.8, pathId:2},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 24.1, pathId:0},
				{duration: 26.6, pathId:1},
				{duration: 36.4, pathId:2},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 24.4, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 37.1, pathId:2},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 23.9, pathId:0},
				{duration: 26.4, pathId:1},
				{duration: 36.7, pathId:2},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 23.9, pathId:0},
				{duration: 26.4, pathId:1},
				{duration: 35.8, pathId:2},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 24.0, pathId:0},
				{duration: 26.4, pathId:1},
				{duration: 36.9, pathId:2},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 24.1, pathId:0},
				{duration: 26.5, pathId:1},
				{duration: 35.8, pathId:2},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 23.7, pathId:0},
				{duration: 26.4, pathId:1},
				{duration: 35.9, pathId:2},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 23.8, pathId:0},
				{duration: 26.5, pathId:1},
				{duration: 35.2, pathId:2},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 26.3, pathId:1},
				{duration: 35.2, pathId:2},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 23.4, pathId:0},
				{duration: 26.1, pathId:1},
				{duration: 35.0, pathId:2},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 23.8, pathId:0},
				{duration: 26.1, pathId:1},
				{duration: 35.6, pathId:2},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 24.2, pathId:0},
				{duration: 26.3, pathId:1},
				{duration: 34.5, pathId:2},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 23.9, pathId:0},
				{duration: 26.1, pathId:1},
				{duration: 34.3, pathId:2},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 23.7, pathId:0},
				{duration: 25.9, pathId:1},
				{duration: 35.3, pathId:2},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 26.1, pathId:1},
				{duration: 35.5, pathId:2},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 26.1, pathId:1},
				{duration: 35.4, pathId:2},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 26.0, pathId:1},
				{duration: 35.2, pathId:2},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 23.4, pathId:0},
				{duration: 25.9, pathId:1},
				{duration: 34.8, pathId:2},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 25.7, pathId:1},
				{duration: 34.8, pathId:2},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 23.4, pathId:0},
				{duration: 26.2, pathId:1},
				{duration: 34.6, pathId:2},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 24.1, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 34.7, pathId:2},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 23.1, pathId:0},
				{duration: 25.6, pathId:1},
				{duration: 35.1, pathId:2},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 25.8, pathId:1},
				{duration: 34.5, pathId:2},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 26.0, pathId:1},
				{duration: 34.9, pathId:2},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 25.9, pathId:1},
				{duration: 34.8, pathId:2},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 26.0, pathId:1},
				{duration: 34.7, pathId:2},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 25.9, pathId:1},
				{duration: 33.8, pathId:2},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 23.0, pathId:0},
				{duration: 26.0, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 23.0, pathId:0},
				{duration: 26.0, pathId:1},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 23.0, pathId:0},
				{duration: 25.9, pathId:1},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 25.2, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 25.0, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 25.8, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 23.0, pathId:0},
				{duration: 25.9, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 23.0, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 26.1, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 23.4, pathId:0},
				{duration: 26.5, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 23.6, pathId: 0},
				{duration: 26.5, pathId: 1},
				{duration: 35.0, pathId: 2},
				{duration: 38.4, pathId: 3},
				{duration: 26.1, pathId: 4},
			]
		}
	];

	return {
		O: 'E',
		D: 'A',
		minDuration: 22.2,
		maxDuration: 44.1,
		paths: paths,
		data: data
	}
};