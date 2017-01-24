//date: 011817
function getObj() {
	var paths = [
		{
			desc: 'E Foothill Blvd',
			len: 7633,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.13995510000001, lng:-118.0353131},
				{lat:34.14225270000001, lng:-118.0315434},
				{lat:34.1455082, lng:-118.0314964},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 7162,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.13995510000001, lng:-118.0353131},
				{lat:34.1404616, lng:-117.9950196},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Foothill Blvd',
			len: 8162,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1455464, lng:-118.0500505},
				{lat:34.1465741, lng:-118.0424554},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Foothill Blvd',
			len: 7630,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.13995510000001, lng:-118.0353131},
				{lat:34.14225270000001, lng:-118.0315434},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'W Foothill Blvd',
			len: 8027,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Foothill Blvd',
			len: 7852,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.13995510000001, lng:-118.0353131},
				{lat:34.1400541, lng:-118.0358436},
				{lat:34.1421662, lng:-118.0357219},
				{lat:34.1454499, lng:-118.035251},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Huntington Dr and E Foothill Blvd',
			len: 7815,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.13995510000001, lng:-118.0353131},
				{lat:34.1400882, lng:-118.0248906},
				{lat:34.1510564, lng:-118.0254164},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 16.3, pathId:1},
				{duration: 17.8, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 16.2, pathId:1},
				{duration: 17.5, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 16.1, pathId:1},
				{duration: 17.2, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 16.4, pathId:1},
				{duration: 17.9, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 16.4, pathId:1},
				{duration: 18.3, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 16.2, pathId:1},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 16.4, pathId:1},
				{duration: 17.7, pathId:2},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 17.0, pathId:2},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 16.9, pathId:1},
				{duration: 17.2, pathId:2},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 17.0, pathId:1},
				{duration: 17.4, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 17.4, pathId:2},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 17.6, pathId:2},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 16.9, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 16.5, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 17.0, pathId:1},
				{duration: 16.2, pathId:3},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 16.3, pathId:1},
				{duration: 16.9, pathId:2},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 16.2, pathId:1},
				{duration: 16.8, pathId:2},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 16.5, pathId:0},
				{duration: 16.0, pathId:2},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.1, pathId:2},
				{duration: 17.0, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 16.0, pathId:2},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 16.3, pathId:2},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.9, pathId:2},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.6, pathId:2},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 16.8, pathId:2},
				{duration: 17.0, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 17.0, pathId:2},
				{duration: 17.3, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 16.1, pathId:2},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 15.6, pathId:2},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 16.5, pathId:0},
				{duration: 16.1, pathId:2},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 15.5, pathId:3},
				{duration: 15.9, pathId:2},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 14.8, pathId:2},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 15.1, pathId:3},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 15.3, pathId:2},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 15.1, pathId:3},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 15.4, pathId:3},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 16.9, pathId:2},
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 15.9, pathId:2},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 16.5, pathId:2},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 16.5, pathId:2},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 15.9, pathId:2},
				{duration: 17.0, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 17.7, pathId:2},
				{duration: 17.7, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 17.2, pathId:2},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 15.8, pathId:2},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 16.0, pathId:2},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 17.3, pathId:2},
				{duration: 17.3, pathId:1},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.3, pathId:2},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.3, pathId:1},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 18.2, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 17.7, pathId:1},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 18.0, pathId:1},
				{duration: 18.4, pathId:2},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 17.7, pathId:2},
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 16.5, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.7, pathId:2},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 16.6, pathId:2},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 16.4, pathId:2},
				{duration: 17.7, pathId:1},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 16.6, pathId:2},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 16.8, pathId:2},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 17.8, pathId:4},
				{duration: 18.2, pathId:1},
				{duration: 18.4, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 17.2, pathId:2},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 16.4, pathId:2},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 16.6, pathId:2},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 16.6, pathId:2},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 17.1, pathId:2},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 18.3, pathId:2},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 18.4, pathId:1},
				{duration: 19.0, pathId:2},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 18.7, pathId:2},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 18.0, pathId:2},
				{duration: 18.2, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 18.3, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 17.6, pathId:2},
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 16.2, pathId:5},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 16.1, pathId:5},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 16.0, pathId:2},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 16.8, pathId:2},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 16.9, pathId:2},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 16.3, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 16.5, pathId:2},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 17.1, pathId:2},
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 17.3, pathId:2},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 17.5, pathId:2},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 16.3, pathId:2},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 16.6, pathId:2},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 17.1, pathId:2},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 17.8, pathId:2},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 19.1, pathId:2},
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 17.8, pathId:2},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 17.0, pathId:2},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 16.8, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 16.1, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 16.1, pathId:2},
				{duration: 19.3, pathId:1},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 16.3, pathId:2},
				{duration: 17.5, pathId:6},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 17.3, pathId:2},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 16.5, pathId:2},
				{duration: 17.4, pathId:6},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 16.1, pathId:2},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 16.3, pathId:0},
				{duration: 16.2, pathId:2},
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 15.6, pathId:2},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 16.1, pathId:2},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 15.8, pathId:2},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 15.5, pathId:2},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 15.4, pathId:2},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 15.9, pathId:2},
				{duration: 17.5, pathId:1},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 16.3, pathId:0},
				{duration: 16.2, pathId:2},
				{duration: 17.5, pathId:1},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 16.1, pathId:2},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 16.5, pathId:0},
				{duration: 16.0, pathId:2},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 16.7, pathId:2},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 15.7, pathId:2},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 16.1, pathId:2},
				{duration: 17.0, pathId:1},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 16.3, pathId:2},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 15.8, pathId:2},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 16.6, pathId:2},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 16.6, pathId:2},
				{duration: 16.5, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 16.1, pathId:2},
				{duration: 16.7, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 17.0, pathId:2},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 16.6, pathId:2},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 15.9, pathId:2},
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 15.8, pathId:2},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 16.4, pathId:2},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.0, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 16.0, pathId: 0},
				{duration: 17.5, pathId: 1},
				{duration: 16.8, pathId: 2},
				{duration: 15.5, pathId: 3},
				{duration: 17.8, pathId: 4},
				{duration: 16.1, pathId: 5},
				{duration: 17.4, pathId: 6},
			]
		}
	];

	return {
		O: 'C',
		D: 'D',
		minDuration: 14.2,
		maxDuration: 19.7,
		paths: paths,
		data: data
	}
};