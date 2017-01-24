//date: 011817
function getObj() {
	var paths = [
		{
			desc: 'E Foothill Blvd',
			len: 13915,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421126, lng:-118.0986996},
				{lat:34.1460503, lng:-118.0986539},
				{lat:34.1462357, lng:-118.0734848},
				{lat:34.1501758, lng:-118.0733802},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'San Pasqual St and Colorado St',
			len: 14722,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1413443, lng:-118.0732761},
				{lat:34.14201500000001, lng:-118.0676434},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'W Foothill Blvd',
			len: 13795,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421126, lng:-118.0986996},
				{lat:34.1460503, lng:-118.0986539},
				{lat:34.1478753, lng:-118.0678707},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and Colorado St',
			len: 14598,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1413872, lng:-118.0734182},
				{lat:34.14201500000001, lng:-118.0676434},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Colorado Blvd',
			len: 14323,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1420455, lng:-118.1061739},
				{lat:34.1460261, lng:-118.106217},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and W Foothill Blvd',
			len: 13809,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1478753, lng:-118.0678707},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd, E Colorado Blvd and E Foothill Blvd',
			len: 14319,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455063, lng:-118.0316305},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Colorado Blvd',
			len: 14320,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.146045, lng:-118.1015834},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'W Foothill Blvd',
			len: 13892,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421126, lng:-118.0986996},
				{lat:34.1460503, lng:-118.0986539},
				{lat:34.1462357, lng:-118.0734848},
				{lat:34.1477055, lng:-118.0733607},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 14527,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1419678, lng:-118.1131253},
				{lat:34.1518281, lng:-118.113081},
				{lat:34.1518598, lng:-118.1128484},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Colorado Blvd/Historic Rte 66 E and W Foothill Blvd',
			len: 14080,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421126, lng:-118.0986996},
				{lat:34.1460503, lng:-118.0986539},
				{lat:34.1482864, lng:-118.0498266},
				{lat:34.1472917, lng:-118.0498344},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and E Colorado Blvd',
			len: 14323,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and W Foothill Blvd',
			len: 14085,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1413872, lng:-118.0734182},
				{lat:34.14201500000001, lng:-118.0676434},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Foothill Blvd',
			len: 13799,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1498114, lng:-118.1001207},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and W Foothill Blvd',
			len: 14095,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1482864, lng:-118.0498266},
				{lat:34.1472917, lng:-118.0498344},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and E Colorado Blvd',
			len: 14324,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455786, lng:-118.0253326},
				{lat:34.1510564, lng:-118.0254164},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'San Pasqual St and W Foothill Blvd',
			len: 14209,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1413443, lng:-118.0732761},
				{lat:34.14201500000001, lng:-118.0676434},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and Colorado St',
			len: 13837,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.145984, lng:-117.994957},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd, E Colorado Blvd and Colorado St',
			len: 13714,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.145984, lng:-117.994957},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and Colorado St',
			len: 14446,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and Colorado St',
			len: 13989,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1413872, lng:-118.0734182},
				{lat:34.14201500000001, lng:-118.0676434},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.145984, lng:-117.994957},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Colorado Blvd and Colorado St',
			len: 13699,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421126, lng:-118.0986996},
				{lat:34.1460503, lng:-118.0986539},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.145984, lng:-117.994957},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'San Pasqual St and Colorado St',
			len: 14773,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Colorado Blvd and E Foothill Blvd',
			len: 14304,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421126, lng:-118.0986996},
				{lat:34.1460503, lng:-118.0986539},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455063, lng:-118.0316305},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Colorado Blvd',
			len: 14308,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421126, lng:-118.0986996},
				{lat:34.1460503, lng:-118.0986539},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 14722,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1413872, lng:-118.0734182},
				{lat:34.14201500000001, lng:-118.0676434},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.14296119999999, lng:-118.0648344},
				{lat:34.1481766, lng:-118.065802},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'San Pasqual St',
			len: 14846,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1413443, lng:-118.0732761},
				{lat:34.14201500000001, lng:-118.0676434},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.14296119999999, lng:-118.0648344},
				{lat:34.1481766, lng:-118.065802},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.1455538, lng:-118.028449},
				{lat:34.1510036, lng:-118.0285631},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'San Pasqual St and Colorado St',
			len: 14164,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.145984, lng:-117.994957},
				{lat:34.1470599, lng:-117.994964},
				{lat:34.1470645, lng:-117.9921509},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'San Pasqual St and W Foothill Blvd',
			len: 14618,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1413443, lng:-118.0732761},
				{lat:34.14201500000001, lng:-118.0676434},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.14296119999999, lng:-118.0648344},
				{lat:34.1481766, lng:-118.065802},
				{lat:34.1482864, lng:-118.0498266},
				{lat:34.1472917, lng:-118.0498344},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 14535,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.151764, lng:-118.1213142},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
	];

	var data = [
		{
			time: '03:00 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 25.8, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 23.3, pathId:0},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 23.4, pathId:0},
				{duration: 25.1, pathId:1},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 23.4, pathId:0},
				{duration: 25.4, pathId:1},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 23.6, pathId:0},
				{duration: 25.2, pathId:1},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 24.1, pathId:0},
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 24.3, pathId:2},
				{duration: 25.7, pathId:1},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 24.5, pathId:0},
				{duration: 27.6, pathId:1},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 24.7, pathId:0},
				{duration: 27.9, pathId:1},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 25.0, pathId:0},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 24.9, pathId:0},
				{duration: 27.8, pathId:1},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 25.2, pathId:0},
				{duration: 27.3, pathId:3},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 26.4, pathId:0},
				{duration: 27.6, pathId:3},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 26.5, pathId:0},
				{duration: 27.5, pathId:3},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 27.7, pathId:1},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 26.3, pathId:4},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 26.7, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 27.5, pathId:1},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 27.0, pathId:1},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 26.5, pathId:4},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 26.1, pathId:4},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 25.8, pathId:4},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 25.9, pathId:1},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 25.8, pathId:4},
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 26.2, pathId:4},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 26.1, pathId:5},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 26.2, pathId:1},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 26.3, pathId:1},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 27.0, pathId:1},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 27.1, pathId:6},
				{duration: 27.7, pathId:1},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 26.5, pathId:6},
				{duration: 27.2, pathId:1},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 27.1, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 26.6, pathId:1},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 27.3, pathId:6},
				{duration: 27.3, pathId:7},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 28.1, pathId:6},
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 28.3, pathId:6},
				{duration: 29.7, pathId:1},
				{duration: 29.2, pathId:8},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 27.9, pathId:6},
				{duration: 27.2, pathId:7},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 29.1, pathId:1},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 27.8, pathId:1},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 29.0, pathId:1},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 29.7, pathId:9},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 28.8, pathId:1},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 29.5, pathId:1},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 29.5, pathId:1},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 29.3, pathId:10},
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 30.4, pathId:1},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 29.6, pathId:9},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 29.6, pathId:9},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 28.2, pathId:0},
				{duration: 28.9, pathId:11},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 28.5, pathId:9},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 28.9, pathId:12},
				{duration: 27.7, pathId:13},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 29.6, pathId:14},
				{duration: 30.7, pathId:1},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 28.6, pathId:10},
				{duration: 29.6, pathId:15},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 28.2, pathId:10},
				{duration: 29.1, pathId:16},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 28.6, pathId:10},
				{duration: 29.3, pathId:17},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 28.9, pathId:10},
				{duration: 29.6, pathId:15},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 29.2, pathId:10},
				{duration: 29.9, pathId:7},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 28.6, pathId:10},
				{duration: 28.8, pathId:17},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 28.7, pathId:10},
				{duration: 29.6, pathId:17},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 28.7, pathId:18},
				{duration: 29.6, pathId:17},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 30.0, pathId:10},
				{duration: 32.0, pathId:1},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 31.1, pathId:14},
				{duration: 30.7, pathId:19},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 30.3, pathId:14},
				{duration: 29.7, pathId:19},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 30.8, pathId:14},
				{duration: 31.3, pathId:1},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 31.0, pathId:8},
				{duration: 30.5, pathId:19},
				{duration: 30.2, pathId:20},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 30.6, pathId:6},
				{duration: 29.7, pathId:7},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 29.6, pathId:21},
				{duration: 29.4, pathId:7},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 29.1, pathId:21},
				{duration: 29.0, pathId:7},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 30.3, pathId:6},
				{duration: 29.3, pathId:17},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 29.2, pathId:10},
				{duration: 29.4, pathId:17},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 30.2, pathId:22},
				{duration: 29.5, pathId:16},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 29.8, pathId:10},
				{duration: 30.1, pathId:15},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 31.3, pathId:10},
				{duration: 30.3, pathId:15},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 31.6, pathId:23},
				{duration: 30.2, pathId:15},
				{duration: 31.2, pathId:10},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 30.5, pathId:24},
				{duration: 30.1, pathId:15},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 30.9, pathId:10},
				{duration: 32.2, pathId:1},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 32.2, pathId:10},
				{duration: 30.0, pathId:15},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 30.2, pathId:24},
				{duration: 29.9, pathId:15},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 30.8, pathId:24},
				{duration: 29.8, pathId:15},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 30.8, pathId:10},
				{duration: 30.0, pathId:15},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 31.2, pathId:9},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 31.1, pathId:1},
				{duration: 30.8, pathId:9},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 30.8, pathId:1},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 29.2, pathId:10},
				{duration: 30.3, pathId:1},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 29.2, pathId:1},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 30.1, pathId:1},
				{duration: 29.6, pathId:25},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 29.9, pathId:1},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 29.2, pathId:6},
				{duration: 31.8, pathId:1},
				{duration: 29.5, pathId:26},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 28.7, pathId:1},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 28.6, pathId:1},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 27.8, pathId:1},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 27.9, pathId:1},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 27.2, pathId:1},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 27.6, pathId:1},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 27.3, pathId:6},
				{duration: 27.9, pathId:1},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 27.2, pathId:1},
				{duration: 26.8, pathId:27},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 26.9, pathId:5},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 27.1, pathId:28},
				{duration: 28.4, pathId:1},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 27.8, pathId:10},
				{duration: 28.5, pathId:1},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 26.9, pathId:6},
				{duration: 27.8, pathId:1},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 26.5, pathId:1},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 27.4, pathId:1},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 27.4, pathId:1},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 27.7, pathId:1},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 27.1, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 26.3, pathId:4},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 26.5, pathId:29},
				{duration: 26.9, pathId:1},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 26.1, pathId:1},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 26.4, pathId:1},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 25.0, pathId:1},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 25.3, pathId:1},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 25.6, pathId:1},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 24.9, pathId:1},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 24.8, pathId: 0},
				{duration: 27.8, pathId: 1},
				{duration: 24.3, pathId: 2},
				{duration: 27.5, pathId: 3},
				{duration: 26.1, pathId: 4},
				{duration: 26.5, pathId: 5},
				{duration: 28.1, pathId: 6},
				{duration: 28.8, pathId: 7},
				{duration: 30.1, pathId: 8},
				{duration: 29.9, pathId: 9},
				{duration: 29.6, pathId: 10},
				{duration: 28.9, pathId: 11},
				{duration: 28.9, pathId: 12},
				{duration: 27.7, pathId: 13},
				{duration: 30.4, pathId: 14},
				{duration: 30.0, pathId: 15},
				{duration: 29.3, pathId: 16},
				{duration: 29.3, pathId: 17},
				{duration: 28.7, pathId: 18},
				{duration: 30.3, pathId: 19},
				{duration: 30.2, pathId: 20},
				{duration: 29.4, pathId: 21},
				{duration: 30.2, pathId: 22},
				{duration: 31.6, pathId: 23},
				{duration: 30.5, pathId: 24},
				{duration: 29.6, pathId: 25},
				{duration: 29.5, pathId: 26},
				{duration: 26.8, pathId: 27},
				{duration: 27.1, pathId: 28},
				{duration: 26.5, pathId: 29},
			]
		}
	];

	return {
		O: 'B',
		D: 'D',
		minDuration: 23.3,
		maxDuration: 32.2,
		paths: paths,
		data: data
	}
};