//date: 012617
function getObj() {
	var paths = [
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
			desc: 'Orange Grove Blvd',
			len: 19000,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1583988, lng:-118.0941503},
				{lat:34.1613472, lng:-118.0908166},
				{lat:34.1616356, lng:-118.0688212},
				{lat:34.1616383, lng:-118.0680406},
				{lat:34.1568007, lng:-118.0679611},
				{lat:34.157011, lng:-118.0565726},
				{lat:34.1585143, lng:-118.0565668},
				{lat:34.1585899, lng:-118.0528795},
				{lat:34.1570654, lng:-118.0529758},
				{lat:34.15735069999999, lng:-118.0318588},
				{lat:34.1510229, lng:-118.0317367},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and E Foothill Blvd',
			len: 18018,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1523435, lng:-118.1051347},
				{lat:34.1520219, lng:-118.0998694},
				{lat:34.1517526, lng:-118.0959823},
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
			desc: 'I-210 E',
			len: 19965,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1523435, lng:-118.1051347},
				{lat:34.1520219, lng:-118.0998694},
				{lat:34.1517526, lng:-118.0959823},
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
			len: 17889,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1496535, lng:-118.1535906},
				{lat:34.1512557, lng:-118.1457319},
				{lat:34.1512661, lng:-118.1320423},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
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
			desc: 'Orange Grove Blvd and W Foothill Blvd',
			len: 18470,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1582873, lng:-118.0984609},
				{lat:34.1509228, lng:-118.09864},
				{lat:34.1517057, lng:-118.0956886},
				{lat:34.1517051, lng:-118.0935153},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Orange Grove Blvd',
			len: 18580,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.15789230000001, lng:-118.0815322},
				{lat:34.1548872, lng:-118.0784573},
				{lat:34.1568007, lng:-118.0679611},
				{lat:34.157011, lng:-118.0565726},
				{lat:34.1585143, lng:-118.0565668},
				{lat:34.1585899, lng:-118.0528795},
				{lat:34.1570654, lng:-118.0529758},
				{lat:34.15735069999999, lng:-118.0318588},
				{lat:34.1510229, lng:-118.0317367},
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
			desc: 'I-210 E and W Foothill Blvd',
			len: 18298,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1578874, lng:-118.1131851},
				{lat:34.1518083, lng:-118.1132899},
				{lat:34.1518598, lng:-118.1128484},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and E Foothill Blvd',
			len: 18092,
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
				{lat:34.1498797, lng:-118.094284},
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
			desc: 'I-210 E and W Foothill Blvd',
			len: 18053,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1494834, lng:-118.1459641},
				{lat:34.1512582, lng:-118.145992},
				{lat:34.1512557, lng:-118.1457319},
				{lat:34.1512661, lng:-118.1320423},
				{lat:34.1518598, lng:-118.1128484},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Foothill Blvd',
			len: 18023,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1516336, lng:-118.1382962},
				{lat:34.1512964, lng:-118.134001},
				{lat:34.1512661, lng:-118.1320423},
				{lat:34.1517526, lng:-118.0959823},
				{lat:34.1517051, lng:-118.0935153},
				{lat:34.1508556, lng:-118.0905196},
				{lat:34.1499974, lng:-118.0905104},
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
			desc: 'I-210 E and W Foothill Blvd',
			len: 18096,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1495508, lng:-118.1131877},
				{lat:34.1518281, lng:-118.113081},
				{lat:34.1518598, lng:-118.1128484},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
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
			desc: 'I-210 E and W Foothill Blvd',
			len: 18284,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1578122, lng:-118.121449},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 17890,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1496535, lng:-118.1535906},
				{lat:34.1512557, lng:-118.1457319},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Orange Grove Blvd and W Foothill Blvd',
			len: 18311,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1582873, lng:-118.0984609},
				{lat:34.152021, lng:-118.098628},
				{lat:34.1517526, lng:-118.0959823},
				{lat:34.1517051, lng:-118.0935153},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
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
			desc: 'I-210 E and E Foothill Blvd',
			len: 18356,
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
				{lat:34.1498797, lng:-118.094284},
				{lat:34.1508454, lng:-118.0364332},
				{lat:34.1498217, lng:-118.0368362},
				{lat:34.1498819, lng:-118.0327643},
				{lat:34.150156, lng:-118.0325994},
				{lat:34.1501462, lng:-118.0317334},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Foothill Blvd',
			len: 18014,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1517638, lng:-118.1263372},
				{lat:34.151771, lng:-118.1224831},
				{lat:34.1517526, lng:-118.0959823},
				{lat:34.1517051, lng:-118.0935153},
				{lat:34.1508556, lng:-118.0905196},
				{lat:34.1499974, lng:-118.0905104},
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
			desc: 'E Foothill Blvd',
			len: 18084,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1517638, lng:-118.1263372},
				{lat:34.151771, lng:-118.1224831},
				{lat:34.1517526, lng:-118.0959823},
				{lat:34.1516867, lng:-118.0943839},
				{lat:34.1498797, lng:-118.094284},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Orange Grove Blvd and Sierra Madre Blvd',
			len: 18636,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1583988, lng:-118.0941503},
				{lat:34.1613472, lng:-118.0908166},
				{lat:34.1616356, lng:-118.0688212},
				{lat:34.1619891, lng:-118.0319309},
				{lat:34.1510229, lng:-118.0317367},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Foothill Blvd',
			len: 19041,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1517638, lng:-118.1263372},
				{lat:34.151771, lng:-118.1224831},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.1578122, lng:-118.121449},
				{lat:34.15789230000001, lng:-118.0815322},
				{lat:34.1502756, lng:-118.0735109},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 18323,
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
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
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
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 30.5, pathId:0},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 31.4, pathId:0},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 32.5, pathId:1},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 30.9, pathId:2},
				{duration: 32.0, pathId:3},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 30.4, pathId:4},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 32.8, pathId:5},
				{duration: 31.6, pathId:4},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 32.1, pathId:6},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 30.6, pathId:7},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 30.1, pathId:8},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 30.3, pathId:8},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 29.7, pathId:8},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 29.8, pathId:8},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 31.5, pathId:8},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 31.4, pathId:9},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 30.9, pathId:8},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 32.2, pathId:8},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 31.2, pathId:10},
				{duration: 31.3, pathId:8},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 31.2, pathId:8},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 30.6, pathId:8},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 30.4, pathId:8},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 30.8, pathId:8},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 31.9, pathId:8},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 32.2, pathId:8},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 32.2, pathId:8},
				{duration: 31.9, pathId:10},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 32.3, pathId:8},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 32.4, pathId:8},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 32.8, pathId:8},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 32.4, pathId:8},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 32.2, pathId:8},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 31.8, pathId:8},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 32.2, pathId:8},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 34.3, pathId:8},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 35.0, pathId:11},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 33.9, pathId:12},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 34.9, pathId:12},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 35.0, pathId:13},
				{duration: 35.9, pathId:14},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 34.7, pathId:15},
				{duration: 34.0, pathId:16},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 36.4, pathId:15},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 36.1, pathId:17},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 35.9, pathId:15},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 34.4, pathId:18},
				{duration: 34.6, pathId:11},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 34.4, pathId:13},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 35.5, pathId:19},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 34.1, pathId:11},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 35.5, pathId:13},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 34.2, pathId:11},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 35.0, pathId:8},
				{duration: 34.4, pathId:11},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 34.0, pathId:20},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 35.1, pathId:20},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 32.2, pathId:11},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 33.0, pathId:11},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 33.9, pathId:11},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 34.0, pathId:21},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 38.4, pathId:21},
				{duration: 35.7, pathId:11},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 35.4, pathId:11},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 36.1, pathId:13},
				{duration: 34.2, pathId:11},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 36.4, pathId:8},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 34.8, pathId:11},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 34.5, pathId:11},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 36.1, pathId:11},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 37.0, pathId:11},
				{duration: 36.0, pathId:20},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 36.0, pathId:13},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 35.6, pathId:18},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 36.1, pathId:11},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 35.5, pathId:11},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 36.0, pathId:18},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 35.0, pathId:22},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 35.8, pathId:13},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 36.6, pathId:13},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 35.9, pathId:23},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 36.6, pathId:14},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 37.8, pathId:14},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 37.8, pathId:8},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 36.6, pathId:24},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 37.5, pathId:25},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 40.2, pathId:20},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 38.6, pathId:11},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 37.7, pathId:23},
				{duration: 38.1, pathId:20},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 39.0, pathId:20},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 37.8, pathId:26},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 37.8, pathId:27},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 36.1, pathId:9},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 38.2, pathId:11},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 35.6, pathId:9},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 36.8, pathId:11},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 36.1, pathId:11},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 36.4, pathId:11},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 38.7, pathId:11},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 37.1, pathId:9},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 36.6, pathId:11},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 37.9, pathId:14},
				{duration: 37.2, pathId:8},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 35.0, pathId:18},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 35.9, pathId:18},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 35.8, pathId:13},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 35.9, pathId:13},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 36.7, pathId:13},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 34.1, pathId:15},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 35.5, pathId:15},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 33.8, pathId:15},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 35.5, pathId:19},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 35.5, pathId:25},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 34.5, pathId:28},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 35.1, pathId:29},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 34.9, pathId:19},
				{duration: 34.6, pathId:17},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 33.7, pathId:9},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 32.6, pathId:9},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 33.1, pathId:8},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 34.1, pathId:13},
				{duration: 32.7, pathId:9},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 33.4, pathId:30},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 33.1, pathId:9},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 32.7, pathId:9},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 32.4, pathId:31},
				{duration: 32.2, pathId:9},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 31.7, pathId:9},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 32.0, pathId:9},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 32.9, pathId:9},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 31.1, pathId:8},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 31.9, pathId:9},
				{duration: 30.7, pathId:8},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 29.8, pathId:8},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 30.6, pathId:8},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 29.7, pathId:8},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 30.9, pathId: 0},
				{duration: 32.5, pathId: 1},
				{duration: 30.9, pathId: 2},
				{duration: 32.0, pathId: 3},
				{duration: 31.0, pathId: 4},
				{duration: 32.8, pathId: 5},
				{duration: 32.1, pathId: 6},
				{duration: 30.6, pathId: 7},
				{duration: 32.0, pathId: 8},
				{duration: 33.3, pathId: 9},
				{duration: 31.5, pathId: 10},
				{duration: 35.5, pathId: 11},
				{duration: 34.4, pathId: 12},
				{duration: 35.6, pathId: 13},
				{duration: 37.0, pathId: 14},
				{duration: 35.1, pathId: 15},
				{duration: 34.0, pathId: 16},
				{duration: 35.4, pathId: 17},
				{duration: 35.4, pathId: 18},
				{duration: 35.3, pathId: 19},
				{duration: 37.1, pathId: 20},
				{duration: 36.2, pathId: 21},
				{duration: 35.0, pathId: 22},
				{duration: 36.8, pathId: 23},
				{duration: 36.6, pathId: 24},
				{duration: 36.5, pathId: 25},
				{duration: 37.8, pathId: 26},
				{duration: 37.8, pathId: 27},
				{duration: 34.5, pathId: 28},
				{duration: 35.1, pathId: 29},
				{duration: 33.4, pathId: 30},
				{duration: 32.4, pathId: 31},
			]
		}
	];

	return {
		O: 'A',
		D: 'D',
		minDuration: 29.7,
		maxDuration: 40.2,
		paths: paths,
		data: data
	}
};