//date: 012417
function getObj() {
	var paths = [
		{
			desc: 'I-210 W',
			len: 14785,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1529979, lng:-118.0940815},
				{lat:34.1530647, lng:-118.0947636},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'E California Blvd',
			len: 14496,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1357801, lng:-118.1487968},
				{lat:34.1383499, lng:-118.1488145},
				{lat:34.138332, lng:-118.1541061},
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
			len: 14787,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1529979, lng:-118.0940815},
				{lat:34.153097, lng:-118.0983381},
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
			len: 14926,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.14969749999999, lng:-118.0501737},
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
			len: 14769,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1421126, lng:-118.0986996},
				{lat:34.1530722, lng:-118.0984274},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'E California Blvd',
			len: 14723,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1528709, lng:-118.1213202},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'E California Blvd',
			len: 14669,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1357727, lng:-118.1541227},
				{lat:34.1389889, lng:-118.1541113},
				{lat:34.1532451, lng:-118.1565715},
				{lat:34.1588408, lng:-118.1584947},
				{lat:34.1621295, lng:-118.1579265},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.1628585, lng:-118.1605752},
				{lat:34.1653227, lng:-118.1625446},
				{lat:34.1643822, lng:-118.1642434},
				{lat:34.1605436, lng:-118.1643953},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'I-210 W',
			len: 15048,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.14969749999999, lng:-118.0501737},
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
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 22.1, pathId:1},
				{duration: 27.3, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 22.1, pathId:1},
				{duration: 27.7, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 22.3, pathId:1},
				{duration: 27.5, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 23.1, pathId:1},
				{duration: 27.7, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 23.2, pathId:1},
				{duration: 27.6, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 23.5, pathId:1},
				{duration: 28.1, pathId:2},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 24.4, pathId:1},
				{duration: 28.2, pathId:2},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 22.8, pathId:1},
				{duration: 27.7, pathId:2},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 23.2, pathId:1},
				{duration: 28.0, pathId:2},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 23.4, pathId:1},
				{duration: 28.5, pathId:2},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 22.8, pathId:1},
				{duration: 27.9, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 22.9, pathId:1},
				{duration: 27.8, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 23.4, pathId:1},
				{duration: 27.2, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 23.3, pathId:1},
				{duration: 27.4, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 22.6, pathId:1},
				{duration: 27.8, pathId:2},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 22.6, pathId:1},
				{duration: 27.8, pathId:2},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 22.8, pathId:1},
				{duration: 27.9, pathId:2},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 23.2, pathId:1},
				{duration: 27.6, pathId:2},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 23.8, pathId:1},
				{duration: 27.8, pathId:2},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 24.4, pathId:1},
				{duration: 28.8, pathId:2},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 23.9, pathId:1},
				{duration: 29.3, pathId:2},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 23.7, pathId:1},
				{duration: 28.9, pathId:2},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 24.3, pathId:1},
				{duration: 28.9, pathId:2},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 25.0, pathId:1},
				{duration: 29.4, pathId:2},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 29.3, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 29.5, pathId:2},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 29.5, pathId:2},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 25.8, pathId:1},
				{duration: 30.2, pathId:2},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 25.3, pathId:1},
				{duration: 29.1, pathId:3},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 25.6, pathId:1},
				{duration: 28.7, pathId:3},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 25.8, pathId:1},
				{duration: 28.4, pathId:3},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.4, pathId:1},
				{duration: 30.0, pathId:2},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 26.1, pathId:1},
				{duration: 29.1, pathId:2},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 26.9, pathId:1},
				{duration: 29.8, pathId:2},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 27.8, pathId:1},
				{duration: 30.1, pathId:2},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 25.0, pathId:1},
				{duration: 29.1, pathId:2},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 25.5, pathId:1},
				{duration: 30.4, pathId:2},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 25.0, pathId:1},
				{duration: 30.1, pathId:2},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 23.7, pathId:1},
				{duration: 28.9, pathId:2},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 24.1, pathId:1},
				{duration: 28.5, pathId:2},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 23.8, pathId:1},
				{duration: 29.0, pathId:2},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 24.5, pathId:1},
				{duration: 28.6, pathId:2},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 24.5, pathId:1},
				{duration: 28.9, pathId:2},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 23.6, pathId:1},
				{duration: 28.7, pathId:2},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 24.3, pathId:1},
				{duration: 29.4, pathId:2},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 24.2, pathId:1},
				{duration: 29.1, pathId:2},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 24.2, pathId:1},
				{duration: 29.2, pathId:2},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 23.6, pathId:1},
				{duration: 28.7, pathId:2},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 24.0, pathId:1},
				{duration: 28.6, pathId:2},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 23.5, pathId:1},
				{duration: 28.3, pathId:2},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 23.2, pathId:1},
				{duration: 28.2, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 23.7, pathId:1},
				{duration: 27.7, pathId:2},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 24.9, pathId:1},
				{duration: 28.5, pathId:2},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 25.0, pathId:1},
				{duration: 28.6, pathId:2},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 25.5, pathId:1},
				{duration: 29.2, pathId:2},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 25.5, pathId:1},
				{duration: 29.4, pathId:2},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 26.0, pathId:1},
				{duration: 30.2, pathId:2},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 27.8, pathId:1},
				{duration: 32.2, pathId:2},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 26.4, pathId:1},
				{duration: 29.9, pathId:2},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 25.9, pathId:1},
				{duration: 30.4, pathId:2},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 26.0, pathId:1},
				{duration: 30.4, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 25.7, pathId:1},
				{duration: 29.3, pathId:2},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 26.6, pathId:1},
				{duration: 30.4, pathId:2},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 26.5, pathId:1},
				{duration: 30.1, pathId:2},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 25.7, pathId:1},
				{duration: 29.5, pathId:2},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 26.5, pathId:1},
				{duration: 30.3, pathId:2},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 30.2, pathId:2},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 26.5, pathId:1},
				{duration: 29.6, pathId:2},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 26.6, pathId:1},
				{duration: 29.3, pathId:2},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 21.7, pathId:0},
				{duration: 28.2, pathId:1},
				{duration: 31.5, pathId:2},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 22.0, pathId:0},
				{duration: 27.5, pathId:1},
				{duration: 31.9, pathId:2},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 22.4, pathId:0},
				{duration: 26.9, pathId:1},
				{duration: 30.4, pathId:2},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 22.4, pathId:0},
				{duration: 26.7, pathId:1},
				{duration: 30.2, pathId:2},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 27.9, pathId:1},
				{duration: 30.8, pathId:2},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 27.9, pathId:1},
				{duration: 30.7, pathId:2},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 28.3, pathId:1},
				{duration: 30.4, pathId:2},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 26.6, pathId:1},
				{duration: 29.7, pathId:2},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 28.1, pathId:1},
				{duration: 30.6, pathId:2},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 28.5, pathId:1},
				{duration: 30.9, pathId:2},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 22.5, pathId:0},
				{duration: 28.6, pathId:1},
				{duration: 31.4, pathId:2},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 22.1, pathId:0},
				{duration: 27.6, pathId:4},
				{duration: 29.5, pathId:3},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 27.1, pathId:5},
				{duration: 30.6, pathId:2},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 22.2, pathId:0},
				{duration: 26.5, pathId:4},
				{duration: 29.4, pathId:3},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 27.1, pathId:1},
				{duration: 29.8, pathId:2},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 21.7, pathId:0},
				{duration: 27.0, pathId:1},
				{duration: 30.4, pathId:2},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 21.8, pathId:0},
				{duration: 27.0, pathId:1},
				{duration: 30.2, pathId:2},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 27.6, pathId:1},
				{duration: 31.0, pathId:2},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 27.3, pathId:1},
				{duration: 30.9, pathId:2},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 26.6, pathId:1},
				{duration: 30.7, pathId:2},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 22.1, pathId:0},
				{duration: 27.6, pathId:1},
				{duration: 31.2, pathId:2},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 27.3, pathId:1},
				{duration: 30.4, pathId:2},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 27.1, pathId:1},
				{duration: 30.3, pathId:2},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 27.6, pathId:1},
				{duration: 30.6, pathId:2},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 27.8, pathId:1},
				{duration: 30.4, pathId:2},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 27.9, pathId:1},
				{duration: 30.7, pathId:2},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 27.8, pathId:1},
				{duration: 31.4, pathId:2},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 30.8, pathId:2},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 26.6, pathId:1},
				{duration: 30.9, pathId:2},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 31.1, pathId:2},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 21.7, pathId:0},
				{duration: 27.9, pathId:1},
				{duration: 30.6, pathId:3},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 26.3, pathId:1},
				{duration: 28.5, pathId:6},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 26.7, pathId:1},
				{duration: 28.8, pathId:6},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 27.0, pathId:1},
				{duration: 29.6, pathId:2},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 25.9, pathId:1},
				{duration: 29.9, pathId:2},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 25.7, pathId:1},
				{duration: 29.9, pathId:2},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 25.6, pathId:1},
				{duration: 30.1, pathId:2},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 25.8, pathId:1},
				{duration: 29.9, pathId:2},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 29.0, pathId:2},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 25.2, pathId:1},
				{duration: 29.0, pathId:2},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 25.0, pathId:1},
				{duration: 28.2, pathId:2},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 29.0, pathId:2},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 18.4, pathId:7},
				{duration: 24.8, pathId:1},
				{duration: 28.9, pathId:2},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 18.2, pathId:7},
				{duration: 25.2, pathId:1},
				{duration: 29.2, pathId:2},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 18.0, pathId:7},
				{duration: 26.1, pathId:1},
				{duration: 30.1, pathId:2},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 17.9, pathId:7},
				{duration: 24.4, pathId:1},
				{duration: 28.6, pathId:2},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 17.7, pathId:7},
				{duration: 25.1, pathId:1},
				{duration: 29.3, pathId:2},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 23.6, pathId:1},
				{duration: 28.2, pathId:2},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 23.8, pathId:1},
				{duration: 27.8, pathId:2},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 18.7, pathId:0},
				{duration: 23.9, pathId:1},
				{duration: 27.8, pathId:2},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 23.2, pathId:1},
				{duration: 27.7, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.0, pathId: 0},
				{duration: 25.4, pathId: 1},
				{duration: 29.4, pathId: 2},
				{duration: 29.3, pathId: 3},
				{duration: 27.1, pathId: 4},
				{duration: 27.1, pathId: 5},
				{duration: 28.6, pathId: 6},
				{duration: 18.0, pathId: 7},
			]
		}
	];

	return {
		O: 'C',
		D: 'A',
		minDuration: 17.5,
		maxDuration: 32.2,
		paths: paths,
		data: data
	}
};