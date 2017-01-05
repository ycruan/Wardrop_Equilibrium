//date: 010417
function getObj() {
	var paths = [
		{
			desc: 'I-210 E',
			len: 14536,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 17047,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1532843, lng:-118.156929},
				{lat:34.1357634, lng:-118.1555673},
				{lat:34.1303647, lng:-118.1547928},
				{lat:34.1275199, lng:-118.154622},
				{lat:34.12757089999999, lng:-118.1413568},
				{lat:34.1275763, lng:-118.1372571},
				{lat:34.1266246, lng:-118.137321},
				{lat:34.1252391, lng:-118.135833},
				{lat:34.1120583, lng:-118.126878},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 30.9, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 29.5, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 31.1, pathId:1},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 28.7, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 29.5, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 30.4, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 30.4, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 29.7, pathId:1},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 30.0, pathId:1},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 16.3, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 29.5, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 30.5, pathId:1},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 30.2, pathId:1},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 30.7, pathId:1},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 30.2, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 30.9, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 31.3, pathId:1},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 32.3, pathId:1},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 31.3, pathId:1},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 30.7, pathId:1},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 31.3, pathId:1},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 30.8, pathId:1},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 31.4, pathId:1},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 31.9, pathId:1},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 32.1, pathId:1},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 31.5, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 31.7, pathId:1},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 31.0, pathId:1},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 30.5, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 30.6, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 30.6, pathId:1},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 29.7, pathId:1},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 29.7, pathId:1},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 29.5, pathId:1},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 16.3, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 30.2, pathId:1},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 30.6, pathId:1},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 31.1, pathId:1},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 30.6, pathId:1},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 28.7, pathId:1},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 16.2, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 29.5, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 28.7, pathId:1},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 16.2, pathId: 0},
				{duration: 29.7, pathId: 1},
			]
		}
	];

	return {
		O: 'A',
		D: 'C',
		minDuration: 15.4,
		maxDuration: 32.3,
		paths: paths,
		data: data
	}
};