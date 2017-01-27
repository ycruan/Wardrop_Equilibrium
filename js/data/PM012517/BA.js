//date: 012517
function getObj() {
	var paths = [
		{
			desc: 'I-210 W',
			len: 7748,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
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
			desc: 'I-210 W',
			len: 7493,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1409536, lng:-118.1280159},
				{lat:34.1523719, lng:-118.1281009},
				{lat:34.1523297, lng:-118.13277},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'S Wilson Ave',
			len: 7523,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.142919, lng:-118.1280232},
				{lat:34.1523719, lng:-118.1281009},
				{lat:34.1523297, lng:-118.13277},
				{lat:34.1520362, lng:-118.1436111},
				{lat:34.1522443, lng:-118.1461941},
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
			len: 7780,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.1426642, lng:-118.121331},
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
			desc: 'I-210 W',
			len: 7728,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.1426642, lng:-118.121331},
				{lat:34.1528709, lng:-118.1213202},
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
			desc: 'E Del Mar Blvd',
			len: 6831,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1404332, lng:-118.1459003},
				{lat:34.1494834, lng:-118.1459641},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'I-210 W',
			len: 7902,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1516532, lng:-118.1229664},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.1528709, lng:-118.1213202},
				{lat:34.1520362, lng:-118.1436111},
				{lat:34.1522443, lng:-118.1461941},
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
			desc: 'Cordova St',
			len: 6776,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.1421134, lng:-118.1413756},
				{lat:34.1495323, lng:-118.1414659},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 7330,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
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
			desc: 'S Wilson Ave',
			len: 7441,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1409536, lng:-118.1280159},
				{lat:34.1523719, lng:-118.1281009},
				{lat:34.1523297, lng:-118.13277},
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
			len: 7404,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.142919, lng:-118.1280232},
				{lat:34.1523719, lng:-118.1281009},
				{lat:34.1523297, lng:-118.13277},
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
			len: 6700,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1407401, lng:-118.1594451},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'I-210 W',
			len: 7696,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1528709, lng:-118.1213202},
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
			desc: 'S Wilson Ave',
			len: 7352,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.142919, lng:-118.1280232},
				{lat:34.1523719, lng:-118.1281009},
				{lat:34.1523297, lng:-118.13277},
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
			desc: 'E Del Mar Blvd',
			len: 6833,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.140383, lng:-118.141367},
				{lat:34.1495323, lng:-118.1414659},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 18.9, pathId:1},
				{duration: 20.3, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 20.0, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 19.4, pathId:1},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 17.5, pathId:3},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 18.4, pathId:1},
				{duration: 19.3, pathId:2},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 17.1, pathId:3},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 17.2, pathId:3},
				{duration: 18.7, pathId:1},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 19.1, pathId:4},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 17.0, pathId:3},
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 17.1, pathId:3},
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 17.2, pathId:3},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 17.2, pathId:3},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 17.3, pathId:3},
				{duration: 19.4, pathId:1},
				{duration: 19.7, pathId:2},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 17.0, pathId:3},
				{duration: 20.1, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 17.2, pathId:3},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 19.1, pathId:2},
				{duration: 19.3, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 18.6, pathId:2},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 16.7, pathId:5},
				{duration: 18.4, pathId:2},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 16.2, pathId:5},
				{duration: 17.9, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 17.1, pathId:5},
				{duration: 18.5, pathId:1},
				{duration: 18.9, pathId:2},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 18.7, pathId:1},
				{duration: 19.4, pathId:2},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 18.6, pathId:1},
				{duration: 19.7, pathId:2},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 17.7, pathId:3},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 18.5, pathId:1},
				{duration: 19.1, pathId:2},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 18.7, pathId:2},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 17.2, pathId:3},
				{duration: 18.9, pathId:1},
				{duration: 19.2, pathId:2},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 19.0, pathId:1},
				{duration: 19.6, pathId:2},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 18.6, pathId:2},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 19.0, pathId:2},
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 18.9, pathId:2},
				{duration: 20.0, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 18.8, pathId:2},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 19.5, pathId:2},
				{duration: 20.0, pathId:1},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 19.2, pathId:1},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 19.2, pathId:1},
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 19.1, pathId:1},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 17.8, pathId:3},
				{duration: 19.2, pathId:1},
				{duration: 20.9, pathId:2},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 19.2, pathId:1},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 19.1, pathId:1},
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 18.3, pathId:6},
				{duration: 20.0, pathId:2},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 18.1, pathId:6},
				{duration: 19.8, pathId:1},
				{duration: 19.9, pathId:2},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 18.0, pathId:6},
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 18.0, pathId:6},
				{duration: 19.7, pathId:2},
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 19.1, pathId:2},
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 19.0, pathId:1},
				{duration: 19.9, pathId:2},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 19.6, pathId:1},
				{duration: 19.9, pathId:2},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 20.3, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 18.7, pathId:0},
				{duration: 20.1, pathId:1},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 20.9, pathId:2},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 18.3, pathId:3},
				{duration: 20.2, pathId:1},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 19.4, pathId:1},
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 19.9, pathId:1},
				{duration: 21.3, pathId:2},
				{duration: 19.3, pathId:7},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 19.1, pathId:7},
				{duration: 21.3, pathId:2},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 20.2, pathId:1},
				{duration: 21.3, pathId:2},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 18.4, pathId:3},
				{duration: 21.9, pathId:1},
				{duration: 22.6, pathId:2},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 18.6, pathId:3},
				{duration: 20.5, pathId:2},
				{duration: 21.0, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 20.6, pathId:1},
				{duration: 21.4, pathId:2},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 19.3, pathId:3},
				{duration: 21.4, pathId:1},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 20.0, pathId:3},
				{duration: 21.1, pathId:1},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 21.6, pathId:1},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 20.8, pathId:1},
				{duration: 20.3, pathId:8},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 20.9, pathId:1},
				{duration: 20.0, pathId:8},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 21.0, pathId:1},
				{duration: 20.2, pathId:8},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 19.9, pathId:1},
				{duration: 20.1, pathId:8},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 19.6, pathId:1},
				{duration: 19.1, pathId:9},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 19.8, pathId:1},
				{duration: 20.7, pathId:8},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 19.9, pathId:1},
				{duration: 19.9, pathId:8},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 20.1, pathId:1},
				{duration: 19.5, pathId:8},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 19.9, pathId:1},
				{duration: 23.5, pathId:2},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 18.6, pathId:8},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 20.5, pathId:1},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 19.4, pathId:1},
				{duration: 18.8, pathId:8},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 19.6, pathId:7},
				{duration: 19.2, pathId:8},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 19.7, pathId:1},
				{duration: 19.3, pathId:8},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 19.0, pathId:1},
				{duration: 18.1, pathId:10},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 18.7, pathId:1},
				{duration: 19.8, pathId:8},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 18.6, pathId:1},
				{duration: 18.8, pathId:11},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 18.8, pathId:12},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 19.2, pathId:1},
				{duration: 18.8, pathId:12},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 19.2, pathId:1},
				{duration: 18.8, pathId:12},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 19.1, pathId:1},
				{duration: 20.1, pathId:8},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 19.5, pathId:1},
				{duration: 20.1, pathId:8},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 19.5, pathId:1},
				{duration: 19.6, pathId:8},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 19.6, pathId:1},
				{duration: 19.3, pathId:8},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 19.9, pathId:1},
				{duration: 18.7, pathId:8},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 18.8, pathId:8},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 19.6, pathId:1},
				{duration: 18.7, pathId:8},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 17.3, pathId:8},
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 17.8, pathId:8},
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 17.5, pathId:8},
				{duration: 19.4, pathId:1},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 17.6, pathId:8},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 18.6, pathId:1},
				{duration: 17.5, pathId:8},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 17.3, pathId:8},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 18.8, pathId:8},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 17.1, pathId:13},
				{duration: 19.4, pathId:1},
				{duration: 17.3, pathId:14},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 18.0, pathId:8},
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 17.5, pathId:8},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 17.6, pathId:8},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 19.2, pathId:1},
				{duration: 17.1, pathId:8},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 18.6, pathId:1},
				{duration: 17.4, pathId:8},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 17.1, pathId:8},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 17.1, pathId:8},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 17.0, pathId:8},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 16.5, pathId:0},
				{duration: 16.4, pathId:8},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 18.3, pathId: 0},
				{duration: 19.4, pathId: 1},
				{duration: 20.0, pathId: 2},
				{duration: 17.7, pathId: 3},
				{duration: 19.1, pathId: 4},
				{duration: 16.7, pathId: 5},
				{duration: 18.1, pathId: 6},
				{duration: 19.3, pathId: 7},
				{duration: 18.6, pathId: 8},
				{duration: 19.1, pathId: 9},
				{duration: 18.1, pathId: 10},
				{duration: 18.8, pathId: 11},
				{duration: 18.8, pathId: 12},
				{duration: 17.1, pathId: 13},
				{duration: 17.3, pathId: 14},
			]
		}
	];

	return {
		O: 'B',
		D: 'A',
		minDuration: 16.2,
		maxDuration: 23.5,
		paths: paths,
		data: data
	}
};