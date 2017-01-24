//date: 010517
function getObj() {
	var paths = [
		{
			desc: 'I-210 W',
			len: 28389,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1397875, lng:-118.015949},
				{lat:34.140323, lng:-118.016073},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1481804, lng:-118.0672652},
				{lat:34.1492704, lng:-118.0677218},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1491878, lng:-118.1660435},
				{lat:34.1494888, lng:-118.1664969},
				{lat:34.1527743, lng:-118.1677937},
				{lat:34.1534115, lng:-118.1678964},
				{lat:34.1551098, lng:-118.1685474},
				{lat:34.1557577, lng:-118.1690191},
				{lat:34.1560505, lng:-118.1682415},
				{lat:34.1584921, lng:-118.1690523},
				{lat:34.1585893, lng:-118.1685971},
				{lat:34.1602998, lng:-118.1691704},
				{lat:34.160321, lng:-118.1689301},
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
			len: 25958,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1321257, lng:-118.0007747},
				{lat:34.132186, lng:-118.009447},
				{lat:34.13588, lng:-118.009525},
				{lat:34.1358866, lng:-118.0125674},
				{lat:34.1369487, lng:-118.014148},
				{lat:34.1376068, lng:-118.0141578},
				{lat:34.1380319, lng:-118.017313},
				{lat:34.1401826, lng:-118.0173583},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1481804, lng:-118.0672652},
				{lat:34.1492704, lng:-118.0677218},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'Live Oak Ave and I-210 W',
			len: 26154,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1073959, lng:-118.0307458},
				{lat:34.1400105, lng:-118.0313511},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1481804, lng:-118.0672652},
				{lat:34.1492704, lng:-118.0677218},
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
			len: 27940,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1068188, lng:-117.9628459},
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
			len: 27690,
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
				{lat:34.1470962, lng:-118.1632231},
				{lat:34.1453297, lng:-118.16397},
				{lat:34.1590835, lng:-118.1678156},
				{lat:34.1589292, lng:-118.168704},
				{lat:34.1602998, lng:-118.1691704},
				{lat:34.160321, lng:-118.1689301},
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
			desc: 'I-210 W',
			len: 25907,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1294805, lng:-118.0016281},
				{lat:34.129492, lng:-118.00381},
				{lat:34.13223079999999, lng:-118.0038271},
				{lat:34.1304107, lng:-118.0250459},
				{lat:34.1400882, lng:-118.0248906},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1481804, lng:-118.0672652},
				{lat:34.1492704, lng:-118.0677218},
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
			len: 26237,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1321257, lng:-118.0007747},
				{lat:34.1304107, lng:-118.0250459},
				{lat:34.1400882, lng:-118.0248906},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1481804, lng:-118.0672652},
				{lat:34.1492704, lng:-118.0677218},
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
			len: 26301,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1321257, lng:-118.0007747},
				{lat:34.1295247, lng:-118.0311483},
				{lat:34.1400105, lng:-118.0313511},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1481804, lng:-118.0672652},
				{lat:34.1492704, lng:-118.0677218},
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
			len: 26550,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0920917, lng:-118.0261833},
				{lat:34.1400105, lng:-118.0313511},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1481804, lng:-118.0672652},
				{lat:34.1492704, lng:-118.0677218},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1491878, lng:-118.1660435},
				{lat:34.1494888, lng:-118.1664969},
				{lat:34.1527743, lng:-118.1677937},
				{lat:34.1534115, lng:-118.1678964},
				{lat:34.1551098, lng:-118.1685474},
				{lat:34.1557577, lng:-118.1690191},
				{lat:34.1560505, lng:-118.1682415},
				{lat:34.1584921, lng:-118.1690523},
				{lat:34.1585893, lng:-118.1685971},
				{lat:34.1602998, lng:-118.1691704},
				{lat:34.160321, lng:-118.1689301},
			]
		},
		{
			desc: 'I-210 W',
			len: 26428,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0920917, lng:-118.0261833},
				{lat:34.1400105, lng:-118.0313511},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1481804, lng:-118.0672652},
				{lat:34.1492704, lng:-118.0677218},
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
			len: 26000,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1321257, lng:-118.0007747},
				{lat:34.1304107, lng:-118.0250459},
				{lat:34.1400882, lng:-118.0248906},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1481804, lng:-118.0672652},
				{lat:34.1492704, lng:-118.0677218},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
	];

	var data = [
		{
			time: '06:00 AM',
			routes: [
				{duration: 25.4, pathId:0},
				{duration: 28.0, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 26.3, pathId:0},
				{duration: 28.0, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 26.6, pathId:0},
				{duration: 28.7, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 26.7, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 26.5, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 26.9, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 27.8, pathId:0},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 27.9, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 27.6, pathId:0},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 28.1, pathId:0},
				{duration: 29.5, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 29.0, pathId:0},
				{duration: 30.8, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 29.1, pathId:0},
				{duration: 31.0, pathId:1},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 28.4, pathId:0},
				{duration: 31.6, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 29.0, pathId:0},
				{duration: 31.1, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 29.6, pathId:0},
				{duration: 32.7, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 30.1, pathId:0},
				{duration: 32.9, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 29.7, pathId:0},
				{duration: 31.7, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 30.3, pathId:0},
				{duration: 31.9, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 30.5, pathId:0},
				{duration: 32.7, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 30.7, pathId:0},
				{duration: 32.8, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 30.6, pathId:0},
				{duration: 33.3, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 31.4, pathId:0},
				{duration: 33.4, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 31.9, pathId:0},
				{duration: 34.9, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 32.6, pathId:0},
				{duration: 35.4, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 32.6, pathId:0},
				{duration: 35.5, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 34.5, pathId:0},
				{duration: 36.4, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 33.4, pathId:0},
				{duration: 35.6, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 34.1, pathId:0},
				{duration: 35.7, pathId:1},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 35.1, pathId:0},
				{duration: 36.8, pathId:1},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 34.7, pathId:2},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 36.0, pathId:0},
				{duration: 38.5, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 35.8, pathId:0},
				{duration: 39.2, pathId:1},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 36.9, pathId:0},
				{duration: 39.0, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 38.2, pathId:0},
				{duration: 38.2, pathId:3},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 37.0, pathId:4},
				{duration: 39.2, pathId:0},
				{duration: 39.4, pathId:3},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 38.6, pathId:0},
				{duration: 38.6, pathId:5},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 36.7, pathId:4},
				{duration: 38.0, pathId:5},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 37.1, pathId:4},
				{duration: 39.9, pathId:3},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 38.2, pathId:4},
				{duration: 39.6, pathId:5},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 39.6, pathId:0},
				{duration: 41.1, pathId:1},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 41.6, pathId:0},
				{duration: 40.7, pathId:3},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 41.3, pathId:0},
				{duration: 40.4, pathId:3},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 41.1, pathId:0},
				{duration: 41.5, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 41.4, pathId:0},
				{duration: 42.6, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 42.5, pathId:0},
				{duration: 42.5, pathId:3},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 43.0, pathId:0},
				{duration: 41.2, pathId:4},
				{duration: 45.0, pathId:1},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 40.5, pathId:6},
				{duration: 42.2, pathId:3},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 41.5, pathId:6},
				{duration: 41.8, pathId:3},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 41.0, pathId:4},
				{duration: 43.4, pathId:0},
				{duration: 43.2, pathId:3},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 42.0, pathId:0},
				{duration: 41.4, pathId:3},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 42.6, pathId:0},
				{duration: 42.6, pathId:3},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 39.8, pathId:4},
				{duration: 41.5, pathId:3},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 39.7, pathId:4},
				{duration: 41.0, pathId:3},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 40.4, pathId:4},
				{duration: 42.8, pathId:3},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 39.7, pathId:4},
				{duration: 41.9, pathId:7},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 39.9, pathId:4},
				{duration: 41.4, pathId:7},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 39.6, pathId:4},
				{duration: 42.2, pathId:8},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 39.8, pathId:4},
				{duration: 42.6, pathId:9},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 40.7, pathId:4},
				{duration: 43.3, pathId:9},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 39.7, pathId:10},
				{duration: 42.8, pathId:0},
				{duration: 44.2, pathId:8},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 39.5, pathId:10},
				{duration: 42.2, pathId:0},
				{duration: 44.4, pathId:1},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 38.8, pathId:10},
				{duration: 39.8, pathId:4},
				{duration: 41.6, pathId:5},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 41.7, pathId:0},
				{duration: 41.7, pathId:11},
				{duration: 41.7, pathId:5},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 41.1, pathId:0},
				{duration: 41.1, pathId:11},
				{duration: 43.2, pathId:1},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 40.8, pathId:0},
				{duration: 37.9, pathId:12},
				{duration: 43.1, pathId:1},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 39.6, pathId:0},
				{duration: 39.4, pathId:11},
				{duration: 41.2, pathId:1},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 39.4, pathId:0},
				{duration: 39.5, pathId:11},
				{duration: 41.5, pathId:1},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 39.3, pathId:0},
				{duration: 41.3, pathId:1},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 39.4, pathId:0},
				{duration: 41.1, pathId:1},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 39.0, pathId:0},
				{duration: 40.8, pathId:1},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 38.8, pathId:0},
				{duration: 41.1, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 38.1, pathId:0},
				{duration: 40.3, pathId:1},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 37.6, pathId:0},
				{duration: 39.5, pathId:1},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 37.3, pathId:0},
				{duration: 39.4, pathId:1},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 37.8, pathId:0},
				{duration: 39.6, pathId:1},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 37.4, pathId:0},
				{duration: 39.1, pathId:1},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 37.0, pathId:0},
				{duration: 39.4, pathId:1},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 37.4, pathId:0},
				{duration: 39.7, pathId:1},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 36.7, pathId:0},
				{duration: 40.2, pathId:1},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 36.3, pathId:0},
				{duration: 38.7, pathId:1},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 36.2, pathId:0},
				{duration: 38.9, pathId:1},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 35.9, pathId:0},
				{duration: 38.6, pathId:1},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 35.0, pathId:0},
				{duration: 37.3, pathId:1},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 34.9, pathId:0},
				{duration: 36.8, pathId:1},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 34.6, pathId:0},
				{duration: 36.6, pathId:1},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 33.4, pathId:0},
				{duration: 35.4, pathId:1},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 33.0, pathId:0},
				{duration: 35.0, pathId:1},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 33.4, pathId:0},
				{duration: 35.4, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 32.1, pathId:0},
				{duration: 35.3, pathId:1},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 31.9, pathId:0},
				{duration: 34.8, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 35.0, pathId: 0},
				{duration: 36.1, pathId: 1},
				{duration: 34.7, pathId: 2},
				{duration: 41.3, pathId: 3},
				{duration: 39.4, pathId: 4},
				{duration: 39.9, pathId: 5},
				{duration: 41.0, pathId: 6},
				{duration: 41.6, pathId: 7},
				{duration: 43.2, pathId: 8},
				{duration: 43.0, pathId: 9},
				{duration: 39.3, pathId: 10},
				{duration: 40.4, pathId: 11},
				{duration: 37.9, pathId: 12},
			]
		}
	];

	return {
		O: 'E',
		D: 'A',
		minDuration: 25.4,
		maxDuration: 45.0,
		paths: paths,
		data: data
	}
};