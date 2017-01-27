//date: 012417
function getObj() {
	var paths = [
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 18425,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1481661, lng:-118.0734183},
				{lat:34.1469478, lng:-118.0696132},
				{lat:34.1478753, lng:-118.0678707},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Orange Grove Blvd',
			len: 18656,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1583988, lng:-118.0941503},
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
			len: 18400,
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
				{lat:34.151431, lng:-117.994965},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 18329,
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
				{lat:34.145984, lng:-117.994957},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and E Foothill Blvd',
			len: 18458,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1482967, lng:-118.0861256},
				{lat:34.1471997, lng:-118.0819587},
				{lat:34.1500816, lng:-118.0824485},
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
			desc: 'I-210 E and E Foothill Blvd',
			len: 18022,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
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
			desc: 'I-210 E',
			len: 18982,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1482967, lng:-118.0861256},
				{lat:34.1471997, lng:-118.0819587},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
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
			len: 18710,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1481661, lng:-118.0734183},
				{lat:34.1469478, lng:-118.0696132},
				{lat:34.1482864, lng:-118.0498266},
				{lat:34.1472917, lng:-118.0498344},
				{lat:34.1505388, lng:-118.0501817},
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
			desc: 'I-210 E',
			len: 18456,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1480961, lng:-118.0345993},
				{lat:34.1474459, lng:-118.031678},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 26.3, pathId:0},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 26.8, pathId:1},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 26.8, pathId:1},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 27.0, pathId:1},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 27.3, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 27.2, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 27.1, pathId:1},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 27.6, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 28.1, pathId:1},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 28.2, pathId:1},
				{duration: 28.3, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 28.2, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 28.7, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 29.7, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 30.0, pathId:1},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 28.7, pathId:1},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 29.5, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 29.7, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 30.6, pathId:3},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 28.2, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 28.3, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 28.3, pathId:1},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 28.1, pathId:1},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 27.9, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 28.7, pathId:1},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 28.2, pathId:1},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 28.3, pathId:1},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 28.1, pathId:1},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 27.9, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 30.0, pathId:1},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 31.5, pathId:1},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 30.5, pathId:1},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 31.0, pathId:1},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 31.4, pathId:1},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 30.8, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 30.7, pathId:4},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 31.6, pathId:1},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 31.6, pathId:4},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 31.2, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 30.4, pathId:1},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 31.0, pathId:1},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 31.4, pathId:4},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 31.5, pathId:1},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 31.5, pathId:4},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 31.6, pathId:4},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 31.5, pathId:1},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 33.0, pathId:1},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 33.8, pathId:4},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 33.1, pathId:5},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 34.7, pathId:4},
				{duration: 35.0, pathId:6},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 34.3, pathId:7},
				{duration: 35.5, pathId:4},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 34.8, pathId:7},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 34.6, pathId:4},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 34.2, pathId:4},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 34.3, pathId:8},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 33.5, pathId:8},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 32.6, pathId:1},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 31.5, pathId:1},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 30.8, pathId:1},
				{duration: 31.1, pathId:9},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 30.4, pathId:4},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 30.4, pathId:4},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 30.4, pathId:4},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 30.6, pathId:4},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 30.2, pathId:4},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 30.7, pathId:4},
				{duration: 30.5, pathId:9},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 30.9, pathId:1},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 30.0, pathId:4},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 31.1, pathId:10},
				{duration: 30.9, pathId:4},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 31.6, pathId:10},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 30.9, pathId:10},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 30.5, pathId:10},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 30.5, pathId:10},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 30.0, pathId:10},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 29.4, pathId:10},
				{duration: 29.4, pathId:4},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 29.1, pathId:10},
				{duration: 29.6, pathId:4},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 27.4, pathId:1},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 28.8, pathId:11},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 28.4, pathId:11},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 28.7, pathId:11},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 27.0, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 27.9, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 27.3, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 27.1, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 27.2, pathId:1},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 27.0, pathId:1},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 27.1, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 26.3, pathId: 0},
				{duration: 29.0, pathId: 1},
				{duration: 28.3, pathId: 2},
				{duration: 30.6, pathId: 3},
				{duration: 31.6, pathId: 4},
				{duration: 33.1, pathId: 5},
				{duration: 35.0, pathId: 6},
				{duration: 34.5, pathId: 7},
				{duration: 33.9, pathId: 8},
				{duration: 30.8, pathId: 9},
				{duration: 30.4, pathId: 10},
				{duration: 28.6, pathId: 11},
			]
		}
	];

	return {
		O: 'A',
		D: 'D',
		minDuration: 26.3,
		maxDuration: 35.5,
		paths: paths,
		data: data
	}
};