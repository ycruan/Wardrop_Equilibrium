//date: 010217
function getObj() {
	var paths = [
		{
			desc: 'I-210 E and E Foothill Blvd',
			len: 18470,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1482967, lng:-118.0861256},
				{lat:34.1471997, lng:-118.0819587},
				{lat:34.1500816, lng:-118.0824485},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 19993,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1523769, lng:-118.0997548},
				{lat:34.1518024, lng:-118.0958554},
				{lat:34.1613472, lng:-118.0908166},
				{lat:34.1616356, lng:-118.0688212},
				{lat:34.1616383, lng:-118.0680406},
				{lat:34.1503561, lng:-118.0679298},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 18950,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1481661, lng:-118.0734183},
				{lat:34.1469478, lng:-118.0696132},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 18938,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1481661, lng:-118.0734183},
				{lat:34.1469478, lng:-118.0696132},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and E Foothill Blvd',
			len: 18033,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1523769, lng:-118.0997548},
				{lat:34.1518024, lng:-118.0958554},
				{lat:34.1517051, lng:-118.0935153},
				{lat:34.1508556, lng:-118.0905196},
				{lat:34.1499974, lng:-118.0905104},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Orange Grove Blvd and E Foothill Blvd',
			len: 17683,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.15789230000001, lng:-118.0815322},
				{lat:34.1502756, lng:-118.0735109},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Orange Grove Blvd and W Foothill Blvd',
			len: 17882,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.15789230000001, lng:-118.0815322},
				{lat:34.1515373, lng:-118.0740062},
				{lat:34.1524776, lng:-118.0734735},
				{lat:34.1524898, lng:-118.067933},
				{lat:34.1503561, lng:-118.0679298},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 19977,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1523769, lng:-118.0997548},
				{lat:34.1518024, lng:-118.0958554},
				{lat:34.1613472, lng:-118.0908166},
				{lat:34.1616356, lng:-118.0688212},
				{lat:34.1616383, lng:-118.0680406},
				{lat:34.1568007, lng:-118.0679611},
				{lat:34.15735069999999, lng:-118.0318588},
				{lat:34.1510229, lng:-118.0317367},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 18276,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 18468,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1480961, lng:-118.0345993},
				{lat:34.1474459, lng:-118.031678},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Orange Grove Blvd',
			len: 18236,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.15789230000001, lng:-118.0815322},
				{lat:34.1548872, lng:-118.0784573},
				{lat:34.1568007, lng:-118.0679611},
				{lat:34.15735069999999, lng:-118.0318588},
				{lat:34.1510229, lng:-118.0317367},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 18939,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1481661, lng:-118.0734183},
				{lat:34.1469478, lng:-118.0696132},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455786, lng:-118.0253326},
				{lat:34.1510564, lng:-118.0254164},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 19688,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.13538460000001, lng:-118.0045362},
				{lat:34.1350397, lng:-118.0015131},
				{lat:34.1350493, lng:-117.9950464},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 18288,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 18437,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1481661, lng:-118.0734183},
				{lat:34.1469478, lng:-118.0696132},
				{lat:34.1478753, lng:-118.0678707},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Orange Grove Blvd and W Foothill Blvd',
			len: 18683,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1583988, lng:-118.0941503},
				{lat:34.1613472, lng:-118.0908166},
				{lat:34.1616356, lng:-118.0688212},
				{lat:34.1616383, lng:-118.0680406},
				{lat:34.1503561, lng:-118.0679298},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'W Foothill Blvd',
			len: 19261,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1523435, lng:-118.1051347},
				{lat:34.1520219, lng:-118.0998694},
				{lat:34.152021, lng:-118.098628},
				{lat:34.1582873, lng:-118.0984609},
				{lat:34.15789230000001, lng:-118.0815322},
				{lat:34.1515373, lng:-118.0740062},
				{lat:34.1524776, lng:-118.0734735},
				{lat:34.1524898, lng:-118.067933},
				{lat:34.1503561, lng:-118.0679298},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 23.9, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 32.5, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 32.6, pathId:3},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 31.9, pathId:4},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 32.6, pathId:3},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 32.4, pathId:5},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 31.9, pathId:4},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 27.8, pathId:6},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 23.6, pathId:0},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 27.5, pathId:7},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 23.6, pathId:0},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 23.6, pathId:0},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 23.6, pathId:0},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 23.6, pathId:0},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 23.6, pathId:0},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 23.6, pathId:0},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 27.4, pathId:9},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 26.2, pathId:11},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 25.1, pathId:12},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 22.9, pathId:13},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 22.9, pathId:13},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 25.1, pathId:12},
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 23.3, pathId:8},
				{duration: 23.6, pathId:0},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 23.3, pathId:8},
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 23.3, pathId:8},
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 23.3, pathId:8},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 22.9, pathId:13},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 20.2, pathId:14},
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 20.2, pathId:14},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 20.2, pathId:14},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 20.2, pathId:14},
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 20.2, pathId:14},
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 19.9, pathId:10},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 19.4, pathId:15},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 18.7, pathId:16},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 23.6, pathId: 0},
				{duration: 23.9, pathId: 1},
				{duration: 32.5, pathId: 2},
				{duration: 32.6, pathId: 3},
				{duration: 31.9, pathId: 4},
				{duration: 32.4, pathId: 5},
				{duration: 27.8, pathId: 6},
				{duration: 27.5, pathId: 7},
				{duration: 23.3, pathId: 8},
				{duration: 27.4, pathId: 9},
				{duration: 19.9, pathId: 10},
				{duration: 26.2, pathId: 11},
				{duration: 25.1, pathId: 12},
				{duration: 22.9, pathId: 13},
				{duration: 20.2, pathId: 14},
				{duration: 19.4, pathId: 15},
				{duration: 18.7, pathId: 16},
			]
		}
	];

	return {
		O: 'A',
		D: 'D',
		minDuration: 18.7,
		maxDuration: 32.6,
		paths: paths,
		data: data
	}
};