//date: 012517
function getObj() {
	var paths = [
		{
			desc: 'I-210 E',
			len: 11584,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1484994, lng:-118.05017},
				{lat:34.13538460000001, lng:-118.0045362},
				{lat:34.1350397, lng:-118.0015131},
				{lat:34.1350564, lng:-118.0008786},
				{lat:34.1111478, lng:-118.0047195},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E Longden Ave',
			len: 8266,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.1141667, lng:-118.0310118},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Santa Anita Ave and W Live Oak Ave',
			len: 8989,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.10737590000001, lng:-118.0308782},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Santa Anita Ave and W Live Oak Ave',
			len: 9283,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1273895, lng:-118.0458547},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.10737590000001, lng:-118.0308782},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Santa Anita Ave and W Live Oak Ave',
			len: 9159,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.10737590000001, lng:-118.0308782},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 11154,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1484994, lng:-118.05017},
				{lat:34.13538460000001, lng:-118.0045362},
				{lat:34.1350397, lng:-118.0015131},
				{lat:34.1350564, lng:-118.0008786},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 15374,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1484994, lng:-118.05017},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
	];

	var data = [
		{
			time: '05:00 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 13.3, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 13.3, pathId:1},
				{duration: 13.5, pathId:2},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 13.4, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 13.4, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 13.6, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 13.7, pathId:1},
				{duration: 13.5, pathId:2},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 13.7, pathId:1},
				{duration: 13.5, pathId:2},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 13.7, pathId:1},
				{duration: 13.5, pathId:2},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 13.7, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 13.7, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 13.7, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 13.6, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 13.6, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 13.6, pathId:1},
				{duration: 13.8, pathId:2},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 13.6, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 13.6, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 13.5, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 13.6, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 13.6, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 13.5, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 13.6, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 13.6, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 13.6, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 13.5, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 13.5, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 13.8, pathId:2},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 13.8, pathId:2},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 14.2, pathId:2},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 14.1, pathId:3},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 14.1, pathId:3},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 14.0, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 13.8, pathId:1},
				{duration: 14.0, pathId:2},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 13.8, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.0, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.0, pathId:1},
				{duration: 13.8, pathId:2},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 14.0, pathId:1},
				{duration: 13.8, pathId:2},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 14.0, pathId:1},
				{duration: 13.8, pathId:2},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 14.1, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.3, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.3, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 13.7, pathId:2},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 13.7, pathId:2},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 13.7, pathId:2},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 13.7, pathId:2},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 14.9, pathId:1},
				{duration: 13.8, pathId:2},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 14.8, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 13.8, pathId:2},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.1, pathId:1},
				{duration: 13.6, pathId:2},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.1, pathId:1},
				{duration: 14.0, pathId:2},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 14.3, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 14.5, pathId:2},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 14.1, pathId:1},
				{duration: 14.5, pathId:2},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 14.1, pathId:1},
				{duration: 14.1, pathId:2},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 14.3, pathId:1},
				{duration: 13.8, pathId:2},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 14.2, pathId:2},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 14.1, pathId:2},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 13.8, pathId:2},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 14.0, pathId:2},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 14.9, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 14.3, pathId:2},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 14.4, pathId:1},
				{duration: 14.0, pathId:2},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 14.5, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 14.6, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 14.4, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 15.4, pathId:1},
				{duration: 14.6, pathId:2},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 15.3, pathId:1},
				{duration: 14.2, pathId:2},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 15.5, pathId:1},
				{duration: 14.3, pathId:2},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 15.5, pathId:1},
				{duration: 14.8, pathId:2},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 15.6, pathId:1},
				{duration: 14.7, pathId:2},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 15.4, pathId:1},
				{duration: 14.2, pathId:2},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 15.1, pathId:1},
				{duration: 14.4, pathId:2},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 14.9, pathId:2},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 14.2, pathId:2},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 14.3, pathId:2},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 14.2, pathId:2},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 14.9, pathId:2},
				{duration: 17.0, pathId:4},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 15.0, pathId:5},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 15.2, pathId:2},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 17.2, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 16.7, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 16.4, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 16.6, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 16.6, pathId:1},
				{duration: 15.4, pathId:5},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 17.3, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 16.0, pathId:2},
				{duration: 17.5, pathId:1},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 16.0, pathId:2},
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 15.7, pathId:2},
				{duration: 17.7, pathId:1},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 15.9, pathId:2},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 17.3, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.3, pathId:1},
				{duration: 16.4, pathId:2},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 16.0, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 16.6, pathId:2},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 16.0, pathId:1},
				{duration: 14.5, pathId:6},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 16.1, pathId:1},
				{duration: 14.7, pathId:6},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 15.6, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 16.1, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.7, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.5, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 14.8, pathId:1},
				{duration: 14.5, pathId:6},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 14.2, pathId:1},
				{duration: 15.0, pathId:6},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.3, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 14.4, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 14.6, pathId:2},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 15.8, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 14.6, pathId:2},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 15.6, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 15.6, pathId:1},
				{duration: 14.8, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 14.7, pathId: 0},
				{duration: 14.9, pathId: 1},
				{duration: 14.4, pathId: 2},
				{duration: 14.1, pathId: 3},
				{duration: 17.0, pathId: 4},
				{duration: 15.2, pathId: 5},
				{duration: 14.7, pathId: 6},
			]
		}
	];

	return {
		O: 'C',
		D: 'E',
		minDuration: 13.3,
		maxDuration: 17.8,
		paths: paths,
		data: data
	}
};