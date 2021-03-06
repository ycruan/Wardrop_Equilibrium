//date: 010417
function getObj() {
	var paths = [
		{
			desc: 'I-210 E',
			len: 18266,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.151764, lng:-118.1213142},
				{lat:34.1480961, lng:-118.0345993},
				{lat:34.1474459, lng:-118.031678},
				{lat:34.1141667, lng:-118.0310118},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 17647,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1419678, lng:-118.1131253},
				{lat:34.1518281, lng:-118.113081},
				{lat:34.1518598, lng:-118.1128484},
				{lat:34.13538460000001, lng:-118.0045362},
				{lat:34.1350397, lng:-118.0015131},
				{lat:34.1350564, lng:-118.0008786},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 18982,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1419678, lng:-118.1131253},
				{lat:34.1518281, lng:-118.113081},
				{lat:34.1518598, lng:-118.1128484},
				{lat:34.1480961, lng:-118.0345993},
				{lat:34.1474459, lng:-118.031678},
				{lat:34.10737590000001, lng:-118.0308782},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 21876,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.151764, lng:-118.1213142},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 17656,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.151764, lng:-118.1213142},
				{lat:34.13538460000001, lng:-118.0045362},
				{lat:34.1350397, lng:-118.0015131},
				{lat:34.1350564, lng:-118.0008786},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 25.5, pathId:1},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 25.2, pathId:1},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 25.9, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 26.0, pathId:1},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 25.8, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 24.8, pathId:1},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 24.5, pathId:1},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 25.8, pathId:1},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 24.3, pathId:2},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 24.7, pathId:1},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 19.7, pathId:3},
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 20.0, pathId:3},
				{duration: 26.0, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 19.9, pathId:3},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 20.0, pathId:4},
				{duration: 26.0, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 20.3, pathId:4},
				{duration: 25.9, pathId:1},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 20.4, pathId:4},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 21.3, pathId:4},
				{duration: 25.7, pathId:1},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 24.8, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 25.0, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.0, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 25.8, pathId:1},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 26.3, pathId:1},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 26.1, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 24.8, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 24.7, pathId:1},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 25.2, pathId:1},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 24.4, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 24.3, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 24.5, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 24.3, pathId:1},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 24.7, pathId:1},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 25.2, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 24.5, pathId:1},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 24.7, pathId:1},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 24.8, pathId:1},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 24.5, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 25.2, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 24.8, pathId:1},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 25.2, pathId:1},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 25.7, pathId:1},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 25.7, pathId:1},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 25.9, pathId:1},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 26.1, pathId:1},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 25.9, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 26.1, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 25.8, pathId:1},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 25.3, pathId:2},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 26.1, pathId:1},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 26.7, pathId:1},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 25.5, pathId:1},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 25.5, pathId:1},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 25.5, pathId:1},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 26.1, pathId:1},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 26.1, pathId:1},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 25.5, pathId:1},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 27.1, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 27.0, pathId:1},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 26.3, pathId:1},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 26.8, pathId:1},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 26.1, pathId:1},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 25.5, pathId:1},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 25.0, pathId:1},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.5, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 26.8, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 20.3, pathId:4},
				{duration: 25.0, pathId:2},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 20.1, pathId:4},
				{duration: 24.6, pathId:2},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 20.2, pathId:4},
				{duration: 25.4, pathId:2},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 26.0, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.3, pathId: 0},
				{duration: 25.5, pathId: 1},
				{duration: 24.9, pathId: 2},
				{duration: 19.9, pathId: 3},
				{duration: 20.4, pathId: 4},
			]
		}
	];

	return {
		O: 'B',
		D: 'E',
		minDuration: 19.3,
		maxDuration: 27.1,
		paths: paths,
		data: data
	}
};