//date: 010417
function getObj() {
	var paths = [
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
			len: 15337,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148148, lng:-117.994966},
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
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 21.6, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 22.6, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 22.6, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 22.2, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 22.8, pathId:2},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 21.6, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 20.7, pathId:3},
				{duration: 20.5, pathId:0},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 22.1, pathId:2},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 22.4, pathId:2},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 21.3, pathId:3},
				{duration: 21.1, pathId:0},
				{duration: 21.8, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 21.5, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 22.0, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 21.7, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 20.9, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 21.5, pathId:2},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 19.6, pathId:3},
				{duration: 19.9, pathId:0},
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 19.8, pathId:3},
				{duration: 19.9, pathId:0},
				{duration: 21.8, pathId:2},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 20.3, pathId:3},
				{duration: 20.8, pathId:0},
				{duration: 21.6, pathId:2},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 21.6, pathId:2},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 21.4, pathId:2},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 21.4, pathId:2},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 20.0, pathId:3},
				{duration: 19.9, pathId:0},
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 19.6, pathId:3},
				{duration: 19.6, pathId:0},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 19.6, pathId:3},
				{duration: 20.1, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 19.0, pathId:3},
				{duration: 19.5, pathId:0},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 19.0, pathId:3},
				{duration: 19.6, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 19.2, pathId:3},
				{duration: 19.7, pathId:0},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 20.2, pathId:3},
				{duration: 20.4, pathId:2},
				{duration: 20.5, pathId:0},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 19.5, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 19.0, pathId:3},
				{duration: 19.5, pathId:0},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 19.4, pathId:3},
				{duration: 19.9, pathId:2},
				{duration: 20.0, pathId:0},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 19.3, pathId:3},
				{duration: 20.0, pathId:2},
				{duration: 20.3, pathId:0},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 20.1, pathId:2},
				{duration: 20.2, pathId:0},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 19.9, pathId:2},
				{duration: 20.2, pathId:0},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 19.8, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 19.3, pathId:3},
				{duration: 20.0, pathId:0},
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 18.6, pathId:3},
				{duration: 19.5, pathId:0},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 19.0, pathId:3},
				{duration: 19.8, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 19.2, pathId:3},
				{duration: 19.6, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 18.8, pathId:3},
				{duration: 19.7, pathId:0},
				{duration: 20.3, pathId:2},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 19.4, pathId:3},
				{duration: 20.4, pathId:0},
				{duration: 20.8, pathId:2},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 19.3, pathId:3},
				{duration: 20.4, pathId:0},
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 19.3, pathId:3},
				{duration: 20.5, pathId:2},
				{duration: 20.9, pathId:0},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 19.9, pathId:3},
				{duration: 20.7, pathId:2},
				{duration: 21.1, pathId:0},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 19.6, pathId:3},
				{duration: 20.3, pathId:2},
				{duration: 20.9, pathId:0},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 20.1, pathId:0},
				{duration: 20.3, pathId:2},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 20.1, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 19.2, pathId:3},
				{duration: 19.6, pathId:0},
				{duration: 21.3, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 19.5, pathId:0},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 19.5, pathId:0},
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 19.2, pathId:3},
				{duration: 19.6, pathId:0},
				{duration: 20.8, pathId:2},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 19.5, pathId:3},
				{duration: 19.8, pathId:0},
				{duration: 20.8, pathId:2},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 19.7, pathId:3},
				{duration: 20.2, pathId:0},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 20.2, pathId:3},
				{duration: 20.1, pathId:2},
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 19.5, pathId:3},
				{duration: 19.6, pathId:0},
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 19.7, pathId:3},
				{duration: 20.4, pathId:0},
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 19.7, pathId:3},
				{duration: 20.3, pathId:2},
				{duration: 20.7, pathId:0},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 19.7, pathId:3},
				{duration: 20.3, pathId:2},
				{duration: 20.5, pathId:0},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 20.0, pathId:0},
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 19.4, pathId:3},
				{duration: 20.1, pathId:0},
				{duration: 21.6, pathId:2},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 20.1, pathId:3},
				{duration: 20.7, pathId:0},
				{duration: 21.5, pathId:2},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 19.8, pathId:3},
				{duration: 20.1, pathId:0},
				{duration: 20.9, pathId:2},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 19.4, pathId:3},
				{duration: 19.9, pathId:0},
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 19.7, pathId:0},
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 20.2, pathId:3},
				{duration: 20.6, pathId:0},
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 19.5, pathId:0},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 19.2, pathId:3},
				{duration: 19.8, pathId:0},
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 19.8, pathId:0},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 19.7, pathId:0},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 19.4, pathId:3},
				{duration: 19.9, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 19.5, pathId:3},
				{duration: 20.3, pathId:0},
				{duration: 20.8, pathId:2},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 19.6, pathId:3},
				{duration: 20.0, pathId:0},
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 19.6, pathId:3},
				{duration: 20.2, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 19.4, pathId:3},
				{duration: 20.1, pathId:0},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 18.6, pathId:3},
				{duration: 19.3, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 18.6, pathId:3},
				{duration: 19.4, pathId:0},
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 18.8, pathId:3},
				{duration: 19.2, pathId:0},
				{duration: 20.8, pathId:2},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 18.8, pathId:3},
				{duration: 19.8, pathId:0},
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 18.6, pathId:3},
				{duration: 19.9, pathId:0},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 20.0, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 18.8, pathId:3},
				{duration: 19.9, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 20.1, pathId:0},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 19.9, pathId:0},
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 19.2, pathId:3},
				{duration: 20.3, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 19.6, pathId:3},
				{duration: 20.6, pathId:2},
				{duration: 20.6, pathId:0},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 19.5, pathId:0},
				{duration: 20.3, pathId:2},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 18.7, pathId:3},
				{duration: 19.2, pathId:0},
				{duration: 20.3, pathId:2},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 19.2, pathId:3},
				{duration: 19.9, pathId:0},
				{duration: 20.3, pathId:2},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 19.0, pathId:3},
				{duration: 19.9, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 20.0, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 19.0, pathId:3},
				{duration: 19.9, pathId:0},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 20.0, pathId:3},
				{duration: 20.3, pathId:2},
				{duration: 21.1, pathId:0},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 19.7, pathId:3},
				{duration: 20.7, pathId:2},
				{duration: 20.7, pathId:0},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 20.3, pathId:3},
				{duration: 20.6, pathId:2},
				{duration: 21.3, pathId:0},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 19.0, pathId:3},
				{duration: 20.4, pathId:0},
				{duration: 20.3, pathId:2},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 18.8, pathId:3},
				{duration: 19.8, pathId:0},
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 18.6, pathId:3},
				{duration: 19.6, pathId:0},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 18.5, pathId:3},
				{duration: 19.4, pathId:0},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 18.6, pathId:3},
				{duration: 19.4, pathId:0},
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 20.0, pathId:0},
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 20.0, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 18.8, pathId:3},
				{duration: 19.8, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 19.4, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 19.0, pathId:3},
				{duration: 19.6, pathId:0},
				{duration: 20.3, pathId:2},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 19.7, pathId:0},
				{duration: 20.3, pathId:2},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 19.5, pathId:3},
				{duration: 20.2, pathId:0},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 19.7, pathId:3},
				{duration: 20.1, pathId:2},
				{duration: 20.4, pathId:0},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 19.4, pathId:3},
				{duration: 20.2, pathId:0},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 19.5, pathId:3},
				{duration: 20.1, pathId:0},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 19.3, pathId:3},
				{duration: 19.4, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 19.3, pathId:3},
				{duration: 19.4, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 19.0, pathId:3},
				{duration: 19.2, pathId:0},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 19.1, pathId:3},
				{duration: 19.5, pathId:0},
				{duration: 20.3, pathId:2},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 19.4, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 18.8, pathId:3},
				{duration: 19.5, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 19.6, pathId:0},
				{duration: 20.0, pathId:2},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 18.9, pathId:3},
				{duration: 19.7, pathId:0},
				{duration: 20.0, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.0, pathId: 0},
				{duration: 21.4, pathId: 1},
				{duration: 20.7, pathId: 2},
				{duration: 19.3, pathId: 3},
			]
		}
	];

	return {
		O: 'D',
		D: 'B',
		minDuration: 18.5,
		maxDuration: 22.8,
		paths: paths,
		data: data
	}
};