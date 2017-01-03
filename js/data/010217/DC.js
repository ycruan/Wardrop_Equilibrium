//date: 010217
function getObj() {
	var paths = [
		{
			desc: 'E Foothill Blvd',
			len: 7622,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1509748, lng:-118.0313829},
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
			desc: 'I-210 W',
			len: 8933,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148148, lng:-117.994966},
				{lat:34.1358758, lng:-117.9950504},
				{lat:34.1358972, lng:-118.0011632},
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
			desc: 'E Foothill Blvd',
			len: 8034,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.15065850000001, lng:-118.050183},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 7131,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148148, lng:-117.994966},
				{lat:34.1405681, lng:-117.995021},
				{lat:34.1400471, lng:-118.036434},
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
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:2},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:2},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:2},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:2},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:2},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:2},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
				{duration: 15.2, pathId:2},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.8, pathId:3},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 14.9, pathId:0},
				{duration: 15.2, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 14.9, pathId: 0},
				{duration: 15.2, pathId: 1},
				{duration: 15.2, pathId: 2},
				{duration: 15.8, pathId: 3},
			]
		}
	];

	return {
		O: 'D',
		D: 'C',
		minDuration: 14.9,
		maxDuration: 15.8,
		paths: paths,
		data: data
	}
};