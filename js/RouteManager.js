/**
 * Created by ycruan on 12/27/16.
 */
define(['setColor', 'Utils'], function (setColor, Utils) {
    var RouteManager = {
        createNew : function () {
            var rm = {
                map: null,
                currPaths : [],
                //currInfoWins : [],
                currInfoWin : null,
                minDuration : 0,
                deltaDuration : 0,
                paths : null,
                interval : null,
                updatePath : function (routes) {
                    var bitMap = [];
                    for(var key in this.currPaths){
                        bitMap[key] = false;
                    }
                    for(var iter = 0; iter < routes.length; ++iter){
                        var r = routes[iter];
                        var ref = r.pathId.toString();
                        var color = this.getColor(r.duration);
                        if(this.currPaths[ref] == undefined){
                            var pts = this.paths[r.pathId].pts;
                            var gPath = new google.maps.Polyline({
                                path: pts,
                                geodesic: true,
                                strokeColor: color,
                                strokeOpacity: 1.0,
                                strokeWeight: 3,
                                pathId: ref,
                                duration: r.duration
                            });
                            //var gInfoWin = new google.maps.InfoWindow({content: " ", draggable: true});
                            //gInfoWin.setPosition(pts[Math.floor((Math.random() * (pts.length - 2)) + 1)]);
                            //gInfoWin.open(this.map);
                            this.currPaths[ref] = gPath;
                            //this.currInfoWins[ref] = gInfoWin;
                        } else{
                            bitMap[ref] = true;
                            this.currPaths[ref].setOptions({strokeColor: color});
                            this.currPaths[ref].duration = r.duration;
                        }
                        this.currPaths[ref].setMap(this.map);
                        //this.currInfoWins[ref].setContent(r.duration.toString() + " min");
                    }
                    var keysToRemove = [];
                    for(var key in bitMap){
                        if (!bitMap[key]){
                            keysToRemove.push(key);
                        }
                    }
                    this.removeCurr(keysToRemove, false);
                    var info = '<p>Duration:<br />';
                    for(var ref in this.currPaths){
                        var p = this.currPaths[ref];
                        info += p.pathId + ')\t' + parseFloat(p.duration).toFixed(1) + ' min<br />';
                    }
                    info += '</p>';
                    this.currInfoWin.setContent(info);
                },
                removeCurr : function (keys, clearInfoWin) {
                    for (var iter = 0; iter < keys.length; ++iter) {
                        var key = keys[iter];
                        this.currPaths[key].setMap(null);
                        //this.currInfoWins[key].close();
                        delete this.currPaths[key];
                        //delete this.currInfoWins[key];
                    }
                    if(clearInfoWin && this.currInfoWin != null){
                        this.currInfoWin.close();
                    }
                },
                getColor : function (duration) {
                    if(this.deltaDuration == 0) return '#00ff00';
                    var percentage = (duration - this.minDuration) / this.deltaDuration * 100;
                    return setColor(Math.floor(percentage));
                },
                displayNew : function (map, trip, animationSpeed) {
                    this.map = map;
                    this.removeCurr(Object.keys(this.currPaths), true);
                    this.currPaths = [];
                    //this.currInfoWins = [];
                    this.currInfoWin =
                        new google.maps.InfoWindow({content: Utils.nameMap[trip.O] + ' to ' + Utils.nameMap[trip.D]});
                    var oriLoc = Utils.loc[trip.O];
                    this.currInfoWin.setPosition({lat: oriLoc.lat + 0.0052, lng: oriLoc.lng});
                    this.currInfoWin.open(map);
                    this.paths = trip.paths;
                    var data = trip.data;
                    this.minDuration = trip.minDuration;
                    this.deltaDuration = trip.maxDuration - this.minDuration;
                    var clocktext = document.getElementById("clocktext");
                    var iter = 0;
                    this.interval = setInterval(function() {
                        if (iter >= data.length) {
                            //clearInterval(rm.interval);
                            document.getElementById('play').click();
                        } else {
                            clocktext.value = data[iter].time;
                            rm.updatePath(data[iter].routes);
                            iter += 1;
                        }
                    }, animationSpeed);
                },
                stop : function () {
                    clearInterval(this.interval);
                    var clocktext = document.getElementById("clocktext");
                    var clockValue = clocktext.value;
                    var cp = this.currPaths;
                    doSearch = function () {
                        var txtInput = document.getElementById('txtInput');
                        var path = cp[txtInput.value];
                        if(path == undefined){
                            alert('invalid path number');
                            return;
                        }
                        for(var k in cp){
                            cp[k].setMap(null);
                        }
                        path.setMap(rm.map);
                        var newInfo =  getNewInfo(path, true);
                        rm.currInfoWin.setContent(newInfo);
                    };
                    getNewInfo = function (path, ifRestore) {
                        var newInfo = path.pathId + ') ' + parseFloat(path.duration).toFixed(1) + ' min' + '<br />' +
                            '<small>via ' + rm.paths[path.pathId].desc + '</small>';
                        if(ifRestore) newInfo += '<br /> <br /> Click map to restore </p>';
                        return newInfo;
                    };
                    var infoContent = this.currInfoWin.getContent();
                    infoContent = infoContent.substr(0, infoContent.length - 4);
                    if(Object.keys(cp).length > 1){
                        infoContent += '<br/ > <input type="text" id="txtInput" maxlength="3" size="3" />&nbsp<input type="submit" id="btnSearch" value="find" onclick="doSearch();" /> <br /> </p>';
                        rm.currInfoWin.setContent(infoContent);
                    } else{
                        infoContent = getNewInfo(cp[Object.keys(cp)[0]], false);
                        rm.currInfoWin.setContent(infoContent);
                    }
                    google.maps.event.addListener(this.map, 'click', function () {
                        if(Object.keys(cp).length == 1 || window.onPlay) return;
                        for(var k in cp){
                            cp[k].setMap(rm.map);
                        }
                        rm.currInfoWin.setContent(infoContent);
                    });
                    for(var ref in cp){         //closure loop
                        (function(ref) {
                            var path = cp[ref];
                            google.maps.event.addListener(path, 'mouseover', function () {
                                if(window.onPlay) return;
                                clocktext.value = path.pathId + ') ' + parseFloat(path.duration).toFixed(1) + ' min';
                            });
                            google.maps.event.addListener(path, 'mouseout', function () {
                                if(window.onPlay) return;
                                clocktext.value = clockValue;
                            });
                            google.maps.event.addListener(path, 'click', function () {
                                if(Object.keys(cp).length == 1 || window.onPlay) return;
                                for(var k in cp){
                                    cp[k].setMap(null);
                                }
                                path.setMap(rm.map);
                                var newInfo = getNewInfo(path, true);
                                rm.currInfoWin.setContent(newInfo);
                            });
                        })(ref);
                    }
                }
            };
            return rm;
        }
    };
    return RouteManager;
})