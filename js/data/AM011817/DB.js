//date: 011817
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
			desc: 'Huntington Dr, Colorado Pl and Del Mar Blvd',
			len: 14658,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1405681, lng:-117.995021},
				{lat:34.1400471, lng:-118.036434},
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
	];

	var data = [
		{
			time: '05:00 AM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 17.7, pathId:1},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 18.1, pathId:1},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 18.1, pathId:1},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 18.7, pathId:1},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 18.7, pathId:0},
				{duration: 18.7, pathId:1},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 19.4, pathId:1},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 20.1, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 20.2, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 20.6, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 20.9, pathId:1},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 20.6, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 20.7, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 21.0, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 21.2, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 21.1, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 21.3, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 21.5, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 21.2, pathId:2},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 21.2, pathId:2},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 21.5, pathId:1},
				{duration: 21.2, pathId:2},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 21.2, pathId:2},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 21.6, pathId:2},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 22.3, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 21.9, pathId:2},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 22.7, pathId:2},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 23.0, pathId:3},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 23.8, pathId:3},
				{duration: 23.3, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 22.6, pathId:4},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 23.4, pathId:3},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 23.6, pathId:4},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 23.8, pathId:4},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 24.2, pathId:4},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 24.6, pathId:4},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 24.3, pathId:4},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 25.1, pathId:3},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 25.1, pathId:3},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 26.2, pathId:3},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 26.0, pathId:4},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 25.9, pathId:4},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 26.1, pathId:3},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 25.9, pathId:3},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 27.5, pathId:3},
				{duration: 27.0, pathId:5},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 27.4, pathId:4},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 28.1, pathId:3},
				{duration: 27.4, pathId:5},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 27.5, pathId:5},
				{duration: 28.9, pathId:3},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 27.8, pathId:5},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 27.8, pathId:5},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 27.8, pathId:5},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 29.5, pathId:5},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 29.9, pathId:6},
				{duration: 28.9, pathId:5},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 29.4, pathId:3},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 28.1, pathId:5},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 27.9, pathId:5},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 28.6, pathId:5},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 27.4, pathId:5},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 27.2, pathId:5},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 27.6, pathId:5},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 27.7, pathId:5},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 28.3, pathId:7},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 28.4, pathId:5},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 28.6, pathId:5},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 28.1, pathId:5},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 28.7, pathId:5},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 28.4, pathId:5},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 28.9, pathId:3},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 30.1, pathId:3},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 28.8, pathId:5},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 28.6, pathId:5},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 29.0, pathId:5},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 27.7, pathId:3},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 27.4, pathId:4},
				{duration: 27.7, pathId:5},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 26.9, pathId:3},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 27.0, pathId:3},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 25.7, pathId:4},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 26.0, pathId:4},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 25.3, pathId:4},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 25.1, pathId:4},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 25.6, pathId:4},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 25.1, pathId:4},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 25.0, pathId:4},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 24.6, pathId:4},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 24.4, pathId:4},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 25.1, pathId:4},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 25.1, pathId:4},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 24.1, pathId:4},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 24.3, pathId:4},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 18.4, pathId: 0},
				{duration: 19.3, pathId: 1},
				{duration: 21.6, pathId: 2},
				{duration: 26.7, pathId: 3},
				{duration: 25.0, pathId: 4},
				{duration: 28.1, pathId: 5},
				{duration: 29.9, pathId: 6},
				{duration: 28.3, pathId: 7},
			]
		}
	];

	return {
		O: 'D',
		D: 'B',
		minDuration: 17.6,
		maxDuration: 30.1,
		paths: paths,
		data: data
	}
};