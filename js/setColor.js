/**
 * Created by ycruan on 12/21/16.
 */
define([], function () {
    getColorByPercentage = function (percentage) {
        var one = (255+255) / 100;
        var r=0;
        var g=0;
        var b=0;

        if ( percentage < 50 ) {
            r = one * percentage;
            g=255;
        }
        if ( percentage >= 50 ) {
            g =  255 - ( (percentage - 50 ) * one) ;
            r = 255;
        }

        r = parseInt(r);
        g = parseInt(g);

        var str = [r.toString(16), g.toString(16)];
        for(var i = 0; i < 2; ++i){
            if(str[i].length == 1) str[i] = '0' + str[i];
        }

        return "#"+str[0]+str[1]+'00';
    }

    return getColorByPercentage;
})