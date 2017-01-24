//date: 010417
function getObj() {
	var paths = [
		{
			desc: 'W Duarte Rd',
			len: 14330,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1315912, lng:-118.0495849},
				{lat:34.1268637, lng:-118.0494878},
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1349329, lng:-118.005113},
				{lat:34.1348317, lng:-117.9776331},
				{lat:34.1353012, lng:-117.9746769},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 13966,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1335106, lng:-118.0501133},
				{lat:34.132739, lng:-118.050276},
				{lat:34.1328969, lng:-118.0511984},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1342349, lng:-118.005092},
				{lat:34.134228, lng:-117.995047},
				{lat:34.1350493, lng:-117.9950464},
				{lat:34.1348317, lng:-117.9776331},
				{lat:34.1353012, lng:-117.9746769},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Evergreen Ave',
			len: 13830,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1335106, lng:-118.0501133},
				{lat:34.132739, lng:-118.050276},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.132186, lng:-118.009447},
				{lat:34.13588, lng:-118.009525},
				{lat:34.1350196, lng:-117.9808375},
				{lat:34.1352307, lng:-117.97785},
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
			len: 8917,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1335106, lng:-118.0501133},
				{lat:34.132739, lng:-118.050276},
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
			len: 13939,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1349329, lng:-118.005113},
				{lat:34.1350196, lng:-117.9808375},
				{lat:34.1352307, lng:-117.97785},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Evergreen Ave',
			len: 13771,
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
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1349329, lng:-118.005113},
				{lat:34.1348317, lng:-117.9776331},
				{lat:34.1353012, lng:-117.9746769},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 13935,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1349329, lng:-118.005113},
				{lat:34.13505, lng:-117.9996272},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 13788,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1335106, lng:-118.0501133},
				{lat:34.132739, lng:-118.050276},
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
			desc: 'I-210 E',
			len: 13788,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333275, lng:-118.0498307},
				{lat:34.1333671, lng:-118.0501418},
				{lat:34.132739, lng:-118.050276},
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
			desc: 'W Live Oak Ave',
			len: 9406,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1335106, lng:-118.0501133},
				{lat:34.132739, lng:-118.050276},
				{lat:34.1328969, lng:-118.0511984},
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
			len: 9173,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1335106, lng:-118.0501133},
				{lat:34.132739, lng:-118.050276},
				{lat:34.1328969, lng:-118.0511984},
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
			desc: 'W Duarte Rd',
			len: 14344,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333275, lng:-118.0498307},
				{lat:34.1333671, lng:-118.0501418},
				{lat:34.132739, lng:-118.050276},
				{lat:34.1328969, lng:-118.0511984},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1315912, lng:-118.0495849},
				{lat:34.1268637, lng:-118.0494878},
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1349329, lng:-118.005113},
				{lat:34.1348317, lng:-117.9776331},
				{lat:34.1353012, lng:-117.9746769},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
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
			len: 13765,
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
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1349329, lng:-118.005113},
				{lat:34.13505, lng:-117.9996272},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 13687,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1335106, lng:-118.0501133},
				{lat:34.132739, lng:-118.050276},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.132191, lng:-117.977548},
				{lat:34.1348353, lng:-117.9774927},
				{lat:34.1353012, lng:-117.9746769},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
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
			desc: 'S Santa Anita Ave and W Live Oak Ave',
			len: 8917,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333275, lng:-118.0498307},
				{lat:34.1333671, lng:-118.0501418},
				{lat:34.132739, lng:-118.050276},
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
			len: 15350,
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
				{lat:34.1326772, lng:-117.9666215},
				{lat:34.1396377, lng:-117.9666139},
				{lat:34.139706, lng:-117.9556739},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Duarte Rd',
			len: 14324,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1315912, lng:-118.0495849},
				{lat:34.1268637, lng:-118.0494878},
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1349329, lng:-118.005113},
				{lat:34.13505, lng:-117.9996272},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
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
		{
			desc: 'I-210 E',
			len: 13898,
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
				{lat:34.132186, lng:-118.009447},
				{lat:34.13588, lng:-118.009525},
				{lat:34.13505, lng:-117.9996272},
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
			desc: 'W Live Oak Ave',
			len: 9090,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1225016, lng:-118.0457879},
				{lat:34.1216886, lng:-118.0385286},
				{lat:34.1077698, lng:-118.0382533},
				{lat:34.1071521, lng:-118.0318009},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Duarte Rd',
			len: 14339,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1315912, lng:-118.0495849},
				{lat:34.1268637, lng:-118.0494878},
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1342349, lng:-118.005092},
				{lat:34.134228, lng:-117.995047},
				{lat:34.1350493, lng:-117.9950464},
				{lat:34.1350196, lng:-117.9808375},
				{lat:34.1352307, lng:-117.97785},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Live Oak Ave',
			len: 8848,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333275, lng:-118.0498307},
				{lat:34.1333671, lng:-118.0501418},
				{lat:34.132739, lng:-118.050276},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1225016, lng:-118.0457879},
				{lat:34.1216886, lng:-118.0385286},
				{lat:34.1077698, lng:-118.0382533},
				{lat:34.1071521, lng:-118.0318009},
				{lat:34.1128226, lng:-117.9922658},
				{lat:34.1125758, lng:-117.9906417},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'I-210 E',
			len: 13693,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1335106, lng:-118.0501133},
				{lat:34.132739, lng:-118.050276},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1349329, lng:-118.005113},
				{lat:34.13505, lng:-117.9996272},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 13769,
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
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1349329, lng:-118.005113},
				{lat:34.1350196, lng:-117.9808375},
				{lat:34.1352307, lng:-117.97785},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Evergreen Ave',
			len: 13699,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1335106, lng:-118.0501133},
				{lat:34.132739, lng:-118.050276},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1349329, lng:-118.005113},
				{lat:34.1348317, lng:-117.9776331},
				{lat:34.1353012, lng:-117.9746769},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Evergreen Ave',
			len: 13941,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1349329, lng:-118.005113},
				{lat:34.1348317, lng:-117.9776331},
				{lat:34.1353012, lng:-117.9746769},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Duarte Rd',
			len: 14066,
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
				{lat:34.1322396, lng:-118.00508},
				{lat:34.1349329, lng:-118.005113},
				{lat:34.1348317, lng:-117.9776331},
				{lat:34.1353012, lng:-117.9746769},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 14721,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1333275, lng:-118.0498307},
				{lat:34.1333671, lng:-118.0501418},
				{lat:34.132739, lng:-118.050276},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1315777, lng:-118.0493365},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.13995510000001, lng:-118.0353131},
				{lat:34.139706, lng:-117.9556739},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 13929,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1314869, lng:-118.0472202},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1308328, lng:-118.0313624},
				{lat:34.1295005, lng:-118.031321},
				{lat:34.132191, lng:-117.977548},
				{lat:34.1348353, lng:-117.9774927},
				{lat:34.1353012, lng:-117.9746769},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 13759,
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
				{lat:34.132191, lng:-117.977548},
				{lat:34.1348353, lng:-117.9774927},
				{lat:34.1353012, lng:-117.9746769},
				{lat:34.1354399, lng:-117.964603},
				{lat:34.1167926, lng:-117.9759023},
				{lat:34.1154722, lng:-117.9781033},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1111819, lng:-117.9869435},
			]
		},
		{
			desc: 'W Duarte Rd',
			len: 9479,
			pts: [
				{lat:34.1343799, lng:-118.0505984},
				{lat:34.1336085, lng:-118.049758},
				{lat:34.13347359999999, lng:-118.049791},
				{lat:34.1335106, lng:-118.0501133},
				{lat:34.132739, lng:-118.050276},
				{lat:34.1328969, lng:-118.0511984},
				{lat:34.1322306, lng:-118.0516559},
				{lat:34.1315912, lng:-118.0495849},
				{lat:34.1268637, lng:-118.0494878},
				{lat:34.1321219, lng:-118.0008884},
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
			time: '03:00 PM',
			routes: [
				{duration: 18.7, pathId:0},
				{duration: 18.6, pathId:1},
				{duration: 26.9, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 18.7, pathId:0},
				{duration: 18.4, pathId:1},
				{duration: 28.1, pathId:3},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 17.6, pathId:1},
				{duration: 29.2, pathId:4},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 17.9, pathId:1},
				{duration: 26.9, pathId:5},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 19.4, pathId:1},
				{duration: 25.9, pathId:6},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 19.1, pathId:1},
				{duration: 27.6, pathId:6},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 17.9, pathId:1},
				{duration: 27.8, pathId:4},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 18.3, pathId:1},
				{duration: 25.9, pathId:7},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 18.1, pathId:1},
				{duration: 26.1, pathId:7},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 19.3, pathId:1},
				{duration: 25.8, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 19.2, pathId:1},
				{duration: 26.4, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 18.1, pathId:1},
				{duration: 26.7, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 19.5, pathId:1},
				{duration: 27.8, pathId:8},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 20.1, pathId:1},
				{duration: 26.4, pathId:2},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 20.0, pathId:1},
				{duration: 25.8, pathId:5},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 20.1, pathId:9},
				{duration: 26.7, pathId:10},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 20.9, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 20.6, pathId:1},
				{duration: 27.2, pathId:11},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 19.2, pathId:12},
				{duration: 19.5, pathId:1},
				{duration: 27.0, pathId:13},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 19.0, pathId:14},
				{duration: 20.1, pathId:1},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 20.3, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 18.1, pathId:15},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 20.9, pathId:1},
				{duration: 26.9, pathId:16},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 18.4, pathId:1},
				{duration: 27.7, pathId:17},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 18.0, pathId:1},
				{duration: 27.6, pathId:18},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 18.7, pathId:1},
				{duration: 27.3, pathId:17},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 18.8, pathId:1},
				{duration: 26.6, pathId:19},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 20.4, pathId:1},
				{duration: 26.0, pathId:20},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 18.5, pathId:1},
				{duration: 26.1, pathId:20},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 18.1, pathId:1},
				{duration: 26.1, pathId:20},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 17.3, pathId:1},
				{duration: 26.8, pathId:20},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 18.3, pathId:1},
				{duration: 27.1, pathId:21},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 19.1, pathId:1},
				{duration: 27.0, pathId:20},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 18.3, pathId:22},
				{duration: 19.3, pathId:1},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 18.3, pathId:22},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 21.8, pathId:1},
				{duration: 28.4, pathId:23},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 18.2, pathId:24},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 19.5, pathId:1},
				{duration: 27.2, pathId:25},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 18.1, pathId:1},
				{duration: 26.2, pathId:3},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 19.2, pathId:1},
				{duration: 27.2, pathId:25},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 18.7, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 17.0, pathId:9},
				{duration: 27.1, pathId:26},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 17.8, pathId:9},
				{duration: 18.3, pathId:1},
				{duration: 26.4, pathId:27},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 18.8, pathId:9},
				{duration: 27.4, pathId:23},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 17.3, pathId:9},
				{duration: 25.3, pathId:23},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 19.2, pathId:9},
				{duration: 25.4, pathId:23},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 18.0, pathId:1},
				{duration: 24.9, pathId:23},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 18.2, pathId:22},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 18.2, pathId:22},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 18.1, pathId:22},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 17.3, pathId:22},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 17.5, pathId:22},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 19.0, pathId:22},
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 18.5, pathId:22},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 18.1, pathId:28},
				{duration: 26.2, pathId:29},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 19.3, pathId:1},
				{duration: 26.1, pathId:23},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 19.6, pathId:1},
				{duration: 20.0, pathId:0},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 18.4, pathId:1},
				{duration: 26.1, pathId:4},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 19.6, pathId:28},
				{duration: 20.4, pathId:0},
				{duration: 26.0, pathId:30},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 18.3, pathId:28},
				{duration: 18.5, pathId:1},
				{duration: 27.3, pathId:30},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 18.2, pathId:1},
				{duration: 25.6, pathId:30},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 18.5, pathId:1},
				{duration: 26.7, pathId:30},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 18.3, pathId:1},
				{duration: 25.2, pathId:31},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 19.2, pathId:1},
				{duration: 26.5, pathId:31},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 18.5, pathId:32},
				{duration: 18.9, pathId:1},
				{duration: 26.0, pathId:31},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 17.8, pathId:32},
				{duration: 27.0, pathId:33},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 17.5, pathId:32},
				{duration: 26.6, pathId:33},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 17.5, pathId:32},
				{duration: 25.1, pathId:31},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 17.3, pathId:34},
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 18.9, pathId:1},
				{duration: 24.5, pathId:4},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 18.5, pathId:1},
				{duration: 23.4, pathId:4},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 18.7, pathId:0},
				{duration: 18.8, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 16.9, pathId:1},
				{duration: 23.9, pathId:4},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 17.0, pathId:1},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 16.6, pathId:1},
				{duration: 23.6, pathId:35},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 16.7, pathId:1},
				{duration: 17.5, pathId:0},
				{duration: 23.8, pathId:35},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 17.4, pathId:1},
				{duration: 23.6, pathId:35},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.7, pathId:1},
				{duration: 23.7, pathId:4},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 17.5, pathId:1},
				{duration: 23.1, pathId:35},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 17.1, pathId:0},
				{duration: 17.0, pathId:1},
				{duration: 22.5, pathId:35},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 17.3, pathId:1},
				{duration: 23.3, pathId:35},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 16.4, pathId:1},
				{duration: 22.7, pathId:35},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 16.3, pathId:1},
				{duration: 21.4, pathId:35},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 16.3, pathId:1},
				{duration: 22.6, pathId:35},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 16.7, pathId:1},
				{duration: 21.9, pathId:35},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 16.7, pathId:0},
				{duration: 22.2, pathId:35},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 16.1, pathId:1},
				{duration: 22.2, pathId:35},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 16.5, pathId:0},
				{duration: 16.2, pathId:1},
				{duration: 23.0, pathId:35},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 16.0, pathId:1},
				{duration: 24.5, pathId:35},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 16.9, pathId:1},
				{duration: 23.5, pathId:35},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 16.4, pathId:1},
				{duration: 23.6, pathId:35},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 16.9, pathId:1},
				{duration: 25.6, pathId:35},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 17.0, pathId:0},
				{duration: 16.6, pathId:1},
				{duration: 23.7, pathId:35},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 16.3, pathId:1},
				{duration: 21.0, pathId:35},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 16.6, pathId:0},
				{duration: 15.8, pathId:9},
				{duration: 20.6, pathId:35},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 16.0, pathId:1},
				{duration: 19.6, pathId:35},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 15.7, pathId:1},
				{duration: 18.4, pathId:35},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 15.8, pathId:1},
				{duration: 18.1, pathId:35},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 16.3, pathId:0},
				{duration: 17.1, pathId:1},
				{duration: 17.7, pathId:35},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 15.8, pathId:0},
				{duration: 17.2, pathId:1},
				{duration: 16.7, pathId:35},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 17.0, pathId:1},
				{duration: 16.1, pathId:35},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 16.1, pathId:1},
				{duration: 15.1, pathId:35},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 16.3, pathId:0},
				{duration: 16.2, pathId:1},
				{duration: 15.8, pathId:35},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 16.0, pathId:1},
				{duration: 15.1, pathId:35},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 16.4, pathId:0},
				{duration: 15.0, pathId:35},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 16.8, pathId:0},
				{duration: 15.1, pathId:35},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 16.5, pathId:0},
				{duration: 14.8, pathId:35},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 18.0, pathId: 0},
				{duration: 18.2, pathId: 1},
				{duration: 26.4, pathId: 2},
				{duration: 27.1, pathId: 3},
				{duration: 25.5, pathId: 4},
				{duration: 26.4, pathId: 5},
				{duration: 26.8, pathId: 6},
				{duration: 26.0, pathId: 7},
				{duration: 27.8, pathId: 8},
				{duration: 18.0, pathId: 9},
				{duration: 26.7, pathId: 10},
				{duration: 27.2, pathId: 11},
				{duration: 19.2, pathId: 12},
				{duration: 27.0, pathId: 13},
				{duration: 19.0, pathId: 14},
				{duration: 18.1, pathId: 15},
				{duration: 26.9, pathId: 16},
				{duration: 27.5, pathId: 17},
				{duration: 27.6, pathId: 18},
				{duration: 26.6, pathId: 19},
				{duration: 26.4, pathId: 20},
				{duration: 27.1, pathId: 21},
				{duration: 18.2, pathId: 22},
				{duration: 26.2, pathId: 23},
				{duration: 18.2, pathId: 24},
				{duration: 27.2, pathId: 25},
				{duration: 27.1, pathId: 26},
				{duration: 26.4, pathId: 27},
				{duration: 18.7, pathId: 28},
				{duration: 26.2, pathId: 29},
				{duration: 26.4, pathId: 30},
				{duration: 25.7, pathId: 31},
				{duration: 17.8, pathId: 32},
				{duration: 26.8, pathId: 33},
				{duration: 17.3, pathId: 34},
				{duration: 20.5, pathId: 35},
			]
		}
	];

	return {
		O: 'C',
		D: 'E',
		minDuration: 14.8,
		maxDuration: 29.2,
		paths: paths,
		data: data
	}
};