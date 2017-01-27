//date: 012617
function getObj() {
	var paths = [
		{
			desc: 'S Myrtle Ave',
			len: 6611,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.14823090000001, lng:-117.99075},
				{lat:34.140612, lng:-117.990782},
				{lat:34.1404969, lng:-118.000779},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Myrtle Ave',
			len: 6785,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.132214, lng:-117.9950431},
				{lat:34.1322297, lng:-118.0007752},
				{lat:34.1111478, lng:-118.0047195},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
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
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Myrtle Ave',
			len: 6348,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148148, lng:-117.994966},
				{lat:34.1358758, lng:-117.9950504},
				{lat:34.1358999, lng:-118.000761},
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
			desc: 'S California Ave and S Myrtle Ave',
			len: 6356,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.132214, lng:-117.9950431},
				{lat:34.1322297, lng:-118.0007752},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Myrtle Ave',
			len: 6356,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148148, lng:-117.994966},
				{lat:34.145984, lng:-117.994957},
				{lat:34.1459098, lng:-118.0009402},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Myrtle Ave',
			len: 6350,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1405681, lng:-117.995021},
				{lat:34.1404969, lng:-118.000779},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Myrtle Ave',
			len: 6779,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1405681, lng:-117.995021},
				{lat:34.1404969, lng:-118.000779},
				{lat:34.1111478, lng:-118.0047195},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
	];

	var data = [
		{
			time: '05:00 AM',
			routes: [
				{duration: 9.9, pathId:0},
				{duration: 10.6, pathId:1},
				{duration: 10.2, pathId:2},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 10.0, pathId:0},
				{duration: 10.6, pathId:1},
				{duration: 10.2, pathId:2},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 10.7, pathId:1},
				{duration: 10.2, pathId:2},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 11.0, pathId:1},
				{duration: 10.3, pathId:2},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 11.0, pathId:1},
				{duration: 10.3, pathId:2},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 10.8, pathId:1},
				{duration: 10.3, pathId:2},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 10.8, pathId:1},
				{duration: 10.3, pathId:2},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 10.9, pathId:1},
				{duration: 10.4, pathId:2},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 10.9, pathId:1},
				{duration: 10.3, pathId:2},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 10.3, pathId:0},
				{duration: 11.0, pathId:1},
				{duration: 10.3, pathId:2},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 11.0, pathId:1},
				{duration: 10.4, pathId:2},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 10.8, pathId:1},
				{duration: 10.4, pathId:2},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 10.8, pathId:1},
				{duration: 10.4, pathId:2},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 10.9, pathId:1},
				{duration: 10.4, pathId:2},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 10.9, pathId:1},
				{duration: 10.4, pathId:2},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 10.9, pathId:1},
				{duration: 10.4, pathId:2},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 10.3, pathId:0},
				{duration: 11.2, pathId:1},
				{duration: 10.4, pathId:2},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 10.3, pathId:0},
				{duration: 11.2, pathId:1},
				{duration: 10.3, pathId:2},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 10.3, pathId:0},
				{duration: 11.2, pathId:1},
				{duration: 10.4, pathId:2},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 10.3, pathId:0},
				{duration: 11.2, pathId:1},
				{duration: 10.4, pathId:2},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 11.1, pathId:1},
				{duration: 10.5, pathId:2},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 10.1, pathId:0},
				{duration: 10.8, pathId:1},
				{duration: 10.5, pathId:2},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 10.1, pathId:0},
				{duration: 10.8, pathId:1},
				{duration: 10.5, pathId:2},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 10.1, pathId:0},
				{duration: 10.7, pathId:1},
				{duration: 10.4, pathId:2},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 10.2, pathId:0},
				{duration: 10.9, pathId:1},
				{duration: 10.4, pathId:2},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 11.1, pathId:1},
				{duration: 10.7, pathId:2},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 11.6, pathId:1},
				{duration: 10.6, pathId:2},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 11.5, pathId:1},
				{duration: 10.5, pathId:2},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 10.5, pathId:2},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 11.1, pathId:1},
				{duration: 10.6, pathId:2},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 11.2, pathId:1},
				{duration: 10.6, pathId:2},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 10.6, pathId:2},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 10.7, pathId:2},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 10.7, pathId:2},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 10.7, pathId:2},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.5, pathId:1},
				{duration: 10.7, pathId:2},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 11.6, pathId:1},
				{duration: 10.7, pathId:2},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.6, pathId:1},
				{duration: 11.3, pathId:2},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 11.3, pathId:2},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 11.4, pathId:2},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 11.4, pathId:2},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 11.1, pathId:2},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 11.3, pathId:2},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 12.0, pathId:1},
				{duration: 11.1, pathId:2},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 12.0, pathId:1},
				{duration: 11.1, pathId:2},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 10.9, pathId:2},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 10.9, pathId:2},
				{duration: 12.3, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 10.8, pathId:2},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 11.3, pathId:1},
				{duration: 10.8, pathId:2},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 11.4, pathId:1},
				{duration: 10.9, pathId:2},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 11.3, pathId:1},
				{duration: 10.8, pathId:2},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 11.5, pathId:1},
				{duration: 10.8, pathId:2},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 10.4, pathId:0},
				{duration: 11.3, pathId:1},
				{duration: 10.8, pathId:2},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 11.5, pathId:1},
				{duration: 10.9, pathId:2},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.0, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 11.1, pathId:2},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 11.4, pathId:2},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 11.5, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 11.4, pathId:2},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.3, pathId:2},
				{duration: 12.8, pathId:1},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 11.3, pathId:2},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 11.3, pathId:2},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 11.8, pathId:1},
				{duration: 11.7, pathId:2},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.8, pathId:1},
				{duration: 11.5, pathId:2},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.8, pathId:1},
				{duration: 10.8, pathId:2},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.8, pathId:1},
				{duration: 11.1, pathId:2},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 11.7, pathId:1},
				{duration: 11.4, pathId:2},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 11.7, pathId:1},
				{duration: 11.1, pathId:2},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 11.9, pathId:1},
				{duration: 11.7, pathId:2},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 11.4, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.7, pathId:2},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 11.9, pathId:0},
				{duration: 11.2, pathId:2},
				{duration: 12.8, pathId:1},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 11.5, pathId:0},
				{duration: 11.4, pathId:2},
				{duration: 12.7, pathId:1},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 11.7, pathId:2},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 12.2, pathId:2},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 11.6, pathId:1},
				{duration: 11.4, pathId:2},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 10.6, pathId:0},
				{duration: 11.6, pathId:2},
				{duration: 12.9, pathId:1},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 11.2, pathId:2},
				{duration: 12.6, pathId:1},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 11.5, pathId:2},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 11.6, pathId:2},
				{duration: 12.8, pathId:1},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 11.3, pathId:0},
				{duration: 12.1, pathId:3},
				{duration: 12.0, pathId:2},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 12.2, pathId:1},
				{duration: 11.5, pathId:2},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 11.6, pathId:0},
				{duration: 11.6, pathId:2},
				{duration: 13.3, pathId:1},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 11.5, pathId:0},
				{duration: 11.4, pathId:2},
				{duration: 13.6, pathId:1},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 12.6, pathId:2},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 11.3, pathId:2},
				{duration: 12.0, pathId:4},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 11.1, pathId:0},
				{duration: 12.6, pathId:1},
				{duration: 11.5, pathId:2},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 12.4, pathId:1},
				{duration: 11.4, pathId:2},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 11.2, pathId:2},
				{duration: 12.4, pathId:3},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 11.1, pathId:0},
				{duration: 11.6, pathId:2},
				{duration: 12.3, pathId:4},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 11.3, pathId:0},
				{duration: 11.1, pathId:2},
				{duration: 12.3, pathId:4},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 11.1, pathId:2},
				{duration: 12.6, pathId:1},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 11.2, pathId:2},
				{duration: 13.7, pathId:1},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 11.1, pathId:2},
				{duration: 12.9, pathId:1},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 12.3, pathId:1},
				{duration: 11.4, pathId:2},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 11.1, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 11.2, pathId:2},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 11.0, pathId:2},
				{duration: 12.4, pathId:1},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 11.2, pathId:2},
				{duration: 13.0, pathId:1},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 11.0, pathId:0},
				{duration: 11.5, pathId:2},
				{duration: 13.0, pathId:1},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 12.1, pathId:1},
				{duration: 11.3, pathId:2},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 10.7, pathId:0},
				{duration: 11.7, pathId:2},
				{duration: 12.9, pathId:1},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 10.9, pathId:0},
				{duration: 11.8, pathId:2},
				{duration: 13.1, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 12.1, pathId:2},
				{duration: 12.1, pathId:3},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 12.1, pathId:2},
				{duration: 12.5, pathId:3},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 11.1, pathId:0},
				{duration: 12.0, pathId:2},
				{duration: 13.0, pathId:5},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 11.8, pathId:0},
				{duration: 12.0, pathId:2},
				{duration: 13.2, pathId:3},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 12.0, pathId:2},
				{duration: 12.4, pathId:4},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 11.2, pathId:0},
				{duration: 11.9, pathId:2},
				{duration: 13.0, pathId:6},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 10.5, pathId:0},
				{duration: 11.1, pathId:2},
				{duration: 12.1, pathId:3},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.0, pathId:2},
				{duration: 13.3, pathId:3},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 10.8, pathId:0},
				{duration: 11.2, pathId:2},
				{duration: 12.2, pathId:4},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 11.6, pathId:0},
				{duration: 11.8, pathId:2},
				{duration: 12.7, pathId:1},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 11.4, pathId:0},
				{duration: 11.6, pathId:2},
				{duration: 12.3, pathId:3},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 11.6, pathId:0},
				{duration: 11.8, pathId:2},
				{duration: 12.2, pathId:3},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 14.3, pathId:1},
				{duration: 12.3, pathId:2},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 12.1, pathId:2},
				{duration: 12.7, pathId:7},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 11.6, pathId:2},
				{duration: 13.1, pathId:7},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 12.0, pathId:2},
				{duration: 12.7, pathId:7},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 12.2, pathId:2},
				{duration: 13.5, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 11.8, pathId:2},
				{duration: 12.9, pathId:8},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 12.1, pathId:0},
				{duration: 11.2, pathId:2},
				{duration: 12.8, pathId:8},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 10.8, pathId: 0},
				{duration: 11.8, pathId: 1},
				{duration: 11.1, pathId: 2},
				{duration: 12.5, pathId: 3},
				{duration: 12.2, pathId: 4},
				{duration: 13.0, pathId: 5},
				{duration: 13.0, pathId: 6},
				{duration: 12.8, pathId: 7},
				{duration: 12.9, pathId: 8},
			]
		}
	];

	return {
		O: 'D',
		D: 'E',
		minDuration: 9.9,
		maxDuration: 14.3,
		paths: paths,
		data: data
	}
};