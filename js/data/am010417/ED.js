//date: 010417
function getObj() {
	var paths = [
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
		{
			desc: 'Mountain Ave',
			len: 8736,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1142771, lng:-117.9828281},
				{lat:34.1182721, lng:-117.984304},
				{lat:34.121367, lng:-117.985125},
				{lat:34.122121, lng:-117.990543},
				{lat:34.146875, lng:-117.986292},
				{lat:34.1468739, lng:-117.990748},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-605 N and Historic Rte 66 W/Huntington Dr',
			len: 11692,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1068188, lng:-117.9628459},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1397107, lng:-117.9555544},
				{lat:34.140612, lng:-117.990782},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
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
			len: 11783,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1068188, lng:-117.9628459},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1397107, lng:-117.9555544},
				{lat:34.1395683, lng:-117.9862824},
				{lat:34.146875, lng:-117.986292},
				{lat:34.1468739, lng:-117.990748},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-605 N and Historic Rte 66 W/Huntington Dr',
			len: 11175,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1397107, lng:-117.9555544},
				{lat:34.1395683, lng:-117.9862824},
				{lat:34.146875, lng:-117.986292},
				{lat:34.1468739, lng:-117.990748},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
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
			desc: 'I-605 N',
			len: 10512,
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
				{lat:34.1358896, lng:-117.9907824},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Live Oak Ave and S California Ave',
			len: 9402,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.116623, lng:-118.0004605},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Live Oak Ave and S California Ave',
			len: 9639,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.116623, lng:-118.0004605},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
	];

	var data = [
		{
			time: '06:00 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 15.4, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 15.4, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.7, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 15.7, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 14.7, pathId:2},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 15.7, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 15.3, pathId:3},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 14.6, pathId:4},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 15.2, pathId:5},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 15.2, pathId:2},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 15.1, pathId:6},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 15.0, pathId:2},
				{duration: 15.2, pathId:6},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 14.9, pathId:2},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 14.9, pathId:2},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 15.1, pathId:2},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 15.9, pathId:3},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 15.6, pathId:5},
				{duration: 16.6, pathId:1},
				{duration: 15.8, pathId:3},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 17.3, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 17.3, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 17.4, pathId:7},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 17.0, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 17.0, pathId:1},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 17.3, pathId:1},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 17.5, pathId:1},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 17.0, pathId:1},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 16.9, pathId:1},
				{duration: 17.2, pathId:8},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 16.9, pathId:1},
				{duration: 16.9, pathId:8},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 15.5, pathId:3},
				{duration: 16.6, pathId:8},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 13.9, pathId:9},
				{duration: 16.7, pathId:8},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 16.8, pathId:1},
				{duration: 16.9, pathId:8},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 16.6, pathId:8},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 16.7, pathId:8},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 16.6, pathId:8},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 16.4, pathId:8},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 16.4, pathId:8},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 16.3, pathId:8},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 16.0, pathId:8},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 16.3, pathId:8},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 16.8, pathId:8},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 16.8, pathId:8},
				{duration: 17.5, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 16.6, pathId:8},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 16.5, pathId:8},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 16.0, pathId:8},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 16.0, pathId:8},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 16.0, pathId:8},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 15.8, pathId:8},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 13.7, pathId:9},
				{duration: 15.7, pathId:8},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 15.8, pathId:8},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 16.0, pathId:8},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 16.8, pathId:8},
				{duration: 18.1, pathId:1},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 16.6, pathId:8},
				{duration: 18.1, pathId:1},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 16.2, pathId:8},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 15.9, pathId:8},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 15.7, pathId:8},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 15.9, pathId:8},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 16.0, pathId:8},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 16.1, pathId:8},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 16.1, pathId:8},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 16.0, pathId:8},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 14.9, pathId: 0},
				{duration: 16.6, pathId: 1},
				{duration: 15.0, pathId: 2},
				{duration: 15.6, pathId: 3},
				{duration: 14.6, pathId: 4},
				{duration: 15.4, pathId: 5},
				{duration: 15.1, pathId: 6},
				{duration: 17.4, pathId: 7},
				{duration: 16.3, pathId: 8},
				{duration: 13.8, pathId: 9},
			]
		}
	];

	return {
		O: 'E',
		D: 'D',
		minDuration: 13.7,
		maxDuration: 18.1,
		paths: paths,
		data: data
	}
};