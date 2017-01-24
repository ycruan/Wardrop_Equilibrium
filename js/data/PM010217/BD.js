//date: 010417
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
			len: 14749,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1516532, lng:-118.1229664},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.1480961, lng:-118.0345993},
				{lat:34.1474459, lng:-118.031678},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 14527,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1419678, lng:-118.1131253},
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
			desc: 'E Del Mar Blvd, I-210 E and E Foothill Blvd',
			len: 14030,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.14719110000001, lng:-118.0817092},
				{lat:34.1480961, lng:-118.0345993},
				{lat:34.1474459, lng:-118.031678},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 15972,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.144621, lng:-118.122885},
				{lat:34.1446236, lng:-118.121331},
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
			len: 14751,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.144621, lng:-118.122885},
				{lat:34.1446236, lng:-118.121331},
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
			len: 14830,
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
				{lat:34.151431, lng:-117.994965},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
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
				{duration: 21.3, pathId:0},
				{duration: 21.6, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 20.5, pathId:2},
				{duration: 21.2, pathId:3},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 20.7, pathId:2},
				{duration: 22.2, pathId:1},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 21.1, pathId:4},
				{duration: 20.9, pathId:0},
				{duration: 21.5, pathId:1},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 19.9, pathId:5},
				{duration: 20.3, pathId:6},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 19.8, pathId:5},
				{duration: 20.3, pathId:7},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 19.9, pathId:5},
				{duration: 20.1, pathId:6},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 19.9, pathId:5},
				{duration: 20.0, pathId:6},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 20.1, pathId:5},
				{duration: 20.6, pathId:6},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 20.0, pathId:5},
				{duration: 20.5, pathId:6},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 20.2, pathId:5},
				{duration: 20.6, pathId:6},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 20.1, pathId:5},
				{duration: 20.7, pathId:7},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 19.9, pathId:5},
				{duration: 20.4, pathId:7},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 20.3, pathId:5},
				{duration: 20.2, pathId:6},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 19.9, pathId:5},
				{duration: 19.9, pathId:6},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 20.1, pathId:5},
				{duration: 20.1, pathId:6},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 19.7, pathId:5},
				{duration: 20.0, pathId:6},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 20.1, pathId:5},
				{duration: 19.9, pathId:6},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 21.3, pathId:1},
				{duration: 21.8, pathId:0},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 20.4, pathId:8},
				{duration: 21.1, pathId:1},
				{duration: 20.2, pathId:9},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 20.4, pathId:5},
				{duration: 19.9, pathId:6},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 20.4, pathId:5},
				{duration: 20.3, pathId:6},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 20.4, pathId:8},
				{duration: 21.2, pathId:1},
				{duration: 20.9, pathId:9},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 20.3, pathId:4},
				{duration: 20.8, pathId:0},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 20.3, pathId:4},
				{duration: 20.4, pathId:0},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 20.3, pathId:4},
				{duration: 20.2, pathId:0},
				{duration: 20.9, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 20.7, pathId:4},
				{duration: 21.0, pathId:0},
				{duration: 21.2, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 19.6, pathId:5},
				{duration: 20.3, pathId:6},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 20.7, pathId:4},
				{duration: 20.1, pathId:7},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 20.1, pathId:4},
				{duration: 20.4, pathId:0},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 20.1, pathId:4},
				{duration: 20.5, pathId:0},
				{duration: 20.3, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 20.4, pathId:4},
				{duration: 20.4, pathId:0},
				{duration: 21.1, pathId:1},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 20.2, pathId:4},
				{duration: 20.1, pathId:0},
				{duration: 21.0, pathId:1},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 19.6, pathId:4},
				{duration: 19.8, pathId:0},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 20.2, pathId:4},
				{duration: 20.0, pathId:0},
				{duration: 21.1, pathId:1},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 20.3, pathId:4},
				{duration: 20.4, pathId:0},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 20.4, pathId:4},
				{duration: 20.4, pathId:0},
				{duration: 20.2, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 20.3, pathId:4},
				{duration: 20.0, pathId:1},
				{duration: 20.5, pathId:0},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 20.4, pathId:4},
				{duration: 20.1, pathId:1},
				{duration: 21.3, pathId:0},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 20.3, pathId:4},
				{duration: 20.2, pathId:0},
				{duration: 20.3, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 20.3, pathId:4},
				{duration: 20.2, pathId:0},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 20.4, pathId:4},
				{duration: 20.5, pathId:0},
				{duration: 20.5, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 19.6, pathId:4},
				{duration: 19.9, pathId:0},
				{duration: 20.3, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 20.2, pathId:4},
				{duration: 20.2, pathId:1},
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 19.8, pathId:4},
				{duration: 20.2, pathId:0},
				{duration: 20.5, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 19.4, pathId:4},
				{duration: 19.5, pathId:0},
				{duration: 20.6, pathId:1},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 19.5, pathId:4},
				{duration: 19.5, pathId:0},
				{duration: 20.6, pathId:1},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 19.8, pathId:4},
				{duration: 20.1, pathId:0},
				{duration: 20.2, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 19.8, pathId:4},
				{duration: 20.1, pathId:0},
				{duration: 20.2, pathId:1},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 19.7, pathId:4},
				{duration: 19.7, pathId:1},
				{duration: 20.5, pathId:0},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 19.5, pathId:4},
				{duration: 19.6, pathId:1},
				{duration: 20.1, pathId:0},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 19.3, pathId:4},
				{duration: 19.4, pathId:1},
				{duration: 19.8, pathId:0},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 19.8, pathId:4},
				{duration: 19.4, pathId:1},
				{duration: 20.0, pathId:0},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 19.5, pathId:4},
				{duration: 19.3, pathId:1},
				{duration: 19.8, pathId:0},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 19.5, pathId:4},
				{duration: 19.4, pathId:0},
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 19.0, pathId:4},
				{duration: 19.2, pathId:0},
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 19.0, pathId:4},
				{duration: 19.2, pathId:0},
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 19.3, pathId:4},
				{duration: 19.5, pathId:0},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 19.4, pathId:4},
				{duration: 19.4, pathId:0},
				{duration: 20.1, pathId:1},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 19.4, pathId:4},
				{duration: 19.4, pathId:0},
				{duration: 20.0, pathId:1},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 20.5, pathId:4},
				{duration: 20.1, pathId:1},
				{duration: 20.7, pathId:0},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 20.5, pathId:4},
				{duration: 20.6, pathId:0},
				{duration: 20.7, pathId:1},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 21.0, pathId:1},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 20.6, pathId:4},
				{duration: 20.5, pathId:0},
				{duration: 20.3, pathId:1},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 20.5, pathId:4},
				{duration: 20.6, pathId:0},
				{duration: 20.6, pathId:1},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 21.7, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 20.0, pathId:9},
				{duration: 21.5, pathId:1},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 20.0, pathId:6},
				{duration: 20.5, pathId:3},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 20.6, pathId:4},
				{duration: 20.7, pathId:0},
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 20.8, pathId:4},
				{duration: 20.6, pathId:0},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 21.7, pathId:1},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 20.1, pathId:5},
				{duration: 20.0, pathId:6},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 20.6, pathId:1},
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 21.0, pathId:1},
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 20.2, pathId:8},
				{duration: 21.0, pathId:1},
				{duration: 20.3, pathId:9},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 19.6, pathId:5},
				{duration: 20.1, pathId:6},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 19.4, pathId:5},
				{duration: 21.4, pathId:0},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 19.4, pathId:5},
				{duration: 20.0, pathId:6},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 20.2, pathId:1},
				{duration: 20.7, pathId:4},
				{duration: 21.2, pathId:0},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 19.6, pathId:5},
				{duration: 19.8, pathId:6},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 19.9, pathId:1},
				{duration: 20.2, pathId:6},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 20.9, pathId:1},
				{duration: 22.3, pathId:0},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 20.2, pathId:1},
				{duration: 21.9, pathId:0},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 19.2, pathId:5},
				{duration: 21.8, pathId:0},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 19.0, pathId:5},
				{duration: 20.1, pathId:10},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 19.2, pathId:5},
				{duration: 20.2, pathId:10},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 19.5, pathId:5},
				{duration: 20.4, pathId:10},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 20.2, pathId:1},
				{duration: 21.8, pathId:0},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 20.0, pathId:4},
				{duration: 20.2, pathId:1},
				{duration: 20.7, pathId:0},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 20.0, pathId:4},
				{duration: 20.1, pathId:1},
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 19.3, pathId:5},
				{duration: 20.1, pathId:6},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 19.3, pathId:5},
				{duration: 20.0, pathId:6},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 19.4, pathId:5},
				{duration: 19.9, pathId:6},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 20.2, pathId:4},
				{duration: 19.9, pathId:1},
				{duration: 20.7, pathId:0},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 19.5, pathId:5},
				{duration: 19.8, pathId:6},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 19.4, pathId:5},
				{duration: 19.8, pathId:6},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 19.3, pathId:5},
				{duration: 19.8, pathId:6},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 19.2, pathId:8},
				{duration: 20.2, pathId:1},
				{duration: 19.9, pathId:9},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 19.6, pathId:8},
				{duration: 20.2, pathId:1},
				{duration: 20.2, pathId:9},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 19.2, pathId:8},
				{duration: 20.1, pathId:1},
				{duration: 19.7, pathId:9},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 19.3, pathId:8},
				{duration: 20.0, pathId:1},
				{duration: 19.7, pathId:9},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 19.2, pathId:8},
				{duration: 19.9, pathId:1},
				{duration: 19.9, pathId:9},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 19.0, pathId:8},
				{duration: 19.8, pathId:1},
				{duration: 19.8, pathId:9},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 20.0, pathId:4},
				{duration: 20.0, pathId:1},
				{duration: 20.3, pathId:0},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 20.2, pathId:4},
				{duration: 20.2, pathId:0},
				{duration: 20.3, pathId:1},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 20.2, pathId:4},
				{duration: 19.9, pathId:1},
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 19.9, pathId:4},
				{duration: 19.9, pathId:1},
				{duration: 20.6, pathId:0},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 19.4, pathId:4},
				{duration: 19.6, pathId:1},
				{duration: 20.1, pathId:0},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 19.2, pathId:4},
				{duration: 19.6, pathId:1},
				{duration: 19.9, pathId:0},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 19.1, pathId:4},
				{duration: 19.7, pathId:0},
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 19.1, pathId:4},
				{duration: 19.7, pathId:0},
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 19.4, pathId:4},
				{duration: 19.9, pathId:0},
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 19.4, pathId:4},
				{duration: 19.8, pathId:1},
				{duration: 20.3, pathId:0},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 19.3, pathId:4},
				{duration: 19.8, pathId:1},
				{duration: 20.2, pathId:0},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 19.6, pathId:4},
				{duration: 19.9, pathId:1},
				{duration: 20.9, pathId:0},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 19.7, pathId:4},
				{duration: 20.0, pathId:1},
				{duration: 20.9, pathId:0},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 20.2, pathId:4},
				{duration: 20.2, pathId:1},
				{duration: 21.6, pathId:0},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 19.4, pathId:4},
				{duration: 20.1, pathId:1},
				{duration: 21.0, pathId:0},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 19.4, pathId:4},
				{duration: 19.8, pathId:1},
				{duration: 20.3, pathId:0},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.5, pathId: 0},
				{duration: 20.4, pathId: 1},
				{duration: 20.9, pathId: 2},
				{duration: 20.9, pathId: 3},
				{duration: 19.9, pathId: 4},
				{duration: 19.7, pathId: 5},
				{duration: 20.1, pathId: 6},
				{duration: 20.4, pathId: 7},
				{duration: 19.6, pathId: 8},
				{duration: 20.1, pathId: 9},
				{duration: 20.2, pathId: 10},
			]
		}
	];

	return {
		O: 'B',
		D: 'D',
		minDuration: 19.0,
		maxDuration: 22.3,
		paths: paths,
		data: data
	}
};