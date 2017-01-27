//date: 012617
function getObj() {
	var paths = [
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
			desc: 'E Del Mar Blvd and W Foothill Blvd',
			len: 14085,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1413872, lng:-118.0734182},
				{lat:34.14201500000001, lng:-118.0676434},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 15969,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1516532, lng:-118.1229664},
				{lat:34.1517659, lng:-118.1214744},
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
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 14567,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1426314, lng:-118.1228682},
				{lat:34.1426642, lng:-118.121331},
				{lat:34.151764, lng:-118.1213142},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
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
			len: 15628,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1517057, lng:-118.0956886},
				{lat:34.1517051, lng:-118.0935153},
				{lat:34.13538460000001, lng:-118.0045362},
				{lat:34.1350397, lng:-118.0015131},
				{lat:34.1350493, lng:-117.9950464},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and E Foothill Blvd',
			len: 14408,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1517057, lng:-118.0956886},
				{lat:34.1517051, lng:-118.0935153},
				{lat:34.1480961, lng:-118.0345993},
				{lat:34.1474459, lng:-118.031678},
				{lat:34.1509279, lng:-118.0315969},
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
	];

	var data = [
		{
			time: '05:00 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 18.5, pathId:1},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 18.7, pathId:0},
				{duration: 18.6, pathId:1},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 22.4, pathId:2},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 17.9, pathId:3},
				{duration: 22.4, pathId:2},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 18.9, pathId:1},
				{duration: 22.4, pathId:2},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 19.1, pathId:1},
				{duration: 22.4, pathId:2},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 18.9, pathId:1},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 19.0, pathId:1},
				{duration: 19.2, pathId:0},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 18.9, pathId:1},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 19.0, pathId:1},
				{duration: 22.2, pathId:2},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 18.9, pathId:1},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 18.9, pathId:1},
				{duration: 22.2, pathId:2},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 18.9, pathId:1},
				{duration: 22.1, pathId:2},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 19.0, pathId:1},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 19.0, pathId:1},
				{duration: 22.6, pathId:2},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 19.1, pathId:1},
				{duration: 22.6, pathId:2},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 19.1, pathId:1},
				{duration: 22.6, pathId:2},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 19.1, pathId:1},
				{duration: 22.6, pathId:2},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 19.1, pathId:1},
				{duration: 22.7, pathId:2},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 19.4, pathId:1},
				{duration: 22.7, pathId:2},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 19.3, pathId:1},
				{duration: 22.7, pathId:2},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 19.4, pathId:1},
				{duration: 22.7, pathId:2},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 22.8, pathId:2},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 22.9, pathId:2},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 22.9, pathId:2},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 22.8, pathId:2},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 19.4, pathId:1},
				{duration: 23.1, pathId:2},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 19.4, pathId:1},
				{duration: 23.0, pathId:2},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 19.5, pathId:1},
				{duration: 23.0, pathId:2},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 19.5, pathId:1},
				{duration: 23.0, pathId:2},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 23.1, pathId:2},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 23.1, pathId:2},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 23.1, pathId:2},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 19.4, pathId:1},
				{duration: 23.4, pathId:2},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 19.4, pathId:1},
				{duration: 23.6, pathId:2},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 19.0, pathId:1},
				{duration: 23.7, pathId:2},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 23.6, pathId:2},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 23.3, pathId:2},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 23.3, pathId:2},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 18.5, pathId:1},
				{duration: 18.8, pathId:0},
				{duration: 23.4, pathId:2},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 18.6, pathId:1},
				{duration: 23.1, pathId:2},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 18.5, pathId:1},
				{duration: 23.1, pathId:2},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 18.7, pathId:1},
				{duration: 23.2, pathId:2},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 23.2, pathId:2},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 18.6, pathId:1},
				{duration: 24.1, pathId:2},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 18.7, pathId:0},
				{duration: 18.6, pathId:1},
				{duration: 24.0, pathId:2},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 18.7, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 24.1, pathId:2},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 23.4, pathId:2},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 23.5, pathId:2},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 19.1, pathId:1},
				{duration: 23.8, pathId:2},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 19.3, pathId:1},
				{duration: 24.1, pathId:2},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 19.5, pathId:1},
				{duration: 24.7, pathId:2},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 20.1, pathId:1},
				{duration: 24.5, pathId:2},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 20.1, pathId:1},
				{duration: 20.1, pathId:4},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 20.1, pathId:4},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 19.6, pathId:1},
				{duration: 20.1, pathId:4},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 20.0, pathId:1},
				{duration: 20.1, pathId:4},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 19.8, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 19.8, pathId:1},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 19.7, pathId:1},
				{duration: 20.6, pathId:4},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 19.9, pathId:1},
				{duration: 20.8, pathId:4},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 20.0, pathId:1},
				{duration: 20.8, pathId:4},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.0, pathId:1},
				{duration: 20.7, pathId:4},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 20.9, pathId:1},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 20.0, pathId:1},
				{duration: 20.7, pathId:4},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.4, pathId:1},
				{duration: 20.9, pathId:4},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.3, pathId:1},
				{duration: 20.9, pathId:4},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 20.7, pathId:1},
				{duration: 20.6, pathId:4},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 20.9, pathId:4},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 20.5, pathId:1},
				{duration: 21.4, pathId:4},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 20.6, pathId:1},
				{duration: 20.7, pathId:4},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 20.5, pathId:1},
				{duration: 21.5, pathId:4},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 20.9, pathId:1},
				{duration: 22.0, pathId:4},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 21.3, pathId:1},
				{duration: 22.2, pathId:4},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 20.4, pathId:1},
				{duration: 22.1, pathId:4},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 20.6, pathId:1},
				{duration: 21.4, pathId:4},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.8, pathId:4},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 20.8, pathId:1},
				{duration: 21.2, pathId:4},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 21.2, pathId:1},
				{duration: 22.0, pathId:4},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 21.0, pathId:1},
				{duration: 22.2, pathId:4},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 20.9, pathId:1},
				{duration: 22.2, pathId:4},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 21.6, pathId:1},
				{duration: 22.2, pathId:4},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 21.5, pathId:1},
				{duration: 22.1, pathId:4},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 21.8, pathId:1},
				{duration: 22.8, pathId:4},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 22.0, pathId:1},
				{duration: 22.5, pathId:4},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 21.7, pathId:0},
				{duration: 22.2, pathId:1},
				{duration: 22.3, pathId:4},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 22.1, pathId:4},
				{duration: 22.4, pathId:1},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 21.6, pathId:1},
				{duration: 22.0, pathId:4},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 21.8, pathId:0},
				{duration: 21.6, pathId:1},
				{duration: 22.5, pathId:4},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 22.1, pathId:1},
				{duration: 21.9, pathId:4},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 22.4, pathId:1},
				{duration: 22.6, pathId:4},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 21.1, pathId:5},
				{duration: 22.5, pathId:4},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 21.7, pathId:0},
				{duration: 21.9, pathId:1},
				{duration: 23.4, pathId:4},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 21.4, pathId:1},
				{duration: 23.0, pathId:4},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 21.8, pathId:0},
				{duration: 22.0, pathId:1},
				{duration: 23.6, pathId:4},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 22.0, pathId:0},
				{duration: 22.4, pathId:1},
				{duration: 23.2, pathId:4},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 22.1, pathId:0},
				{duration: 21.1, pathId:6},
				{duration: 23.5, pathId:4},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 22.1, pathId:0},
				{duration: 22.5, pathId:1},
				{duration: 23.5, pathId:4},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 22.3, pathId:1},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 22.4, pathId:1},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 21.8, pathId:0},
				{duration: 21.6, pathId:1},
				{duration: 23.2, pathId:4},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 21.8, pathId:1},
				{duration: 23.1, pathId:4},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 21.5, pathId:1},
				{duration: 22.9, pathId:4},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 21.4, pathId:1},
				{duration: 22.7, pathId:4},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 21.4, pathId:1},
				{duration: 22.1, pathId:4},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 21.2, pathId:1},
				{duration: 22.6, pathId:4},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 21.4, pathId:1},
				{duration: 23.0, pathId:4},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 21.1, pathId:1},
				{duration: 22.3, pathId:4},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 20.5, pathId:7},
				{duration: 20.7, pathId:8},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 22.2, pathId:4},
				{duration: 22.1, pathId:8},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 22.4, pathId:4},
				{duration: 22.9, pathId:9},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 21.7, pathId:4},
				{duration: 21.9, pathId:9},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 20.9, pathId:4},
				{duration: 21.6, pathId:10},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 21.4, pathId:4},
				{duration: 20.8, pathId:11},
				{duration: 21.7, pathId:9},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.0, pathId: 0},
				{duration: 20.0, pathId: 1},
				{duration: 22.9, pathId: 2},
				{duration: 17.9, pathId: 3},
				{duration: 21.8, pathId: 4},
				{duration: 21.1, pathId: 5},
				{duration: 21.1, pathId: 6},
				{duration: 20.5, pathId: 7},
				{duration: 21.4, pathId: 8},
				{duration: 22.2, pathId: 9},
				{duration: 21.6, pathId: 10},
				{duration: 20.8, pathId: 11},
			]
		}
	];

	return {
		O: 'B',
		D: 'D',
		minDuration: 17.9,
		maxDuration: 24.7,
		paths: paths,
		data: data
	}
};