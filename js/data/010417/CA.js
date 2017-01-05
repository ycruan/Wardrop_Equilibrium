//date: 010417
function getObj() {
	var paths = [
		{
			desc: 'Huntington Dr',
			len: 16636,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1148839, lng:-118.1225965},
				{lat:34.1179661, lng:-118.1312063},
				{lat:34.1252391, lng:-118.135833},
				{lat:34.1262637, lng:-118.1371572},
				{lat:34.1274947, lng:-118.1371419},
				{lat:34.1275719, lng:-118.141145},
				{lat:34.1275199, lng:-118.154622},
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
			desc: 'E Del Mar Blvd',
			len: 14639,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1407512, lng:-118.1536444},
				{lat:34.1411086, lng:-118.1540961},
				{lat:34.1425593, lng:-118.1546716},
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
			desc: 'Del Mar Blvd',
			len: 14959,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1305045, lng:-118.0730895},
				{lat:34.1422731, lng:-118.0732839},
				{lat:34.1407512, lng:-118.1536444},
				{lat:34.1411086, lng:-118.1540961},
				{lat:34.1425593, lng:-118.1546716},
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
			desc: 'Huntington Dr',
			len: 16566,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1148839, lng:-118.1225965},
				{lat:34.1179661, lng:-118.1312063},
				{lat:34.1252391, lng:-118.135833},
				{lat:34.1262637, lng:-118.1371572},
				{lat:34.1274947, lng:-118.1371419},
				{lat:34.1275719, lng:-118.141145},
				{lat:34.1275274, lng:-118.1503104},
				{lat:34.137385, lng:-118.1503801},
				{lat:34.1373807, lng:-118.1541025},
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
			desc: 'E Del Mar Blvd',
			len: 15115,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1271133, lng:-118.0910336},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1407512, lng:-118.1536444},
				{lat:34.1411086, lng:-118.1540961},
				{lat:34.1425593, lng:-118.1546716},
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
			desc: 'E Del Mar Blvd',
			len: 14618,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1271133, lng:-118.0910336},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.140383, lng:-118.141367},
				{lat:34.1495323, lng:-118.1414659},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 16343,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1215609, lng:-118.1073374},
				{lat:34.117598, lng:-118.1252113},
				{lat:34.1179661, lng:-118.1312063},
				{lat:34.1252391, lng:-118.135833},
				{lat:34.1262637, lng:-118.1371572},
				{lat:34.1274947, lng:-118.1371419},
				{lat:34.1275719, lng:-118.141145},
				{lat:34.1275274, lng:-118.1503104},
				{lat:34.137385, lng:-118.1503801},
				{lat:34.1373807, lng:-118.1541025},
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
			time: '06:00 AM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 20.2, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 20.3, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 20.5, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 20.5, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 20.5, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 20.5, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 20.6, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 20.7, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 20.9, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 20.9, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 21.4, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 21.7, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 21.7, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 21.3, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 21.9, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 22.1, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 22.1, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 22.2, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 22.1, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 22.1, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 21.8, pathId:1},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 21.8, pathId:1},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 21.9, pathId:1},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 22.0, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 22.4, pathId:1},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 23.5, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 24.0, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 23.0, pathId:1},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 24.4, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 23.9, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 23.9, pathId:1},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 23.4, pathId:1},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 23.8, pathId:1},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 23.3, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 22.2, pathId:0},
				{duration: 24.4, pathId:1},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 22.5, pathId:0},
				{duration: 24.4, pathId:1},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 22.5, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 22.4, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 24.4, pathId:1},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 23.0, pathId:0},
				{duration: 24.8, pathId:1},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 22.7, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 23.2, pathId:0},
				{duration: 28.3, pathId:2},
				{duration: 30.3, pathId:3},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 23.1, pathId:0},
				{duration: 28.6, pathId:2},
				{duration: 31.1, pathId:3},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 23.7, pathId:0},
				{duration: 27.8, pathId:2},
				{duration: 31.4, pathId:3},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 23.4, pathId:0},
				{duration: 29.1, pathId:2},
				{duration: 31.4, pathId:3},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 23.2, pathId:0},
				{duration: 27.9, pathId:4},
				{duration: 30.1, pathId:3},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 28.3, pathId:2},
				{duration: 29.6, pathId:5},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 29.1, pathId:2},
				{duration: 29.8, pathId:3},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 29.7, pathId:3},
				{duration: 28.0, pathId:4},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 23.4, pathId:0},
				{duration: 27.5, pathId:2},
				{duration: 29.5, pathId:3},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 23.2, pathId:0},
				{duration: 27.1, pathId:2},
				{duration: 29.8, pathId:3},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 23.4, pathId:0},
				{duration: 27.9, pathId:2},
				{duration: 29.6, pathId:3},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 23.0, pathId:0},
				{duration: 28.1, pathId:2},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 23.1, pathId:0},
				{duration: 28.3, pathId:2},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 29.3, pathId:2},
				{duration: 31.1, pathId:3},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 29.0, pathId:2},
				{duration: 30.6, pathId:3},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 29.2, pathId:2},
				{duration: 30.4, pathId:3},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 22.7, pathId:0},
				{duration: 29.5, pathId:2},
				{duration: 30.7, pathId:3},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 29.5, pathId:2},
				{duration: 30.9, pathId:3},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 29.6, pathId:2},
				{duration: 30.8, pathId:6},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 23.1, pathId:0},
				{duration: 28.5, pathId:4},
				{duration: 31.9, pathId:3},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 22.7, pathId:0},
				{duration: 29.0, pathId:2},
				{duration: 30.1, pathId:3},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 29.0, pathId:2},
				{duration: 30.9, pathId:3},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 22.2, pathId:0},
				{duration: 28.8, pathId:2},
				{duration: 30.4, pathId:3},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 22.1, pathId:0},
				{duration: 29.1, pathId:2},
				{duration: 30.3, pathId:3},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 29.5, pathId:2},
				{duration: 30.2, pathId:3},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 28.9, pathId:2},
				{duration: 30.0, pathId:3},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 29.0, pathId:2},
				{duration: 30.6, pathId:3},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 28.9, pathId:2},
				{duration: 30.6, pathId:3},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 29.4, pathId:2},
				{duration: 29.4, pathId:3},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 29.4, pathId:2},
				{duration: 29.3, pathId:3},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 30.0, pathId:3},
				{duration: 30.2, pathId:7},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 29.5, pathId:3},
				{duration: 29.2, pathId:8},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 27.9, pathId:4},
				{duration: 30.4, pathId:3},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 28.1, pathId:2},
				{duration: 29.9, pathId:3},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 28.3, pathId:2},
				{duration: 29.8, pathId:3},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 28.0, pathId:2},
				{duration: 29.4, pathId:3},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 28.0, pathId:2},
				{duration: 29.0, pathId:3},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 28.6, pathId:2},
				{duration: 30.1, pathId:3},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.3, pathId: 0},
				{duration: 22.4, pathId: 1},
				{duration: 28.7, pathId: 2},
				{duration: 30.2, pathId: 3},
				{duration: 28.1, pathId: 4},
				{duration: 29.6, pathId: 5},
				{duration: 30.8, pathId: 6},
				{duration: 30.2, pathId: 7},
				{duration: 29.2, pathId: 8},
			]
		}
	];

	return {
		O: 'C',
		D: 'A',
		minDuration: 16.6,
		maxDuration: 31.9,
		paths: paths,
		data: data
	}
};