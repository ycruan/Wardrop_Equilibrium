//date: 010517
function getObj() {
	var paths = [
		{
			desc: 'S California Ave',
			len: 5966,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148148, lng:-117.994966},
				{lat:34.1164238, lng:-118.0014385},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-605 S',
			len: 9000,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.14823090000001, lng:-117.99075},
				{lat:34.1350102, lng:-117.990776},
				{lat:34.1350196, lng:-117.9808375},
				{lat:34.1352307, lng:-117.97785},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S California Ave',
			len: 6281,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148148, lng:-117.994966},
				{lat:34.1296412, lng:-117.9950157},
				{lat:34.127867, lng:-117.988314},
				{lat:34.122121, lng:-117.990543},
				{lat:34.121367, lng:-117.985125},
				{lat:34.1182721, lng:-117.984304},
				{lat:34.1142771, lng:-117.9828281},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
	];

	var data = [
		{
			time: '06:00 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 10.6, pathId:1},
				{duration: 11.8, pathId:2},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 10.3, pathId:0},
				{duration: 10.6, pathId:1},
				{duration: 11.8, pathId:2},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 10.3, pathId:0},
				{duration: 10.6, pathId:1},
				{duration: 11.8, pathId:2},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 10.6, pathId:1},
				{duration: 11.8, pathId:2},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 10.4, pathId:1},
				{duration: 11.8, pathId:2},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 10.4, pathId:1},
				{duration: 11.8, pathId:2},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 10.5, pathId:1},
				{duration: 11.8, pathId:2},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 10.6, pathId:1},
				{duration: 11.8, pathId:2},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 10.6, pathId:1},
				{duration: 11.8, pathId:2},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 10.6, pathId:1},
				{duration: 12.0, pathId:2},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 10.7, pathId:1},
				{duration: 12.0, pathId:2},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 10.6, pathId:1},
				{duration: 11.9, pathId:2},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 10.7, pathId:1},
				{duration: 11.9, pathId:2},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 10.8, pathId:1},
				{duration: 11.9, pathId:2},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 10.8, pathId:1},
				{duration: 11.9, pathId:2},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 12.1, pathId:2},
				{duration: 11.6, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 12.2, pathId:2},
				{duration: 11.7, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 12.2, pathId:2},
				{duration: 11.6, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 12.0, pathId:2},
				{duration: 11.6, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 12.0, pathId:2},
				{duration: 11.4, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 12.0, pathId:2},
				{duration: 11.5, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 12.0, pathId:2},
				{duration: 11.4, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 12.2, pathId:2},
				{duration: 11.5, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 11.9, pathId:2},
				{duration: 11.6, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 12.0, pathId:2},
				{duration: 11.5, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 12.1, pathId:2},
				{duration: 11.3, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 12.1, pathId:2},
				{duration: 11.2, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 12.1, pathId:2},
				{duration: 11.2, pathId:1},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.1, pathId:1},
				{duration: 12.1, pathId:2},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 11.1, pathId:1},
				{duration: 12.2, pathId:2},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 11.1, pathId:1},
				{duration: 12.2, pathId:2},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 11.1, pathId:1},
				{duration: 12.2, pathId:2},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.1, pathId:1},
				{duration: 12.3, pathId:2},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 12.5, pathId:2},
				{duration: 12.0, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 12.6, pathId:2},
				{duration: 11.9, pathId:1},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 12.4, pathId:2},
				{duration: 11.9, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 12.4, pathId:2},
				{duration: 11.9, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 11.3, pathId:0},
				{duration: 12.5, pathId:2},
				{duration: 12.0, pathId:1},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 11.1, pathId:0},
				{duration: 12.6, pathId:2},
				{duration: 11.9, pathId:1},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 11.1, pathId:0},
				{duration: 11.3, pathId:1},
				{duration: 12.6, pathId:2},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 11.1, pathId:0},
				{duration: 11.3, pathId:1},
				{duration: 12.6, pathId:2},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 12.8, pathId:2},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 11.6, pathId:1},
				{duration: 13.0, pathId:2},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 11.5, pathId:1},
				{duration: 13.0, pathId:2},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 11.6, pathId:1},
				{duration: 12.8, pathId:2},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 11.4, pathId:0},
				{duration: 11.3, pathId:1},
				{duration: 12.6, pathId:2},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 11.2, pathId:1},
				{duration: 12.3, pathId:2},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 11.3, pathId:1},
				{duration: 12.5, pathId:2},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 11.7, pathId:1},
				{duration: 13.1, pathId:2},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 12.6, pathId:2},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 11.6, pathId:1},
				{duration: 12.7, pathId:2},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 12.5, pathId:2},
				{duration: 11.9, pathId:1},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.3, pathId:2},
				{duration: 11.7, pathId:1},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:2},
				{duration: 11.8, pathId:1},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:2},
				{duration: 11.9, pathId:1},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:2},
				{duration: 11.6, pathId:1},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 12.3, pathId:2},
				{duration: 11.5, pathId:1},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 12.6, pathId:2},
				{duration: 11.8, pathId:1},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 12.6, pathId:2},
				{duration: 11.7, pathId:1},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 11.5, pathId:1},
				{duration: 12.5, pathId:2},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 12.3, pathId:2},
				{duration: 11.5, pathId:1},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 12.3, pathId:2},
				{duration: 11.3, pathId:1},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 11.1, pathId:0},
				{duration: 12.3, pathId:2},
				{duration: 11.5, pathId:1},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 12.3, pathId:2},
				{duration: 11.6, pathId:1},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 12.5, pathId:2},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.5, pathId:1},
				{duration: 12.6, pathId:2},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 12.5, pathId:2},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 12.5, pathId:2},
				{duration: 11.5, pathId:1},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 11.7, pathId:0},
				{duration: 12.4, pathId:2},
				{duration: 11.8, pathId:1},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 12.5, pathId:2},
				{duration: 11.9, pathId:1},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 12.5, pathId:2},
				{duration: 11.9, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 12.4, pathId:2},
				{duration: 11.9, pathId:1},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.3, pathId:2},
				{duration: 11.8, pathId:1},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 12.4, pathId:2},
				{duration: 11.9, pathId:1},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 11.1, pathId:0},
				{duration: 12.3, pathId:2},
				{duration: 11.8, pathId:1},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 12.2, pathId:2},
				{duration: 11.9, pathId:1},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 12.5, pathId:2},
				{duration: 11.7, pathId:1},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 12.5, pathId:2},
				{duration: 11.8, pathId:1},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 11.1, pathId:0},
				{duration: 12.6, pathId:2},
				{duration: 11.7, pathId:1},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 12.6, pathId:2},
				{duration: 11.6, pathId:1},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 11.6, pathId:1},
				{duration: 12.6, pathId:2},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 11.4, pathId:0},
				{duration: 11.6, pathId:1},
				{duration: 13.0, pathId:2},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 11.3, pathId:0},
				{duration: 11.6, pathId:1},
				{duration: 12.9, pathId:2},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 11.5, pathId:1},
				{duration: 12.8, pathId:2},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 11.5, pathId:0},
				{duration: 12.8, pathId:2},
				{duration: 12.0, pathId:1},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 12.7, pathId:2},
				{duration: 11.8, pathId:1},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 11.3, pathId:1},
				{duration: 12.5, pathId:2},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 11.2, pathId:1},
				{duration: 12.6, pathId:2},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.3, pathId:1},
				{duration: 12.5, pathId:2},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 12.6, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 10.8, pathId: 0},
				{duration: 11.4, pathId: 1},
				{duration: 12.3, pathId: 2},
			]
		}
	];

	return {
		O: 'D',
		D: 'E',
		minDuration: 10.2,
		maxDuration: 13.1,
		paths: paths,
		data: data
	}
};