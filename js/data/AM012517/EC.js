//date: 012517
function getObj() {
	var paths = [
		{
			desc: 'W Duarte Rd',
			len: 12841,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1142771, lng:-117.9828281},
				{lat:34.1182721, lng:-117.984304},
				{lat:34.121367, lng:-117.985125},
				{lat:34.122121, lng:-117.990543},
				{lat:34.12089, lng:-117.9910227},
				{lat:34.1227072, lng:-117.9976011},
				{lat:34.1215874, lng:-117.9980463},
				{lat:34.122037, lng:-118.008578},
				{lat:34.122036, lng:-118.009317},
				{lat:34.132186, lng:-118.009447},
				{lat:34.1295247, lng:-118.0311483},
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
			desc: 'Live Oak Ave and E Camino Real Ave',
			len: 11586,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1140279, lng:-118.0042336},
				{lat:34.117404, lng:-118.003848},
				{lat:34.1203379, lng:-118.01238},
				{lat:34.1220139, lng:-118.0124121},
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
			desc: 'Live Oak Ave',
			len: 12678,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1082735, lng:-118.0246002},
				{lat:34.1218723, lng:-118.0248658},
				{lat:34.1217883, lng:-118.0310237},
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
			desc: 'Live Oak Ave',
			len: 12774,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
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
			desc: 'Live Oak Ave',
			len: 12675,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1082735, lng:-118.0246002},
				{lat:34.1161477, lng:-118.0247616},
				{lat:34.1160874, lng:-118.0309142},
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
			desc: 'Live Oak Ave',
			len: 12441,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1082735, lng:-118.0246002},
				{lat:34.1142514, lng:-118.0247225},
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
			desc: 'Live Oak Ave',
			len: 12394,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1082735, lng:-118.0246002},
				{lat:34.1161477, lng:-118.0247616},
				{lat:34.116145, lng:-118.0384168},
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
			desc: 'Live Oak Ave',
			len: 12631,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1082735, lng:-118.0246002},
				{lat:34.1161477, lng:-118.0247616},
				{lat:34.116145, lng:-118.0384168},
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
			desc: 'Santa Anita Ave',
			len: 13609,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
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
			desc: 'Santa Anita Ave',
			len: 13126,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0886985, lng:-118.0089058},
				{lat:34.0872226, lng:-118.0102825},
				{lat:34.0904987, lng:-118.0268195},
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
			desc: 'Live Oak Ave',
			len: 11996,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1140279, lng:-118.0042336},
				{lat:34.117404, lng:-118.003848},
				{lat:34.119391, lng:-118.009316},
				{lat:34.132186, lng:-118.009447},
				{lat:34.1295247, lng:-118.0311483},
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
			desc: 'Live Oak Ave',
			len: 12233,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1140279, lng:-118.0042336},
				{lat:34.117404, lng:-118.003848},
				{lat:34.119391, lng:-118.009316},
				{lat:34.132186, lng:-118.009447},
				{lat:34.1295247, lng:-118.0311483},
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
			desc: 'E Camino Real Ave',
			len: 12547,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1142771, lng:-117.9828281},
				{lat:34.1182721, lng:-117.984304},
				{lat:34.121367, lng:-117.985125},
				{lat:34.122121, lng:-117.990543},
				{lat:34.12089, lng:-117.9910227},
				{lat:34.1227072, lng:-117.9976011},
				{lat:34.1215874, lng:-117.9980463},
				{lat:34.122037, lng:-118.008578},
				{lat:34.1217883, lng:-118.0310237},
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
			desc: 'Live Oak Ave and W Duarte Rd',
			len: 12372,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1144087, lng:-118.0122545},
				{lat:34.1321629, lng:-118.0126324},
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
			len: 13617,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
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
			desc: 'Live Oak Ave and E Camino Real Ave',
			len: 11999,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1144087, lng:-118.0122545},
				{lat:34.1220139, lng:-118.0124121},
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
			desc: 'Live Oak Ave',
			len: 12438,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1082735, lng:-118.0246002},
				{lat:34.1161477, lng:-118.0247616},
				{lat:34.1160874, lng:-118.0309142},
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
			desc: 'Longden Ave',
			len: 13184,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1068188, lng:-117.9628459},
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
			desc: 'Santa Anita Ave',
			len: 13700,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0880633, lng:-118.0018414},
				{lat:34.0922505, lng:-118.0137687},
				{lat:34.0909765, lng:-118.0145301},
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
			time: '05:00 AM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 17.7, pathId:1},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 17.7, pathId:1},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 17.7, pathId:1},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 17.8, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 17.9, pathId:0},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 18.1, pathId:1},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 18.2, pathId:1},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 18.1, pathId:1},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 18.1, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 18.1, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 18.0, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 17.8, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 18.1, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 18.2, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 18.1, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 18.4, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 19.3, pathId:1},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 18.5, pathId:1},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 18.6, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 20.2, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 20.4, pathId:1},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 21.7, pathId:1},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 21.9, pathId:1},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 21.5, pathId:1},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 22.2, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 22.3, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 24.9, pathId:2},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 26.5, pathId:3},
				{duration: 28.4, pathId:1},
				{duration: 26.2, pathId:4},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 27.7, pathId:1},
				{duration: 27.6, pathId:5},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 25.7, pathId:6},
				{duration: 31.9, pathId:1},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 25.2, pathId:7},
				{duration: 30.8, pathId:8},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 26.2, pathId:9},
				{duration: 31.2, pathId:8},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 25.1, pathId:10},
				{duration: 30.2, pathId:1},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 25.8, pathId:10},
				{duration: 30.8, pathId:1},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 24.7, pathId:10},
				{duration: 32.0, pathId:1},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 24.1, pathId:10},
				{duration: 34.6, pathId:1},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 24.4, pathId:10},
				{duration: 34.4, pathId:1},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 25.6, pathId:11},
				{duration: 33.9, pathId:1},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 26.5, pathId:12},
				{duration: 31.5, pathId:1},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 26.9, pathId:11},
				{duration: 32.0, pathId:1},
				{duration: 26.7, pathId:13},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 26.6, pathId:14},
				{duration: 31.2, pathId:1},
				{duration: 26.9, pathId:13},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 25.8, pathId:15},
				{duration: 27.5, pathId:1},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 26.0, pathId:1},
				{duration: 25.4, pathId:16},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 25.4, pathId:17},
				{duration: 26.4, pathId:18},
				{duration: 23.4, pathId:19},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 22.4, pathId:4},
				{duration: 27.6, pathId:1},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 23.5, pathId:20},
				{duration: 25.7, pathId:1},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 21.3, pathId:4},
				{duration: 26.8, pathId:1},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 22.6, pathId:19},
				{duration: 27.3, pathId:1},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 23.6, pathId:19},
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 23.6, pathId:21},
				{duration: 26.0, pathId:1},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 23.3, pathId:9},
				{duration: 25.8, pathId:1},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 21.8, pathId:22},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 23.1, pathId:9},
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 22.5, pathId:22},
				{duration: 25.2, pathId:1},
				{duration: 22.8, pathId:13},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 22.6, pathId:22},
				{duration: 24.6, pathId:1},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 21.5, pathId:2},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 21.7, pathId:2},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 22.1, pathId:2},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 22.2, pathId:2},
				{duration: 22.2, pathId:9},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 21.4, pathId:23},
				{duration: 24.2, pathId:1},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 21.1, pathId:22},
				{duration: 23.1, pathId:1},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 22.2, pathId:2},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 21.2, pathId:2},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 21.2, pathId:13},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 22.1, pathId:24},
				{duration: 23.9, pathId:1},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 21.4, pathId:13},
				{duration: 22.4, pathId:1},
				{duration: 21.9, pathId:25},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 21.4, pathId:13},
				{duration: 21.7, pathId:1},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 20.4, pathId:22},
				{duration: 21.9, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 20.6, pathId:22},
				{duration: 22.2, pathId:1},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 20.5, pathId:22},
				{duration: 23.3, pathId:1},
				{duration: 20.6, pathId:9},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 17.9, pathId: 0},
				{duration: 21.3, pathId: 1},
				{duration: 22.0, pathId: 2},
				{duration: 26.5, pathId: 3},
				{duration: 23.3, pathId: 4},
				{duration: 27.6, pathId: 5},
				{duration: 25.7, pathId: 6},
				{duration: 25.2, pathId: 7},
				{duration: 31.0, pathId: 8},
				{duration: 23.1, pathId: 9},
				{duration: 24.8, pathId: 10},
				{duration: 26.2, pathId: 11},
				{duration: 26.5, pathId: 12},
				{duration: 23.4, pathId: 13},
				{duration: 26.6, pathId: 14},
				{duration: 25.8, pathId: 15},
				{duration: 25.4, pathId: 16},
				{duration: 25.4, pathId: 17},
				{duration: 26.4, pathId: 18},
				{duration: 23.2, pathId: 19},
				{duration: 23.5, pathId: 20},
				{duration: 23.6, pathId: 21},
				{duration: 21.4, pathId: 22},
				{duration: 21.4, pathId: 23},
				{duration: 22.1, pathId: 24},
				{duration: 21.9, pathId: 25},
			]
		}
	];

	return {
		O: 'E',
		D: 'C',
		minDuration: 17.7,
		maxDuration: 34.6,
		paths: paths,
		data: data
	}
};