/**
 * Created by ycruan on 12/31/16.
 */
define(['Utils' ,'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js'], function (Utils) {
    return function(trip, peak){
        try{
            var pieCanvas = document.getElementById('pieChart');
            var pieCtx = pieCanvas.getContext('2d');
            var lineCanvas = document.getElementById('lineChart');
            var lineCtx = lineCanvas.getContext('2d');
            var barCanvas = document.getElementById('barChart');
            var barCtx = barCanvas.getContext('2d');
            var line2Canvas = document.getElementById('line2Chart');
            var line2Ctx = line2Canvas.getContext('2d');
            var bar2Canvas = document.getElementById('bar2Chart');
            var bar2Ctx = bar2Canvas.getContext('2d');

            var getRGBA = function (alpha) {
                var color = 'rgba(';
                for(var i = 0; i < 3; ++i){
                    color += Math.floor(Math.random() * 255 + 1) + ',';
                }
                color += alpha + ")";
                return color;
            };

            var paths = trip.paths;
            var data = trip.data;
            var lineDatasets = [];
            var hiddenThreshold = 5;        //included
            var meanColor = 'rgba(255,0,0,0.5)';
            var stdevColor = 'rgba(0,0,255,0.5)';
            var tickMin = 0;
            var tickMax = 0;
            var legendWidth = 10;
            var axisTitleFont = 20;

            var pieStat = [];
            var barStat = [];
            var barLabels = [];
            var bar2Stat = [];
            var line2Stat = [];
            var line2Datasets = [{
                label: 'mean',
                data: [],
                fill: false,
                backgroundColor: meanColor,
                borderColor: meanColor,
            }, {
                label: 'stdev',
                data: [],
                fill: false,
                backgroundColor: stdevColor,
                borderColor: stdevColor,
            }];
            if(peak == 'PM'){
                barLabels = ['3-4 PM', '4-5 PM', '5-6 PM', '6-7 PM'];
                tickMin = 3;
                tickMax = 7;
            } else if(peak == 'am'){
                barLabels = ['6-7 am', '7-8 am', '8-9 am'];
                tickMin = 6;
                tickMax = 9;
            } else{
                barLabels = ['5-6 AM', '6-7 AM', '7-8 AM', '8-9 AM'];
                tickMin = 5;
                tickMax = 9;
            }
            for(var i = 0; i < barLabels.length; ++i){
                barStat[i] = [];
            }

            for(var i = 0; i < paths.length; ++i){
                var color = getRGBA(0.5);
                lineDatasets[i] = {
                    label: i + ') ' + paths[i].desc,
                    data: [],
                    fill: false,
                    backgroundColor: color,
                    borderColor: color,
                    hidden: false
                };
            }
            lineDatasets[paths.length] = {
                label: 'BEST',
                data: [],
                fill: true,
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderColor: 'rgba(0,0,0,0.1)'
            };

            var barSlot = -1;
            for(var i = 0; i < data.length - 1; ++i){
                var d = data[i];
                var stime = d.time;
                if(stime.substr(3,2) == '00') barSlot += 1;
                var time = Number(stime.substr(0, 2)) + Number(stime.substr(3, 2)) / 60;
                var bestDuration = 999999;
                line2Stat = [];
                for(var j in d.routes){
                    var r = d.routes[j];
                    lineDatasets[r.pathId].data.push({
                        x: time,
                        y: r.duration
                    });
                    barStat[barSlot].push(r.duration);
                    line2Stat.push(r.duration);
                    if(r.duration < bestDuration) bestDuration = r.duration;
                    var desc = paths[r.pathId].desc;
                    if(pieStat[desc] == undefined){
                        pieStat[desc] = 1;
                        bar2Stat[desc] = [r.duration];
                    } else{
                        pieStat[desc] += 1;
                        bar2Stat[desc].push(r.duration);
                    }
                }
                lineDatasets[paths.length].data.push({
                    x: time,
                    y: bestDuration
                });
                line2Datasets[0].data.push({
                    x: time,
                    y: Utils.arrstat.mean(line2Stat)
                });
                if(1 < line2Stat.length){
                    line2Datasets[1].data.push(({
                        x: time,
                        y: Utils.arrstat.standardDeviation(line2Stat)
                    }));
                }
            }
            line2Datasets.push({
                label: 'BEST',
                data: lineDatasets[paths.length].data,
                fill: false,
                backgroundColor: 'rgba(0,255,0,0.5)',
                borderColor: 'rgba(0,255,0,0.5)'
            });

            var pieLabels = [];
            var pieData = [];
            var pieColor = [];
            var bar2MeanData = [];
            var bar2StdevData = [];
            for(var desc in pieStat){
                pieLabels.push(desc);
                pieData.push(pieStat[desc]);
                pieColor.push(getRGBA(0.5));
                bar2MeanData.push(Utils.arrstat.mean(bar2Stat[desc]));
                bar2StdevData.push(Utils.arrstat.standardDeviation(bar2Stat[desc]));
            }

            for(var i = 0; i < paths.length; ++i){
                if(lineDatasets[i].data.length <= hiddenThreshold){
                    lineDatasets[i].hidden = true;
                }
            }
            var barMeanData = [];
            var barStdevData = [];
            for(var i = 0; i < barStat.length; ++i){
                var slot = barStat[i];
                barMeanData[i] = Utils.arrstat.mean(slot);
                barStdevData[i] = Utils.arrstat.standardDeviation(slot);
            }

            var pieChart = new Chart(pieCtx, {
                type: 'pie',
                data: {
                    labels: pieLabels,
                    datasets: [{
                        data: pieData,
                        backgroundColor: pieColor
                    }]
                },
                options: {
                    legend:{
                        position: 'top',
                        fullWidth: true,
                        labels: {
                            boxWidth: legendWidth
                        }
                    }
                },
                responsive: true
            });

            var lineChart = new Chart(lineCtx, {
                type: 'line',
                data: {
                    datasets: lineDatasets
                },
                options: {
                    /*
                    title:{
                        display: true,
                        text: 'Duration vs. Time'
                    },
                    */
                    scales: {
                        xAxes:[{
                            position: 'bottom',
                            type: 'linear',
                            ticks: {
                                min: tickMin,
                                max: tickMax
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Time (h) - ' + peak,
                                fontSize: axisTitleFont,
                                fontStyle: 'bold'
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                min: Math.floor(trip.minDuration - 1)
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Duration (min)',
                                fontSize: axisTitleFont,
                                fontStyle: 'bold'
                            }
                        }]
                    },
                    showLines: true,
                    spanGaps: true,
                    legend:{
                        position: 'top',
                        fullWidth: true,
                        labels: {
                            boxWidth: legendWidth
                        }
                    },
                    responsive: true
                }
            });

            var barChart = new Chart(barCtx, {
                type: 'bar',
                data: {
                    labels: barLabels,
                    datasets:[{
                        label: 'mean',
                        data: barMeanData,
                        backgroundColor: meanColor
                    },{
                        label: 'stdev',
                        data: barStdevData,
                        backgroundColor: stdevColor
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Duration (min)',
                                fontSize: axisTitleFont,
                                fontStyle: 'bold'
                            }
                        }]
                    },
                    legend:{
                        position: 'top',
                        fullWidth: true,
                        labels: {
                            boxWidth: legendWidth
                        }
                    },
                    responsive: true
                }
            });

            var line2Chart = new Chart(line2Ctx, {
                type: 'line',
                data: {
                    datasets: line2Datasets
                },
                options: {
                    scales: {
                        xAxes:[{
                            position: 'bottom',
                            type: 'linear',
                            ticks: {
                                min: tickMin,
                                max: tickMax
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Time (h) - ' + peak,
                                fontSize: axisTitleFont,
                                fontStyle: 'bold'
                            }
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Duration (min)',
                                fontSize: axisTitleFont,
                                fontStyle: 'bold'
                            }
                        }]
                    },
                    showLines: true,
                    spanGaps: true,
                    legend:{
                        position: 'top',
                        fullWidth: true,
                        labels: {
                            boxWidth: legendWidth
                        }
                    },
                    responsive: true
                }
            });

            var bar2Chart = new Chart(bar2Ctx, {
                type: 'bar',
                data: {
                    labels: pieLabels,
                    datasets:[{
                        label: 'mean',
                        data: bar2MeanData,
                        backgroundColor: meanColor
                    },{
                        label: 'stdev',
                        data: bar2StdevData,
                        backgroundColor: stdevColor
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Duration (min)',
                                fontSize: axisTitleFont,
                                fontStyle: 'bold'
                            }
                        }]
                    },
                    legend:{
                        position: 'top',
                        fullWidth: true,
                        labels: {
                            boxWidth: legendWidth
                        }
                    }
                }
            });

        } catch (e){
            alert(e);
        }

    }
});