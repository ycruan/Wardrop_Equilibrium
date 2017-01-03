/**
 * Created by ycruan on 12/22/16.
 */
define(['Utils'], function (Utils) {
    var loc = Utils.loc;

    var nameMap = Utils.nameMap;

    initMarker = function (map) {
        var flagMarkers = new Array();
        for(var key in loc){
            var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
            var marker = new google.maps.Marker({
                position: loc[key],
                icon: image,
                map: map,
                label: nameMap[key]
            });
            flagMarkers.push(marker);
        }
        return flagMarkers;
    };

    removeMarkers = function (markers) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
    };

    setMarker = function (map) {
        var sel0 = document.getElementById("select0");
        var sel1 = document.getElementById("select1");
        if (sel0.value == sel1.value){
            alert("invalid OD pair");
            return false;
        } else{
            var mO = new google.maps.Marker({
                position: loc[sel0.value],
                map: map,
                label: "O"
            });
            var mD = new google.maps.Marker({
                position: loc[sel1.value],
                map: map,
                label: "D"
            });
            return [mO, mD];
        }
    };

    var MarkerManager = {
        createNew : function () {
            var mm = {
                loc : loc,
                initMarker : initMarker,
                setMarker : setMarker,
                removeMarkers : removeMarkers
            }
            return mm;
        }
    }
    return MarkerManager;
})