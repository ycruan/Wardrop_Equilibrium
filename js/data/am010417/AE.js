//date: 010417
function getObj() {
	var paths = [
		{
			desc: 'W Las Tunas Dr',
			len: 23427,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1241979, lng:-118.1579596},
				{lat:34.1240392, lng:-118.1537235},
				{lat:34.1042524, lng:-118.152488},
				{lat:34.104146, lng:-118.1396971},
				{lat:34.104562, lng:-118.133752},
				{lat:34.0976304, lng:-118.1285572},
				{lat:34.0992081, lng:-118.1254589},
				{lat:34.0966946, lng:-118.1236947},
				{lat:34.1017184, lng:-118.1130499},
				{lat:34.1071521, lng:-118.0318009},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Las Tunas Dr',
			len: 23409,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1241979, lng:-118.1579596},
				{lat:34.1240392, lng:-118.1537235},
				{lat:34.1042524, lng:-118.152488},
				{lat:34.104146, lng:-118.1396971},
				{lat:34.104562, lng:-118.133752},
				{lat:34.09522949999999, lng:-118.1268653},
				{lat:34.1017184, lng:-118.1130499},
				{lat:34.1071521, lng:-118.0318009},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-10 E',
			len: 32509,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1230209, lng:-118.1581935},
				{lat:34.1229159, lng:-118.1571},
				{lat:34.1207514, lng:-118.1571033},
				{lat:34.1207755, lng:-118.1537158},
				{lat:34.067611, lng:-118.1493476},
				{lat:34.068595, lng:-118.149887},
				{lat:34.0649363, lng:-118.0006932},
				{lat:34.1041364, lng:-117.9834128},
				{lat:34.1068655, lng:-117.9818355},
				{lat:34.1119533, lng:-117.9887148},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-10 E',
			len: 33258,
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
				{lat:34.124037, lng:-118.1543107},
				{lat:34.1240392, lng:-118.1537235},
				{lat:34.067611, lng:-118.1493476},
				{lat:34.068595, lng:-118.149887},
				{lat:34.0649363, lng:-118.0006932},
				{lat:34.1041364, lng:-117.9834128},
				{lat:34.1068655, lng:-117.9818355},
				{lat:34.1119533, lng:-117.9887148},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Las Tunas Dr',
			len: 23587,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1241979, lng:-118.1579596},
				{lat:34.1240392, lng:-118.1537235},
				{lat:34.1042524, lng:-118.152488},
				{lat:34.1093475, lng:-118.1304264},
				{lat:34.0979628, lng:-118.1210412},
				{lat:34.1017184, lng:-118.1130499},
				{lat:34.1071521, lng:-118.0318009},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-10 E',
			len: 32495,
			pts: [
				{lat:34.1615898, lng:-118.1658912},
				{lat:34.1617188, lng:-118.1649958},
				{lat:34.1522654, lng:-118.1597808},
				{lat:34.1241979, lng:-118.1579596},
				{lat:34.1240392, lng:-118.1537235},
				{lat:34.067611, lng:-118.1493476},
				{lat:34.068595, lng:-118.149887},
				{lat:34.0649363, lng:-118.0006932},
				{lat:34.1041364, lng:-117.9834128},
				{lat:34.1068655, lng:-117.9818355},
				{lat:34.1119533, lng:-117.9887148},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
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
	];

	var data = [
		{
			time: '06:00 AM',
			routes: [
				{duration: 17.9, pathId:0},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 17.9, pathId:0},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 17.9, pathId:0},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 18.0, pathId:0},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 18.1, pathId:0},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 18.2, pathId:0},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 18.6, pathId:0},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 18.3, pathId:0},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 18.1, pathId:0},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 18.3, pathId:0},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 18.1, pathId:0},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 18.0, pathId:0},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 18.1, pathId:0},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 18.1, pathId:0},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 18.1, pathId:0},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 18.1, pathId:0},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 18.2, pathId:0},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 18.5, pathId:0},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 18.8, pathId:0},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 18.9, pathId:0},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 19.4, pathId:0},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 19.0, pathId:0},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 18.9, pathId:0},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 18.9, pathId:0},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 18.8, pathId:0},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 19.0, pathId:0},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 18.8, pathId:0},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 18.9, pathId:0},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 18.8, pathId:0},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 18.6, pathId:0},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 18.6, pathId:0},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 18.6, pathId:0},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 18.6, pathId:0},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 19.1, pathId:0},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 19.1, pathId:0},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 19.0, pathId:0},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 19.1, pathId:0},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 19.2, pathId:0},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 19.2, pathId:0},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 19.5, pathId:0},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 19.7, pathId:0},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 19.4, pathId:0},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 19.7, pathId:0},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 19.1, pathId:0},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 19.2, pathId:0},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 19.3, pathId:0},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 19.4, pathId:0},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 19.4, pathId:0},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 19.4, pathId:0},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 19.6, pathId:0},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 19.6, pathId:0},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 19.7, pathId:0},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 40.7, pathId:1},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 41.1, pathId:1},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 41.2, pathId:1},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 44.8, pathId:2},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 43.4, pathId:3},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 41.6, pathId:4},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 40.6, pathId:4},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 40.9, pathId:4},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 41.4, pathId:4},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 41.0, pathId:4},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 40.8, pathId:1},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 40.6, pathId:1},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 39.7, pathId:1},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 39.2, pathId:1},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 42.1, pathId:5},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 38.7, pathId:1},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 39.5, pathId:1},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 38.8, pathId:6},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 38.8, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 38.8, pathId:1},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 38.4, pathId:1},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 39.4, pathId:4},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 39.5, pathId:1},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 38.2, pathId:1},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 38.1, pathId:1},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 38.0, pathId:1},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 38.6, pathId:1},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 37.3, pathId:1},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 38.8, pathId:1},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 38.0, pathId:4},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 38.4, pathId:1},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 38.9, pathId:1},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 36.8, pathId:1},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 36.7, pathId:1},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 36.6, pathId:1},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 36.5, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 36.4, pathId:1},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 36.4, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 19.0, pathId: 0},
				{duration: 38.6, pathId: 1},
				{duration: 44.8, pathId: 2},
				{duration: 43.4, pathId: 3},
				{duration: 40.4, pathId: 4},
				{duration: 42.1, pathId: 5},
				{duration: 38.8, pathId: 6},
			]
		}
	];

	return {
		O: 'A',
		D: 'E',
		minDuration: 17.9,
		maxDuration: 44.8,
		paths: paths,
		data: data
	}
};