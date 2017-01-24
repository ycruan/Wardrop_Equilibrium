/**
 * Created by ycruan on 12/21/16.
 */
require(['https://maps.googleapis.com/maps/api/js?key=AIzaSyAik-rZtDygSileYBliV3X6tCA66cYg50E&callback=initMap'
    , 'MarkerManager', 'Trip', 'RouteManager'], function(Gmap, MarkerManager, Trip, RouteManager){
    try{
        var sel0 = document.getElementById("select0");
        var sel1 = document.getElementById("select1");
        var sel2 = document.getElementById("select2");

        var checkODInput = function () {
            if(sel0.value == sel1.value){
                alert('invalid OD pair');
                return false;
            }
            return true;
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 34.132743, lng: -118.069040},
            zoom: 13,
            //panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl : false,
            //scrollwheel: false,
            //draggable: false,
            disableDoubleClickZoom: true
        });

        var markerMana = MarkerManager.createNew();
        var currMarkers = markerMana.initMarker(map);
        var routeMana = RouteManager.createNew();

        var animationInterval = 350;

        var table = document.getElementById("f2");
        table.addEventListener('resize', function (e) {
            e.preventDefault();
        });

        var dateSel = document.getElementById("select2");
        dateSel.addEventListener('change', function () {
            var text = dateSel.options[this.selectedIndex].text;
            var clocktext = document.getElementById("clocktext");
            var peak = text.substr(0,2);
            if(peak == 'PM') clocktext.value = '3-7 PM';
            else if(peak == 'am') clocktext.value = '6-9 am';
            else clocktext.value = '5-9 AM';
        });

        var stat = document.getElementById("stat");
        stat.addEventListener('click', function () {
            if(!checkODInput()) return;
            var statWin = window.open('./stat.html');
        });

        var gitbtn = document.getElementById("git");
        gitbtn.addEventListener('click', function () {
            window.open('https://github.com/ycruan/Wardrop_Equilibrium');
        });

        var btn = document.getElementById("play");
        btn.addEventListener('click', function(){
            if(window.onPlay){
                btn.style.color = "green";
                btn.innerHTML = "play";
                for(var i = 0; i < 3; ++i){
                    var sel = document.getElementById("select"+i);
                    sel.disabled = false;
                }
                markerMana.removeMarkers(currMarkers);
                currMarkers = markerMana.initMarker(map);
                routeMana.stop();
            } else{
                if(!checkODInput()) return;
                var trip = Trip.createNew(sel2.value, sel0.value + sel1.value);
                btn.style.color = "darkred";
                btn.innerHTML = "stop";
                for(var i = 0; i < 3; ++i){
                    var sel = document.getElementById("select"+i);
                    sel.disabled = true;
                }
                markerMana.removeMarkers(currMarkers);
                currMarkers = markerMana.setMarker(map);
                routeMana.displayNew(map, trip, animationInterval);
            }
            window.onPlay = !window.onPlay;
        });
    } catch (e){
        //console.log(e);
    }
});
