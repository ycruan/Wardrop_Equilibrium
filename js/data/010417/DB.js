//date: 010417
function getObj() {
	var paths = [
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
	];

	var data = [
		{
			time: '06:00 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 18.7, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 19.3, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 19.4, pathId:1},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 20.0, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 20.2, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 20.2, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 20.6, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 20.6, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 20.3, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 20.6, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 20.9, pathId:2},
				{duration: 20.9, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 20.6, pathId:1},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 21.5, pathId:2},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 21.3, pathId:2},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 21.4, pathId:2},
				{duration: 22.1, pathId:3},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 22.1, pathId:3},
				{duration: 22.0, pathId:1},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 22.3, pathId:3},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 22.7, pathId:3},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 22.8, pathId:3},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 23.1, pathId:3},
				{duration: 23.0, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 22.9, pathId:3},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 23.3, pathId:3},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 23.6, pathId:3},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 24.2, pathId:4},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 24.1, pathId:3},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 24.0, pathId:3},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 24.4, pathId:3},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 23.8, pathId:3},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 24.0, pathId:3},
				{duration: 24.5, pathId:4},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 23.9, pathId:3},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 23.9, pathId:3},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 24.1, pathId:3},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 24.4, pathId:3},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 24.2, pathId:3},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 24.4, pathId:3},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 24.6, pathId:3},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 24.7, pathId:3},
				{duration: 25.6, pathId:5},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 26.0, pathId:3},
				{duration: 26.0, pathId:5},
				{duration: 25.4, pathId:4},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 24.8, pathId:4},
				{duration: 25.9, pathId:5},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 24.6, pathId:4},
				{duration: 25.8, pathId:5},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 24.6, pathId:4},
				{duration: 25.4, pathId:5},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 23.6, pathId:3},
				{duration: 25.9, pathId:5},
				{duration: 25.1, pathId:4},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 24.1, pathId:3},
				{duration: 24.6, pathId:5},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 23.9, pathId:4},
				{duration: 24.7, pathId:5},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 23.5, pathId:4},
				{duration: 24.6, pathId:5},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 23.4, pathId:3},
				{duration: 24.5, pathId:5},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 25.3, pathId:4},
				{duration: 26.2, pathId:5},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 25.0, pathId:3},
				{duration: 25.8, pathId:5},
				{duration: 24.9, pathId:4},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 24.8, pathId:3},
				{duration: 26.6, pathId:5},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 25.4, pathId:3},
				{duration: 27.0, pathId:5},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 25.2, pathId:3},
				{duration: 26.5, pathId:5},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 25.7, pathId:3},
				{duration: 26.5, pathId:5},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 25.6, pathId:3},
				{duration: 26.7, pathId:5},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 25.9, pathId:3},
				{duration: 27.0, pathId:1},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 25.9, pathId:3},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 25.7, pathId:4},
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 25.0, pathId:3},
				{duration: 26.5, pathId:5},
				{duration: 25.7, pathId:4},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 25.4, pathId:3},
				{duration: 25.9, pathId:5},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 25.0, pathId:4},
				{duration: 25.9, pathId:5},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 25.2, pathId:4},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 24.8, pathId:4},
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 24.4, pathId:4},
				{duration: 24.8, pathId:1},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 24.6, pathId:4},
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 24.6, pathId:3},
				{duration: 25.0, pathId:1},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 24.7, pathId:4},
				{duration: 24.7, pathId:1},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 24.4, pathId:1},
				{duration: 24.3, pathId:6},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 24.4, pathId:1},
				{duration: 25.0, pathId:4},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 23.9, pathId:1},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 23.1, pathId:0},
				{duration: 23.8, pathId:1},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 22.7, pathId:0},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 22.2, pathId:1},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 22.1, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 21.2, pathId:1},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 20.5, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.8, pathId: 0},
				{duration: 21.5, pathId: 1},
				{duration: 21.2, pathId: 2},
				{duration: 24.2, pathId: 3},
				{duration: 24.8, pathId: 4},
				{duration: 25.8, pathId: 5},
				{duration: 24.3, pathId: 6},
			]
		}
	];

	return {
		O: 'D',
		D: 'B',
		minDuration: 18.6,
		maxDuration: 27.0,
		paths: paths,
		data: data
	}
};