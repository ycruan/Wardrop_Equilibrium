//date: 010217
function getObj() {
	var paths = [
		{
			desc: 'I-210 E',
			len: 14714,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.151764, lng:-118.1213142},
				{lat:34.1480961, lng:-118.0345993},
				{lat:34.1474459, lng:-118.031678},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 15935,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.151764, lng:-118.1213142},
				{lat:34.13538460000001, lng:-118.0045362},
				{lat:34.1350397, lng:-118.0015131},
				{lat:34.1350493, lng:-117.9950464},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 14706,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1419678, lng:-118.1131253},
				{lat:34.1518281, lng:-118.113081},
				{lat:34.1518598, lng:-118.1128484},
				{lat:34.1480961, lng:-118.0345993},
				{lat:34.1474459, lng:-118.031678},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 15926,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1419678, lng:-118.1131253},
				{lat:34.1518281, lng:-118.113081},
				{lat:34.1518598, lng:-118.1128484},
				{lat:34.13538460000001, lng:-118.0045362},
				{lat:34.1350397, lng:-118.0015131},
				{lat:34.1350493, lng:-117.9950464},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 15250,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.14719110000001, lng:-118.0817092},
				{lat:34.13538460000001, lng:-118.0045362},
				{lat:34.1350397, lng:-118.0015131},
				{lat:34.1350493, lng:-117.9950464},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 21.0, pathId:2},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 21.0, pathId:2},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 21.0, pathId:2},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 21.0, pathId:2},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 21.0, pathId:2},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 21.0, pathId:2},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 21.0, pathId:2},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 21.0, pathId:2},
				{duration: 20.6, pathId:3},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 20.0, pathId:4},
				{duration: 20.6, pathId:3},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 21.0, pathId:2},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.1, pathId: 0},
				{duration: 20.8, pathId: 1},
				{duration: 21.0, pathId: 2},
				{duration: 20.6, pathId: 3},
				{duration: 20.0, pathId: 4},
			]
		}
	];

	return {
		O: 'B',
		D: 'D',
		minDuration: 20.0,
		maxDuration: 21.0,
		paths: paths,
		data: data
	}
};