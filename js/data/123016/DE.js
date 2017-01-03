//date: 010217
function getObj() {
	var paths = [
		{
			desc: 'Historic Rte 66 E/Huntington Dr and I-605 S',
			len: 9566,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.14823090000001, lng:-117.99075},
				{lat:34.1468739, lng:-117.990748},
				{lat:34.146875, lng:-117.986292},
				{lat:34.1395683, lng:-117.9862824},
				{lat:34.139706, lng:-117.9556739},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-605 S',
			len: 9560,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.14823090000001, lng:-117.99075},
				{lat:34.1432115, lng:-117.9907566},
				{lat:34.1433279, lng:-117.966597},
				{lat:34.1397474, lng:-117.9666173},
				{lat:34.139706, lng:-117.9556739},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-605 S',
			len: 9554,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.14823090000001, lng:-117.99075},
				{lat:34.1468739, lng:-117.990748},
				{lat:34.14687, lng:-117.979218},
				{lat:34.1436408, lng:-117.9792305},
				{lat:34.143636, lng:-117.977553},
				{lat:34.1432469, lng:-117.977546},
				{lat:34.1433279, lng:-117.966597},
				{lat:34.1397474, lng:-117.9666173},
				{lat:34.139706, lng:-117.9556739},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'Buena Vista St',
			len: 6811,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.14823090000001, lng:-117.99075},
				{lat:34.1350102, lng:-117.990776},
				{lat:34.135016, lng:-117.986324},
				{lat:34.1322786, lng:-117.9863867},
				{lat:34.132191, lng:-117.977548},
				{lat:34.1182721, lng:-117.984304},
				{lat:34.1142771, lng:-117.9828281},
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
			desc: 'I-605 S',
			len: 9002,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.14823090000001, lng:-117.99075},
				{lat:34.1350102, lng:-117.990776},
				{lat:34.1348317, lng:-117.9776331},
				{lat:34.1353012, lng:-117.9746769},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'Historic Rte 66 E/Huntington Dr and I-605 S',
			len: 9470,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.14823090000001, lng:-117.99075},
				{lat:34.140612, lng:-117.990782},
				{lat:34.139706, lng:-117.9556739},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'Historic Rte 66 E/Huntington Dr and I-605 S',
			len: 9567,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.14823090000001, lng:-117.99075},
				{lat:34.1432115, lng:-117.9907566},
				{lat:34.143201, lng:-117.986281},
				{lat:34.1395683, lng:-117.9862824},
				{lat:34.139706, lng:-117.9556739},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 13.8, pathId:3},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 13.8, pathId:3},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 13.8, pathId:3},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 13.8, pathId:3},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.6, pathId:5},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.8, pathId:6},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.1, pathId:7},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.1, pathId:7},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.6, pathId:8},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.1, pathId:7},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.7, pathId:9},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.6, pathId:5},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 13.8, pathId:3},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 14.2, pathId:4},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 10.7, pathId: 0},
				{duration: 12.2, pathId: 1},
				{duration: 11.2, pathId: 2},
				{duration: 13.8, pathId: 3},
				{duration: 14.2, pathId: 4},
				{duration: 14.6, pathId: 5},
				{duration: 11.8, pathId: 6},
				{duration: 14.1, pathId: 7},
				{duration: 12.6, pathId: 8},
				{duration: 14.7, pathId: 9},
			]
		}
	];

	return {
		O: 'D',
		D: 'E',
		minDuration: 10.7,
		maxDuration: 14.7,
		paths: paths,
		data: data
	}
};