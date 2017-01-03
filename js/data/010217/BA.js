//date: 010217
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
			len: 8003,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1516532, lng:-118.1229664},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.1528709, lng:-118.1213202},
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
		{
			desc: 'I-210 W',
			len: 7526,
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
			desc: 'E Walnut St',
			len: 6684,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.142919, lng:-118.1280232},
				{lat:34.1495886, lng:-118.128066},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 7501,
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
				{lat:34.1628585, lng:-118.1605752},
				{lat:34.1653227, lng:-118.1625446},
				{lat:34.1643822, lng:-118.1642434},
				{lat:34.1605436, lng:-118.1643953},
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
			desc: 'E Del Mar Blvd and S Arroyo Blvd',
			len: 7536,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1407401, lng:-118.1594451},
				{lat:34.1413073, lng:-118.159491},
				{lat:34.1412824, lng:-118.1619045},
				{lat:34.1399038, lng:-118.1618137},
				{lat:34.1398864, lng:-118.165475},
				{lat:34.1589591, lng:-118.1675943},
				{lat:34.1590105, lng:-118.1668911},
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
			len: 7786,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.144621, lng:-118.122885},
				{lat:34.1446236, lng:-118.121331},
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
			len: 7905,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.144621, lng:-118.122885},
				{lat:34.1446236, lng:-118.121331},
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
			desc: 'I-210 W',
			len: 7734,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.144621, lng:-118.122885},
				{lat:34.1446236, lng:-118.121331},
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
			desc: 'I-210 W',
			len: 7908,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.144621, lng:-118.122885},
				{lat:34.1446236, lng:-118.121331},
				{lat:34.1528709, lng:-118.1213202},
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
			len: 7783,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1516532, lng:-118.1229664},
				{lat:34.1517659, lng:-118.1214744},
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
			len: 7905,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1516532, lng:-118.1229664},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.1528709, lng:-118.1213202},
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
		{
			desc: 'I-210 W',
			len: 8228,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1528709, lng:-118.1213202},
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
			len: 7902,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.1426642, lng:-118.121331},
				{lat:34.1528709, lng:-118.1213202},
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
			len: 8006,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.144621, lng:-118.122885},
				{lat:34.1446236, lng:-118.121331},
				{lat:34.1528709, lng:-118.1213202},
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
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 16.4, pathId:3},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 18.1, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 18.1, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 16.4, pathId:3},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 18.1, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 15.9, pathId:7},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 15.9, pathId:7},
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 15.9, pathId:7},
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 15.9, pathId:7},
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.1, pathId:8},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 15.9, pathId:7},
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 15.9, pathId:7},
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 15.9, pathId:7},
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 15.9, pathId:7},
				{duration: 15.9, pathId:9},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.1, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 16.7, pathId:10},
				{duration: 16.6, pathId:11},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 16.7, pathId:10},
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 15.9, pathId:9},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:0},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 16.0, pathId:13},
				{duration: 16.1, pathId:0},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 16.2, pathId:14},
				{duration: 16.1, pathId:0},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 16.2, pathId:14},
				{duration: 19.0, pathId:5},
				{duration: 16.4, pathId:3},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 16.8, pathId:15},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 16.1, pathId:8},
				{duration: 16.4, pathId:3},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:4},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 16.2, pathId:14},
				{duration: 16.4, pathId:3},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:4},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:4},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 16.2, pathId:14},
				{duration: 16.4, pathId:3},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:4},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 16.2, pathId:14},
				{duration: 16.4, pathId:3},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:4},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 16.2, pathId:14},
				{duration: 16.4, pathId:3},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.2, pathId:14},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:4},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 15.7, pathId:16},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 15.7, pathId:16},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:4},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:4},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 16.0, pathId:12},
				{duration: 16.1, pathId:4},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.0, pathId:12},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.0, pathId:12},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
				{duration: 20.5, pathId:17},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.6, pathId:6},
				{duration: 19.0, pathId:5},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 19.0, pathId:5},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 18.1, pathId:2},
				{duration: 20.5, pathId:17},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 16.1, pathId: 0},
				{duration: 18.4, pathId: 1},
				{duration: 18.1, pathId: 2},
				{duration: 16.4, pathId: 3},
				{duration: 16.1, pathId: 4},
				{duration: 19.0, pathId: 5},
				{duration: 16.6, pathId: 6},
				{duration: 15.9, pathId: 7},
				{duration: 16.1, pathId: 8},
				{duration: 15.9, pathId: 9},
				{duration: 16.7, pathId: 10},
				{duration: 16.6, pathId: 11},
				{duration: 16.0, pathId: 12},
				{duration: 16.0, pathId: 13},
				{duration: 16.2, pathId: 14},
				{duration: 16.8, pathId: 15},
				{duration: 15.7, pathId: 16},
				{duration: 20.5, pathId: 17},
			]
		}
	];

	return {
		O: 'B',
		D: 'A',
		minDuration: 15.7,
		maxDuration: 20.5,
		paths: paths,
		data: data
	}
};