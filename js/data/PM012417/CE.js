//date: 012417
function getObj() {
	var paths = [
		{
			desc: 'S Santa Anita Ave',
			len: 9645,
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
				{lat:34.1090782, lng:-118.0182965},
				{lat:34.1143315, lng:-118.018494},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Longden Ave',
			len: 10168,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1223623, lng:-118.0551553},
				{lat:34.1216886, lng:-118.0385286},
				{lat:34.1140736, lng:-118.0383752},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Baldwin Ave and W Live Oak Ave',
			len: 10708,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1080244, lng:-118.052358},
				{lat:34.1071521, lng:-118.0318009},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Santa Anita Ave',
			len: 11799,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1466575, lng:-118.0500917},
				{lat:34.1477298, lng:-118.0498345},
				{lat:34.1482864, lng:-118.0498266},
				{lat:34.1399423, lng:-118.0367714},
				{lat:34.1400077, lng:-118.0315107},
				{lat:34.1141667, lng:-118.0310118},
				{lat:34.1144087, lng:-118.0122545},
				{lat:34.1100086, lng:-118.0121891},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Myrtle Ave',
			len: 12322,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1466575, lng:-118.0500917},
				{lat:34.1477298, lng:-118.0498345},
				{lat:34.1482864, lng:-118.0498266},
				{lat:34.1399423, lng:-118.0367714},
				{lat:34.1400077, lng:-118.0315107},
				{lat:34.1322912, lng:-118.0313543},
				{lat:34.1324008, lng:-118.0234859},
				{lat:34.1306428, lng:-118.023461},
				{lat:34.1321219, lng:-118.0008884},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1111478, lng:-118.0047195},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Santa Anita Ave and E Longden Ave',
			len: 11378,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1466575, lng:-118.0500917},
				{lat:34.1477298, lng:-118.0498345},
				{lat:34.1482864, lng:-118.0498266},
				{lat:34.1399423, lng:-118.0367714},
				{lat:34.1400077, lng:-118.0315107},
				{lat:34.1141667, lng:-118.0310118},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'Live Oak Ave',
			len: 8639,
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
				{lat:34.1144087, lng:-118.0122545},
				{lat:34.113098, lng:-118.012254},
				{lat:34.113137, lng:-118.009129},
				{lat:34.1104533, lng:-118.0090606},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Live Oak Ave',
			len: 9281,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1315912, lng:-118.0495849},
				{lat:34.1268637, lng:-118.0494878},
				{lat:34.1273895, lng:-118.0458547},
				{lat:34.1076621, lng:-118.0454795},
				{lat:34.1071521, lng:-118.0318009},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Baldwin Ave and W Live Oak Ave',
			len: 11042,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1043091, lng:-118.0516132},
				{lat:34.107062, lng:-118.0326835},
				{lat:34.1071521, lng:-118.0318009},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 9265,
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
				{lat:34.1295005, lng:-118.031321},
				{lat:34.13223079999999, lng:-118.0038271},
				{lat:34.129492, lng:-118.00381},
				{lat:34.1294805, lng:-118.0016281},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1111478, lng:-118.0047195},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'Live Oak Ave',
			len: 10597,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1318428, lng:-118.0545846},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.1141667, lng:-118.0310118},
				{lat:34.1143315, lng:-118.018494},
				{lat:34.1091748, lng:-118.0183425},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Live Oak Ave',
			len: 10804,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
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
			desc: 'W Longden Ave',
			len: 8599,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1151525, lng:-118.0456428},
				{lat:34.1144087, lng:-118.0122545},
				{lat:34.113098, lng:-118.012254},
				{lat:34.113137, lng:-118.009129},
				{lat:34.1104533, lng:-118.0090606},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E Duarte Rd and S Myrtle Ave',
			len: 9336,
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
				{lat:34.1295005, lng:-118.031321},
				{lat:34.1321219, lng:-118.0008884},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1111478, lng:-118.0047195},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'S Baldwin Ave and W Longden Ave',
			len: 10048,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.115043, lng:-118.0537639},
				{lat:34.1119557, lng:-117.9990099},
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
			desc: 'W Live Oak Ave',
			len: 9392,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1315912, lng:-118.0495849},
				{lat:34.1268637, lng:-118.0494878},
				{lat:34.1284411, lng:-118.0386512},
				{lat:34.1077698, lng:-118.0382533},
				{lat:34.1071521, lng:-118.0318009},
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
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 8906,
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
				{lat:34.1295005, lng:-118.031321},
				{lat:34.1321219, lng:-118.0008884},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 8378,
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
				{lat:34.1295005, lng:-118.031321},
				{lat:34.1321629, lng:-118.0126324},
				{lat:34.1203379, lng:-118.01238},
				{lat:34.117404, lng:-118.003848},
				{lat:34.1140279, lng:-118.0042336},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Live Oak Ave',
			len: 9228,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1315912, lng:-118.0495849},
				{lat:34.1268637, lng:-118.0494878},
				{lat:34.1273895, lng:-118.0458547},
				{lat:34.1225016, lng:-118.0457879},
				{lat:34.1217863, lng:-118.0311563},
				{lat:34.10737590000001, lng:-118.0308782},
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
			desc: 'E Duarte Rd',
			len: 10721,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1318428, lng:-118.0545846},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.1321219, lng:-118.0008884},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.1119557, lng:-117.9990099},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Longden Ave',
			len: 10355,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
				{lat:34.1318428, lng:-118.0545846},
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
			desc: 'Holly Ave and W Live Oak Ave',
			len: 9017,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333161, lng:-118.0486665},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1076621, lng:-118.0454795},
				{lat:34.1071521, lng:-118.0318009},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E Longden Ave',
			len: 10081,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1341405, lng:-118.049802},
				{lat:34.1339421, lng:-118.0485375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1389122, lng:-118.053084},
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
			time: '03:00 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 19.4, pathId:1},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 19.3, pathId:1},
				{duration: 20.0, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 19.8, pathId:1},
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 20.3, pathId:1},
				{duration: 21.1, pathId:3},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 19.5, pathId:1},
				{duration: 21.4, pathId:3},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 20.5, pathId:1},
				{duration: 21.3, pathId:4},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 18.7, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 18.1, pathId:1},
				{duration: 20.7, pathId:5},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 17.5, pathId:1},
				{duration: 21.1, pathId:6},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 20.1, pathId:5},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 17.3, pathId:1},
				{duration: 20.9, pathId:5},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 20.3, pathId:6},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 20.3, pathId:6},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 17.4, pathId:1},
				{duration: 20.7, pathId:6},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 18.7, pathId:0},
				{duration: 18.7, pathId:1},
				{duration: 21.6, pathId:5},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 20.5, pathId:6},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 16.4, pathId:1},
				{duration: 20.5, pathId:5},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 15.8, pathId:1},
				{duration: 19.6, pathId:5},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 16.3, pathId:1},
				{duration: 20.0, pathId:6},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 17.0, pathId:1},
				{duration: 20.1, pathId:5},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 15.8, pathId:1},
				{duration: 19.7, pathId:5},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 16.6, pathId:1},
				{duration: 20.2, pathId:6},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 16.5, pathId:1},
				{duration: 20.0, pathId:6},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 16.6, pathId:1},
				{duration: 20.1, pathId:6},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 16.8, pathId:1},
				{duration: 20.4, pathId:5},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 16.9, pathId:1},
				{duration: 21.5, pathId:5},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 18.5, pathId:1},
				{duration: 22.1, pathId:6},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 15.9, pathId:0},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 16.3, pathId:0},
				{duration: 17.6, pathId:1},
				{duration: 19.9, pathId:5},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 15.7, pathId:1},
				{duration: 20.3, pathId:5},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 17.5, pathId:1},
				{duration: 21.4, pathId:6},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 17.8, pathId:1},
				{duration: 22.6, pathId:7},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 19.3, pathId:1},
				{duration: 20.9, pathId:5},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 18.2, pathId:1},
				{duration: 21.0, pathId:5},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 18.3, pathId:1},
				{duration: 21.8, pathId:5},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 19.1, pathId:1},
				{duration: 22.6, pathId:3},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 19.2, pathId:1},
				{duration: 21.6, pathId:5},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 17.1, pathId:1},
				{duration: 22.4, pathId:5},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 18.1, pathId:1},
				{duration: 21.8, pathId:6},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 17.4, pathId:8},
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 18.2, pathId:1},
				{duration: 22.9, pathId:5},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 18.5, pathId:1},
				{duration: 23.2, pathId:7},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 18.5, pathId:1},
				{duration: 22.8, pathId:6},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 20.1, pathId:1},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 20.5, pathId:1},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 18.1, pathId:8},
				{duration: 20.9, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 21.8, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 23.1, pathId:1},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 18.7, pathId:0},
				{duration: 22.4, pathId:1},
				{duration: 23.0, pathId:5},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 21.8, pathId:1},
				{duration: 21.5, pathId:5},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 21.1, pathId:1},
				{duration: 22.0, pathId:5},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 20.4, pathId:1},
				{duration: 22.5, pathId:5},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 22.0, pathId:1},
				{duration: 24.6, pathId:5},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 21.9, pathId:1},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 20.2, pathId:9},
				{duration: 22.4, pathId:1},
				{duration: 25.7, pathId:10},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 21.0, pathId:1},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 20.9, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 20.9, pathId:1},
				{duration: 24.7, pathId:6},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 21.3, pathId:1},
				{duration: 25.2, pathId:6},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 20.3, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 19.4, pathId:1},
				{duration: 23.6, pathId:7},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 20.5, pathId:1},
				{duration: 24.6, pathId:6},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 20.8, pathId:1},
				{duration: 26.2, pathId:7},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 22.1, pathId:11},
				{duration: 23.8, pathId:1},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 21.8, pathId:12},
				{duration: 22.1, pathId:13},
				{duration: 21.9, pathId:14},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 19.9, pathId:1},
				{duration: 24.5, pathId:15},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 19.7, pathId:1},
				{duration: 18.3, pathId:16},
				{duration: 25.4, pathId:6},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 19.4, pathId:17},
				{duration: 21.4, pathId:1},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 20.2, pathId:18},
				{duration: 22.4, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 20.2, pathId:9},
				{duration: 21.6, pathId:1},
				{duration: 23.6, pathId:19},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 18.6, pathId:17},
				{duration: 21.5, pathId:1},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 20.1, pathId:17},
				{duration: 21.6, pathId:1},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 21.9, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 21.9, pathId:1},
				{duration: 25.4, pathId:20},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 21.9, pathId:1},
				{duration: 23.8, pathId:21},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 22.1, pathId:1},
				{duration: 22.8, pathId:22},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 16.9, pathId:0},
				{duration: 19.8, pathId:23},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 18.3, pathId:0},
				{duration: 22.7, pathId:1},
				{duration: 22.6, pathId:5},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 20.1, pathId:1},
				{duration: 21.1, pathId:5},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 22.0, pathId:1},
				{duration: 23.4, pathId:5},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 19.8, pathId:1},
				{duration: 23.0, pathId:5},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 18.3, pathId:24},
				{duration: 20.9, pathId:1},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 19.6, pathId:1},
				{duration: 22.3, pathId:6},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 19.1, pathId:1},
				{duration: 22.3, pathId:6},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 17.9, pathId:1},
				{duration: 20.9, pathId:6},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 16.6, pathId:1},
				{duration: 19.9, pathId:6},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 16.8, pathId:1},
				{duration: 20.3, pathId:6},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 16.6, pathId:1},
				{duration: 21.3, pathId:7},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 16.4, pathId:1},
				{duration: 19.7, pathId:6},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 15.9, pathId:1},
				{duration: 21.1, pathId:6},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 17.3, pathId:1},
				{duration: 20.8, pathId:25},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 16.8, pathId:1},
				{duration: 20.8, pathId:25},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 15.8, pathId:1},
				{duration: 20.9, pathId:6},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 16.6, pathId:1},
				{duration: 22.0, pathId:6},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 16.4, pathId:1},
				{duration: 20.8, pathId:6},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 18.6, pathId:1},
				{duration: 22.7, pathId:5},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 16.6, pathId:1},
				{duration: 21.4, pathId:5},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 16.4, pathId:1},
				{duration: 21.5, pathId:21},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 16.1, pathId:1},
				{duration: 21.9, pathId:2},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 17.6, pathId:1},
				{duration: 22.6, pathId:6},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 17.2, pathId:0},
				{duration: 19.7, pathId:1},
				{duration: 21.4, pathId:7},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 15.5, pathId:0},
				{duration: 16.8, pathId:1},
				{duration: 19.6, pathId:5},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 16.5, pathId:1},
				{duration: 20.0, pathId:5},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 16.3, pathId:1},
				{duration: 19.1, pathId:2},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 15.0, pathId:0},
				{duration: 16.6, pathId:1},
				{duration: 18.1, pathId:2},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 15.7, pathId:1},
				{duration: 17.9, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 17.5, pathId: 0},
				{duration: 18.9, pathId: 1},
				{duration: 19.6, pathId: 2},
				{duration: 21.7, pathId: 3},
				{duration: 21.3, pathId: 4},
				{duration: 21.4, pathId: 5},
				{duration: 21.6, pathId: 6},
				{duration: 23.1, pathId: 7},
				{duration: 17.8, pathId: 8},
				{duration: 20.2, pathId: 9},
				{duration: 25.7, pathId: 10},
				{duration: 22.1, pathId: 11},
				{duration: 21.8, pathId: 12},
				{duration: 22.1, pathId: 13},
				{duration: 21.9, pathId: 14},
				{duration: 24.5, pathId: 15},
				{duration: 18.3, pathId: 16},
				{duration: 19.4, pathId: 17},
				{duration: 20.2, pathId: 18},
				{duration: 23.6, pathId: 19},
				{duration: 25.4, pathId: 20},
				{duration: 22.6, pathId: 21},
				{duration: 22.8, pathId: 22},
				{duration: 19.8, pathId: 23},
				{duration: 18.3, pathId: 24},
				{duration: 20.8, pathId: 25},
			]
		}
	];

	return {
		O: 'C',
		D: 'E',
		minDuration: 15.0,
		maxDuration: 26.2,
		paths: paths,
		data: data
	}
};