/**
 * Created by ycruan on 12/31/16.
 */
require(['Trip', 'getCharts', 'Utils'], function (Trip, getCharts, Utils) {
    try{
        var parDoc = window.opener.document;
        var O = parDoc.getElementById('select0').value;
        var D = parDoc.getElementById('select1').value;
        var sel2 = parDoc.getElementById('select2');
        var date = sel2.value;
        var trip = Trip.createNew(date, O+D);

        var headingBasic = document.getElementById('headingBasic');
        var OName = Utils.nameMap[O];
        var DName = Utils.nameMap[D];
        var dateString = sel2.options[sel2.selectedIndex].text;
        var numTimeSteps = dateString.substr(0, 2)=='PM' ? 120 : 90;
        var numMissingData = numTimeSteps - trip.data.length + 1;
        headingBasic.innerHTML = '( ' + OName + ', '
            + DName + ', ' + date + ' )';
        var headingIntro = document.getElementById('headingIntro');
        headingIntro.innerHTML = 'This page shows statistical charts for durations of trips from ' + OName + ' to ' + DName + ' on '
            + (dateString.substr(0, 2)=='PM' ? '3-7 pm ' : '6-9 am ') + dateString.substr(3, 100) + '. During the time period, a total of '
            + trip.paths.length + ' distinct paths were suggested by Google Map. Among all the trips, the quickest tour takes '
            + trip.minDuration + ' minutes, and the slowest one takes ' + trip.maxDuration + ' minutes. '
            + (numMissingData == 0 ? ('All ' + numTimeSteps + ' data points were correctly collected.') :
                (numMissingData + ' out of ' + numTimeSteps + ' data points were missing for unexpected reasons.'));

        getCharts(trip);
    } catch (e){
        //console.log(e);
    }
});