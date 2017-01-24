//date: 010517
function getObj() {
	var paths = [
		{
			desc: 'I-210 W',
			len: 7748,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1528709, lng:-118.1213202},
				{lat:34.1507941, lng:-118.1536527},
				{lat:34.1486329, lng:-118.1576192},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 6700,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1407401, lng:-118.1594451},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 7330,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1407512, lng:-118.1536444},
				{lat:34.1411086, lng:-118.1540961},
				{lat:34.1425593, lng:-118.1546716},
				{lat:34.1532451, lng:-118.1565715},
				{lat:34.1588408, lng:-118.1584947},
				{lat:34.1621295, lng:-118.1579265},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.1579727, lng:-118.1633984},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 6833,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.140383, lng:-118.141367},
				{lat:34.1495323, lng:-118.1414659},
				{lat:34.1496759, lng:-118.1612065},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1615898, lng:-118.1658912},
			]
		},
	];

	var data = [
		{
			time: '06:00 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 17.4, pathId:1},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 16.9, pathId:1},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 16.9, pathId:1},
				{duration: 17.0, pathId:2},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 17.0, pathId:1},
				{duration: 17.1, pathId:2},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 16.8, pathId:1},
				{duration: 17.0, pathId:2},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 16.9, pathId:1},
				{duration: 17.0, pathId:2},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 17.5, pathId:1},
				{duration: 17.3, pathId:2},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 17.6, pathId:1},
				{duration: 17.3, pathId:2},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 16.9, pathId:2},
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 16.8, pathId:2},
				{duration: 17.5, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 16.8, pathId:2},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 16.9, pathId:2},
				{duration: 17.5, pathId:1},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 16.9, pathId:2},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 15.6, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 16.8, pathId:2},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 16.7, pathId:1},
				{duration: 16.6, pathId:2},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 16.6, pathId:1},
				{duration: 16.5, pathId:2},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 16.6, pathId:1},
				{duration: 16.4, pathId:2},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 16.7, pathId:1},
				{duration: 16.5, pathId:2},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 16.3, pathId:2},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 16.4, pathId:2},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 16.4, pathId:2},
				{duration: 16.1, pathId:0},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 16.5, pathId:2},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 16.5, pathId:1},
				{duration: 16.3, pathId:2},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 16.2, pathId:2},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 15.7, pathId:0},
				{duration: 16.2, pathId:2},
				{duration: 16.9, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 16.3, pathId:2},
				{duration: 17.0, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 17.4, pathId:2},
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 17.8, pathId:1},
				{duration: 17.6, pathId:2},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 17.5, pathId:2},
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 18.1, pathId:1},
				{duration: 17.9, pathId:2},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 18.2, pathId:1},
				{duration: 18.0, pathId:2},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 17.7, pathId:1},
				{duration: 18.2, pathId:2},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 17.7, pathId:1},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 17.8, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 17.8, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 18.3, pathId:1},
				{duration: 18.4, pathId:2},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 17.9, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 18.3, pathId:1},
				{duration: 18.3, pathId:2},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 18.1, pathId:1},
				{duration: 18.2, pathId:2},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 18.3, pathId:2},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 17.8, pathId:1},
				{duration: 17.8, pathId:2},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 17.6, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 17.6, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 18.1, pathId:2},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 18.1, pathId:2},
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 17.8, pathId:2},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 18.1, pathId:2},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 18.0, pathId:2},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 18.0, pathId:2},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 18.5, pathId:2},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 16.8, pathId:3},
				{duration: 18.4, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 18.4, pathId:2},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 18.4, pathId:2},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 18.4, pathId:2},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 18.5, pathId:2},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 18.6, pathId:2},
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 18.9, pathId:2},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 17.5, pathId:3},
				{duration: 18.8, pathId:2},
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 18.8, pathId:2},
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 17.6, pathId:3},
				{duration: 19.3, pathId:2},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 18.9, pathId:2},
				{duration: 19.3, pathId:1},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 17.2, pathId:3},
				{duration: 18.9, pathId:1},
				{duration: 18.5, pathId:2},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 18.8, pathId:2},
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 16.9, pathId:3},
				{duration: 18.6, pathId:1},
				{duration: 18.5, pathId:2},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 18.9, pathId:1},
				{duration: 18.7, pathId:2},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 17.3, pathId:3},
				{duration: 19.0, pathId:1},
				{duration: 18.9, pathId:2},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 18.9, pathId:2},
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 19.0, pathId:1},
				{duration: 18.9, pathId:2},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 19.8, pathId:1},
				{duration: 19.6, pathId:2},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 18.8, pathId:2},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 18.6, pathId:2},
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 18.7, pathId:2},
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 19.4, pathId:1},
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 17.8, pathId:3},
				{duration: 19.6, pathId:1},
				{duration: 19.5, pathId:2},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 17.7, pathId:3},
				{duration: 19.4, pathId:1},
				{duration: 19.4, pathId:2},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 18.4, pathId:2},
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 18.8, pathId:2},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 18.6, pathId:2},
				{duration: 19.3, pathId:1},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 18.8, pathId:2},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 18.5, pathId:1},
				{duration: 18.7, pathId:2},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 18.1, pathId:1},
				{duration: 18.6, pathId:2},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 17.9, pathId:1},
				{duration: 18.6, pathId:2},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 18.5, pathId:1},
				{duration: 19.2, pathId:2},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 19.1, pathId:1},
				{duration: 19.1, pathId:2},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 18.9, pathId:2},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 18.8, pathId:2},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 18.8, pathId:1},
				{duration: 18.7, pathId:2},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 18.1, pathId:1},
				{duration: 18.0, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 16.3, pathId: 0},
				{duration: 18.3, pathId: 1},
				{duration: 18.0, pathId: 2},
				{duration: 17.3, pathId: 3},
			]
		}
	];

	return {
		O: 'B',
		D: 'A',
		minDuration: 14.7,
		maxDuration: 20.7,
		paths: paths,
		data: data
	}
};