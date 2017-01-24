//date: 010417
function getObj() {
	var paths = [
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
		{
			desc: 'I-210 E',
			len: 13860,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.13995510000001, lng:-118.0353131},
				{lat:34.1401799, lng:-118.0171855},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
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
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 14.5, pathId:1},
				{duration: 17.0, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 14.9, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.6, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.5, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 16.4, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.7, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 16.0, pathId:1},
				{duration: 14.9, pathId:2},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 16.1, pathId:1},
				{duration: 14.9, pathId:2},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.9, pathId:1},
				{duration: 14.6, pathId:2},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 16.1, pathId:1},
				{duration: 14.8, pathId:2},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.7, pathId:1},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.5, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 15.8, pathId:1},
				{duration: 14.8, pathId:2},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 14.8, pathId:2},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.9, pathId:2},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 16.6, pathId:2},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.9, pathId:3},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.6, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 15.5, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 14.5, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 14.2, pathId:1},
				{duration: 16.4, pathId:2},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 14.8, pathId:2},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 14.9, pathId:2},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 16.2, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 16.3, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 16.4, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 16.1, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 16.2, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 16.0, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.5, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 15.9, pathId:1},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.8, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.9, pathId:1},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 16.3, pathId:1},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 15.8, pathId:1},
				{duration: 15.5, pathId:2},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 16.3, pathId:2},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 18.2, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 17.2, pathId:1},
				{duration: 19.1, pathId:2},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 17.2, pathId:1},
				{duration: 19.9, pathId:2},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 16.4, pathId:1},
				{duration: 16.8, pathId:3},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 16.5, pathId:1},
				{duration: 17.9, pathId:2},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 16.5, pathId:0},
				{duration: 17.0, pathId:1},
				{duration: 17.1, pathId:3},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.4, pathId:1},
				{duration: 15.7, pathId:2},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.2, pathId:1},
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 16.5, pathId:0},
				{duration: 16.7, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 14.5, pathId:2},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 14.2, pathId:2},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 14.1, pathId:2},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 13.9, pathId:2},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 14.2, pathId:2},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 14.1, pathId:2},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 14.2, pathId:2},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 14.4, pathId:2},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 14.4, pathId:2},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 14.2, pathId:2},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 14.2, pathId:2},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.8, pathId:1},
				{duration: 14.5, pathId:2},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 14.4, pathId:2},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.5, pathId:1},
				{duration: 14.3, pathId:2},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.4, pathId:1},
				{duration: 14.8, pathId:2},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 14.6, pathId:2},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 13.8, pathId:2},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 15.0, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 14.2, pathId:2},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 14.4, pathId:2},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 14.3, pathId:2},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 14.3, pathId:2},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 13.8, pathId:2},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 14.9, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 13.7, pathId:2},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 14.8, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 14.9, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 14.2, pathId:2},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 13.8, pathId:2},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 13.8, pathId:2},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 14.3, pathId:2},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 14.1, pathId:2},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 14.2, pathId:2},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 14.1, pathId:2},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 13.9, pathId:2},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 14.1, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 15.3, pathId: 0},
				{duration: 15.6, pathId: 1},
				{duration: 15.2, pathId: 2},
				{duration: 16.6, pathId: 3},
			]
		}
	];

	return {
		O: 'C',
		D: 'E',
		minDuration: 13.7,
		maxDuration: 19.9,
		paths: paths,
		data: data
	}
};