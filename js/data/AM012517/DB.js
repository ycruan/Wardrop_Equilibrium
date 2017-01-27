//date: 012517
function getObj() {
	var paths = [
		{
			desc: 'I-210 W',
			len: 14561,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1506042, lng:-118.0533021},
				{lat:34.1526595, lng:-118.1068535},
				{lat:34.1529556, lng:-118.111604},
				{lat:34.1529515, lng:-118.1130827},
				{lat:34.1419678, lng:-118.1131253},
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
			desc: 'Colorado Pl',
			len: 14324,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1511144, lng:-118.0207063},
				{lat:34.1456642, lng:-118.0205855},
				{lat:34.1456956, lng:-118.041474},
				{lat:34.1461384, lng:-118.1015859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E California Blvd',
			len: 14927,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1503633, lng:-118.06779},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 14733,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1509748, lng:-118.0313829},
				{lat:34.1483887, lng:-118.0316898},
				{lat:34.1484774, lng:-118.0354901},
				{lat:34.1526595, lng:-118.1068535},
				{lat:34.1529556, lng:-118.111604},
				{lat:34.1529515, lng:-118.1130827},
				{lat:34.1419678, lng:-118.1131253},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E California Blvd',
			len: 15163,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.15065850000001, lng:-118.050183},
				{lat:34.1318428, lng:-118.0545846},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358717, lng:-118.11307},
				{lat:34.1378295, lng:-118.1130643},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E California Blvd',
			len: 15158,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.15065850000001, lng:-118.050183},
				{lat:34.1318428, lng:-118.0545846},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
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
			desc: 'I-210 W',
			len: 14564,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1506042, lng:-118.0533021},
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
			desc: 'Huntington Dr and E California Blvd',
			len: 14389,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1405681, lng:-117.995021},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
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
			desc: 'E Foothill Blvd and Del Mar Blvd',
			len: 13820,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1503633, lng:-118.06779},
				{lat:34.1479979, lng:-118.0678472},
				{lat:34.1463503, lng:-118.0733284},
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
		{
			desc: 'E Foothill Blvd',
			len: 13812,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1503633, lng:-118.06779},
				{lat:34.1479979, lng:-118.0678472},
				{lat:34.146181, lng:-118.094578},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
	];

	var data = [
		{
			time: '05:00 AM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 22.4, pathId:1},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 22.7, pathId:1},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 22.7, pathId:1},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 22.6, pathId:1},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 22.7, pathId:1},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 22.6, pathId:1},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 22.5, pathId:1},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 22.6, pathId:1},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 22.7, pathId:1},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 22.7, pathId:1},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 22.7, pathId:1},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 22.9, pathId:1},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 23.0, pathId:1},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 22.9, pathId:1},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 22.9, pathId:1},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 23.0, pathId:1},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 22.9, pathId:1},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 23.0, pathId:1},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 23.0, pathId:1},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 23.4, pathId:1},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 23.5, pathId:1},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 23.6, pathId:1},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 23.7, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 23.6, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 23.8, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 24.0, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 19.6, pathId:2},
				{duration: 24.2, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 20.0, pathId:2},
				{duration: 24.3, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 20.0, pathId:3},
				{duration: 24.2, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 20.1, pathId:3},
				{duration: 24.1, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 19.5, pathId:2},
				{duration: 23.8, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 19.7, pathId:2},
				{duration: 23.8, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 19.9, pathId:2},
				{duration: 23.9, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 20.0, pathId:2},
				{duration: 24.1, pathId:1},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 20.2, pathId:2},
				{duration: 24.1, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 20.3, pathId:2},
				{duration: 24.0, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 20.8, pathId:2},
				{duration: 23.8, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 21.2, pathId:4},
				{duration: 23.8, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 21.0, pathId:5},
				{duration: 24.2, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 20.8, pathId:2},
				{duration: 24.4, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 21.3, pathId:2},
				{duration: 24.5, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 21.0, pathId:6},
				{duration: 24.4, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 21.3, pathId:7},
				{duration: 24.3, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 20.9, pathId:2},
				{duration: 24.2, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 21.4, pathId:2},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 22.1, pathId:7},
				{duration: 24.2, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 22.3, pathId:8},
				{duration: 24.4, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 22.6, pathId:8},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 22.4, pathId:8},
				{duration: 24.2, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 22.2, pathId:8},
				{duration: 23.6, pathId:1},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 22.1, pathId:8},
				{duration: 24.1, pathId:1},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 22.4, pathId:8},
				{duration: 24.3, pathId:1},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 23.0, pathId:8},
				{duration: 24.8, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 22.7, pathId:8},
				{duration: 24.7, pathId:1},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 22.9, pathId:8},
				{duration: 25.0, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 22.9, pathId:8},
				{duration: 24.7, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 23.7, pathId:8},
				{duration: 25.5, pathId:1},
				{duration: 23.1, pathId:9},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 23.2, pathId:9},
				{duration: 25.2, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 24.2, pathId:8},
				{duration: 25.8, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 23.6, pathId:9},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 24.6, pathId:8},
				{duration: 25.8, pathId:1},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 24.7, pathId:8},
				{duration: 26.1, pathId:1},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 24.6, pathId:8},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 26.4, pathId:9},
				{duration: 28.0, pathId:1},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 25.7, pathId:10},
				{duration: 26.9, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 26.2, pathId:11},
				{duration: 27.9, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 25.9, pathId:11},
				{duration: 27.5, pathId:1},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 26.2, pathId:9},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 26.6, pathId:9},
				{duration: 27.9, pathId:1},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 27.1, pathId:11},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 27.3, pathId:9},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 27.2, pathId:12},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 27.7, pathId:12},
				{duration: 29.7, pathId:1},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 27.4, pathId:12},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 27.2, pathId:8},
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 27.5, pathId:9},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 28.2, pathId:8},
				{duration: 29.7, pathId:1},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 27.9, pathId:9},
				{duration: 27.8, pathId:13},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 27.9, pathId:9},
				{duration: 28.2, pathId:13},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 27.0, pathId:9},
				{duration: 27.6, pathId:13},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 27.9, pathId:8},
				{duration: 27.9, pathId:13},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 26.5, pathId:9},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 26.7, pathId:9},
				{duration: 28.1, pathId:1},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 27.5, pathId:8},
				{duration: 27.6, pathId:14},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 27.3, pathId:9},
				{duration: 28.1, pathId:1},
				{duration: 26.7, pathId:8},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 27.3, pathId:8},
				{duration: 27.3, pathId:13},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 27.6, pathId:9},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 28.8, pathId:8},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 27.4, pathId:9},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 27.8, pathId:9},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 28.5, pathId:8},
				{duration: 30.3, pathId:1},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 28.6, pathId:12},
				{duration: 28.6, pathId:13},
				{duration: 30.2, pathId:8},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 29.9, pathId:8},
				{duration: 30.8, pathId:1},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 28.8, pathId:12},
				{duration: 30.4, pathId:15},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 28.2, pathId:12},
				{duration: 29.5, pathId:1},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 28.6, pathId:9},
				{duration: 29.7, pathId:1},
				{duration: 28.7, pathId:8},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 27.6, pathId:12},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 27.1, pathId:12},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 26.1, pathId:8},
				{duration: 27.6, pathId:1},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 25.8, pathId:9},
				{duration: 27.8, pathId:1},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 25.8, pathId:8},
				{duration: 27.6, pathId:1},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 24.3, pathId:9},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 24.5, pathId:9},
				{duration: 27.4, pathId:1},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 24.4, pathId:9},
				{duration: 25.6, pathId:13},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 24.8, pathId:9},
				{duration: 25.9, pathId:13},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 24.6, pathId:9},
				{duration: 26.9, pathId:1},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 24.6, pathId:9},
				{duration: 27.3, pathId:1},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 25.5, pathId:9},
				{duration: 27.1, pathId:1},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 25.0, pathId:9},
				{duration: 27.0, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 24.8, pathId:9},
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 24.2, pathId:9},
				{duration: 26.7, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 18.3, pathId: 0},
				{duration: 25.4, pathId: 1},
				{duration: 20.3, pathId: 2},
				{duration: 20.1, pathId: 3},
				{duration: 21.2, pathId: 4},
				{duration: 21.0, pathId: 5},
				{duration: 21.0, pathId: 6},
				{duration: 21.7, pathId: 7},
				{duration: 25.4, pathId: 8},
				{duration: 25.9, pathId: 9},
				{duration: 25.7, pathId: 10},
				{duration: 26.4, pathId: 11},
				{duration: 27.8, pathId: 12},
				{duration: 27.4, pathId: 13},
				{duration: 27.6, pathId: 14},
				{duration: 30.4, pathId: 15},
			]
		}
	];

	return {
		O: 'D',
		D: 'B',
		minDuration: 17.6,
		maxDuration: 30.8,
		paths: paths,
		data: data
	}
};