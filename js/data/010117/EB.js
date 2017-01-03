//date: 010217
function getObj() {
	var paths = [
		{
			desc: 'I-10 W and San Gabriel Blvd',
			len: 24728,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0721831, lng:-118.0885557},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Temple City Blvd',
			len: 24230,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0726533, lng:-118.056519},
				{lat:34.0730994, lng:-118.0584989},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E California Blvd',
			len: 24279,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0684032, lng:-118.0381796},
				{lat:34.0690285, lng:-118.0413778},
				{lat:34.0691301, lng:-118.0421032},
				{lat:34.076492, lng:-118.0409395},
				{lat:34.0813054, lng:-118.058277},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 23627,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
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
			len: 21360,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
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
			desc: 'I-10 W',
			len: 25002,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0720762, lng:-118.0972513},
				{lat:34.0734252, lng:-118.0994908},
				{lat:34.1238154, lng:-118.1004512},
				{lat:34.1272935, lng:-118.1013765},
				{lat:34.1281825, lng:-118.1031837},
				{lat:34.1358574, lng:-118.1014553},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 29.7, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 29.7, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 29.7, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 29.7, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 29.7, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 34.0, pathId:3},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 34.0, pathId:3},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 28.9, pathId:4},
				{duration: 26.8, pathId:1},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 28.9, pathId:4},
				{duration: 26.8, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 29.1, pathId:5},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 29.1, pathId:5},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 29.7, pathId:2},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:4},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 23.3, pathId: 0},
				{duration: 26.8, pathId: 1},
				{duration: 29.7, pathId: 2},
				{duration: 34.0, pathId: 3},
				{duration: 28.9, pathId: 4},
				{duration: 29.1, pathId: 5},
			]
		}
	];

	return {
		O: 'E',
		D: 'B',
		minDuration: 23.3,
		maxDuration: 34.0,
		paths: paths,
		data: data
	}
};