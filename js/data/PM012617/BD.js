//date: 012617
function getObj() {
	var paths = [
		{
			desc: 'E Colorado Blvd/Historic Rte 66 E and W Foothill Blvd',
			len: 14092,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.146045, lng:-118.1015834},
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
			desc: 'E Colorado Blvd and Colorado St',
			len: 13705,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.146045, lng:-118.1015834},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.145984, lng:-117.994957},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
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
			desc: 'E Del Mar Blvd and E Foothill Blvd',
			len: 13924,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1501758, lng:-118.0733802},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'San Pasqual St and Colorado St',
			len: 14231,
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
				{lat:34.145984, lng:-117.994957},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
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
			desc: 'E Colorado Blvd and Colorado St',
			len: 13708,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1420455, lng:-118.1061739},
				{lat:34.1460261, lng:-118.106217},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.145984, lng:-117.994957},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and E Foothill Blvd',
			len: 14408,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1517057, lng:-118.0956886},
				{lat:34.1517051, lng:-118.0935153},
				{lat:34.1480961, lng:-118.0345993},
				{lat:34.1474459, lng:-118.031678},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and Colorado St',
			len: 13703,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1462365, lng:-118.0733361},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.145984, lng:-117.994957},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd, E Colorado Blvd and Colorado St',
			len: 13708,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.145984, lng:-117.994957},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
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
			desc: 'W Foothill Blvd',
			len: 14228,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1517057, lng:-118.0956886},
				{lat:34.1517051, lng:-118.0935153},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'San Pasqual St and W Foothill Blvd',
			len: 14137,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429016, lng:-118.0704624},
				{lat:34.1463259, lng:-118.0704785},
				{lat:34.1478753, lng:-118.0678707},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and E Foothill Blvd',
			len: 13929,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1462357, lng:-118.0734848},
				{lat:34.1501758, lng:-118.0733802},
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
			desc: 'E Del Mar Blvd and Colorado St',
			len: 13983,
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
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
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
			desc: 'San Pasqual St and Colorado St',
			len: 14107,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1413443, lng:-118.0732761},
				{lat:34.14201500000001, lng:-118.0676434},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.145984, lng:-117.994957},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Colorado Blvd and W Foothill Blvd',
			len: 14094,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1420455, lng:-118.1061739},
				{lat:34.1460261, lng:-118.106217},
				{lat:34.1482864, lng:-118.0498266},
				{lat:34.1472917, lng:-118.0498344},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Foothill Blvd',
			len: 13926,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.146045, lng:-118.1015834},
				{lat:34.1462357, lng:-118.0734848},
				{lat:34.1501758, lng:-118.0733802},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'W Foothill Blvd',
			len: 13806,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.146045, lng:-118.1015834},
				{lat:34.1478753, lng:-118.0678707},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'San Pasqual St and W Foothill Blvd',
			len: 14259,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.150253, lng:-118.0678012},
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
			desc: 'E Del Mar Blvd and W Foothill Blvd',
			len: 13932,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and W Foothill Blvd',
			len: 13902,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1477055, lng:-118.0733607},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'San Pasqual St and Colorado St',
			len: 14158,
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
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
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
			desc: 'E Del Mar Blvd and W Foothill Blvd',
			len: 14218,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.147923, lng:-118.0677493},
				{lat:34.1482864, lng:-118.0498266},
				{lat:34.1472917, lng:-118.0498344},
				{lat:34.1505388, lng:-118.0501817},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Colorado Blvd and Colorado St',
			len: 13693,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421126, lng:-118.0986996},
				{lat:34.1460503, lng:-118.0986539},
				{lat:34.1456719, lng:-118.0418325},
				{lat:34.145984, lng:-117.994957},
				{lat:34.148148, lng:-117.994966},
				{lat:34.148191, lng:-117.992168},
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
			desc: 'E California Blvd and W Foothill Blvd',
			len: 14912,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Colorado Blvd and W Foothill Blvd',
			len: 13809,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1420455, lng:-118.1061739},
				{lat:34.1460261, lng:-118.106217},
				{lat:34.1478753, lng:-118.0678707},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'San Pasqual St and E Foothill Blvd',
			len: 14252,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1501758, lng:-118.0733802},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'W Foothill Blvd',
			len: 14909,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.150253, lng:-118.0678012},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'E Del Mar Blvd and W Foothill Blvd',
			len: 13850,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.14719110000001, lng:-118.0817092},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
				{lat:34.1505388, lng:-118.0501817},
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
			desc: 'San Pasqual St and E Foothill Blvd',
			len: 14515,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1501758, lng:-118.0733802},
				{lat:34.1508454, lng:-118.0364332},
				{lat:34.1498217, lng:-118.0368362},
				{lat:34.1498819, lng:-118.0327643},
				{lat:34.150156, lng:-118.0325994},
				{lat:34.1501462, lng:-118.0317334},
				{lat:34.1509279, lng:-118.0315969},
				{lat:34.1514583, lng:-117.9921597},
				{lat:34.148744, lng:-117.9921699},
			]
		},
		{
			desc: 'I-210 E and W Foothill Blvd',
			len: 14569,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1516532, lng:-118.1229664},
				{lat:34.1517659, lng:-118.1214744},
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
				{duration: 23.8, pathId:0},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 23.7, pathId:1},
				{duration: 26.8, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 24.5, pathId:0},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 24.0, pathId:0},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 25.2, pathId:0},
				{duration: 25.9, pathId:3},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 24.6, pathId:4},
				{duration: 26.3, pathId:2},
				{duration: 24.3, pathId:1},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 26.8, pathId:2},
				{duration: 25.4, pathId:0},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 26.8, pathId:2},
				{duration: 25.8, pathId:5},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 27.2, pathId:2},
				{duration: 26.4, pathId:5},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 26.2, pathId:5},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 26.3, pathId:2},
				{duration: 25.8, pathId:5},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 26.6, pathId:2},
				{duration: 26.8, pathId:6},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 27.6, pathId:2},
				{duration: 27.8, pathId:6},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 27.0, pathId:2},
				{duration: 27.1, pathId:6},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 27.1, pathId:2},
				{duration: 27.7, pathId:5},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 26.7, pathId:2},
				{duration: 26.9, pathId:6},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 26.4, pathId:2},
				{duration: 26.6, pathId:6},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 27.1, pathId:2},
				{duration: 27.4, pathId:7},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 26.4, pathId:2},
				{duration: 26.4, pathId:6},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 25.5, pathId:2},
				{duration: 25.7, pathId:6},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 25.8, pathId:2},
				{duration: 26.0, pathId:6},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 25.6, pathId:2},
				{duration: 25.7, pathId:8},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 26.4, pathId:2},
				{duration: 26.6, pathId:7},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 26.8, pathId:7},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 27.1, pathId:9},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 26.5, pathId:2},
				{duration: 26.9, pathId:7},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 26.3, pathId:2},
				{duration: 27.1, pathId:9},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 28.2, pathId:2},
				{duration: 28.8, pathId:6},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 27.1, pathId:2},
				{duration: 27.7, pathId:9},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 27.6, pathId:2},
				{duration: 27.6, pathId:9},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 27.3, pathId:7},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 28.2, pathId:9},
				{duration: 27.5, pathId:7},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 26.0, pathId:2},
				{duration: 26.4, pathId:7},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 27.7, pathId:2},
				{duration: 28.0, pathId:6},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 27.4, pathId:2},
				{duration: 27.4, pathId:7},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 27.7, pathId:10},
				{duration: 28.4, pathId:2},
				{duration: 28.1, pathId:7},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 26.9, pathId:2},
				{duration: 26.7, pathId:7},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 28.1, pathId:2},
				{duration: 28.6, pathId:6},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 28.9, pathId:10},
				{duration: 29.8, pathId:2},
				{duration: 29.6, pathId:7},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 30.1, pathId:10},
				{duration: 30.1, pathId:11},
				{duration: 31.8, pathId:7},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 28.8, pathId:2},
				{duration: 30.0, pathId:12},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 28.7, pathId:2},
				{duration: 29.1, pathId:13},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 30.4, pathId:2},
				{duration: 30.6, pathId:6},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 28.3, pathId:10},
				{duration: 29.5, pathId:2},
				{duration: 29.8, pathId:6},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 29.9, pathId:10},
				{duration: 31.8, pathId:2},
				{duration: 30.8, pathId:14},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 29.4, pathId:15},
				{duration: 30.5, pathId:2},
				{duration: 29.6, pathId:9},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 30.6, pathId:7},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 30.0, pathId:2},
				{duration: 30.2, pathId:6},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 30.3, pathId:2},
				{duration: 30.4, pathId:6},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 29.9, pathId:2},
				{duration: 29.7, pathId:16},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 30.4, pathId:2},
				{duration: 30.8, pathId:6},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 30.1, pathId:2},
				{duration: 30.4, pathId:6},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 29.2, pathId:2},
				{duration: 29.2, pathId:6},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 31.1, pathId:17},
				{duration: 31.5, pathId:2},
				{duration: 32.0, pathId:18},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 30.6, pathId:2},
				{duration: 32.2, pathId:8},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 30.0, pathId:2},
				{duration: 30.8, pathId:12},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 29.9, pathId:19},
				{duration: 29.7, pathId:11},
				{duration: 31.4, pathId:6},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 30.1, pathId:10},
				{duration: 29.9, pathId:20},
				{duration: 32.5, pathId:18},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 31.5, pathId:10},
				{duration: 30.9, pathId:20},
				{duration: 33.6, pathId:18},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 31.9, pathId:21},
				{duration: 33.6, pathId:2},
				{duration: 34.1, pathId:22},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 33.1, pathId:23},
				{duration: 32.6, pathId:24},
				{duration: 33.8, pathId:25},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 30.3, pathId:2},
				{duration: 31.5, pathId:22},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 30.0, pathId:19},
				{duration: 30.9, pathId:2},
				{duration: 31.0, pathId:6},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 30.1, pathId:19},
				{duration: 30.9, pathId:2},
				{duration: 31.1, pathId:6},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 32.5, pathId:19},
				{duration: 32.3, pathId:11},
				{duration: 34.0, pathId:6},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 31.9, pathId:10},
				{duration: 31.4, pathId:20},
				{duration: 33.4, pathId:18},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 30.9, pathId:19},
				{duration: 30.7, pathId:11},
				{duration: 32.9, pathId:26},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 32.8, pathId:2},
				{duration: 33.0, pathId:26},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 31.4, pathId:27},
				{duration: 31.6, pathId:28},
				{duration: 33.6, pathId:18},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 31.9, pathId:2},
				{duration: 32.4, pathId:29},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 31.6, pathId:12},
				{duration: 31.5, pathId:30},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 33.2, pathId:29},
				{duration: 32.9, pathId:30},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 31.2, pathId:31},
				{duration: 30.9, pathId:30},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 31.8, pathId:12},
				{duration: 31.5, pathId:30},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 33.2, pathId:9},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 33.1, pathId:17},
				{duration: 31.9, pathId:32},
				{duration: 35.6, pathId:9},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 32.9, pathId:33},
				{duration: 32.3, pathId:20},
				{duration: 35.0, pathId:34},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 32.0, pathId:35},
				{duration: 31.8, pathId:28},
				{duration: 33.4, pathId:36},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 32.1, pathId:17},
				{duration: 32.3, pathId:32},
				{duration: 33.5, pathId:37},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 32.9, pathId:17},
				{duration: 32.9, pathId:32},
				{duration: 34.2, pathId:37},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 31.9, pathId:15},
				{duration: 31.4, pathId:28},
				{duration: 34.4, pathId:9},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 31.0, pathId:15},
				{duration: 30.8, pathId:38},
				{duration: 33.0, pathId:9},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 32.5, pathId:15},
				{duration: 33.3, pathId:2},
				{duration: 33.6, pathId:9},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 33.0, pathId:39},
				{duration: 32.6, pathId:40},
				{duration: 33.9, pathId:12},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 31.4, pathId:15},
				{duration: 33.0, pathId:2},
				{duration: 32.8, pathId:37},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 31.3, pathId:15},
				{duration: 31.1, pathId:38},
				{duration: 33.2, pathId:41},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 30.1, pathId:15},
				{duration: 31.8, pathId:38},
				{duration: 33.1, pathId:9},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 30.9, pathId:15},
				{duration: 31.9, pathId:2},
				{duration: 32.1, pathId:9},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 31.5, pathId:15},
				{duration: 32.0, pathId:2},
				{duration: 32.4, pathId:6},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 31.0, pathId:15},
				{duration: 32.1, pathId:2},
				{duration: 30.9, pathId:37},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 31.6, pathId:37},
				{duration: 33.4, pathId:2},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 31.4, pathId:15},
				{duration: 30.1, pathId:20},
				{duration: 34.1, pathId:37},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 31.1, pathId:10},
				{duration: 30.6, pathId:20},
				{duration: 33.8, pathId:7},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 30.6, pathId:10},
				{duration: 30.5, pathId:11},
				{duration: 32.6, pathId:7},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 30.1, pathId:10},
				{duration: 29.3, pathId:11},
				{duration: 31.7, pathId:6},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 30.8, pathId:2},
				{duration: 32.4, pathId:8},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 29.3, pathId:2},
				{duration: 29.5, pathId:6},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 28.6, pathId:2},
				{duration: 28.8, pathId:6},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 26.9, pathId:2},
				{duration: 27.1, pathId:6},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 28.6, pathId:2},
				{duration: 28.5, pathId:18},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 28.3, pathId:19},
				{duration: 28.1, pathId:11},
				{duration: 29.8, pathId:18},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 27.4, pathId:19},
				{duration: 27.2, pathId:11},
				{duration: 29.1, pathId:18},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 28.0, pathId:2},
				{duration: 28.9, pathId:18},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 28.4, pathId:2},
				{duration: 28.6, pathId:6},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 27.6, pathId:19},
				{duration: 28.4, pathId:2},
				{duration: 28.7, pathId:6},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 28.0, pathId:2},
				{duration: 27.3, pathId:9},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 27.6, pathId:2},
				{duration: 29.8, pathId:42},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 26.9, pathId:2},
				{duration: 27.2, pathId:6},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 26.2, pathId:2},
				{duration: 26.5, pathId:6},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 27.0, pathId:19},
				{duration: 26.7, pathId:11},
				{duration: 28.3, pathId:6},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 27.8, pathId:2},
				{duration: 28.0, pathId:6},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 27.5, pathId:2},
				{duration: 27.6, pathId:8},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 27.8, pathId:2},
				{duration: 28.0, pathId:43},
				{duration: 27.1, pathId:5},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 28.4, pathId:23},
				{duration: 28.9, pathId:2},
				{duration: 27.6, pathId:5},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 26.9, pathId:2},
				{duration: 27.2, pathId:37},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 26.9, pathId:5},
				{duration: 26.9, pathId:7},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 27.2, pathId:23},
				{duration: 27.8, pathId:2},
				{duration: 25.6, pathId:8},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 25.6, pathId:2},
				{duration: 25.7, pathId:5},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 26.8, pathId:2},
				{duration: 26.9, pathId:6},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 25.0, pathId:7},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 24.6, pathId: 0},
				{duration: 24.0, pathId: 1},
				{duration: 28.6, pathId: 2},
				{duration: 25.9, pathId: 3},
				{duration: 24.6, pathId: 4},
				{duration: 26.6, pathId: 5},
				{duration: 28.9, pathId: 6},
				{duration: 28.3, pathId: 7},
				{duration: 28.7, pathId: 8},
				{duration: 30.7, pathId: 9},
				{duration: 30.0, pathId: 10},
				{duration: 29.4, pathId: 11},
				{duration: 31.6, pathId: 12},
				{duration: 29.1, pathId: 13},
				{duration: 30.8, pathId: 14},
				{duration: 31.1, pathId: 15},
				{duration: 29.7, pathId: 16},
				{duration: 32.3, pathId: 17},
				{duration: 31.3, pathId: 18},
				{duration: 29.3, pathId: 19},
				{duration: 30.9, pathId: 20},
				{duration: 31.9, pathId: 21},
				{duration: 32.8, pathId: 22},
				{duration: 29.6, pathId: 23},
				{duration: 32.6, pathId: 24},
				{duration: 33.8, pathId: 25},
				{duration: 33.0, pathId: 26},
				{duration: 31.4, pathId: 27},
				{duration: 31.6, pathId: 28},
				{duration: 32.8, pathId: 29},
				{duration: 31.7, pathId: 30},
				{duration: 31.2, pathId: 31},
				{duration: 32.4, pathId: 32},
				{duration: 32.9, pathId: 33},
				{duration: 35.0, pathId: 34},
				{duration: 32.0, pathId: 35},
				{duration: 33.4, pathId: 36},
				{duration: 32.0, pathId: 37},
				{duration: 31.2, pathId: 38},
				{duration: 33.0, pathId: 39},
				{duration: 32.6, pathId: 40},
				{duration: 33.2, pathId: 41},
				{duration: 29.8, pathId: 42},
				{duration: 28.0, pathId: 43},
			]
		}
	];

	return {
		O: 'B',
		D: 'D',
		minDuration: 23.7,
		maxDuration: 35.6,
		paths: paths,
		data: data
	}
};