//date: 010417
function getObj() {
	var paths = [
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
			len: 18977,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0803043, lng:-117.9979892},
				{lat:34.07755849999999, lng:-117.9987758},
				{lat:34.0741741, lng:-118.0227429},
				{lat:34.0687283, lng:-118.0283213},
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
			len: 19499,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0718816, lng:-117.9998834},
				{lat:34.0699887, lng:-118.0006631},
				{lat:34.0684032, lng:-118.0381796},
				{lat:34.0690285, lng:-118.0413778},
				{lat:34.0691301, lng:-118.0421032},
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
			time: '06:00 AM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 21.4, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 17.3, pathId:0},
				{duration: 21.9, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 21.8, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 21.6, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 21.9, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 17.4, pathId:0},
				{duration: 22.2, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 23.4, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 23.2, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 23.3, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 23.9, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 24.4, pathId:2},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 27.5, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 17.7, pathId:0},
				{duration: 26.6, pathId:2},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 27.1, pathId:2},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 28.9, pathId:2},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 17.6, pathId:0},
				{duration: 31.0, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 30.0, pathId:2},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 31.9, pathId:2},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 31.8, pathId:2},
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
				{duration: 19.1, pathId:0},
				{duration: 33.6, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 31.0, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 29.4, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 28.0, pathId:3},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 18.0, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 18.1, pathId:0},
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 18.2, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 18.4, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 18.5, pathId:0},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 27.2, pathId:1},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 27.5, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 19.0, pathId:0},
				{duration: 27.4, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 27.3, pathId:1},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 26.9, pathId:1},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 27.8, pathId:1},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 21.1, pathId:0},
				{duration: 28.9, pathId:1},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 27.2, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 20.3, pathId:0},
				{duration: 26.1, pathId:4},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 25.2, pathId:1},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 24.7, pathId:4},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 26.3, pathId:1},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 24.4, pathId:4},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 24.5, pathId:4},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 22.2, pathId:0},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 21.3, pathId:0},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 20.9, pathId:0},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 20.7, pathId:0},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 21.3, pathId:0},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 20.5, pathId:0},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 18.9, pathId:0},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 18.8, pathId:0},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 19.0, pathId:0},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 20.2, pathId:0},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 20.1, pathId:0},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 20.3, pathId:0},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 20.7, pathId:0},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 20.4, pathId:0},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 20.2, pathId:0},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 19.8, pathId:0},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 20.3, pathId:0},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 19.9, pathId:0},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 19.6, pathId:0},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 18.8, pathId:0},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 19.5, pathId:0},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 18.9, pathId:0},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 18.6, pathId:0},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 19.2, pathId:0},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 19.0, pathId:0},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 19.6, pathId:0},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 19.4, pathId:0},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 19.6, pathId:0},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 18.9, pathId:0},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 18.9, pathId:0},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 18.9, pathId:0},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 18.7, pathId:5},
				{duration: 19.6, pathId:0},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 18.7, pathId:5},
				{duration: 18.2, pathId:6},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 19.1, pathId:5},
				{duration: 18.5, pathId:6},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 19.1, pathId:5},
				{duration: 20.3, pathId:0},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 18.8, pathId:5},
				{duration: 19.8, pathId:0},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 18.6, pathId:5},
				{duration: 18.6, pathId:0},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 19.3, pathId: 0},
				{duration: 26.6, pathId: 1},
				{duration: 28.7, pathId: 2},
				{duration: 28.0, pathId: 3},
				{duration: 24.9, pathId: 4},
				{duration: 18.8, pathId: 5},
				{duration: 18.4, pathId: 6},
			]
		}
	];

	return {
		O: 'E',
		D: 'C',
		minDuration: 17.3,
		maxDuration: 33.6,
		paths: paths,
		data: data
	}
};