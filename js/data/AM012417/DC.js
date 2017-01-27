//date: 012417
function getObj() {
	var paths = [
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
			desc: 'Huntington Dr',
			len: 7137,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1405681, lng:-117.995021},
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
			desc: 'E Foothill Blvd',
			len: 7616,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.1511144, lng:-118.0207063},
				{lat:34.1423737, lng:-118.0205248},
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
			len: 8939,
			pts: [
				{lat:34.148744, lng:-117.9921699},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.1470599, lng:-117.994964},
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
	];

	var data = [
		{
			time: '05:00 AM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 13.5, pathId:1},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 13.6, pathId:1},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 13.6, pathId:1},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 12.7, pathId:0},
				{duration: 13.6, pathId:1},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 12.7, pathId:0},
				{duration: 13.7, pathId:1},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 12.7, pathId:0},
				{duration: 13.7, pathId:1},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 12.8, pathId:0},
				{duration: 13.9, pathId:1},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 12.8, pathId:0},
				{duration: 13.8, pathId:1},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 12.8, pathId:0},
				{duration: 13.8, pathId:1},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 12.9, pathId:0},
				{duration: 13.8, pathId:1},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 12.9, pathId:0},
				{duration: 13.8, pathId:1},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 13.3, pathId:2},
				{duration: 12.9, pathId:0},
				{duration: 13.9, pathId:1},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 13.3, pathId:2},
				{duration: 12.9, pathId:0},
				{duration: 13.8, pathId:1},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 13.3, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 13.8, pathId:1},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 13.3, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 13.8, pathId:1},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 13.3, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 13.8, pathId:1},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 13.9, pathId:1},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 13.3, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 14.0, pathId:1},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 12.9, pathId:0},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 12.9, pathId:0},
				{duration: 14.2, pathId:1},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 14.3, pathId:1},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 13.0, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 14.3, pathId:1},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 12.9, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 14.4, pathId:1},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 12.9, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 14.4, pathId:1},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 12.9, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 14.5, pathId:1},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 12.9, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 14.5, pathId:1},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 12.9, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 14.6, pathId:1},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 12.9, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 14.6, pathId:1},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 12.9, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 13.1, pathId:2},
				{duration: 13.0, pathId:0},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 12.9, pathId:2},
				{duration: 13.1, pathId:0},
				{duration: 14.9, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 13.1, pathId:2},
				{duration: 13.3, pathId:0},
				{duration: 14.8, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 13.1, pathId:0},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 13.3, pathId:2},
				{duration: 13.3, pathId:0},
				{duration: 14.9, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 13.3, pathId:2},
				{duration: 13.4, pathId:0},
				{duration: 14.7, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 13.1, pathId:2},
				{duration: 12.9, pathId:0},
				{duration: 14.9, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 13.0, pathId:0},
				{duration: 15.6, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 13.1, pathId:0},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 13.3, pathId:2},
				{duration: 13.1, pathId:0},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 13.1, pathId:2},
				{duration: 13.0, pathId:0},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 13.2, pathId:0},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 13.1, pathId:2},
				{duration: 13.0, pathId:0},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 13.1, pathId:2},
				{duration: 13.1, pathId:0},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 13.1, pathId:0},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 13.0, pathId:0},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 13.1, pathId:0},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 13.3, pathId:2},
				{duration: 13.1, pathId:0},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 13.4, pathId:2},
				{duration: 13.1, pathId:0},
				{duration: 16.8, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 13.4, pathId:2},
				{duration: 13.1, pathId:0},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 13.2, pathId:2},
				{duration: 13.1, pathId:0},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 13.1, pathId:2},
				{duration: 13.1, pathId:0},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 13.1, pathId:2},
				{duration: 12.9, pathId:0},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 13.4, pathId:2},
				{duration: 13.3, pathId:0},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 13.3, pathId:2},
				{duration: 13.1, pathId:0},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 13.8, pathId:2},
				{duration: 13.5, pathId:0},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 13.5, pathId:2},
				{duration: 13.4, pathId:0},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 13.8, pathId:2},
				{duration: 13.6, pathId:0},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 13.8, pathId:2},
				{duration: 14.0, pathId:0},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 13.6, pathId:2},
				{duration: 13.9, pathId:0},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 13.7, pathId:2},
				{duration: 14.1, pathId:0},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 13.8, pathId:2},
				{duration: 14.1, pathId:0},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 13.7, pathId:2},
				{duration: 14.5, pathId:0},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 14.1, pathId:2},
				{duration: 14.8, pathId:0},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 14.2, pathId:2},
				{duration: 14.5, pathId:0},
				{duration: 18.9, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 14.2, pathId:2},
				{duration: 14.2, pathId:0},
				{duration: 19.3, pathId:1},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 14.2, pathId:2},
				{duration: 14.3, pathId:0},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 14.6, pathId:2},
				{duration: 14.7, pathId:0},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 14.3, pathId:3},
				{duration: 15.9, pathId:0},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 15.3, pathId:2},
				{duration: 15.2, pathId:0},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 14.7, pathId:3},
				{duration: 15.7, pathId:2},
				{duration: 15.5, pathId:0},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 15.9, pathId:2},
				{duration: 16.2, pathId:0},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 14.8, pathId:2},
				{duration: 15.3, pathId:0},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 16.5, pathId:2},
				{duration: 16.7, pathId:0},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 15.7, pathId:2},
				{duration: 15.6, pathId:0},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 16.6, pathId:2},
				{duration: 16.5, pathId:0},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 15.5, pathId:4},
				{duration: 21.6, pathId:1},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 16.1, pathId:4},
				{duration: 22.0, pathId:1},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 15.7, pathId:3},
				{duration: 17.0, pathId:0},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 16.0, pathId:3},
				{duration: 17.1, pathId:0},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 16.6, pathId:2},
				{duration: 16.4, pathId:0},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 15.7, pathId:3},
				{duration: 17.0, pathId:0},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 15.6, pathId:3},
				{duration: 17.1, pathId:0},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 16.1, pathId:2},
				{duration: 16.1, pathId:0},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 16.5, pathId:2},
				{duration: 16.3, pathId:0},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 16.2, pathId:2},
				{duration: 15.9, pathId:0},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 15.7, pathId:5},
				{duration: 17.2, pathId:0},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 15.5, pathId:2},
				{duration: 15.7, pathId:0},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 15.5, pathId:2},
				{duration: 15.4, pathId:0},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 15.7, pathId:2},
				{duration: 15.4, pathId:0},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 15.9, pathId:2},
				{duration: 15.7, pathId:0},
				{duration: 21.7, pathId:1},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 15.5, pathId:2},
				{duration: 15.5, pathId:0},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 16.1, pathId:2},
				{duration: 16.3, pathId:0},
				{duration: 21.6, pathId:6},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 15.8, pathId:2},
				{duration: 16.2, pathId:0},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 14.7, pathId:5},
				{duration: 16.9, pathId:0},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 15.6, pathId:2},
				{duration: 15.9, pathId:0},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 15.9, pathId:2},
				{duration: 16.0, pathId:0},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 15.2, pathId:2},
				{duration: 16.1, pathId:0},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 16.4, pathId:2},
				{duration: 16.2, pathId:0},
				{duration: 21.4, pathId:1},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 14.7, pathId:2},
				{duration: 14.6, pathId:0},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 14.8, pathId:2},
				{duration: 14.7, pathId:0},
				{duration: 21.3, pathId:1},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 14.6, pathId:5},
				{duration: 16.1, pathId:0},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 15.3, pathId:2},
				{duration: 16.2, pathId:0},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 15.2, pathId:2},
				{duration: 16.6, pathId:0},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 15.7, pathId:2},
				{duration: 14.3, pathId:5},
				{duration: 16.1, pathId:0},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 15.2, pathId:2},
				{duration: 15.4, pathId:0},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 14.6, pathId:2},
				{duration: 14.6, pathId:0},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 13.8, pathId:2},
				{duration: 14.4, pathId:0},
				{duration: 23.1, pathId:1},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 13.8, pathId:2},
				{duration: 14.3, pathId:0},
				{duration: 23.6, pathId:1},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 14.3, pathId:2},
				{duration: 14.2, pathId:0},
				{duration: 22.5, pathId:1},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 14.2, pathId:2},
				{duration: 14.9, pathId:0},
				{duration: 21.3, pathId:1},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 13.9, pathId:2},
				{duration: 14.1, pathId:0},
				{duration: 21.7, pathId:1},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 14.2, pathId:2},
				{duration: 14.4, pathId:0},
				{duration: 21.0, pathId:1},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 14.1, pathId:2},
				{duration: 14.4, pathId:0},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 14.2, pathId:2},
				{duration: 14.3, pathId:0},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 14.0, pathId:2},
				{duration: 14.1, pathId:0},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 13.5, pathId:2},
				{duration: 13.8, pathId:0},
				{duration: 20.1, pathId:1},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 13.8, pathId:2},
				{duration: 13.8, pathId:0},
				{duration: 20.3, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 14.2, pathId: 0},
				{duration: 16.6, pathId: 1},
				{duration: 14.1, pathId: 2},
				{duration: 15.3, pathId: 3},
				{duration: 15.8, pathId: 4},
				{duration: 14.8, pathId: 5},
				{duration: 21.6, pathId: 6},
			]
		}
	];

	return {
		O: 'D',
		D: 'C',
		minDuration: 12.7,
		maxDuration: 23.6,
		paths: paths,
		data: data
	}
};