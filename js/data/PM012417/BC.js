//date: 012417
function getObj() {
	var paths = [
		{
			desc: 'E California Blvd',
			len: 8959,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.13586400000001, lng:-118.1016549},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.131696, lng:-118.0522276},
				{lat:34.1328969, lng:-118.0511984},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd',
			len: 8334,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378012, lng:-118.1000924},
				{lat:34.13586340000001, lng:-118.1001339},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'San Pasqual St',
			len: 9292,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1378029, lng:-118.1016685},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'San Pasqual St and Huntington Dr',
			len: 8805,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1270859, lng:-118.0911579},
				{lat:34.131696, lng:-118.0522276},
				{lat:34.1328969, lng:-118.0511984},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd',
			len: 8956,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1378029, lng:-118.1016685},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.131696, lng:-118.0522276},
				{lat:34.1328969, lng:-118.0511984},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 9084,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'San Pasqual St and Huntington Dr',
			len: 8818,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1270859, lng:-118.0911579},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 9302,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 9179,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1378029, lng:-118.1016685},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 9449,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1378029, lng:-118.1016685},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1270859, lng:-118.0911579},
				{lat:34.131696, lng:-118.0522276},
				{lat:34.1328969, lng:-118.0511984},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd and Huntington Dr',
			len: 8538,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd',
			len: 8981,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141979, lng:-118.1083172},
				{lat:34.1358632, lng:-118.1085015},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd and Huntington Dr',
			len: 9464,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1270859, lng:-118.0911579},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'San Pasqual St',
			len: 8438,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'I-210 E',
			len: 10476,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1517057, lng:-118.0956886},
				{lat:34.1517051, lng:-118.0935153},
				{lat:34.1486301, lng:-118.0539717},
				{lat:34.1484931, lng:-118.0503287},
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
			len: 10116,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1294742, lng:-118.1022906},
				{lat:34.1290002, lng:-118.101009},
				{lat:34.124065, lng:-118.1005779},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd and E California Blvd',
			len: 9255,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.141823, lng:-118.1213126},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'San Pasqual St and Huntington Dr',
			len: 8648,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'San Pasqual St and E California Blvd',
			len: 8312,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.131696, lng:-118.0522276},
				{lat:34.1328969, lng:-118.0511984},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd',
			len: 8333,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378295, lng:-118.1130643},
				{lat:34.1358717, lng:-118.11307},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'San Pasqual St',
			len: 9082,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1378029, lng:-118.1016685},
				{lat:34.1378615, lng:-118.0733744},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd',
			len: 8972,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.13586400000001, lng:-118.1016549},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd',
			len: 9182,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.13586400000001, lng:-118.1016549},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 8840,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422822, lng:-118.0734305},
				{lat:34.1428894, lng:-118.0732991},
				{lat:34.1429524, lng:-118.0676652},
				{lat:34.1407929, lng:-118.0596168},
				{lat:34.1379342, lng:-118.0590513},
				{lat:34.13808119999999, lng:-118.0538652},
				{lat:34.1367357, lng:-118.0542288},
				{lat:34.1366918, lng:-118.0531414},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd',
			len: 8969,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1378029, lng:-118.1016685},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'San Pasqual St and E California Blvd',
			len: 8325,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 8788,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378295, lng:-118.1130643},
				{lat:34.1358717, lng:-118.11307},
				{lat:34.1358635, lng:-118.098776},
				{lat:34.1336149, lng:-118.098806},
				{lat:34.1336634, lng:-118.0910457},
				{lat:34.1279067, lng:-118.0883019},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd',
			len: 9101,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421121, lng:-118.1017129},
				{lat:34.1378029, lng:-118.1016685},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1309098, lng:-118.0674394},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd',
			len: 9181,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1346497, lng:-118.0733337},
				{lat:34.1305026, lng:-118.0732738},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd and E California Blvd',
			len: 8971,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1421416, lng:-118.0946174},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 9474,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.141979, lng:-118.1083172},
				{lat:34.1358632, lng:-118.1085015},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1270859, lng:-118.0911579},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E California Blvd',
			len: 8328,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1310916, lng:-118.0651302},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'E Del Mar Blvd and E Colorado Blvd/Historic Rte 66 E',
			len: 9999,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1414292, lng:-118.122859},
				{lat:34.1422201, lng:-118.0815667},
				{lat:34.1461368, lng:-118.0816239},
				{lat:34.1482891, lng:-118.0506708},
				{lat:34.1473239, lng:-118.0503517},
				{lat:34.1389942, lng:-118.0532187},
				{lat:34.1383331, lng:-118.0521375},
				{lat:34.1380445, lng:-118.0520378},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'San Pasqual St and E California Blvd',
			len: 8457,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378455, lng:-118.0946086},
				{lat:34.1357437, lng:-118.0943582},
				{lat:34.1343475, lng:-118.0675251},
				{lat:34.1309098, lng:-118.0674394},
				{lat:34.1316174, lng:-118.0502376},
				{lat:34.1318585, lng:-118.0496321},
				{lat:34.1326279, lng:-118.0495987},
				{lat:34.1341047, lng:-118.0485032},
				{lat:34.1342593, lng:-118.0497741},
				{lat:34.1343799, lng:-118.0505984},
			]
		},
		{
			desc: 'Huntington Dr',
			len: 8783,
			pts: [
				{lat:34.1380738, lng:-118.1249651},
				{lat:34.1389503, lng:-118.1228479},
				{lat:34.1378714, lng:-118.1228118},
				{lat:34.1378183, lng:-118.1212581},
				{lat:34.1358909, lng:-118.121264},
				{lat:34.1358635, lng:-118.098776},
				{lat:34.1336149, lng:-118.098806},
				{lat:34.1336634, lng:-118.0910457},
				{lat:34.1279067, lng:-118.0883019},
				{lat:34.1316174, lng:-118.0502376},
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
				{duration: 19.4, pathId:0},
				{duration: 19.9, pathId:1},
			]
		},
		{
			time: '03:02 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 19.5, pathId:2},
			]
		},
		{
			time: '03:04 PM',
			routes: [
				{duration: 18.8, pathId:0},
				{duration: 19.8, pathId:2},
			]
		},
		{
			time: '03:06 PM',
			routes: [
				{duration: 18.6, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '03:08 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 20.8, pathId:2},
			]
		},
		{
			time: '03:10 PM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '03:12 PM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '03:14 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 20.5, pathId:2},
			]
		},
		{
			time: '03:16 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 20.9, pathId:2},
			]
		},
		{
			time: '03:18 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '03:20 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '03:22 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 20.7, pathId:1},
			]
		},
		{
			time: '03:24 PM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 21.1, pathId:2},
			]
		},
		{
			time: '03:26 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 20.6, pathId:3},
			]
		},
		{
			time: '03:28 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 19.7, pathId:1},
			]
		},
		{
			time: '03:30 PM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 19.4, pathId:1},
			]
		},
		{
			time: '03:32 PM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 19.4, pathId:1},
			]
		},
		{
			time: '03:34 PM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 19.6, pathId:1},
			]
		},
		{
			time: '03:36 PM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 21.4, pathId:4},
			]
		},
		{
			time: '03:38 PM',
			routes: [
				{duration: 21.8, pathId:0},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '03:40 PM',
			routes: [
				{duration: 20.8, pathId:5},
				{duration: 21.4, pathId:0},
			]
		},
		{
			time: '03:42 PM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 21.6, pathId:5},
			]
		},
		{
			time: '03:44 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 20.4, pathId:6},
			]
		},
		{
			time: '03:46 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 20.1, pathId:4},
			]
		},
		{
			time: '03:48 PM',
			routes: [
				{duration: 20.1, pathId:4},
				{duration: 21.2, pathId:7},
			]
		},
		{
			time: '03:50 PM',
			routes: [
				{duration: 20.1, pathId:5},
				{duration: 21.1, pathId:0},
			]
		},
		{
			time: '03:52 PM',
			routes: [
				{duration: 19.8, pathId:4},
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '03:54 PM',
			routes: [
				{duration: 19.2, pathId:2},
				{duration: 20.4, pathId:0},
			]
		},
		{
			time: '03:56 PM',
			routes: [
				{duration: 19.3, pathId:2},
				{duration: 19.7, pathId:0},
			]
		},
		{
			time: '03:58 PM',
			routes: [
				{duration: 19.1, pathId:2},
				{duration: 20.0, pathId:0},
			]
		},
		{
			time: '04:00 PM',
			routes: [
				{duration: 19.3, pathId:2},
				{duration: 20.0, pathId:0},
			]
		},
		{
			time: '04:02 PM',
			routes: [
				{duration: 19.3, pathId:2},
				{duration: 20.4, pathId:0},
			]
		},
		{
			time: '04:04 PM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 20.3, pathId:4},
			]
		},
		{
			time: '04:06 PM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 20.8, pathId:8},
				{duration: 21.1, pathId:9},
			]
		},
		{
			time: '04:08 PM',
			routes: [
				{duration: 19.9, pathId:0},
			]
		},
		{
			time: '04:10 PM',
			routes: [
				{duration: 20.9, pathId:2},
				{duration: 21.3, pathId:0},
				{duration: 20.8, pathId:1},
			]
		},
		{
			time: '04:12 PM',
			routes: [
				{duration: 20.0, pathId:0},
				{duration: 20.2, pathId:5},
			]
		},
		{
			time: '04:14 PM',
			routes: [
				{duration: 19.9, pathId:0},
			]
		},
		{
			time: '04:16 PM',
			routes: [
				{duration: 19.8, pathId:0},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '04:18 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 23.4, pathId:1},
			]
		},
		{
			time: '04:20 PM',
			routes: [
				{duration: 19.9, pathId:10},
				{duration: 21.4, pathId:11},
			]
		},
		{
			time: '04:22 PM',
			routes: [
				{duration: 20.9, pathId:0},
			]
		},
		{
			time: '04:24 PM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 22.5, pathId:2},
			]
		},
		{
			time: '04:26 PM',
			routes: [
				{duration: 21.0, pathId:8},
				{duration: 21.5, pathId:10},
			]
		},
		{
			time: '04:28 PM',
			routes: [
				{duration: 20.6, pathId:0},
			]
		},
		{
			time: '04:30 PM',
			routes: [
				{duration: 19.7, pathId:8},
				{duration: 20.6, pathId:0},
			]
		},
		{
			time: '04:32 PM',
			routes: [
				{duration: 20.8, pathId:0},
			]
		},
		{
			time: '04:34 PM',
			routes: [
				{duration: 20.6, pathId:0},
			]
		},
		{
			time: '04:36 PM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 22.0, pathId:12},
			]
		},
		{
			time: '04:38 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 21.1, pathId:13},
			]
		},
		{
			time: '04:40 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 21.0, pathId:14},
			]
		},
		{
			time: '04:42 PM',
			routes: [
				{duration: 20.6, pathId:15},
				{duration: 21.9, pathId:0},
				{duration: 20.8, pathId:16},
			]
		},
		{
			time: '04:44 PM',
			routes: [
				{duration: 22.0, pathId:8},
				{duration: 23.6, pathId:0},
			]
		},
		{
			time: '04:46 PM',
			routes: [
				{duration: 20.4, pathId:8},
				{duration: 21.5, pathId:17},
				{duration: 20.7, pathId:9},
			]
		},
		{
			time: '04:48 PM',
			routes: [
				{duration: 21.6, pathId:8},
				{duration: 23.4, pathId:0},
				{duration: 21.1, pathId:9},
			]
		},
		{
			time: '04:50 PM',
			routes: [
				{duration: 22.5, pathId:18},
			]
		},
		{
			time: '04:52 PM',
			routes: [
				{duration: 21.3, pathId:19},
				{duration: 21.6, pathId:20},
				{duration: 21.6, pathId:21},
			]
		},
		{
			time: '04:54 PM',
			routes: [
				{duration: 21.7, pathId:2},
				{duration: 21.1, pathId:22},
			]
		},
		{
			time: '04:56 PM',
			routes: [
				{duration: 21.7, pathId:15},
				{duration: 21.5, pathId:22},
			]
		},
		{
			time: '04:58 PM',
			routes: [
				{duration: 22.8, pathId:15},
				{duration: 23.5, pathId:0},
			]
		},
		{
			time: '05:00 PM',
			routes: [
				{duration: 22.6, pathId:0},
				{duration: 22.3, pathId:2},
			]
		},
		{
			time: '05:02 PM',
			routes: [
				{duration: 20.5, pathId:0},
				{duration: 21.6, pathId:23},
			]
		},
		{
			time: '05:04 PM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 22.5, pathId:4},
			]
		},
		{
			time: '05:06 PM',
			routes: [
				{duration: 21.7, pathId:5},
				{duration: 22.4, pathId:0},
			]
		},
		{
			time: '05:08 PM',
			routes: [
				{duration: 20.1, pathId:4},
				{duration: 20.9, pathId:0},
			]
		},
		{
			time: '05:10 PM',
			routes: [
				{duration: 20.3, pathId:4},
				{duration: 20.9, pathId:0},
			]
		},
		{
			time: '05:12 PM',
			routes: [
				{duration: 20.9, pathId:0},
				{duration: 20.2, pathId:4},
			]
		},
		{
			time: '05:14 PM',
			routes: [
				{duration: 20.6, pathId:4},
				{duration: 21.5, pathId:0},
			]
		},
		{
			time: '05:16 PM',
			routes: [
				{duration: 20.7, pathId:8},
				{duration: 21.6, pathId:0},
			]
		},
		{
			time: '05:18 PM',
			routes: [
				{duration: 20.3, pathId:8},
				{duration: 20.6, pathId:7},
			]
		},
		{
			time: '05:20 PM',
			routes: [
				{duration: 21.3, pathId:8},
				{duration: 21.3, pathId:0},
				{duration: 22.6, pathId:4},
			]
		},
		{
			time: '05:22 PM',
			routes: [
				{duration: 22.6, pathId:24},
				{duration: 23.6, pathId:0},
				{duration: 24.5, pathId:18},
			]
		},
		{
			time: '05:24 PM',
			routes: [
				{duration: 21.4, pathId:0},
			]
		},
		{
			time: '05:26 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 22.7, pathId:25},
			]
		},
		{
			time: '05:28 PM',
			routes: [
				{duration: 20.5, pathId:8},
				{duration: 21.5, pathId:0},
				{duration: 22.2, pathId:13},
			]
		},
		{
			time: '05:30 PM',
			routes: [
				{duration: 21.7, pathId:8},
				{duration: 22.4, pathId:0},
				{duration: 23.0, pathId:26},
			]
		},
		{
			time: '05:32 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 24.7, pathId:18},
			]
		},
		{
			time: '05:34 PM',
			routes: [
				{duration: 20.5, pathId:8},
				{duration: 20.9, pathId:17},
				{duration: 21.5, pathId:9},
			]
		},
		{
			time: '05:36 PM',
			routes: [
				{duration: 21.0, pathId:27},
				{duration: 22.0, pathId:0},
				{duration: 21.6, pathId:28},
			]
		},
		{
			time: '05:38 PM',
			routes: [
				{duration: 22.1, pathId:27},
				{duration: 22.7, pathId:0},
				{duration: 23.0, pathId:29},
			]
		},
		{
			time: '05:40 PM',
			routes: [
				{duration: 21.5, pathId:30},
				{duration: 22.1, pathId:0},
				{duration: 23.2, pathId:31},
			]
		},
		{
			time: '05:42 PM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 23.6, pathId:26},
			]
		},
		{
			time: '05:44 PM',
			routes: [
				{duration: 21.2, pathId:32},
				{duration: 22.9, pathId:0},
			]
		},
		{
			time: '05:46 PM',
			routes: [
				{duration: 21.7, pathId:10},
				{duration: 22.3, pathId:16},
				{duration: 21.7, pathId:15},
			]
		},
		{
			time: '05:48 PM',
			routes: [
				{duration: 21.3, pathId:19},
				{duration: 22.4, pathId:0},
				{duration: 22.5, pathId:33},
			]
		},
		{
			time: '05:50 PM',
			routes: [
				{duration: 20.6, pathId:0},
				{duration: 22.8, pathId:4},
			]
		},
		{
			time: '05:52 PM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 22.5, pathId:4},
			]
		},
		{
			time: '05:54 PM',
			routes: [
				{duration: 21.3, pathId:0},
				{duration: 22.8, pathId:4},
			]
		},
		{
			time: '05:56 PM',
			routes: [
				{duration: 21.4, pathId:0},
				{duration: 21.3, pathId:1},
			]
		},
		{
			time: '05:58 PM',
			routes: [
				{duration: 21.0, pathId:7},
				{duration: 22.2, pathId:1},
				{duration: 22.0, pathId:0},
			]
		},
		{
			time: '06:00 PM',
			routes: [
				{duration: 21.1, pathId:8},
				{duration: 21.8, pathId:0},
				{duration: 22.7, pathId:4},
			]
		},
		{
			time: '06:02 PM',
			routes: [
				{duration: 20.6, pathId:7},
				{duration: 21.2, pathId:4},
			]
		},
		{
			time: '06:04 PM',
			routes: [
				{duration: 20.8, pathId:0},
				{duration: 21.7, pathId:4},
			]
		},
		{
			time: '06:06 PM',
			routes: [
				{duration: 20.1, pathId:0},
				{duration: 21.0, pathId:16},
			]
		},
		{
			time: '06:08 PM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 21.2, pathId:1},
			]
		},
		{
			time: '06:10 PM',
			routes: [
				{duration: 21.9, pathId:0},
				{duration: 21.7, pathId:4},
			]
		},
		{
			time: '06:12 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 21.9, pathId:4},
			]
		},
		{
			time: '06:14 PM',
			routes: [
				{duration: 21.2, pathId:0},
				{duration: 21.4, pathId:5},
			]
		},
		{
			time: '06:16 PM',
			routes: [
				{duration: 22.0, pathId:0},
				{duration: 21.9, pathId:5},
			]
		},
		{
			time: '06:18 PM',
			routes: [
				{duration: 20.7, pathId:0},
				{duration: 20.6, pathId:2},
			]
		},
		{
			time: '06:20 PM',
			routes: [
				{duration: 20.0, pathId:2},
				{duration: 20.5, pathId:0},
			]
		},
		{
			time: '06:22 PM',
			routes: [
				{duration: 21.0, pathId:0},
				{duration: 22.0, pathId:2},
			]
		},
		{
			time: '06:24 PM',
			routes: [
				{duration: 19.6, pathId:0},
				{duration: 19.5, pathId:4},
			]
		},
		{
			time: '06:26 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 19.6, pathId:4},
			]
		},
		{
			time: '06:28 PM',
			routes: [
				{duration: 20.2, pathId:0},
				{duration: 20.0, pathId:1},
			]
		},
		{
			time: '06:30 PM',
			routes: [
				{duration: 19.7, pathId:0},
			]
		},
		{
			time: '06:32 PM',
			routes: [
				{duration: 21.6, pathId:0},
				{duration: 21.3, pathId:2},
			]
		},
		{
			time: '06:34 PM',
			routes: [
				{duration: 19.9, pathId:0},
				{duration: 20.4, pathId:2},
			]
		},
		{
			time: '06:36 PM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 19.4, pathId:34},
			]
		},
		{
			time: '06:38 PM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 19.3, pathId:2},
			]
		},
		{
			time: '06:40 PM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 19.4, pathId:1},
			]
		},
		{
			time: '06:42 PM',
			routes: [
				{duration: 20.4, pathId:0},
				{duration: 19.6, pathId:2},
			]
		},
		{
			time: '06:44 PM',
			routes: [
				{duration: 19.1, pathId:0},
				{duration: 19.1, pathId:2},
			]
		},
		{
			time: '06:46 PM',
			routes: [
				{duration: 19.7, pathId:0},
				{duration: 20.2, pathId:3},
			]
		},
		{
			time: '06:48 PM',
			routes: [
				{duration: 19.5, pathId:0},
				{duration: 19.5, pathId:2},
			]
		},
		{
			time: '06:50 PM',
			routes: [
				{duration: 19.3, pathId:0},
				{duration: 19.2, pathId:2},
			]
		},
		{
			time: '06:52 PM',
			routes: [
				{duration: 19.4, pathId:10},
				{duration: 20.1, pathId:2},
			]
		},
		{
			time: '06:54 PM',
			routes: [
				{duration: 19.4, pathId:0},
				{duration: 20.1, pathId:4},
			]
		},
		{
			time: '06:56 PM',
			routes: [
				{duration: 19.2, pathId:0},
				{duration: 19.5, pathId:2},
			]
		},
		{
			time: '06:58 PM',
			routes: [
				{duration: 18.9, pathId:0},
				{duration: 19.0, pathId:2},
			]
		},
		{
			time: 'AVERAGE',
			routes: [
				{duration: 20.6, pathId: 0},
				{duration: 20.5, pathId: 1},
				{duration: 20.3, pathId: 2},
				{duration: 20.4, pathId: 3},
				{duration: 21.1, pathId: 4},
				{duration: 21.1, pathId: 5},
				{duration: 20.4, pathId: 6},
				{duration: 20.9, pathId: 7},
				{duration: 20.9, pathId: 8},
				{duration: 21.1, pathId: 9},
				{duration: 20.6, pathId: 10},
				{duration: 21.4, pathId: 11},
				{duration: 22.0, pathId: 12},
				{duration: 21.6, pathId: 13},
				{duration: 21.0, pathId: 14},
				{duration: 21.7, pathId: 15},
				{duration: 21.4, pathId: 16},
				{duration: 21.2, pathId: 17},
				{duration: 23.9, pathId: 18},
				{duration: 21.3, pathId: 19},
				{duration: 21.6, pathId: 20},
				{duration: 21.6, pathId: 21},
				{duration: 21.3, pathId: 22},
				{duration: 21.6, pathId: 23},
				{duration: 22.6, pathId: 24},
				{duration: 22.7, pathId: 25},
				{duration: 23.3, pathId: 26},
				{duration: 21.6, pathId: 27},
				{duration: 21.6, pathId: 28},
				{duration: 23.0, pathId: 29},
				{duration: 21.5, pathId: 30},
				{duration: 23.2, pathId: 31},
				{duration: 21.2, pathId: 32},
				{duration: 22.5, pathId: 33},
				{duration: 19.4, pathId: 34},
			]
		}
	];

	return {
		O: 'B',
		D: 'C',
		minDuration: 18.6,
		maxDuration: 24.7,
		paths: paths,
		data: data
	}
};