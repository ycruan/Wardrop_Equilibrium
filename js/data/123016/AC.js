//date: 010217
function getObj() {
	var paths = [
		{
			desc: 'Orange Grove Blvd',
			len: 15397,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1583988, lng:-118.0941503},
				{lat:34.1613472, lng:-118.0908166},
				{lat:34.1616356, lng:-118.0688212},
				{lat:34.1616383, lng:-118.0680406},
				{lat:34.1479979, lng:-118.0678472},
				{lat:34.1482891, lng:-118.0506708},
				{lat:34.1473239, lng:-118.0503517},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 17103,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1532843, lng:-118.156929},
				{lat:34.1357634, lng:-118.1555673},
				{lat:34.1303647, lng:-118.1547928},
				{lat:34.1275199, lng:-118.154622},
				{lat:34.12757089999999, lng:-118.1413568},
				{lat:34.1275763, lng:-118.1372571},
				{lat:34.1242197, lng:-118.1369856},
				{lat:34.1243473, lng:-118.1359607},
				{lat:34.1120583, lng:-118.126878},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-210 E',
			len: 14626,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1481661, lng:-118.0734183},
				{lat:34.1469478, lng:-118.0696132},
				{lat:34.1482891, lng:-118.0506708},
				{lat:34.1473239, lng:-118.0503517},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 17047,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1532843, lng:-118.156929},
				{lat:34.1357634, lng:-118.1555673},
				{lat:34.1303647, lng:-118.1547928},
				{lat:34.1275199, lng:-118.154622},
				{lat:34.12757089999999, lng:-118.1413568},
				{lat:34.1275763, lng:-118.1372571},
				{lat:34.1266246, lng:-118.137321},
				{lat:34.1252391, lng:-118.135833},
				{lat:34.1120583, lng:-118.126878},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-210 E',
			len: 14614,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1481661, lng:-118.0734183},
				{lat:34.1469478, lng:-118.0696132},
				{lat:34.1482891, lng:-118.0506708},
				{lat:34.1473239, lng:-118.0503517},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-210 E',
			len: 14931,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1523769, lng:-118.0997548},
				{lat:34.1518024, lng:-118.0958554},
				{lat:34.1516867, lng:-118.0943839},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-210 E',
			len: 14920,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1523769, lng:-118.0997548},
				{lat:34.1518024, lng:-118.0958554},
				{lat:34.1516867, lng:-118.0943839},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-210 E',
			len: 14536,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 29.2, pathId:2},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 23.2, pathId:3},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 23.2, pathId:3},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 17.9, pathId:4},
				{duration: 30.2, pathId:5},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 17.9, pathId:4},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 22.9, pathId:7},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 17.9, pathId:4},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 17.9, pathId:4},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 17.9, pathId:4},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 17.9, pathId:4},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 17.9, pathId:4},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 17.9, pathId:4},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 17.9, pathId:4},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 16.0, pathId:6},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 18.2, pathId: 0},
				{duration: 30.1, pathId: 1},
				{duration: 29.2, pathId: 2},
				{duration: 23.2, pathId: 3},
				{duration: 17.9, pathId: 4},
				{duration: 30.2, pathId: 5},
				{duration: 16.0, pathId: 6},
				{duration: 22.9, pathId: 7},
			]
		}
	];

	return {
		O: 'A',
		D: 'C',
		minDuration: 16.0,
		maxDuration: 30.2,
		paths: paths,
		data: data
	}
};