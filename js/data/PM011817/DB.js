//date: 011817
function getObj() {
	var paths = [
		{
			desc: 'E Foothill Blvd and I-210 W',
			len: 14407,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1509748, lng:-118.0313829},
				{lat:34.1483887, lng:-118.0316898},
				{lat:34.1484774, lng:-118.0354901},
				{lat:34.1513279, lng:-118.0900466},
				{lat:34.1528543, lng:-118.0930308},
				{lat:34.1529979, lng:-118.0940815},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Foothill Blvd',
			len: 14234,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1506042, lng:-118.0533021},
				{lat:34.1513279, lng:-118.0900466},
				{lat:34.1528543, lng:-118.0930308},
				{lat:34.1529979, lng:-118.0940815},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Foothill Blvd and Del Mar Blvd',
			len: 14043,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.15065850000001, lng:-118.050183},
				{lat:34.1473239, lng:-118.0503517},
				{lat:34.1482891, lng:-118.0506708},
				{lat:34.1463503, lng:-118.0733284},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 15343,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1358758, lng:-117.9950504},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 14737,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1509748, lng:-118.0313829},
				{lat:34.1483887, lng:-118.0316898},
				{lat:34.1484774, lng:-118.0354901},
				{lat:34.1525409, lng:-118.1167602},
				{lat:34.1528691, lng:-118.1206175},
				{lat:34.1528709, lng:-118.1213202},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 15649,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148148, lng:-117.994966},
				{lat:34.1358758, lng:-117.9950504},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1513279, lng:-118.0900466},
				{lat:34.1528543, lng:-118.0930308},
				{lat:34.1529979, lng:-118.0940815},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 15328,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1358758, lng:-117.9950504},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.146181, lng:-118.094578},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Foothill Blvd',
			len: 13908,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1506042, lng:-118.0533021},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.146181, lng:-118.094578},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Foothill Blvd, I-210 W and E Del Mar Blvd',
			len: 14095,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1509748, lng:-118.0313829},
				{lat:34.1483887, lng:-118.0316898},
				{lat:34.1484774, lng:-118.0354901},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 14708,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1509748, lng:-118.0313829},
				{lat:34.1483887, lng:-118.0316898},
				{lat:34.1484774, lng:-118.0354901},
				{lat:34.1513279, lng:-118.0900466},
				{lat:34.1528543, lng:-118.0930308},
				{lat:34.1529979, lng:-118.0940815},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Foothill Blvd and I-210 W',
			len: 14080,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1509748, lng:-118.0313829},
				{lat:34.1483887, lng:-118.0316898},
				{lat:34.1484774, lng:-118.0354901},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.146181, lng:-118.094578},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Foothill Blvd and E Del Mar Blvd',
			len: 13923,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1506042, lng:-118.0533021},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Foothill Blvd, W Foothill Blvd and Del Mar Blvd',
			len: 13933,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1502794, lng:-118.0733801},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Foothill Blvd and Colorado St',
			len: 14035,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.15065850000001, lng:-118.050183},
				{lat:34.1473239, lng:-118.0503517},
				{lat:34.1482891, lng:-118.0506708},
				{lat:34.146181, lng:-118.094578},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 15655,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1358758, lng:-117.9950504},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1513279, lng:-118.0900466},
				{lat:34.1528543, lng:-118.0930308},
				{lat:34.1529979, lng:-118.0940815},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Foothill Blvd and Del Mar Blvd',
			len: 14331,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1509748, lng:-118.0313829},
				{lat:34.1455063, lng:-118.0316305},
				{lat:34.1456956, lng:-118.041474},
				{lat:34.1463503, lng:-118.0733284},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Foothill Blvd and Del Mar Blvd',
			len: 13954,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1503633, lng:-118.06779},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Del Mar Blvd',
			len: 14324,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1511144, lng:-118.0207063},
				{lat:34.1456642, lng:-118.0205855},
				{lat:34.1456956, lng:-118.041474},
				{lat:34.1463503, lng:-118.0733284},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 15979,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148148, lng:-117.994966},
				{lat:34.1358758, lng:-117.9950504},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1525409, lng:-118.1167602},
				{lat:34.1528691, lng:-118.1206175},
				{lat:34.1528709, lng:-118.1213202},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 21.2, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 21.6, pathId:1},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 21.4, pathId:1},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 21.0, pathId:1},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 21.1, pathId:1},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 21.4, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 21.6, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 21.3, pathId:1},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 21.3, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 21.1, pathId:1},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 20.9, pathId:1},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 21.8, pathId:1},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 21.6, pathId:1},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 21.8, pathId:1},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 21.6, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 22.2, pathId:1},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 22.1, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 22.1, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 22.6, pathId:0},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 22.2, pathId:0},
				{duration: 22.4, pathId:1},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 21.8, pathId:0},
				{duration: 22.1, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 21.8, pathId:2},
				{duration: 22.1, pathId:3},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 22.9, pathId:1},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 21.8, pathId:1},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 21.7, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 21.8, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 22.2, pathId:0},
				{duration: 22.1, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 21.7, pathId:0},
				{duration: 21.9, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 22.2, pathId:0},
				{duration: 22.5, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 21.8, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 22.2, pathId:0},
				{duration: 22.6, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 22.5, pathId:1},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 22.1, pathId:1},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 21.7, pathId:1},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 22.1, pathId:1},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 22.2, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 22.6, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 22.5, pathId:1},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 21.8, pathId:0},
				{duration: 22.5, pathId:1},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 21.0, pathId:4},
				{duration: 21.9, pathId:3},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 21.4, pathId:4},
				{duration: 22.3, pathId:3},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 22.4, pathId:0},
				{duration: 23.3, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 24.0, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 24.1, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 24.3, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 22.1, pathId:5},
				{duration: 22.9, pathId:4},
				{duration: 23.0, pathId:6},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 22.1, pathId:5},
				{duration: 22.8, pathId:6},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 22.4, pathId:5},
				{duration: 22.7, pathId:6},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 22.4, pathId:7},
				{duration: 22.7, pathId:8},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 23.5, pathId:7},
				{duration: 23.2, pathId:8},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 23.5, pathId:8},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 24.5, pathId:8},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 24.1, pathId:8},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 24.1, pathId:8},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 24.6, pathId:6},
				{duration: 24.5, pathId:8},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 25.0, pathId:8},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 24.5, pathId:8},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 26.0, pathId:9},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 25.1, pathId:10},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 26.2, pathId:11},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 25.8, pathId:12},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 26.4, pathId:13},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 26.9, pathId:13},
				{duration: 25.7, pathId:6},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 27.4, pathId:13},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 25.9, pathId:14},
				{duration: 26.6, pathId:12},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 25.8, pathId:14},
				{duration: 26.9, pathId:15},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 25.5, pathId:11},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 25.2, pathId:11},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 25.5, pathId:11},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 25.0, pathId:8},
				{duration: 24.5, pathId:11},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 24.8, pathId:10},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 25.2, pathId:10},
				{duration: 25.4, pathId:11},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 26.5, pathId:10},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 25.3, pathId:6},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 25.9, pathId:10},
				{duration: 26.1, pathId:6},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 27.0, pathId:13},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 27.1, pathId:12},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 27.2, pathId:15},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 27.0, pathId:15},
				{duration: 26.5, pathId:13},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 26.0, pathId:11},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 26.6, pathId:13},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 26.2, pathId:16},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 26.3, pathId:16},
				{duration: 25.7, pathId:10},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 26.4, pathId:17},
				{duration: 26.6, pathId:12},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 26.5, pathId:13},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 25.1, pathId:10},
				{duration: 25.9, pathId:13},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 25.8, pathId:13},
				{duration: 26.4, pathId:12},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 25.9, pathId:13},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 25.7, pathId:13},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 24.8, pathId:11},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 25.0, pathId:11},
				{duration: 25.7, pathId:13},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 25.5, pathId:13},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 25.1, pathId:10},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 24.5, pathId:10},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 24.6, pathId:11},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 24.7, pathId:10},
				{duration: 24.7, pathId:11},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 25.3, pathId:11},
				{duration: 25.9, pathId:1},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 23.8, pathId:8},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 23.7, pathId:8},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 24.0, pathId:6},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 23.9, pathId:6},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 24.4, pathId:1},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 24.0, pathId:6},
				{duration: 24.8, pathId:1},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 23.3, pathId:6},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 23.4, pathId:8},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 23.2, pathId:8},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 23.9, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 23.4, pathId:8},
				{duration: 23.3, pathId:1},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 23.3, pathId:1},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 22.8, pathId:8},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 22.3, pathId:18},
				{duration: 22.5, pathId:8},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 22.1, pathId:8},
				{duration: 22.6, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 22.5, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 22.5, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 22.3, pathId:1},
				{duration: 21.9, pathId:3},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 21.9, pathId:8},
				{duration: 22.3, pathId:1},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 22.2, pathId:0},
				{duration: 22.1, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 22.0, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 22.2, pathId:0},
				{duration: 22.4, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 21.6, pathId: 0},
				{duration: 22.4, pathId: 1},
				{duration: 21.8, pathId: 2},
				{duration: 22.0, pathId: 3},
				{duration: 21.8, pathId: 4},
				{duration: 22.2, pathId: 5},
				{duration: 24.1, pathId: 6},
				{duration: 22.9, pathId: 7},
				{duration: 23.6, pathId: 8},
				{duration: 26.0, pathId: 9},
				{duration: 25.3, pathId: 10},
				{duration: 25.2, pathId: 11},
				{duration: 26.5, pathId: 12},
				{duration: 26.3, pathId: 13},
				{duration: 25.9, pathId: 14},
				{duration: 27.0, pathId: 15},
				{duration: 26.2, pathId: 16},
				{duration: 26.4, pathId: 17},
				{duration: 22.3, pathId: 18},
			]
		}
	];

	return {
		O: 'D',
		D: 'B',
		minDuration: 20.4,
		maxDuration: 27.4,
		paths: paths,
		data: data
	}
};