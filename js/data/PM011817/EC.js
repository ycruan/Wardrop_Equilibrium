//date: 011817
function getObj() {
	var paths = [
		{
			desc: 'Live Oak Ave and Longden Ave',
			len: 12028,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1141672, lng:-118.030878},
				{lat:34.1308335, lng:-118.031193},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1318676, lng:-118.0459171},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Longden Ave',
			len: 12454,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1141672, lng:-118.030878},
				{lat:34.1308335, lng:-118.031193},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1318676, lng:-118.0459171},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-10 W and Temple City Blvd',
			len: 19815,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0726533, lng:-118.056519},
				{lat:34.0730994, lng:-118.0584989},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1308183, lng:-118.0651126},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Santa Anita Ave',
			len: 18553,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0664078, lng:-118.0178881},
				{lat:34.0691899, lng:-118.0236365},
				{lat:34.0714958, lng:-118.0253503},
				{lat:34.0909225, lng:-118.0143998},
				{lat:34.0920917, lng:-118.0261833},
				{lat:34.1308335, lng:-118.031193},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1318676, lng:-118.0459171},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-10 W',
			len: 19377,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0726533, lng:-118.056519},
				{lat:34.0730994, lng:-118.0584989},
				{lat:34.0866581, lng:-118.0561735},
				{lat:34.089774, lng:-118.0549769},
				{lat:34.0907073, lng:-118.0489618},
				{lat:34.1315697, lng:-118.0544263},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-210 W',
			len: 16581,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1464035, lng:-118.0278837},
				{lat:34.1483976, lng:-118.0315174},
				{lat:34.14225270000001, lng:-118.0315434},
				{lat:34.1400538, lng:-118.0352251},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Live Oak Ave',
			len: 12537,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1073959, lng:-118.0307458},
				{lat:34.1308335, lng:-118.031193},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1318676, lng:-118.0459171},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-210 W',
			len: 15883,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1397875, lng:-118.015949},
				{lat:34.140323, lng:-118.016073},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Live Oak Ave and Longden Ave',
			len: 11987,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1151525, lng:-118.0456428},
				{lat:34.1318676, lng:-118.0459171},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Live Oak Ave and Longden Ave',
			len: 11750,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1151525, lng:-118.0456428},
				{lat:34.1318676, lng:-118.0459171},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Lower Azusa Rd and El Monte Ave',
			len: 12818,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0926805, lng:-118.0353907},
				{lat:34.1216886, lng:-118.0385286},
				{lat:34.1225016, lng:-118.0457879},
				{lat:34.1318676, lng:-118.0459171},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Live Oak Ave and Longden Ave',
			len: 11791,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1141672, lng:-118.030878},
				{lat:34.1308335, lng:-118.031193},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1318676, lng:-118.0459171},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-605 N and I-210 W',
			len: 18528,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0918754, lng:-117.9909075},
				{lat:34.093154, lng:-117.989418},
				{lat:34.094205, lng:-117.9883294},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1397875, lng:-118.015949},
				{lat:34.140323, lng:-118.016073},
				{lat:34.1400471, lng:-118.036434},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Temple City Blvd',
			len: 20633,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0726533, lng:-118.056519},
				{lat:34.0730994, lng:-118.0584989},
				{lat:34.1246769, lng:-118.0644919},
				{lat:34.1308183, lng:-118.0651126},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-210 W',
			len: 17864,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1490404, lng:-118.0464734},
				{lat:34.1504936, lng:-118.0533111},
				{lat:34.1505405, lng:-118.0503296},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-10 W',
			len: 20195,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0726533, lng:-118.056519},
				{lat:34.0730994, lng:-118.0584989},
				{lat:34.0866581, lng:-118.0561735},
				{lat:34.089774, lng:-118.0549769},
				{lat:34.0907073, lng:-118.0489618},
				{lat:34.1315697, lng:-118.0544263},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Live Oak Ave and Longden Ave',
			len: 11763,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1140736, lng:-118.0383752},
				{lat:34.1216886, lng:-118.0385286},
				{lat:34.1225016, lng:-118.0457879},
				{lat:34.1318676, lng:-118.0459171},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Lower Azusa Rd and Santa Anita Ave',
			len: 12810,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0920917, lng:-118.0261833},
				{lat:34.1308335, lng:-118.031193},
				{lat:34.1312442, lng:-118.0459064},
				{lat:34.1318676, lng:-118.0459171},
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
				{duration: 21.2, pathId:0},
				{duration: 30.7, pathId:1},
				{duration: 31.6, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 27.8, pathId:2},
				{duration: 29.8, pathId:1},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 29.5, pathId:1},
				{duration: 30.4, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 29.8, pathId:1},
				{duration: 30.4, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 19.9, pathId:3},
				{duration: 28.4, pathId:1},
				{duration: 29.7, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 19.2, pathId:4},
				{duration: 29.1, pathId:1},
				{duration: 30.0, pathId:2},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 29.8, pathId:1},
				{duration: 30.9, pathId:2},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 30.2, pathId:2},
				{duration: 30.4, pathId:1},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 27.6, pathId:5},
				{duration: 27.0, pathId:6},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 25.3, pathId:6},
				{duration: 27.1, pathId:5},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 27.6, pathId:2},
				{duration: 26.5, pathId:7},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 27.4, pathId:2},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 28.1, pathId:2},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 29.8, pathId:1},
				{duration: 31.2, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 28.5, pathId:2},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 27.8, pathId:2},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 27.6, pathId:2},
				{duration: 27.2, pathId:7},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 26.9, pathId:2},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 26.3, pathId:2},
				{duration: 27.5, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 25.9, pathId:2},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 26.9, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 26.6, pathId:1},
				{duration: 28.4, pathId:2},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 21.5, pathId:0},
				{duration: 26.9, pathId:1},
				{duration: 27.5, pathId:2},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 24.3, pathId:2},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 24.4, pathId:2},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 20.5, pathId:3},
				{duration: 23.1, pathId:2},
				{duration: 24.8, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 21.5, pathId:2},
				{duration: 24.4, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 21.3, pathId:2},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 20.6, pathId:2},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 19.6, pathId:2},
				{duration: 24.4, pathId:1},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 19.4, pathId:2},
				{duration: 24.2, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 19.7, pathId:2},
				{duration: 23.5, pathId:1},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 19.8, pathId:2},
				{duration: 22.4, pathId:8},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 20.1, pathId:2},
				{duration: 22.3, pathId:8},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 19.9, pathId:2},
				{duration: 23.2, pathId:1},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 21.3, pathId:2},
				{duration: 23.8, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 20.4, pathId:9},
				{duration: 21.8, pathId:2},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 21.2, pathId:9},
				{duration: 21.8, pathId:2},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 20.9, pathId:9},
				{duration: 21.6, pathId:2},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 20.4, pathId:2},
				{duration: 23.1, pathId:1},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 20.9, pathId:2},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 20.9, pathId:2},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 20.7, pathId:2},
				{duration: 23.9, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 20.7, pathId:2},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 20.3, pathId:2},
				{duration: 24.1, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 21.2, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 20.7, pathId:2},
				{duration: 23.7, pathId:1},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 20.5, pathId:2},
				{duration: 23.9, pathId:1},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 21.2, pathId:2},
				{duration: 23.3, pathId:1},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 20.2, pathId:2},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 20.4, pathId:9},
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 21.5, pathId:2},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 20.8, pathId:9},
				{duration: 21.2, pathId:2},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 20.8, pathId:9},
				{duration: 21.9, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 21.3, pathId:2},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 21.0, pathId:2},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 21.8, pathId:10},
				{duration: 22.4, pathId:2},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 22.4, pathId:11},
				{duration: 22.4, pathId:2},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 22.7, pathId:2},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 21.9, pathId:2},
				{duration: 24.2, pathId:1},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 21.9, pathId:2},
				{duration: 24.3, pathId:1},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 21.8, pathId:2},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 22.0, pathId:2},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 21.4, pathId:2},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 21.4, pathId:2},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 21.8, pathId:12},
				{duration: 22.0, pathId:2},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 21.3, pathId:2},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 22.1, pathId:2},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 21.5, pathId:13},
				{duration: 22.1, pathId:2},
				{duration: 21.1, pathId:9},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 21.1, pathId:9},
				{duration: 22.2, pathId:2},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 21.2, pathId:2},
				{duration: 27.4, pathId:1},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 21.1, pathId:2},
				{duration: 27.5, pathId:1},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 21.2, pathId:9},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 21.5, pathId:9},
				{duration: 22.1, pathId:2},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 22.3, pathId:12},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 21.9, pathId:2},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 20.9, pathId:2},
				{duration: 28.3, pathId:1},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 21.6, pathId:2},
				{duration: 27.7, pathId:1},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 21.4, pathId:2},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 21.4, pathId:2},
				{duration: 21.3, pathId:14},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 21.3, pathId:2},
				{duration: 27.8, pathId:15},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 21.2, pathId:14},
				{duration: 21.6, pathId:2},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 20.7, pathId:9},
				{duration: 21.8, pathId:2},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 20.3, pathId:9},
				{duration: 21.8, pathId:2},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 20.8, pathId:2},
				{duration: 26.5, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 20.8, pathId:9},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 21.5, pathId:2},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 20.8, pathId:9},
				{duration: 22.0, pathId:2},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 20.7, pathId:9},
				{duration: 22.1, pathId:2},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 21.5, pathId:2},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 20.8, pathId:2},
				{duration: 24.2, pathId:1},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 21.6, pathId:2},
				{duration: 24.3, pathId:1},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 21.2, pathId:2},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 21.6, pathId:2},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 21.2, pathId:2},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 21.4, pathId:16},
				{duration: 21.6, pathId:2},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 21.6, pathId:2},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 22.0, pathId:16},
				{duration: 22.1, pathId:2},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 21.0, pathId:17},
				{duration: 21.4, pathId:2},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 20.5, pathId:2},
				{duration: 23.1, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 20.3, pathId:2},
				{duration: 23.3, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 20.0, pathId:2},
				{duration: 23.2, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 20.2, pathId:2},
				{duration: 24.5, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 20.6, pathId:2},
				{duration: 23.4, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 20.9, pathId:2},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 20.8, pathId:2},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 20.8, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.5, pathId: 0},
				{duration: 26.1, pathId: 1},
				{duration: 22.5, pathId: 2},
				{duration: 20.2, pathId: 3},
				{duration: 19.2, pathId: 4},
				{duration: 27.4, pathId: 5},
				{duration: 26.1, pathId: 6},
				{duration: 26.9, pathId: 7},
				{duration: 22.4, pathId: 8},
				{duration: 20.8, pathId: 9},
				{duration: 21.8, pathId: 10},
				{duration: 22.4, pathId: 11},
				{duration: 22.1, pathId: 12},
				{duration: 21.5, pathId: 13},
				{duration: 21.2, pathId: 14},
				{duration: 27.8, pathId: 15},
				{duration: 21.7, pathId: 16},
				{duration: 21.0, pathId: 17},
			]
		}
	];

	return {
		O: 'E',
		D: 'C',
		minDuration: 19.2,
		maxDuration: 31.6,
		paths: paths,
		data: data
	}
};