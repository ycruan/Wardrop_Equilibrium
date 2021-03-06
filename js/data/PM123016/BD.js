//date: 010417
function getObj() {
	var paths = [
		{
			desc: 'San Pasqual St and W Foothill Blvd',
			len: 14259,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and W Foothill Blvd',
			len: 14231,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378295, lng:-118.1130643},
				{lat:34.1419678, lng:-118.1131253},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.150253, lng:-118.0678012},
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
			desc: 'E Del Mar Blvd and W Foothill Blvd',
			len: 13850,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.14719110000001, lng:-118.0817092},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 14324,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429016, lng:-118.0704624},
				{lat:34.1463259, lng:-118.0704785},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
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
			desc: 'E California Blvd and W Foothill Blvd',
			len: 14917,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378295, lng:-118.1130643},
				{lat:34.1358717, lng:-118.11307},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and Colorado St',
			len: 14446,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 14572,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.144621, lng:-118.122885},
				{lat:34.1446236, lng:-118.121331},
				{lat:34.151764, lng:-118.1213142},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and W Foothill Blvd',
			len: 13932,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 14718,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1516532, lng:-118.1229664},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.1481661, lng:-118.0734183},
				{lat:34.1469478, lng:-118.0696132},
				{lat:34.1478753, lng:-118.0678707},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and W Foothill Blvd',
			len: 13809,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1478753, lng:-118.0678707},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 15231,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1516532, lng:-118.1229664},
				{lat:34.1517659, lng:-118.1214744},
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
			desc: 'I-210 E and W Foothill Blvd',
			len: 14535,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.151764, lng:-118.1213142},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E California Blvd and W Foothill Blvd',
			len: 14912,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and E Foothill Blvd',
			len: 13924,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1501758, lng:-118.0733802},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 14569,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1516532, lng:-118.1229664},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
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
			desc: 'E Del Mar Blvd and E Colorado Blvd',
			len: 14323,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E',
			len: 15188,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1419678, lng:-118.1131253},
				{lat:34.1518281, lng:-118.113081},
				{lat:34.1518598, lng:-118.1128484},
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
			desc: 'E Del Mar Blvd and Colorado St',
			len: 14447,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455786, lng:-118.0253326},
				{lat:34.1510564, lng:-118.0254164},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and E Foothill Blvd',
			len: 13929,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1462357, lng:-118.0734848},
				{lat:34.1501758, lng:-118.0733802},
				{lat:34.1514583, lng:-117.9921597},
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
			desc: 'E Del Mar Blvd and Colorado St',
			len: 14730,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 14570,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.14296119999999, lng:-118.0648344},
				{lat:34.1481766, lng:-118.065802},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 29.4, pathId:0},
				{duration: 28.7, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 28.5, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 29.5, pathId:0},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 28.8, pathId:3},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 28.6, pathId:3},
				{duration: 28.1, pathId:0},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 29.6, pathId:0},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 29.3, pathId:4},
				{duration: 29.7, pathId:5},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 29.4, pathId:3},
				{duration: 30.1, pathId:6},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 31.3, pathId:0},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 29.6, pathId:7},
				{duration: 30.4, pathId:0},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 31.3, pathId:8},
				{duration: 30.9, pathId:0},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 29.8, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 29.8, pathId:2},
				{duration: 30.0, pathId:1},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 29.2, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 29.6, pathId:2},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 29.6, pathId:2},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 28.4, pathId:2},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 29.9, pathId:2},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 30.3, pathId:2},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 29.0, pathId:9},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 29.9, pathId:2},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 28.9, pathId:10},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 28.3, pathId:2},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 28.8, pathId:11},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 28.7, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 27.6, pathId:0},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 28.6, pathId:0},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 29.2, pathId:3},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 28.9, pathId:3},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 29.2, pathId:3},
				{duration: 29.1, pathId:0},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 31.0, pathId:0},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 29.2, pathId:3},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 29.2, pathId:3},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 29.8, pathId:0},
				{duration: 29.3, pathId:10},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 27.8, pathId:12},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 29.1, pathId:0},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 28.1, pathId:3},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 26.6, pathId:12},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 28.1, pathId:12},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 27.9, pathId:2},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 28.1, pathId:10},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 28.4, pathId:10},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 28.8, pathId:10},
				{duration: 28.9, pathId:13},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 28.1, pathId:10},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 28.9, pathId:13},
				{duration: 28.9, pathId:14},
				{duration: 28.6, pathId:10},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 28.9, pathId:14},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 29.0, pathId:15},
				{duration: 30.0, pathId:14},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 27.2, pathId:16},
				{duration: 27.7, pathId:15},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 27.5, pathId:16},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 28.6, pathId:17},
				{duration: 29.2, pathId:13},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 27.6, pathId:18},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 27.7, pathId:18},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 27.8, pathId:18},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 26.8, pathId:19},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 26.2, pathId:17},
				{duration: 28.5, pathId:0},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 25.6, pathId:17},
				{duration: 27.2, pathId:20},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 25.0, pathId:17},
				{duration: 25.2, pathId:12},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 25.0, pathId:17},
				{duration: 25.6, pathId:12},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 24.8, pathId:17},
				{duration: 25.5, pathId:12},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 24.4, pathId:15},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 24.1, pathId:17},
				{duration: 24.8, pathId:12},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 24.1, pathId:17},
				{duration: 24.8, pathId:12},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 24.2, pathId:17},
				{duration: 24.9, pathId:12},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 23.9, pathId:17},
				{duration: 24.5, pathId:12},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 23.9, pathId:17},
				{duration: 24.3, pathId:12},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 23.6, pathId:21},
				{duration: 24.2, pathId:12},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 23.4, pathId:15},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 24.2, pathId:22},
				{duration: 24.7, pathId:12},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 25.2, pathId:17},
				{duration: 25.9, pathId:12},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 24.9, pathId:22},
				{duration: 24.8, pathId:12},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 24.4, pathId:15},
				{duration: 25.2, pathId:14},
				{duration: 24.2, pathId:22},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 23.6, pathId:14},
				{duration: 24.1, pathId:12},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 22.9, pathId:22},
				{duration: 23.9, pathId:12},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 23.1, pathId:14},
				{duration: 23.6, pathId:12},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 22.2, pathId:22},
				{duration: 23.2, pathId:12},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 22.9, pathId:14},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 22.6, pathId:22},
				{duration: 24.1, pathId:12},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 23.1, pathId:17},
				{duration: 23.6, pathId:12},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 22.1, pathId:15},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 21.8, pathId:15},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 22.9, pathId:14},
				{duration: 22.8, pathId:12},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 22.3, pathId:23},
				{duration: 22.8, pathId:24},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 21.4, pathId:14},
				{duration: 22.4, pathId:24},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 21.2, pathId:14},
				{duration: 21.8, pathId:24},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 21.7, pathId:14},
				{duration: 22.7, pathId:24},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 21.9, pathId:14},
				{duration: 22.4, pathId:24},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 22.4, pathId:14},
				{duration: 22.4, pathId:24},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 21.9, pathId:14},
				{duration: 22.2, pathId:24},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 20.9, pathId:14},
				{duration: 21.6, pathId:24},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 21.4, pathId:14},
				{duration: 21.8, pathId:24},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 20.6, pathId:14},
				{duration: 21.2, pathId:24},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 21.1, pathId:14},
				{duration: 21.2, pathId:24},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 20.9, pathId:14},
				{duration: 21.0, pathId:24},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 20.3, pathId:14},
				{duration: 20.8, pathId:24},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 20.5, pathId:14},
				{duration: 21.1, pathId:24},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 20.2, pathId:14},
				{duration: 20.9, pathId:24},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 20.6, pathId:14},
				{duration: 21.3, pathId:24},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 21.3, pathId:14},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 21.1, pathId:14},
				{duration: 21.6, pathId:24},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 20.6, pathId:14},
				{duration: 22.0, pathId:25},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 20.2, pathId:14},
				{duration: 21.0, pathId:24},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 20.6, pathId:14},
				{duration: 21.9, pathId:25},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 20.2, pathId:14},
				{duration: 20.8, pathId:24},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 20.1, pathId:14},
				{duration: 20.7, pathId:24},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 20.6, pathId:14},
				{duration: 21.6, pathId:25},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 20.6, pathId:14},
				{duration: 21.5, pathId:25},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 20.4, pathId:26},
				{duration: 20.5, pathId:14},
				{duration: 20.8, pathId:25},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 20.3, pathId:26},
				{duration: 20.6, pathId:14},
				{duration: 20.6, pathId:25},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 20.3, pathId:26},
				{duration: 20.8, pathId:14},
				{duration: 20.8, pathId:25},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 19.9, pathId:26},
				{duration: 20.3, pathId:14},
				{duration: 20.5, pathId:25},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 20.4, pathId:14},
				{duration: 20.6, pathId:26},
				{duration: 21.0, pathId:25},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 20.5, pathId:26},
				{duration: 20.3, pathId:14},
				{duration: 21.2, pathId:25},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 20.8, pathId:26},
				{duration: 20.6, pathId:14},
				{duration: 21.4, pathId:25},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 20.6, pathId:26},
				{duration: 20.5, pathId:14},
				{duration: 21.0, pathId:25},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 20.0, pathId:26},
				{duration: 19.9, pathId:14},
				{duration: 20.7, pathId:25},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 19.6, pathId:26},
				{duration: 20.3, pathId:14},
				{duration: 20.1, pathId:25},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 19.9, pathId:26},
				{duration: 20.0, pathId:14},
				{duration: 20.4, pathId:25},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 19.3, pathId:26},
				{duration: 19.7, pathId:14},
				{duration: 20.0, pathId:25},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 29.5, pathId: 0},
				{duration: 29.4, pathId: 1},
				{duration: 29.2, pathId: 2},
				{duration: 29.0, pathId: 3},
				{duration: 29.3, pathId: 4},
				{duration: 29.7, pathId: 5},
				{duration: 30.1, pathId: 6},
				{duration: 29.6, pathId: 7},
				{duration: 31.3, pathId: 8},
				{duration: 29.0, pathId: 9},
				{duration: 28.6, pathId: 10},
				{duration: 28.8, pathId: 11},
				{duration: 24.9, pathId: 12},
				{duration: 29.0, pathId: 13},
				{duration: 21.6, pathId: 14},
				{duration: 24.7, pathId: 15},
				{duration: 27.4, pathId: 16},
				{duration: 24.9, pathId: 17},
				{duration: 27.7, pathId: 18},
				{duration: 26.8, pathId: 19},
				{duration: 27.2, pathId: 20},
				{duration: 23.6, pathId: 21},
				{duration: 23.5, pathId: 22},
				{duration: 22.3, pathId: 23},
				{duration: 21.6, pathId: 24},
				{duration: 21.0, pathId: 25},
				{duration: 20.2, pathId: 26},
			]
		}
	];

	return {
		O: 'B',
		D: 'D',
		minDuration: 19.3,
		maxDuration: 31.3,
		paths: paths,
		data: data
	}
};