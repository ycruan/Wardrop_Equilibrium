//date: 011817
function getObj() {
	var paths = [
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
			desc: 'E Foothill Blvd',
			len: 8679,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.13995510000001, lng:-118.0353131},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1454912, lng:-118.0415622},
				{lat:34.1455063, lng:-118.0316305},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
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
			len: 8641,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1466575, lng:-118.0500917},
				{lat:34.1477298, lng:-118.0498345},
				{lat:34.1482864, lng:-118.0498266},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455063, lng:-118.0316305},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.151431, lng:-117.994965},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Foothill Blvd',
			len: 8517,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1466575, lng:-118.0500917},
				{lat:34.1477298, lng:-118.0498345},
				{lat:34.1482864, lng:-118.0498266},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455063, lng:-118.0316305},
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
	];

	var data = [
		{
			time: '05:00 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 13.2, pathId:1},
				{duration: 15.1, pathId:2},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 13.2, pathId:1},
				{duration: 15.4, pathId:2},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 13.3, pathId:1},
				{duration: 15.1, pathId:3},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 13.3, pathId:1},
				{duration: 15.1, pathId:3},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 13.3, pathId:1},
				{duration: 15.1, pathId:3},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 13.3, pathId:1},
				{duration: 15.6, pathId:3},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 13.9, pathId:1},
				{duration: 16.0, pathId:4},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 13.9, pathId:1},
				{duration: 17.4, pathId:5},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 14.0, pathId:1},
				{duration: 17.3, pathId:5},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 14.1, pathId:1},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 14.1, pathId:1},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 14.1, pathId:1},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 13.9, pathId:1},
				{duration: 17.1, pathId:5},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 13.7, pathId:1},
				{duration: 17.1, pathId:5},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 13.9, pathId:1},
				{duration: 17.1, pathId:5},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 14.0, pathId:1},
				{duration: 17.1, pathId:5},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 14.0, pathId:1},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.0, pathId:1},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.1, pathId:1},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.6, pathId:1},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 14.9, pathId:1},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.9, pathId:1},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.6, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 14.6, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 14.4, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 14.4, pathId:1},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 14.4, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 14.3, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 14.9, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.6, pathId:5},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 15.4, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 15.4, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.4, pathId:5},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.4, pathId:5},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 14.9, pathId:1},
				{duration: 15.5, pathId:5},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.5, pathId:5},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.6, pathId:5},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.4, pathId:5},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 15.3, pathId:1},
				{duration: 15.4, pathId:5},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 15.3, pathId:5},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 15.7, pathId:5},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 15.4, pathId:1},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 15.4, pathId:1},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 15.7, pathId:1},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.9, pathId:1},
				{duration: 16.3, pathId:5},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.1, pathId:5},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 15.6, pathId:5},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 14.4, pathId:1},
				{duration: 15.5, pathId:5},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 15.4, pathId:5},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 15.6, pathId:5},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 15.7, pathId:5},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 16.4, pathId:5},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 16.4, pathId:5},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 13.7, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 16.2, pathId:5},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 16.1, pathId:1},
				{duration: 16.3, pathId:5},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 16.1, pathId:1},
				{duration: 16.1, pathId:5},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 16.0, pathId:5},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 16.3, pathId:5},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 14.6, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 16.1, pathId:5},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 15.9, pathId:5},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 15.1, pathId:1},
				{duration: 15.8, pathId:5},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 15.3, pathId:0},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 15.7, pathId:1},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.8, pathId:5},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 15.8, pathId:5},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 15.7, pathId:5},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 15.0, pathId:1},
				{duration: 16.4, pathId:5},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 14.8, pathId:1},
				{duration: 16.3, pathId:5},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 14.8, pathId:1},
				{duration: 16.4, pathId:5},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 14.4, pathId:0},
				{duration: 15.9, pathId:1},
				{duration: 16.4, pathId:5},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 15.3, pathId:1},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 15.4, pathId:1},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.7, pathId:1},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 15.0, pathId:1},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 14.3, pathId:0},
				{duration: 15.5, pathId:1},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 14.5, pathId:1},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 14.4, pathId:1},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 14.4, pathId:1},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 14.7, pathId:1},
				{duration: 15.4, pathId:5},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 14.6, pathId:1},
				{duration: 15.2, pathId:5},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 15.1, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 14.2, pathId: 0},
				{duration: 14.8, pathId: 1},
				{duration: 15.2, pathId: 2},
				{duration: 15.2, pathId: 3},
				{duration: 16.0, pathId: 4},
				{duration: 16.0, pathId: 5},
			]
		}
	];

	return {
		O: 'C',
		D: 'D',
		minDuration: 13.2,
		maxDuration: 17.4,
		paths: paths,
		data: data
	}
};