//date: 011817
function getObj() {
	var paths = [
		{
			desc: 'Arrow Hwy, Live Oak Ave and S California Ave',
			len: 10795,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1068188, lng:-117.9628459},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.116623, lng:-118.0004605},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Live Oak Ave and S California Ave',
			len: 9408,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.116623, lng:-118.0004605},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'S California Ave',
			len: 12107,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1093836, lng:-117.9819171},
				{lat:34.0944124, lng:-117.9884429},
				{lat:34.0933901, lng:-117.9903744},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0909225, lng:-118.0143998},
				{lat:34.1110459, lng:-118.0045958},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.116623, lng:-118.0004605},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'S California Ave',
			len: 12912,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0909225, lng:-118.0143998},
				{lat:34.1110459, lng:-118.0045958},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.116623, lng:-118.0004605},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'S California Ave',
			len: 10193,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1131346, lng:-117.9909569},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.116623, lng:-118.0004605},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Live Oak Ave and S California Ave',
			len: 9639,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.116623, lng:-118.0004605},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-605 N',
			len: 10508,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1354371, lng:-117.9782021},
				{lat:34.1357256, lng:-117.9816735},
				{lat:34.1359108, lng:-117.9840014},
				{lat:34.1359223, lng:-117.9863289},
				{lat:34.146875, lng:-117.986292},
				{lat:34.1468739, lng:-117.990748},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'S California Ave',
			len: 9261,
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
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'S California Ave',
			len: 12906,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.0919566, lng:-117.9922532},
				{lat:34.0909225, lng:-118.0143998},
				{lat:34.1110459, lng:-118.0045958},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.116623, lng:-118.0004605},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-605 N',
			len: 11783,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1068188, lng:-117.9628459},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1397107, lng:-117.9555544},
				{lat:34.1395683, lng:-117.9862824},
				{lat:34.146875, lng:-117.986292},
				{lat:34.1468739, lng:-117.990748},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-605 N and Historic Rte 66 W/Huntington Dr',
			len: 11692,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1068188, lng:-117.9628459},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1397107, lng:-117.9555544},
				{lat:34.140612, lng:-117.990782},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-605 N and Historic Rte 66 W/Huntington Dr',
			len: 11175,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1397107, lng:-117.9555544},
				{lat:34.1395683, lng:-117.9862824},
				{lat:34.146875, lng:-117.986292},
				{lat:34.1468739, lng:-117.990748},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-605 N and Historic Rte 66 W/Huntington Dr',
			len: 11053,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1397107, lng:-117.9555544},
				{lat:34.1395683, lng:-117.9862824},
				{lat:34.146875, lng:-117.986292},
				{lat:34.1468739, lng:-117.990748},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Live Oak Ave',
			len: 11242,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1068188, lng:-117.9628459},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1354371, lng:-117.9782021},
				{lat:34.1357256, lng:-117.9816735},
				{lat:34.1359108, lng:-117.9840014},
				{lat:34.1358896, lng:-117.9907824},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Live Oak Ave and S California Ave',
			len: 9645,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1083223, lng:-117.9693138},
				{lat:34.1068337, lng:-117.9745213},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.116623, lng:-118.0004605},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'S California Ave',
			len: 9869,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1068188, lng:-117.9628459},
				{lat:34.1142771, lng:-117.9828281},
				{lat:34.1182721, lng:-117.984304},
				{lat:34.121367, lng:-117.985125},
				{lat:34.122121, lng:-117.990543},
				{lat:34.12089, lng:-117.9910227},
				{lat:34.1227072, lng:-117.9976011},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-605 N',
			len: 10512,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1356765, lng:-117.9649575},
				{lat:34.1354371, lng:-117.9782021},
				{lat:34.1357256, lng:-117.9816735},
				{lat:34.1359108, lng:-117.9840014},
				{lat:34.1358896, lng:-117.9907824},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Mountain Ave',
			len: 8736,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1142771, lng:-117.9828281},
				{lat:34.1182721, lng:-117.984304},
				{lat:34.121367, lng:-117.985125},
				{lat:34.122121, lng:-117.990543},
				{lat:34.146875, lng:-117.986292},
				{lat:34.1468739, lng:-117.990748},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-605 N',
			len: 11050,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1150902, lng:-117.976297},
				{lat:34.1305408, lng:-117.9600071},
				{lat:34.1397107, lng:-117.9555544},
				{lat:34.1397474, lng:-117.9666173},
				{lat:34.1433279, lng:-117.966597},
				{lat:34.1432115, lng:-117.9907566},
				{lat:34.1470734, lng:-117.99075},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'S California Ave',
			len: 9139,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.1067384, lng:-117.9746258},
				{lat:34.1100026, lng:-117.9666477},
				{lat:34.1142771, lng:-117.9828281},
				{lat:34.1182721, lng:-117.984304},
				{lat:34.121367, lng:-117.985125},
				{lat:34.122121, lng:-117.990543},
				{lat:34.12089, lng:-117.9910227},
				{lat:34.1227072, lng:-117.9976011},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'Live Oak Ave and S California Ave',
			len: 9402,
			pts: [
				{lat:34.1111819, lng:-117.9869435},
				{lat:34.106643, lng:-117.969297},
				{lat:34.1121136, lng:-117.9979115},
				{lat:34.1136333, lng:-118.0030874},
				{lat:34.11562079999999, lng:-118.0017458},
				{lat:34.116623, lng:-118.0004605},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
	];

	var data = [
		{
			time: '05:00 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '05:02 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '05:04 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '05:06 AM',
			routes: [
				{duration: 12.2, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '05:08 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '05:10 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '05:12 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '05:14 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '05:16 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '05:18 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '05:20 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '05:22 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '05:24 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '05:26 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '05:28 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '05:30 AM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 15.7, pathId:1},
			]
		},
		{
			time: '05:32 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '05:34 AM',
			routes: [
				{duration: 12.4, pathId:0},
				{duration: 15.7, pathId:1},
			]
		},
		{
			time: '05:36 AM',
			routes: [
				{duration: 12.5, pathId:0},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '05:38 AM',
			routes: [
				{duration: 12.6, pathId:0},
				{duration: 15.8, pathId:1},
			]
		},
		{
			time: '05:40 AM',
			routes: [
				{duration: 12.3, pathId:0},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '05:42 AM',
			routes: [
				{duration: 13.2, pathId:0},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '05:44 AM',
			routes: [
				{duration: 13.3, pathId:0},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '05:46 AM',
			routes: [
				{duration: 13.3, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '05:48 AM',
			routes: [
				{duration: 13.4, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '05:50 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '05:52 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 15.9, pathId:1},
			]
		},
		{
			time: '05:54 AM',
			routes: [
				{duration: 13.5, pathId:0},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '05:56 AM',
			routes: [
				{duration: 14.0, pathId:0},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '05:58 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '06:00 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '06:02 AM',
			routes: [
				{duration: 13.9, pathId:0},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:04 AM',
			routes: [
				{duration: 13.6, pathId:0},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:06 AM',
			routes: [
				{duration: 13.8, pathId:0},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:08 AM',
			routes: [
				{duration: 14.1, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '06:10 AM',
			routes: [
				{duration: 14.2, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '06:12 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '06:14 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '06:16 AM',
			routes: [
				{duration: 15.4, pathId:0},
				{duration: 16.1, pathId:1},
			]
		},
		{
			time: '06:18 AM',
			routes: [
				{duration: 16.4, pathId:2},
				{duration: 15.2, pathId:3},
				{duration: 16.2, pathId:1},
			]
		},
		{
			time: '06:20 AM',
			routes: [
				{duration: 15.0, pathId:3},
				{duration: 16.0, pathId:1},
			]
		},
		{
			time: '06:22 AM',
			routes: [
				{duration: 15.7, pathId:4},
				{duration: 16.2, pathId:1},
				{duration: 15.8, pathId:5},
			]
		},
		{
			time: '06:24 AM',
			routes: [
				{duration: 15.4, pathId:6},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '06:26 AM',
			routes: [
				{duration: 15.5, pathId:6},
				{duration: 16.3, pathId:1},
			]
		},
		{
			time: '06:28 AM',
			routes: [
				{duration: 15.7, pathId:6},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:30 AM',
			routes: [
				{duration: 15.4, pathId:7},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:32 AM',
			routes: [
				{duration: 15.1, pathId:7},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:34 AM',
			routes: [
				{duration: 15.2, pathId:7},
				{duration: 16.4, pathId:1},
			]
		},
		{
			time: '06:36 AM',
			routes: [
				{duration: 15.4, pathId:7},
				{duration: 16.6, pathId:1},
			]
		},
		{
			time: '06:38 AM',
			routes: [
				{duration: 14.7, pathId:5},
				{duration: 17.3, pathId:1},
			]
		},
		{
			time: '06:40 AM',
			routes: [
				{duration: 15.0, pathId:5},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '06:42 AM',
			routes: [
				{duration: 15.1, pathId:7},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '06:44 AM',
			routes: [
				{duration: 15.4, pathId:2},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '06:46 AM',
			routes: [
				{duration: 15.3, pathId:7},
				{duration: 17.1, pathId:1},
			]
		},
		{
			time: '06:48 AM',
			routes: [
				{duration: 15.2, pathId:7},
				{duration: 17.6, pathId:1},
			]
		},
		{
			time: '06:50 AM',
			routes: [
				{duration: 15.6, pathId:5},
				{duration: 17.2, pathId:1},
			]
		},
		{
			time: '06:52 AM',
			routes: [
				{duration: 16.9, pathId:2},
				{duration: 17.3, pathId:1},
			]
		},
		{
			time: '06:54 AM',
			routes: [
				{duration: 16.1, pathId:7},
				{duration: 17.9, pathId:1},
			]
		},
		{
			time: '06:56 AM',
			routes: [
				{duration: 15.9, pathId:8},
				{duration: 17.3, pathId:1},
			]
		},
		{
			time: '06:58 AM',
			routes: [
				{duration: 16.4, pathId:7},
				{duration: 17.4, pathId:1},
			]
		},
		{
			time: '07:00 AM',
			routes: [
				{duration: 17.3, pathId:1},
			]
		},
		{
			time: '07:02 AM',
			routes: [
				{duration: 16.6, pathId:7},
				{duration: 18.3, pathId:1},
			]
		},
		{
			time: '07:04 AM',
			routes: [
				{duration: 16.9, pathId:8},
				{duration: 18.8, pathId:1},
				{duration: 16.8, pathId:7},
			]
		},
		{
			time: '07:06 AM',
			routes: [
				{duration: 16.9, pathId:4},
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '07:08 AM',
			routes: [
				{duration: 17.1, pathId:4},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '07:10 AM',
			routes: [
				{duration: 16.9, pathId:7},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '07:12 AM',
			routes: [
				{duration: 18.0, pathId:9},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '07:14 AM',
			routes: [
				{duration: 18.5, pathId:10},
				{duration: 20.0, pathId:1},
			]
		},
		{
			time: '07:16 AM',
			routes: [
				{duration: 17.9, pathId:11},
				{duration: 19.5, pathId:1},
			]
		},
		{
			time: '07:18 AM',
			routes: [
				{duration: 16.6, pathId:11},
				{duration: 21.3, pathId:1},
			]
		},
		{
			time: '07:20 AM',
			routes: [
				{duration: 15.8, pathId:11},
				{duration: 23.0, pathId:1},
			]
		},
		{
			time: '07:22 AM',
			routes: [
				{duration: 17.4, pathId:11},
				{duration: 22.6, pathId:1},
			]
		},
		{
			time: '07:24 AM',
			routes: [
				{duration: 16.8, pathId:11},
				{duration: 16.8, pathId:0},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '07:26 AM',
			routes: [
				{duration: 17.5, pathId:0},
				{duration: 22.8, pathId:1},
			]
		},
		{
			time: '07:28 AM',
			routes: [
				{duration: 17.1, pathId:9},
				{duration: 22.1, pathId:12},
			]
		},
		{
			time: '07:30 AM',
			routes: [
				{duration: 16.3, pathId:11},
				{duration: 23.0, pathId:12},
			]
		},
		{
			time: '07:32 AM',
			routes: [
				{duration: 17.1, pathId:10},
				{duration: 22.4, pathId:12},
			]
		},
		{
			time: '07:34 AM',
			routes: [
				{duration: 18.3, pathId:10},
				{duration: 22.9, pathId:12},
			]
		},
		{
			time: '07:36 AM',
			routes: [
				{duration: 17.6, pathId:13},
				{duration: 22.8, pathId:12},
			]
		},
		{
			time: '07:38 AM',
			routes: [
				{duration: 17.6, pathId:13},
				{duration: 23.4, pathId:1},
			]
		},
		{
			time: '07:40 AM',
			routes: [
				{duration: 17.9, pathId:13},
				{duration: 23.9, pathId:12},
			]
		},
		{
			time: '07:42 AM',
			routes: [
				{duration: 17.1, pathId:11},
				{duration: 23.0, pathId:12},
			]
		},
		{
			time: '07:44 AM',
			routes: [
				{duration: 19.3, pathId:11},
				{duration: 21.0, pathId:12},
			]
		},
		{
			time: '07:46 AM',
			routes: [
				{duration: 17.4, pathId:14},
				{duration: 21.1, pathId:12},
			]
		},
		{
			time: '07:48 AM',
			routes: [
				{duration: 17.1, pathId:14},
				{duration: 20.1, pathId:12},
			]
		},
		{
			time: '07:50 AM',
			routes: [
				{duration: 17.9, pathId:13},
				{duration: 21.4, pathId:12},
			]
		},
		{
			time: '07:52 AM',
			routes: [
				{duration: 17.3, pathId:15},
				{duration: 24.7, pathId:12},
			]
		},
		{
			time: '07:54 AM',
			routes: [
				{duration: 17.9, pathId:15},
				{duration: 21.2, pathId:12},
			]
		},
		{
			time: '07:56 AM',
			routes: [
				{duration: 17.9, pathId:15},
				{duration: 22.0, pathId:12},
			]
		},
		{
			time: '07:58 AM',
			routes: [
				{duration: 17.2, pathId:11},
				{duration: 16.4, pathId:13},
				{duration: 21.6, pathId:12},
			]
		},
		{
			time: '08:00 AM',
			routes: [
				{duration: 16.3, pathId:11},
				{duration: 22.1, pathId:12},
			]
		},
		{
			time: '08:02 AM',
			routes: [
				{duration: 17.0, pathId:11},
				{duration: 22.2, pathId:12},
			]
		},
		{
			time: '08:04 AM',
			routes: [
				{duration: 15.5, pathId:11},
				{duration: 20.8, pathId:12},
			]
		},
		{
			time: '08:06 AM',
			routes: [
				{duration: 16.4, pathId:11},
				{duration: 19.8, pathId:12},
			]
		},
		{
			time: '08:08 AM',
			routes: [
				{duration: 16.4, pathId:16},
				{duration: 20.1, pathId:12},
			]
		},
		{
			time: '08:10 AM',
			routes: [
				{duration: 15.8, pathId:11},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '08:12 AM',
			routes: [
				{duration: 16.1, pathId:10},
				{duration: 15.5, pathId:5},
				{duration: 20.7, pathId:12},
			]
		},
		{
			time: '08:14 AM',
			routes: [
				{duration: 14.9, pathId:11},
				{duration: 20.2, pathId:12},
			]
		},
		{
			time: '08:16 AM',
			routes: [
				{duration: 16.3, pathId:10},
				{duration: 16.7, pathId:11},
				{duration: 20.4, pathId:12},
			]
		},
		{
			time: '08:18 AM',
			routes: [
				{duration: 17.1, pathId:2},
				{duration: 21.1, pathId:17},
			]
		},
		{
			time: '08:20 AM',
			routes: [
				{duration: 17.5, pathId:5},
				{duration: 22.0, pathId:17},
			]
		},
		{
			time: '08:22 AM',
			routes: [
				{duration: 16.5, pathId:5},
				{duration: 21.8, pathId:17},
			]
		},
		{
			time: '08:24 AM',
			routes: [
				{duration: 16.1, pathId:5},
				{duration: 20.9, pathId:17},
			]
		},
		{
			time: '08:26 AM',
			routes: [
				{duration: 17.0, pathId:18},
				{duration: 16.7, pathId:5},
				{duration: 22.0, pathId:17},
			]
		},
		{
			time: '08:28 AM',
			routes: [
				{duration: 16.2, pathId:5},
				{duration: 21.2, pathId:17},
			]
		},
		{
			time: '08:30 AM',
			routes: [
				{duration: 16.1, pathId:0},
				{duration: 20.8, pathId:17},
			]
		},
		{
			time: '08:32 AM',
			routes: [
				{duration: 16.0, pathId:0},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '08:34 AM',
			routes: [
				{duration: 15.2, pathId:5},
				{duration: 19.4, pathId:1},
			]
		},
		{
			time: '08:36 AM',
			routes: [
				{duration: 15.5, pathId:5},
				{duration: 18.7, pathId:1},
			]
		},
		{
			time: '08:38 AM',
			routes: [
				{duration: 15.2, pathId:0},
				{duration: 19.8, pathId:1},
			]
		},
		{
			time: '08:40 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 21.0, pathId:1},
			]
		},
		{
			time: '08:42 AM',
			routes: [
				{duration: 14.7, pathId:0},
				{duration: 21.1, pathId:1},
			]
		},
		{
			time: '08:44 AM',
			routes: [
				{duration: 14.8, pathId:19},
				{duration: 20.7, pathId:1},
			]
		},
		{
			time: '08:46 AM',
			routes: [
				{duration: 14.4, pathId:20},
				{duration: 20.5, pathId:1},
			]
		},
		{
			time: '08:48 AM',
			routes: [
				{duration: 15.1, pathId:0},
				{duration: 19.2, pathId:1},
			]
		},
		{
			time: '08:50 AM',
			routes: [
				{duration: 14.5, pathId:20},
				{duration: 20.3, pathId:1},
			]
		},
		{
			time: '08:52 AM',
			routes: [
				{duration: 14.8, pathId:0},
				{duration: 20.2, pathId:1},
			]
		},
		{
			time: '08:54 AM',
			routes: [
				{duration: 13.9, pathId:19},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: '08:56 AM',
			routes: [
				{duration: 14.3, pathId:19},
				{duration: 19.0, pathId:1},
			]
		},
		{
			time: '08:58 AM',
			routes: [
				{duration: 14.5, pathId:0},
				{duration: 19.1, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 13.6, pathId: 0},
				{duration: 17.7, pathId: 1},
				{duration: 16.4, pathId: 2},
				{duration: 15.1, pathId: 3},
				{duration: 16.6, pathId: 4},
				{duration: 15.9, pathId: 5},
				{duration: 15.5, pathId: 6},
				{duration: 15.8, pathId: 7},
				{duration: 16.4, pathId: 8},
				{duration: 17.6, pathId: 9},
				{duration: 17.3, pathId: 10},
				{duration: 16.7, pathId: 11},
				{duration: 21.7, pathId: 12},
				{duration: 17.5, pathId: 13},
				{duration: 17.2, pathId: 14},
				{duration: 17.7, pathId: 15},
				{duration: 16.4, pathId: 16},
				{duration: 21.4, pathId: 17},
				{duration: 17.0, pathId: 18},
				{duration: 14.3, pathId: 19},
				{duration: 14.4, pathId: 20},
			]
		}
	];

	return {
		O: 'E',
		D: 'D',
		minDuration: 12.2,
		maxDuration: 24.7,
		paths: paths,
		data: data
	}
};