//date: 010417
function getObj() {
	var paths = [
		{
			desc: 'S California Ave',
			len: 8862,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1142771, lng:-117.9828281},
				{lat:34.1182721, lng:-117.984304},
				{lat:34.121367, lng:-117.985125},
				{lat:34.122121, lng:-117.990543},
				{lat:34.127867, lng:-117.988314},
				{lat:34.1296412, lng:-117.9950157},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Live Oak Ave',
			len: 9672,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1127132, lng:-117.990546},
				{lat:34.1130754, lng:-117.9905053},
				{lat:34.114184, lng:-117.9828125},
				{lat:34.1182721, lng:-117.984304},
				{lat:34.121367, lng:-117.985125},
				{lat:34.122121, lng:-117.990543},
				{lat:34.127867, lng:-117.988314},
				{lat:34.1296412, lng:-117.9950157},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-605 N',
			len: 10896,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1354371, lng:-117.9782021},
				{lat:34.1357256, lng:-117.9816735},
				{lat:34.1359108, lng:-117.9840014},
				{lat:34.1359223, lng:-117.9863289},
				{lat:34.1504962, lng:-117.9863081},
				{lat:34.150479, lng:-117.992173},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-605 N',
			len: 11441,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1397107, lng:-117.9555544},
				{lat:34.1395683, lng:-117.9862824},
				{lat:34.1504962, lng:-117.9863081},
				{lat:34.150479, lng:-117.992173},
				{lat:34.148744, lng:-117.9921699},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 13.3, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 13.4, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 13.3, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 13.4, pathId:0},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 13.4, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 16.2, pathId:1},
				{duration: 17.0, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 16.3, pathId:1},
				{duration: 16.6, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 16.2, pathId:1},
				{duration: 16.5, pathId:2},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 15.5, pathId:1},
				{duration: 15.8, pathId:3},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 16.6, pathId:2},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 15.6, pathId:1},
				{duration: 16.6, pathId:2},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 15.6, pathId:1},
				{duration: 16.6, pathId:2},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.7, pathId:1},
				{duration: 16.5, pathId:2},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.6, pathId:1},
				{duration: 16.4, pathId:2},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.0, pathId:2},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.0, pathId:2},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 16.4, pathId:2},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 16.5, pathId:2},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 15.2, pathId:2},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 15.1, pathId:2},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 15.1, pathId:2},
				{duration: 15.4, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.1, pathId:2},
				{duration: 15.3, pathId:1},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 14.9, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 14.9, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 14.8, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 14.8, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 14.8, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 14.8, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 14.8, pathId:1},
				{duration: 14.9, pathId:2},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 15.2, pathId:2},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 15.3, pathId:2},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.3, pathId:2},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 15.6, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 15.7, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 13.4, pathId:0},
				{duration: 15.6, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.7, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 13.4, pathId:0},
				{duration: 15.8, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 13.4, pathId:0},
				{duration: 15.8, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 15.6, pathId:2},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 13.4, pathId:0},
				{duration: 15.7, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.4, pathId:2},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.6, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 13.3, pathId:0},
				{duration: 15.4, pathId:2},
				{duration: 15.7, pathId:1},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 15.4, pathId:2},
				{duration: 15.7, pathId:1},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.4, pathId:2},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.5, pathId:2},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.5, pathId:2},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 15.7, pathId:2},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 15.7, pathId:2},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 15.8, pathId:2},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 15.7, pathId:2},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 15.7, pathId:2},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 15.7, pathId:2},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 15.7, pathId:2},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.4, pathId:2},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.2, pathId:2},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.3, pathId:2},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.2, pathId:2},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.2, pathId:2},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.2, pathId:2},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 12.8, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 12.9, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 13.1, pathId: 0},
				{duration: 15.4, pathId: 1},
				{duration: 15.5, pathId: 2},
				{duration: 15.8, pathId: 3},
			]
		}
	];

	return {
		O: 'E',
		D: 'D',
		minDuration: 12.4,
		maxDuration: 17.0,
		paths: paths,
		data: data
	}
};