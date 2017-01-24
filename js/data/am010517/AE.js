//date: 010517
function getObj() {
	var paths = [
		{
			desc: 'I-210 E',
			len: 25629,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 25617,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 22553,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1318428, lng:-118.0545846},
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
			desc: 'I-210 E',
			len: 21397,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.13538460000001, lng:-118.0045362},
				{lat:34.1350397, lng:-118.0015131},
				{lat:34.1350564, lng:-118.0008786},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 23276,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1474033, lng:-118.1613787},
				{lat:34.1485778, lng:-118.1572018},
				{lat:34.1497437, lng:-118.155081},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1318428, lng:-118.0545846},
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
			len: 22565,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1578018, lng:-118.1639029},
				{lat:34.1621182, lng:-118.1600345},
				{lat:34.16220029999999, lng:-118.158946},
				{lat:34.1566657, lng:-118.1584083},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1318428, lng:-118.0545846},
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
	];

	var data = [
		{
			time: '06:00 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 24.7, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 24.8, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 25.2, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 25.2, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 25.2, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 25.5, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 25.5, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 26.1, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 26.0, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 26.1, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 26.0, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 26.8, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 26.8, pathId:1},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 26.9, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 26.8, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 27.2, pathId:1},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 27.2, pathId:1},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 27.4, pathId:1},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 27.7, pathId:1},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 28.7, pathId:1},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 21.8, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 21.0, pathId:2},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 20.6, pathId:2},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 20.9, pathId:2},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 20.9, pathId:2},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 20.9, pathId:2},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 20.8, pathId:2},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 22.1, pathId:0},
				{duration: 28.7, pathId:3},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 22.0, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 21.0, pathId:4},
				{duration: 28.2, pathId:3},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 20.9, pathId:2},
				{duration: 28.6, pathId:3},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 20.8, pathId:2},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 21.6, pathId:2},
				{duration: 28.3, pathId:3},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 22.3, pathId:0},
				{duration: 28.2, pathId:3},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 21.1, pathId:2},
				{duration: 28.1, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 21.3, pathId:2},
				{duration: 27.5, pathId:1},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 27.1, pathId:1},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 21.2, pathId:2},
				{duration: 27.1, pathId:3},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 21.2, pathId:2},
				{duration: 27.4, pathId:5},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 21.3, pathId:2},
				{duration: 28.0, pathId:1},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 21.2, pathId:2},
				{duration: 27.7, pathId:3},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 21.4, pathId:2},
				{duration: 28.3, pathId:3},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 21.1, pathId:2},
				{duration: 27.7, pathId:3},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 21.0, pathId:2},
				{duration: 27.6, pathId:3},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 20.9, pathId:2},
				{duration: 27.2, pathId:3},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 21.0, pathId:2},
				{duration: 27.1, pathId:5},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 21.2, pathId:2},
				{duration: 27.1, pathId:3},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 20.9, pathId:2},
				{duration: 26.9, pathId:5},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 21.1, pathId:2},
				{duration: 26.7, pathId:5},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 20.8, pathId:2},
				{duration: 26.8, pathId:5},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 20.8, pathId:2},
				{duration: 27.4, pathId:5},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 20.8, pathId:2},
				{duration: 27.2, pathId:3},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 20.7, pathId:2},
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 20.9, pathId:2},
				{duration: 27.8, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.2, pathId: 0},
				{duration: 27.2, pathId: 1},
				{duration: 21.0, pathId: 2},
				{duration: 27.8, pathId: 3},
				{duration: 21.0, pathId: 4},
				{duration: 27.1, pathId: 5},
			]
		}
	];

	return {
		O: 'A',
		D: 'E',
		minDuration: 18.8,
		maxDuration: 29.6,
		paths: paths,
		data: data
	}
};