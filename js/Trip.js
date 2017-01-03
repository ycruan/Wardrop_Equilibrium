/**
 * Created by ycruan on 12/22/16.
 */
define(['jquery'], function ($) {
    var Trip = {
        createNew : function(date, OD) {
            var trip;
            var path = './js/data/' + date + '/' + OD + '.js';
            $.getScript({ type: "GET", url: path, async: false , success: function () {
                trip = getObj();
            }});
            return trip;
        }
    };
    return Trip;
});