//date: 012417
function getObj() {
	var paths = [
		{
			desc: 'Lower Azusa Rd and El Monte Ave',
			len: 13024,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0926805, lng:-118.0353907},
				{lat:34.1284411, lng:-118.0386512},
				{lat:34.1273895, lng:-118.0458547},
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
			len: 12782,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0920917, lng:-118.0261833},
				{lat:34.1217883, lng:-118.0310237},
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
			desc: 'Longden Ave',
			len: 12413,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1131346, lng:-117.9909569},
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
			len: 12206,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1140736, lng:-118.0383752},
				{lat:34.1284411, lng:-118.0386512},
				{lat:34.1273895, lng:-118.0458547},
				{lat:34.1318676, lng:-118.0459171},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Lower Azusa Rd',
			len: 12911,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0926805, lng:-118.0353907},
				{lat:34.107672, lng:-118.0382518},
				{lat:34.1076621, lng:-118.0454795},
				{lat:34.1318676, lng:-118.0459171},
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
			desc: 'Live Oak Ave and Longden Ave',
			len: 12198,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1067457, lng:-117.9692984},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1140736, lng:-118.0383752},
				{lat:34.1284411, lng:-118.0386512},
				{lat:34.1273895, lng:-118.0458547},
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
			desc: 'Live Oak Ave and Longden Ave',
			len: 11969,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1140736, lng:-118.0383752},
				{lat:34.1284411, lng:-118.0386512},
				{lat:34.1273895, lng:-118.0458547},
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
			desc: 'Longden Ave',
			len: 12632,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1140736, lng:-118.0383752},
				{lat:34.1284411, lng:-118.0386512},
				{lat:34.1273895, lng:-118.0458547},
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
				{duration: 21.3, pathId:0},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 21.6, pathId:0},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 21.1, pathId:1},
				{duration: 21.1, pathId:0},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 20.9, pathId:1},
				{duration: 21.6, pathId:0},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 20.9, pathId:2},
				{duration: 23.0, pathId:0},
				{duration: 20.3, pathId:3},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 20.7, pathId:3},
				{duration: 22.8, pathId:0},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 22.2, pathId:4},
				{duration: 22.6, pathId:0},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 21.6, pathId:3},
				{duration: 23.2, pathId:0},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 21.0, pathId:5},
				{duration: 21.8, pathId:0},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 20.9, pathId:5},
				{duration: 21.4, pathId:0},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 22.1, pathId:0},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 21.9, pathId:5},
				{duration: 22.5, pathId:0},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 21.1, pathId:5},
				{duration: 21.5, pathId:0},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 20.5, pathId:0},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 20.7, pathId:3},
				{duration: 21.5, pathId:0},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 20.3, pathId:3},
				{duration: 21.9, pathId:0},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 20.0, pathId:5},
				{duration: 21.2, pathId:0},
				{duration: 20.0, pathId:3},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 20.6, pathId:2},
				{duration: 21.4, pathId:0},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 20.4, pathId:0},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 21.0, pathId:0},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 20.9, pathId:6},
				{duration: 20.9, pathId:0},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 21.0, pathId:6},
				{duration: 21.6, pathId:0},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 20.8, pathId:6},
				{duration: 20.8, pathId:0},
				{duration: 20.3, pathId:5},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 20.4, pathId:7},
				{duration: 21.4, pathId:0},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 20.3, pathId:7},
				{duration: 21.3, pathId:0},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 21.1, pathId:0},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 19.8, pathId:0},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 20.1, pathId:0},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 19.9, pathId:0},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 19.9, pathId:0},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 19.9, pathId:0},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 20.4, pathId:0},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 20.6, pathId:5},
				{duration: 21.0, pathId:0},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 20.8, pathId:2},
				{duration: 21.5, pathId:0},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 20.0, pathId:0},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 20.5, pathId:0},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 21.0, pathId:0},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 20.2, pathId:0},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 20.4, pathId:8},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 20.3, pathId:0},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 19.9, pathId:0},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 20.0, pathId:0},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 19.6, pathId:0},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 20.0, pathId:0},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 21.0, pathId:0},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 20.5, pathId:0},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 20.1, pathId:0},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 20.4, pathId:0},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 20.5, pathId:0},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 21.1, pathId:0},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 20.6, pathId:0},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 20.9, pathId:0},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 20.6, pathId:0},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 20.7, pathId:0},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 21.0, pathId:0},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 21.1, pathId:5},
				{duration: 21.5, pathId:0},
				{duration: 21.5, pathId:2},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 22.2, pathId:0},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 21.4, pathId:0},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 21.2, pathId:0},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 21.1, pathId:5},
				{duration: 21.8, pathId:0},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 21.2, pathId:0},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 21.6, pathId:0},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 21.6, pathId:0},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 21.2, pathId:5},
				{duration: 21.6, pathId:0},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 21.9, pathId:0},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 21.4, pathId:9},
				{duration: 22.2, pathId:0},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 21.9, pathId:9},
				{duration: 23.2, pathId:0},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 21.4, pathId:0},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 21.6, pathId:0},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 21.6, pathId:0},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 21.5, pathId:0},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 22.1, pathId:0},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 22.2, pathId:0},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 21.7, pathId:0},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 21.8, pathId:0},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 21.7, pathId:0},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 21.5, pathId:0},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 22.1, pathId:0},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 23.5, pathId:0},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 22.1, pathId:0},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 22.7, pathId:10},
				{duration: 23.4, pathId:0},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 22.3, pathId:11},
				{duration: 22.8, pathId:12},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 22.2, pathId:11},
				{duration: 23.5, pathId:0},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 22.2, pathId:11},
				{duration: 22.4, pathId:12},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 22.2, pathId:2},
				{duration: 23.5, pathId:0},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 22.5, pathId:0},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 22.3, pathId:0},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 22.8, pathId:0},
				{duration: 22.4, pathId:13},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 22.0, pathId:0},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 21.9, pathId:0},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 21.3, pathId:0},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 21.9, pathId:0},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 22.8, pathId:14},
				{duration: 23.4, pathId:0},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 22.2, pathId:0},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 20.9, pathId:0},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 20.7, pathId:0},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 21.1, pathId:0},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 21.4, pathId:0},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 20.2, pathId:0},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 20.3, pathId:0},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 20.1, pathId:0},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 20.6, pathId:5},
				{duration: 21.2, pathId:0},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 21.1, pathId:0},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 21.5, pathId:2},
				{duration: 21.8, pathId:0},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 20.9, pathId:0},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 21.1, pathId:0},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 20.5, pathId:0},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 21.1, pathId:0},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 21.0, pathId:0},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 21.3, pathId:0},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 20.4, pathId:0},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 19.9, pathId:0},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 19.9, pathId:0},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 21.3, pathId: 0},
				{duration: 21.0, pathId: 1},
				{duration: 21.2, pathId: 2},
				{duration: 20.6, pathId: 3},
				{duration: 22.2, pathId: 4},
				{duration: 20.9, pathId: 5},
				{duration: 20.9, pathId: 6},
				{duration: 20.4, pathId: 7},
				{duration: 20.4, pathId: 8},
				{duration: 21.6, pathId: 9},
				{duration: 22.7, pathId: 10},
				{duration: 22.2, pathId: 11},
				{duration: 22.6, pathId: 12},
				{duration: 22.4, pathId: 13},
				{duration: 22.8, pathId: 14},
			]
		}
	];

	return {
		O: 'E',
		D: 'C',
		minDuration: 19.6,
		maxDuration: 23.5,
		paths: paths,
		data: data
	}
};