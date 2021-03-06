//date: 012417
function getObj() {
	var paths = [
		{
			desc: 'E California Blvd',
			len: 15741,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1305026, lng:-118.0732738},
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
			len: 21876,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.151764, lng:-118.1213142},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E California Blvd and Longden Ave',
			len: 15770,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1229611, lng:-118.0730169},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.11385, lng:-118.062305},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 21910,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1516532, lng:-118.1229664},
				{lat:34.1517659, lng:-118.1214744},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E California Blvd',
			len: 16853,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1315912, lng:-118.0495849},
				{lat:34.1268637, lng:-118.0494878},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.10737590000001, lng:-118.0308782},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 18776,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1419678, lng:-118.1131253},
				{lat:34.1518281, lng:-118.113081},
				{lat:34.1518598, lng:-118.1128484},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1318428, lng:-118.0545846},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1225016, lng:-118.0457879},
				{lat:34.1216886, lng:-118.0385286},
				{lat:34.1140736, lng:-118.0383752},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E California Blvd',
			len: 16020,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378356, lng:-118.1171645},
				{lat:34.13587589999999, lng:-118.1171803},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1315912, lng:-118.0495849},
				{lat:34.1268637, lng:-118.0494878},
				{lat:34.1284411, lng:-118.0386512},
				{lat:34.1140736, lng:-118.0383752},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E California Blvd',
			len: 16129,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1315912, lng:-118.0495849},
				{lat:34.1268637, lng:-118.0494878},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.1141667, lng:-118.0310118},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E California Blvd',
			len: 16019,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.106698, lng:-118.0608909},
				{lat:34.1071521, lng:-118.0318009},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 17656,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.151764, lng:-118.1213142},
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
	];

	var data = [
		{
			time: '05:00 AM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 23.6, pathId:1},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 23.9, pathId:1},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 24.0, pathId:1},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 24.4, pathId:1},
				{duration: 24.8, pathId:2},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 24.4, pathId:1},
				{duration: 24.8, pathId:2},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 24.5, pathId:1},
				{duration: 24.8, pathId:2},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 24.4, pathId:1},
				{duration: 24.8, pathId:2},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 24.7, pathId:1},
				{duration: 24.8, pathId:2},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 24.6, pathId:1},
				{duration: 24.7, pathId:2},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 24.5, pathId:1},
				{duration: 24.7, pathId:2},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 24.5, pathId:1},
				{duration: 24.7, pathId:2},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 24.4, pathId:1},
				{duration: 24.8, pathId:2},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 24.4, pathId:1},
				{duration: 24.9, pathId:2},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 24.4, pathId:1},
				{duration: 25.1, pathId:2},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 24.3, pathId:1},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 24.3, pathId:1},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 24.5, pathId:1},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 25.0, pathId:1},
				{duration: 25.1, pathId:2},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 25.4, pathId:2},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 25.6, pathId:2},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 25.7, pathId:2},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 25.0, pathId:1},
				{duration: 25.7, pathId:2},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 25.4, pathId:1},
				{duration: 25.7, pathId:2},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.5, pathId:1},
				{duration: 25.7, pathId:2},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.4, pathId:1},
				{duration: 25.8, pathId:2},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 25.0, pathId:1},
				{duration: 25.8, pathId:2},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 25.4, pathId:2},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 25.4, pathId:2},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.3, pathId:1},
				{duration: 25.4, pathId:2},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 25.4, pathId:1},
				{duration: 25.4, pathId:2},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 25.3, pathId:1},
				{duration: 25.5, pathId:2},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 25.4, pathId:1},
				{duration: 25.5, pathId:2},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.4, pathId:1},
				{duration: 25.4, pathId:2},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.4, pathId:1},
				{duration: 25.5, pathId:2},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 25.5, pathId:1},
				{duration: 25.7, pathId:2},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 25.3, pathId:1},
				{duration: 26.0, pathId:2},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 25.3, pathId:1},
				{duration: 26.2, pathId:2},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 25.3, pathId:1},
				{duration: 26.2, pathId:2},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.2, pathId:1},
				{duration: 26.3, pathId:2},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.2, pathId:1},
				{duration: 26.3, pathId:2},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.3, pathId:1},
				{duration: 26.3, pathId:2},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.4, pathId:1},
				{duration: 26.3, pathId:2},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 25.2, pathId:1},
				{duration: 26.3, pathId:2},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 25.8, pathId:2},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 25.8, pathId:2},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 25.9, pathId:2},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 25.0, pathId:1},
				{duration: 25.8, pathId:2},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 25.8, pathId:2},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 25.1, pathId:1},
				{duration: 25.9, pathId:2},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 25.2, pathId:1},
				{duration: 25.8, pathId:2},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 25.9, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 25.6, pathId:1},
				{duration: 25.9, pathId:2},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 25.5, pathId:1},
				{duration: 25.9, pathId:2},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 25.8, pathId:1},
				{duration: 26.3, pathId:2},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 25.8, pathId:1},
				{duration: 27.2, pathId:2},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 25.8, pathId:1},
				{duration: 27.1, pathId:2},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 25.9, pathId:1},
				{duration: 27.1, pathId:2},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 26.0, pathId:1},
				{duration: 27.2, pathId:2},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 25.9, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 26.1, pathId:1},
				{duration: 27.8, pathId:2},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 26.3, pathId:1},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 26.6, pathId:1},
				{duration: 28.4, pathId:2},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 22.0, pathId:0},
				{duration: 26.3, pathId:1},
				{duration: 28.3, pathId:2},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 20.8, pathId:3},
				{duration: 26.3, pathId:1},
				{duration: 27.9, pathId:2},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 20.9, pathId:4},
				{duration: 21.9, pathId:0},
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 21.7, pathId:0},
				{duration: 26.8, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 26.9, pathId:1},
				{duration: 28.0, pathId:2},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 20.9, pathId:4},
				{duration: 26.9, pathId:1},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 22.1, pathId:0},
				{duration: 27.1, pathId:1},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 27.1, pathId:1},
				{duration: 27.8, pathId:2},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 27.3, pathId:1},
				{duration: 27.8, pathId:2},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 27.3, pathId:1},
				{duration: 28.5, pathId:2},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 21.7, pathId:0},
				{duration: 27.3, pathId:1},
				{duration: 28.5, pathId:2},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 27.5, pathId:1},
				{duration: 28.7, pathId:2},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 27.7, pathId:1},
				{duration: 28.9, pathId:2},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 21.8, pathId:0},
				{duration: 27.9, pathId:1},
				{duration: 28.8, pathId:2},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 27.8, pathId:1},
				{duration: 29.7, pathId:2},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 27.9, pathId:1},
				{duration: 29.8, pathId:2},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 22.0, pathId:0},
				{duration: 28.3, pathId:1},
				{duration: 30.1, pathId:2},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 27.9, pathId:1},
				{duration: 30.1, pathId:2},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 27.7, pathId:1},
				{duration: 30.9, pathId:2},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 28.6, pathId:1},
				{duration: 28.8, pathId:5},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 21.8, pathId:0},
				{duration: 28.4, pathId:1},
				{duration: 30.0, pathId:2},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 28.4, pathId:1},
				{duration: 30.0, pathId:2},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 28.7, pathId:1},
				{duration: 30.6, pathId:2},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 29.1, pathId:1},
				{duration: 30.2, pathId:2},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 28.8, pathId:1},
				{duration: 29.2, pathId:6},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 28.4, pathId:1},
				{duration: 30.2, pathId:2},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 28.6, pathId:1},
				{duration: 30.2, pathId:2},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 28.7, pathId:1},
				{duration: 30.0, pathId:2},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 28.9, pathId:1},
				{duration: 29.1, pathId:7},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 29.1, pathId:1},
				{duration: 29.7, pathId:2},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 28.1, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 27.4, pathId:1},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 28.5, pathId:1},
				{duration: 28.5, pathId:2},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 27.8, pathId:1},
				{duration: 28.5, pathId:2},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 27.5, pathId:1},
				{duration: 28.0, pathId:8},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 28.1, pathId:1},
				{duration: 29.5, pathId:2},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 28.7, pathId:1},
				{duration: 29.0, pathId:2},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 29.0, pathId:2},
				{duration: 30.3, pathId:1},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 28.0, pathId:9},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 29.6, pathId:1},
				{duration: 29.1, pathId:2},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 28.1, pathId:1},
				{duration: 29.6, pathId:2},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 27.1, pathId:1},
				{duration: 27.4, pathId:2},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 27.1, pathId:1},
				{duration: 27.7, pathId:2},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 26.8, pathId:1},
				{duration: 28.9, pathId:2},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 27.8, pathId:1},
				{duration: 28.2, pathId:2},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 20.6, pathId:3},
				{duration: 28.2, pathId:1},
				{duration: 28.3, pathId:2},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 21.8, pathId:0},
				{duration: 27.5, pathId:1},
				{duration: 28.7, pathId:2},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 27.4, pathId:1},
				{duration: 27.8, pathId:2},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 21.8, pathId:0},
				{duration: 27.1, pathId:1},
				{duration: 26.8, pathId:2},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 26.5, pathId:2},
				{duration: 27.4, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.8, pathId: 0},
				{duration: 26.3, pathId: 1},
				{duration: 27.1, pathId: 2},
				{duration: 20.7, pathId: 3},
				{duration: 20.9, pathId: 4},
				{duration: 28.8, pathId: 5},
				{duration: 29.2, pathId: 6},
				{duration: 29.1, pathId: 7},
				{duration: 28.0, pathId: 8},
				{duration: 28.0, pathId: 9},
			]
		}
	];

	return {
		O: 'B',
		D: 'E',
		minDuration: 19.6,
		maxDuration: 30.9,
		paths: paths,
		data: data
	}
};