//date: 010517
function getObj() {
	var paths = [
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
			len: 15406,
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
				{lat:34.1470962, lng:-118.1632231},
				{lat:34.1453297, lng:-118.16397},
				{lat:34.1590835, lng:-118.1678156},
				{lat:34.1589292, lng:-118.168704},
				{lat:34.1602998, lng:-118.1691704},
				{lat:34.160321, lng:-118.1689301},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 16772,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1120583, lng:-118.126878},
				{lat:34.1252391, lng:-118.135833},
				{lat:34.1262637, lng:-118.1371572},
				{lat:34.1274947, lng:-118.1371419},
				{lat:34.1275719, lng:-118.141145},
				{lat:34.1275479, lng:-118.1457837},
				{lat:34.135802, lng:-118.1458555},
				{lat:34.1357727, lng:-118.1541227},
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
	];

	var data = [
		{
			time: '06:00 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 27.7, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 28.3, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 27.3, pathId:2},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 26.9, pathId:2},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 27.6, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 27.3, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 27.1, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 27.0, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 27.1, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 27.3, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 27.9, pathId:1},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 27.8, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 27.5, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 27.2, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 26.9, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 27.0, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 27.0, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 26.7, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 27.3, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 27.0, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 27.4, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 28.1, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 27.9, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 28.0, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 27.6, pathId:1},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 28.1, pathId:1},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 27.8, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 22.1, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 22.5, pathId:0},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 31.3, pathId:1},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 23.5, pathId:0},
				{duration: 32.3, pathId:1},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 31.7, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 24.1, pathId:0},
				{duration: 30.4, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 24.8, pathId:0},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 25.8, pathId:0},
				{duration: 31.0, pathId:1},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 25.8, pathId:0},
				{duration: 30.7, pathId:1},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 26.1, pathId:0},
				{duration: 30.0, pathId:1},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 26.0, pathId:0},
				{duration: 30.8, pathId:1},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 25.5, pathId:0},
				{duration: 30.8, pathId:1},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 25.8, pathId:0},
				{duration: 31.4, pathId:1},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 25.5, pathId:0},
				{duration: 32.1, pathId:1},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 25.3, pathId:0},
				{duration: 30.3, pathId:1},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 25.5, pathId:0},
				{duration: 31.0, pathId:1},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 25.6, pathId:0},
				{duration: 32.1, pathId:1},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 25.8, pathId:0},
				{duration: 32.6, pathId:1},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 25.9, pathId:0},
				{duration: 32.2, pathId:1},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 26.0, pathId:0},
				{duration: 31.4, pathId:1},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 26.4, pathId:0},
				{duration: 31.8, pathId:1},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 26.4, pathId:0},
				{duration: 26.4, pathId:3},
				{duration: 30.5, pathId:1},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 26.6, pathId:0},
				{duration: 26.5, pathId:3},
				{duration: 30.9, pathId:1},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 26.7, pathId:0},
				{duration: 26.5, pathId:3},
				{duration: 30.3, pathId:1},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 26.2, pathId:0},
				{duration: 26.1, pathId:3},
				{duration: 32.0, pathId:1},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 25.9, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 26.3, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 25.6, pathId:0},
				{duration: 25.5, pathId:3},
				{duration: 30.0, pathId:1},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 25.4, pathId:0},
				{duration: 25.4, pathId:3},
				{duration: 31.3, pathId:1},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 25.6, pathId:0},
				{duration: 30.9, pathId:1},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 25.8, pathId:0},
				{duration: 25.6, pathId:3},
				{duration: 30.6, pathId:1},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 25.9, pathId:0},
				{duration: 25.6, pathId:3},
				{duration: 30.7, pathId:1},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 25.6, pathId:0},
				{duration: 32.5, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 25.4, pathId:0},
				{duration: 25.2, pathId:3},
				{duration: 32.0, pathId:1},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 25.6, pathId:0},
				{duration: 31.4, pathId:1},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 25.9, pathId:0},
				{duration: 31.0, pathId:1},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 26.0, pathId:0},
				{duration: 26.0, pathId:3},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 25.7, pathId:0},
				{duration: 25.6, pathId:3},
				{duration: 30.7, pathId:1},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 25.6, pathId:0},
				{duration: 25.6, pathId:3},
				{duration: 31.2, pathId:1},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 26.0, pathId:0},
				{duration: 30.2, pathId:1},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 25.5, pathId:0},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 25.0, pathId:0},
				{duration: 24.9, pathId:3},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 24.9, pathId:0},
				{duration: 30.2, pathId:1},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 25.0, pathId:0},
				{duration: 31.0, pathId:1},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 24.1, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 23.4, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 30.8, pathId:1},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 31.0, pathId:1},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 22.9, pathId:0},
				{duration: 31.1, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 31.1, pathId:1},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 22.5, pathId:0},
				{duration: 30.4, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 22.3, pathId: 0},
				{duration: 29.6, pathId: 1},
				{duration: 27.1, pathId: 2},
				{duration: 25.8, pathId: 3},
			]
		}
	];

	return {
		O: 'C',
		D: 'A',
		minDuration: 16.7,
		maxDuration: 32.6,
		paths: paths,
		data: data
	}
};