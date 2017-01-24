//date: 011817
function getObj() {
	var paths = [
		{
			desc: 'E California Blvd',
			len: 19406,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1140736, lng:-118.0383752},
				{lat:34.1284411, lng:-118.0386512},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 22023,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1525409, lng:-118.1167602},
				{lat:34.1528691, lng:-118.1206175},
				{lat:34.1528709, lng:-118.1213202},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 20435,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1321257, lng:-118.0007747},
				{lat:34.1260961, lng:-118.0548407},
				{lat:34.1315697, lng:-118.0544263},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 22986,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Lower Azusa Rd',
			len: 20075,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0907274, lng:-118.0488123},
				{lat:34.1186301, lng:-118.0543617},
				{lat:34.1174126, lng:-118.0630235},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E California Blvd',
			len: 19887,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0926805, lng:-118.0353907},
				{lat:34.107672, lng:-118.0382518},
				{lat:34.107733, lng:-118.052174},
				{lat:34.1186301, lng:-118.0543617},
				{lat:34.1174126, lng:-118.0630235},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Lower Azusa Rd',
			len: 20067,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0894909, lng:-118.0573151},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 21381,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E California Blvd',
			len: 20062,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0926805, lng:-118.0353907},
				{lat:34.1062647, lng:-118.0381834},
				{lat:34.1043265, lng:-118.0514826},
				{lat:34.1186301, lng:-118.0543617},
				{lat:34.1174126, lng:-118.0630235},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-10 W and San Gabriel Blvd',
			len: 24728,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0721831, lng:-118.0885557},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 23093,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.146181, lng:-118.094578},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Temple City Blvd',
			len: 24230,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0726533, lng:-118.056519},
				{lat:34.0730994, lng:-118.0584989},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 22971,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.146181, lng:-118.094578},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 21693,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1513279, lng:-118.0900466},
				{lat:34.1528543, lng:-118.0930308},
				{lat:34.1529979, lng:-118.0940815},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 20940,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.146181, lng:-118.094578},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 20718,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 20861,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1321257, lng:-118.0007747},
				{lat:34.1260961, lng:-118.0548407},
				{lat:34.1315697, lng:-118.0544263},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Lower Azusa Rd',
			len: 20448,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0894909, lng:-118.0573151},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1229938, lng:-118.0728859},
				{lat:34.1346545, lng:-118.0731948},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Temple City Blvd',
			len: 24611,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0726533, lng:-118.056519},
				{lat:34.0730994, lng:-118.0584989},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1229938, lng:-118.0728859},
				{lat:34.1346545, lng:-118.0731948},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 20182,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1321257, lng:-118.0007747},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 23297,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1513279, lng:-118.0900466},
				{lat:34.1528543, lng:-118.0930308},
				{lat:34.1529979, lng:-118.0940815},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 20845,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1321257, lng:-118.0007747},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 20955,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 23108,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-10 W',
			len: 25002,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0720762, lng:-118.0972513},
				{lat:34.0734252, lng:-118.0994908},
				{lat:34.1238154, lng:-118.1004512},
				{lat:34.1272935, lng:-118.1013765},
				{lat:34.1281825, lng:-118.1031837},
				{lat:34.1358574, lng:-118.1014553},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 22174,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1294805, lng:-118.0016281},
				{lat:34.129492, lng:-118.00381},
				{lat:34.13223079999999, lng:-118.0038271},
				{lat:34.1321219, lng:-118.0008884},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1513279, lng:-118.0900466},
				{lat:34.1528543, lng:-118.0930308},
				{lat:34.1529979, lng:-118.0940815},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 21360,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1525409, lng:-118.1167602},
				{lat:34.1528691, lng:-118.1206175},
				{lat:34.1528709, lng:-118.1213202},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'W Duarte Rd',
			len: 20089,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1294805, lng:-118.0016281},
				{lat:34.129492, lng:-118.00381},
				{lat:34.13223079999999, lng:-118.0038271},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 23627,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1525409, lng:-118.1167602},
				{lat:34.1528691, lng:-118.1206175},
				{lat:34.1528709, lng:-118.1213202},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E California Blvd',
			len: 20105,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1294805, lng:-118.0016281},
				{lat:34.129492, lng:-118.00381},
				{lat:34.13223079999999, lng:-118.0038271},
				{lat:34.1260961, lng:-118.0548407},
				{lat:34.1315697, lng:-118.0544263},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Longden Ave and E California Blvd',
			len: 18852,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1150466, lng:-118.0536361},
				{lat:34.1186301, lng:-118.0543617},
				{lat:34.1174126, lng:-118.0630235},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'W Duarte Rd',
			len: 20470,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1294805, lng:-118.0016281},
				{lat:34.129492, lng:-118.00381},
				{lat:34.13223079999999, lng:-118.0038271},
				{lat:34.1229938, lng:-118.0728859},
				{lat:34.1346545, lng:-118.0731948},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 21030,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1513279, lng:-118.0900466},
				{lat:34.1528543, lng:-118.0930308},
				{lat:34.1529979, lng:-118.0940815},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E Duarte Rd',
			len: 20198,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1321257, lng:-118.0007747},
				{lat:34.1260961, lng:-118.0548407},
				{lat:34.1315697, lng:-118.0544263},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-10 W',
			len: 24561,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0722818, lng:-118.080644},
				{lat:34.0736586, lng:-118.0825},
				{lat:34.0739523, lng:-118.0820694},
				{lat:34.0877628, lng:-118.0821172},
				{lat:34.0909817, lng:-118.0908695},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Live Oak Ave and E California Blvd',
			len: 19533,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1074229, lng:-118.0322759},
				{lat:34.107733, lng:-118.052174},
				{lat:34.1186301, lng:-118.0543617},
				{lat:34.1174126, lng:-118.0630235},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-210 W',
			len: 20703,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1358999, lng:-118.000761},
				{lat:34.1358972, lng:-118.0011632},
				{lat:34.1480048, lng:-118.0793827},
				{lat:34.1482221, lng:-118.0820511},
				{lat:34.1462371, lng:-118.0817021},
				{lat:34.146181, lng:-118.094578},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 26.2, pathId:0},
				{duration: 30.9, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 25.4, pathId:0},
				{duration: 30.3, pathId:1},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 25.6, pathId:0},
				{duration: 30.3, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 25.1, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 25.0, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 24.7, pathId:0},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 25.1, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 24.6, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 24.2, pathId:0},
				{duration: 28.2, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 24.4, pathId:0},
				{duration: 30.4, pathId:1},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 24.2, pathId:0},
				{duration: 30.8, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 24.7, pathId:0},
				{duration: 29.5, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 25.1, pathId:0},
				{duration: 29.8, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 25.7, pathId:0},
				{duration: 29.6, pathId:1},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 25.1, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 26.8, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 27.1, pathId:0},
				{duration: 30.3, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 26.7, pathId:0},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 27.4, pathId:0},
				{duration: 30.0, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 27.6, pathId:0},
				{duration: 29.5, pathId:1},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 26.8, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 27.8, pathId:0},
				{duration: 31.3, pathId:1},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 28.1, pathId:0},
				{duration: 29.7, pathId:3},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 26.5, pathId:0},
				{duration: 30.6, pathId:4},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 26.3, pathId:0},
				{duration: 29.7, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 26.1, pathId:0},
				{duration: 30.7, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 27.1, pathId:0},
				{duration: 30.2, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 26.9, pathId:0},
				{duration: 30.4, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 28.1, pathId:0},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 28.1, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 28.9, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 28.5, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 28.2, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 28.2, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 28.8, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 29.4, pathId:0},
				{duration: 31.1, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 29.3, pathId:0},
				{duration: 31.6, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 28.8, pathId:0},
				{duration: 30.3, pathId:1},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 28.6, pathId:0},
				{duration: 30.8, pathId:1},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 29.0, pathId:0},
				{duration: 30.6, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 28.1, pathId:5},
				{duration: 30.1, pathId:6},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 29.2, pathId:0},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 29.0, pathId:0},
				{duration: 30.4, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 29.6, pathId:0},
				{duration: 30.9, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 30.4, pathId:0},
				{duration: 31.3, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 28.6, pathId:7},
				{duration: 30.2, pathId:8},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 28.3, pathId:7},
				{duration: 30.1, pathId:9},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 29.0, pathId:7},
				{duration: 31.2, pathId:9},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 28.7, pathId:10},
				{duration: 29.9, pathId:11},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 29.2, pathId:10},
				{duration: 30.9, pathId:11},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 28.9, pathId:10},
				{duration: 31.3, pathId:11},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 31.6, pathId:0},
				{duration: 33.5, pathId:1},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 29.9, pathId:12},
				{duration: 31.8, pathId:11},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 30.9, pathId:12},
				{duration: 32.4, pathId:11},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 30.2, pathId:7},
				{duration: 32.2, pathId:11},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 31.0, pathId:10},
				{duration: 33.8, pathId:13},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 30.4, pathId:12},
				{duration: 32.9, pathId:11},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 30.6, pathId:12},
				{duration: 32.5, pathId:8},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 31.2, pathId:12},
				{duration: 34.3, pathId:11},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 31.9, pathId:12},
				{duration: 32.0, pathId:14},
				{duration: 36.0, pathId:11},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 31.0, pathId:14},
				{duration: 34.8, pathId:8},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 32.0, pathId:12},
				{duration: 34.7, pathId:8},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 33.4, pathId:12},
				{duration: 35.7, pathId:8},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 32.6, pathId:15},
				{duration: 36.0, pathId:16},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 32.8, pathId:17},
				{duration: 31.5, pathId:18},
				{duration: 36.1, pathId:19},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 30.4, pathId:12},
				{duration: 36.9, pathId:20},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 30.6, pathId:12},
				{duration: 34.1, pathId:21},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 30.9, pathId:12},
				{duration: 34.7, pathId:22},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 31.6, pathId:12},
				{duration: 36.5, pathId:23},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 32.9, pathId:12},
				{duration: 36.8, pathId:13},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 35.1, pathId:24},
				{duration: 33.8, pathId:12},
				{duration: 34.8, pathId:21},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 33.7, pathId:25},
				{duration: 33.5, pathId:24},
				{duration: 34.8, pathId:21},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 34.2, pathId:26},
				{duration: 34.4, pathId:27},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 34.1, pathId:24},
				{duration: 34.0, pathId:28},
				{duration: 34.7, pathId:29},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 34.3, pathId:24},
				{duration: 34.7, pathId:30},
				{duration: 36.3, pathId:21},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 32.5, pathId:25},
				{duration: 34.7, pathId:21},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 32.6, pathId:26},
				{duration: 33.9, pathId:21},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 32.9, pathId:26},
				{duration: 35.0, pathId:21},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 32.5, pathId:25},
				{duration: 34.9, pathId:21},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 33.8, pathId:24},
				{duration: 35.7, pathId:21},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 33.5, pathId:24},
				{duration: 35.2, pathId:21},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 33.7, pathId:31},
				{duration: 35.2, pathId:8},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 34.5, pathId:0},
				{duration: 35.4, pathId:22},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 34.7, pathId:0},
				{duration: 33.4, pathId:32},
				{duration: 36.5, pathId:1},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 33.3, pathId:32},
				{duration: 34.3, pathId:0},
				{duration: 36.5, pathId:1},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 32.6, pathId:25},
				{duration: 36.6, pathId:8},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 34.1, pathId:0},
				{duration: 36.8, pathId:1},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 34.3, pathId:0},
				{duration: 35.1, pathId:1},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 34.4, pathId:0},
				{duration: 33.6, pathId:11},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 32.6, pathId:10},
				{duration: 33.9, pathId:11},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 32.3, pathId:10},
				{duration: 33.6, pathId:11},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 32.4, pathId:33},
				{duration: 33.7, pathId:11},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 31.8, pathId:34},
				{duration: 32.8, pathId:8},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 31.9, pathId:35},
				{duration: 34.7, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 31.3, pathId:35},
				{duration: 32.3, pathId:11},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 32.2, pathId:10},
				{duration: 33.2, pathId:11},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 31.3, pathId:10},
				{duration: 32.5, pathId:11},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 30.2, pathId:10},
				{duration: 31.5, pathId:11},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 30.6, pathId:10},
				{duration: 32.0, pathId:11},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 30.2, pathId:7},
				{duration: 32.3, pathId:11},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 29.4, pathId:7},
				{duration: 32.0, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 29.7, pathId:0},
				{duration: 31.1, pathId:1},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 30.0, pathId:0},
				{duration: 31.8, pathId:1},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 29.8, pathId:0},
				{duration: 31.2, pathId:8},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 28.6, pathId:10},
				{duration: 31.2, pathId:36},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 28.8, pathId:10},
				{duration: 31.1, pathId:36},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 29.9, pathId:0},
				{duration: 32.2, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 30.0, pathId:0},
				{duration: 31.7, pathId:1},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 29.3, pathId:0},
				{duration: 30.9, pathId:1},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 28.9, pathId:10},
				{duration: 31.4, pathId:1},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 29.6, pathId:0},
				{duration: 30.5, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 29.3, pathId:0},
				{duration: 29.7, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 27.9, pathId:0},
				{duration: 29.3, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 27.9, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 27.9, pathId:0},
				{duration: 30.4, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 27.1, pathId:0},
				{duration: 29.5, pathId:1},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 26.8, pathId:0},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 26.6, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 26.1, pathId:0},
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 26.1, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 28.1, pathId: 0},
				{duration: 30.6, pathId: 1},
				{duration: 30.1, pathId: 2},
				{duration: 29.7, pathId: 3},
				{duration: 30.6, pathId: 4},
				{duration: 28.1, pathId: 5},
				{duration: 30.1, pathId: 6},
				{duration: 29.3, pathId: 7},
				{duration: 33.7, pathId: 8},
				{duration: 30.6, pathId: 9},
				{duration: 30.3, pathId: 10},
				{duration: 32.6, pathId: 11},
				{duration: 31.5, pathId: 12},
				{duration: 35.3, pathId: 13},
				{duration: 31.5, pathId: 14},
				{duration: 32.6, pathId: 15},
				{duration: 36.0, pathId: 16},
				{duration: 32.8, pathId: 17},
				{duration: 31.5, pathId: 18},
				{duration: 36.1, pathId: 19},
				{duration: 36.9, pathId: 20},
				{duration: 34.9, pathId: 21},
				{duration: 35.0, pathId: 22},
				{duration: 36.5, pathId: 23},
				{duration: 34.1, pathId: 24},
				{duration: 32.8, pathId: 25},
				{duration: 33.2, pathId: 26},
				{duration: 34.4, pathId: 27},
				{duration: 34.0, pathId: 28},
				{duration: 34.7, pathId: 29},
				{duration: 34.7, pathId: 30},
				{duration: 33.7, pathId: 31},
				{duration: 33.3, pathId: 32},
				{duration: 32.4, pathId: 33},
				{duration: 31.8, pathId: 34},
				{duration: 31.6, pathId: 35},
				{duration: 31.1, pathId: 36},
			]
		}
	];

	return {
		O: 'E',
		D: 'B',
		minDuration: 24.2,
		maxDuration: 36.9,
		paths: paths,
		data: data
	}
};