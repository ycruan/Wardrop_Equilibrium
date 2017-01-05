//date: 010417
function getObj() {
	var paths = [
		{
			desc: 'I-210 W',
			len: 24367,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1489297, lng:-118.0635248},
				{lat:34.1501637, lng:-118.0745881},
				{lat:34.1501803, lng:-118.0735055},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 22416,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1068188, lng:-117.9628459},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1294805, lng:-118.0016281},
				{lat:34.129492, lng:-118.00381},
				{lat:34.13223079999999, lng:-118.0038271},
				{lat:34.1273895, lng:-118.0458547},
				{lat:34.1318676, lng:-118.0459171},
				{lat:34.1271133, lng:-118.0910336},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Del Mar Blvd',
			len: 21259,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.1321257, lng:-118.0007747},
				{lat:34.1304107, lng:-118.0250459},
				{lat:34.1400882, lng:-118.0248906},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1463503, lng:-118.0733284},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Lower Azusa Rd',
			len: 21167,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0907274, lng:-118.0488123},
				{lat:34.1315697, lng:-118.0544263},
				{lat:34.1305045, lng:-118.0730895},
				{lat:34.1422731, lng:-118.0732839},
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
			desc: 'Lower Azusa Rd',
			len: 21467,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0894909, lng:-118.0573151},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1215526, lng:-118.0793039},
				{lat:34.1295453, lng:-118.0794273},
				{lat:34.1271133, lng:-118.0910336},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Live Oak Ave and E California Blvd',
			len: 19755,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1074229, lng:-118.0322759},
				{lat:34.106698, lng:-118.0608909},
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
			desc: 'E Duarte Rd',
			len: 20419,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
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
			desc: 'Huntington Dr',
			len: 21056,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0920917, lng:-118.0261833},
				{lat:34.1072831, lng:-118.0307579},
				{lat:34.1074229, lng:-118.0322759},
				{lat:34.107733, lng:-118.052174},
				{lat:34.1315697, lng:-118.0544263},
				{lat:34.1271133, lng:-118.0910336},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'E California Blvd',
			len: 19792,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0920917, lng:-118.0261833},
				{lat:34.1072831, lng:-118.0307579},
				{lat:34.1074229, lng:-118.0322759},
				{lat:34.106698, lng:-118.0608909},
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
			len: 20710,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0894909, lng:-118.0573151},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1344458, lng:-118.0675191},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Lower Azusa Rd',
			len: 20405,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0907274, lng:-118.0488123},
				{lat:34.1315697, lng:-118.0544263},
				{lat:34.1305045, lng:-118.0730895},
				{lat:34.1346545, lng:-118.0731948},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Lower Azusa Rd',
			len: 20076,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0907274, lng:-118.0488123},
				{lat:34.1113304, lng:-118.052893},
				{lat:34.11027, lng:-118.061614},
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
			len: 21323,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0907274, lng:-118.0488123},
				{lat:34.1315697, lng:-118.0544263},
				{lat:34.1271133, lng:-118.0910336},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
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
			desc: 'Huntington Dr',
			len: 20413,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0920917, lng:-118.0261833},
				{lat:34.1072831, lng:-118.0307579},
				{lat:34.1074229, lng:-118.0322759},
				{lat:34.107733, lng:-118.052174},
				{lat:34.1315697, lng:-118.0544263},
				{lat:34.1271133, lng:-118.0910336},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-10 W and Rosemead Blvd',
			len: 24979,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.072422, lng:-118.0693262},
				{lat:34.0726124, lng:-118.0716711},
				{lat:34.0726167, lng:-118.0732421},
				{lat:34.0740009, lng:-118.073101},
				{lat:34.1346545, lng:-118.0731948},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-10 W and Rosemead Blvd',
			len: 24846,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.072422, lng:-118.0693262},
				{lat:34.0738834, lng:-118.0724601},
				{lat:34.0740923, lng:-118.072971},
				{lat:34.1346545, lng:-118.0731948},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-10 W',
			len: 24100,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.072422, lng:-118.0693262},
				{lat:34.0738834, lng:-118.0724601},
				{lat:34.0740923, lng:-118.072971},
				{lat:34.0842306, lng:-118.073219},
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
			desc: 'I-10 W and Rosemead Blvd',
			len: 24956,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.072422, lng:-118.0693262},
				{lat:34.0738834, lng:-118.0724601},
				{lat:34.0740923, lng:-118.072971},
				{lat:34.1378657, lng:-118.0732365},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-10 W',
			len: 24097,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.072422, lng:-118.0693262},
				{lat:34.0738834, lng:-118.0724601},
				{lat:34.0740923, lng:-118.072971},
				{lat:34.0842306, lng:-118.073219},
				{lat:34.0909817, lng:-118.0908695},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-10 W',
			len: 24743,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.072422, lng:-118.0693262},
				{lat:34.0738834, lng:-118.0724601},
				{lat:34.0740923, lng:-118.072971},
				{lat:34.0842306, lng:-118.073219},
				{lat:34.0909817, lng:-118.0908695},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-10 W',
			len: 24229,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.072422, lng:-118.0693262},
				{lat:34.0726124, lng:-118.0716711},
				{lat:34.0726167, lng:-118.0732421},
				{lat:34.0740009, lng:-118.073101},
				{lat:34.0842306, lng:-118.073219},
				{lat:34.0909817, lng:-118.0908695},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'Lower Azusa Rd',
			len: 20203,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0907274, lng:-118.0488123},
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
			desc: 'E California Blvd',
			len: 20069,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0926805, lng:-118.0353907},
				{lat:34.1062647, lng:-118.0381834},
				{lat:34.1030722, lng:-118.0601676},
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
			desc: 'Rosemead Blvd',
			len: 25741,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.072422, lng:-118.0693262},
				{lat:34.0726124, lng:-118.0716711},
				{lat:34.0726167, lng:-118.0732421},
				{lat:34.0740009, lng:-118.073101},
				{lat:34.1422731, lng:-118.0732839},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1380738, lng:-118.1249651},
			]
		},
		{
			desc: 'I-10 W and San Gabriel Blvd',
			len: 25370,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0721831, lng:-118.0885557},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1414292, lng:-118.122859},
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
	];

	var data = [
		{
			time: '06:00 AM',
			routes: [
				{duration: 23.9, pathId:0},
				{duration: 28.0, pathId:1},
				{duration: 27.3, pathId:2},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 23.9, pathId:0},
				{duration: 26.5, pathId:2},
				{duration: 28.3, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 24.6, pathId:0},
				{duration: 26.6, pathId:2},
				{duration: 28.2, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 24.4, pathId:0},
				{duration: 26.4, pathId:2},
				{duration: 27.6, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 24.9, pathId:0},
				{duration: 26.9, pathId:2},
				{duration: 27.9, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 24.4, pathId:0},
				{duration: 27.2, pathId:2},
				{duration: 28.2, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 25.2, pathId:0},
				{duration: 27.9, pathId:2},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 25.5, pathId:0},
				{duration: 27.3, pathId:2},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 25.0, pathId:0},
				{duration: 27.4, pathId:2},
				{duration: 30.1, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 26.3, pathId:0},
				{duration: 27.6, pathId:2},
				{duration: 30.9, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 27.6, pathId:0},
				{duration: 28.8, pathId:2},
				{duration: 31.8, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 27.6, pathId:0},
				{duration: 28.8, pathId:2},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 26.6, pathId:0},
				{duration: 28.8, pathId:2},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 27.4, pathId:0},
				{duration: 29.0, pathId:2},
				{duration: 35.5, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 28.6, pathId:0},
				{duration: 29.3, pathId:2},
				{duration: 36.7, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 29.3, pathId:0},
				{duration: 29.4, pathId:2},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 28.0, pathId:0},
				{duration: 29.9, pathId:2},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 28.2, pathId:0},
				{duration: 30.7, pathId:2},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 28.4, pathId:3},
				{duration: 31.2, pathId:2},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 28.4, pathId:3},
				{duration: 31.3, pathId:2},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 29.1, pathId:3},
				{duration: 31.9, pathId:2},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 29.1, pathId:3},
				{duration: 32.4, pathId:2},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 29.0, pathId:3},
				{duration: 31.7, pathId:2},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 29.4, pathId:3},
				{duration: 31.5, pathId:2},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 29.6, pathId:3},
				{duration: 32.0, pathId:2},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 29.2, pathId:3},
				{duration: 33.5, pathId:2},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 29.1, pathId:3},
				{duration: 33.4, pathId:2},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 30.1, pathId:3},
				{duration: 32.7, pathId:2},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 29.4, pathId:4},
				{duration: 35.4, pathId:1},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 29.4, pathId:3},
				{duration: 33.4, pathId:5},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 30.3, pathId:3},
				{duration: 35.5, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 30.5, pathId:4},
				{duration: 33.9, pathId:6},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 30.2, pathId:7},
				{duration: 35.6, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 30.2, pathId:7},
				{duration: 35.7, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 31.3, pathId:8},
				{duration: 31.3, pathId:7},
				{duration: 35.0, pathId:1},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 30.8, pathId:9},
				{duration: 31.9, pathId:10},
				{duration: 35.4, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 30.7, pathId:3},
				{duration: 34.9, pathId:11},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 30.6, pathId:3},
				{duration: 34.9, pathId:11},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 31.7, pathId:3},
				{duration: 34.5, pathId:11},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 32.1, pathId:8},
				{duration: 36.2, pathId:11},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 33.6, pathId:3},
				{duration: 35.1, pathId:11},
				{duration: 32.5, pathId:8},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 33.0, pathId:3},
				{duration: 35.5, pathId:11},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 33.8, pathId:3},
				{duration: 36.0, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 32.6, pathId:12},
				{duration: 35.9, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 32.9, pathId:12},
				{duration: 33.6, pathId:11},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 32.1, pathId:3},
				{duration: 32.8, pathId:11},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 32.8, pathId:3},
				{duration: 32.6, pathId:11},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 32.4, pathId:11},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 34.6, pathId:3},
				{duration: 34.2, pathId:11},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 33.7, pathId:12},
				{duration: 33.5, pathId:11},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 34.1, pathId:11},
				{duration: 34.8, pathId:3},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 33.7, pathId:11},
				{duration: 33.6, pathId:12},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 34.8, pathId:3},
				{duration: 34.4, pathId:13},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 33.8, pathId:11},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 33.2, pathId:3},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 35.0, pathId:11},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 33.5, pathId:10},
				{duration: 33.8, pathId:14},
				{duration: 33.7, pathId:15},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 35.1, pathId:4},
				{duration: 32.8, pathId:16},
				{duration: 31.8, pathId:11},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 34.0, pathId:17},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 32.7, pathId:8},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 31.2, pathId:8},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 31.1, pathId:8},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 34.1, pathId:18},
				{duration: 32.9, pathId:11},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 32.9, pathId:11},
				{duration: 36.1, pathId:19},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 33.1, pathId:3},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 32.2, pathId:20},
				{duration: 34.5, pathId:3},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 32.8, pathId:20},
				{duration: 33.4, pathId:21},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 33.9, pathId:22},
				{duration: 33.6, pathId:20},
				{duration: 32.4, pathId:11},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 34.9, pathId:11},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 33.1, pathId:20},
				{duration: 33.4, pathId:23},
				{duration: 33.1, pathId:21},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 32.6, pathId:21},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 32.4, pathId:24},
				{duration: 32.8, pathId:21},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 32.1, pathId:25},
				{duration: 32.1, pathId:21},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 33.3, pathId:0},
				{duration: 33.9, pathId:26},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 32.9, pathId:0},
				{duration: 32.9, pathId:11},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 32.2, pathId:27},
				{duration: 31.9, pathId:28},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 31.4, pathId:11},
				{duration: 32.3, pathId:0},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 31.6, pathId:0},
				{duration: 31.8, pathId:11},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 31.2, pathId:0},
				{duration: 31.1, pathId:11},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 31.6, pathId:0},
				{duration: 31.5, pathId:11},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 31.4, pathId:0},
				{duration: 31.3, pathId:28},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 30.8, pathId:0},
				{duration: 30.9, pathId:28},
				{duration: 33.8, pathId:2},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 29.3, pathId:0},
				{duration: 31.5, pathId:29},
				{duration: 32.5, pathId:2},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 27.9, pathId:0},
				{duration: 30.8, pathId:29},
				{duration: 32.2, pathId:2},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 26.7, pathId:0},
				{duration: 29.9, pathId:29},
				{duration: 30.9, pathId:2},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 25.9, pathId:0},
				{duration: 28.8, pathId:29},
				{duration: 29.7, pathId:2},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 25.7, pathId:0},
				{duration: 28.6, pathId:2},
				{duration: 29.2, pathId:29},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 25.8, pathId:0},
				{duration: 28.3, pathId:2},
				{duration: 28.9, pathId:29},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 24.8, pathId:0},
				{duration: 28.5, pathId:2},
				{duration: 28.6, pathId:29},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 24.0, pathId:0},
				{duration: 27.4, pathId:2},
				{duration: 28.4, pathId:29},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 27.5, pathId: 0},
				{duration: 32.2, pathId: 1},
				{duration: 29.7, pathId: 2},
				{duration: 31.3, pathId: 3},
				{duration: 31.7, pathId: 4},
				{duration: 33.4, pathId: 5},
				{duration: 33.9, pathId: 6},
				{duration: 30.6, pathId: 7},
				{duration: 31.8, pathId: 8},
				{duration: 30.8, pathId: 9},
				{duration: 32.7, pathId: 10},
				{duration: 33.5, pathId: 11},
				{duration: 33.2, pathId: 12},
				{duration: 34.4, pathId: 13},
				{duration: 33.8, pathId: 14},
				{duration: 33.7, pathId: 15},
				{duration: 32.8, pathId: 16},
				{duration: 34.0, pathId: 17},
				{duration: 34.1, pathId: 18},
				{duration: 36.1, pathId: 19},
				{duration: 32.9, pathId: 20},
				{duration: 32.8, pathId: 21},
				{duration: 33.9, pathId: 22},
				{duration: 33.4, pathId: 23},
				{duration: 32.4, pathId: 24},
				{duration: 32.1, pathId: 25},
				{duration: 33.9, pathId: 26},
				{duration: 32.2, pathId: 27},
				{duration: 31.4, pathId: 28},
				{duration: 29.5, pathId: 29},
			]
		}
	];

	return {
		O: 'E',
		D: 'B',
		minDuration: 23.9,
		maxDuration: 36.7,
		paths: paths,
		data: data
	}
};