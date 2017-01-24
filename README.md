Wardrop Equilibrium Inspection
===

This project crawls and visualizes traffic data for 5 locations in LA.
Animated and statistical tools are provided to help determine whether a Wardrop Equilibrium is achieved in real time traffic.
Click [here](http://ycruan.github.io/Wardrop_Equilibrium) to visit the IO page.

1. Locations
--
The 5 locations as follow are investigated:

  * A: Rose bowl = (lat: 34.161328, lng: -118.167635)
  * B: Caltech = (lat: 34.137649, lng: -118.125269)
  * C: Westfield Mall = (lat: 34.134675, lng: -118.051038)
  * D: Monrovia Hospital = (lat: 34.148743, lng: -117.992588)
  * E: Speedway = (lat: 34.110381, lng: -117.987364)


2. Time Periods
---
We inspect the two rush hours:

  * AM Peak: 5 - 9 AM
  * PM Peak: 3 - 7 PM

*(For historical reasons, there are a few morning hour data spanning from 6 am to 9 am. They are therefore labeled as lower case "am", instead of the ordinary "AM", for distinction.)*

3. Data
--
All data are collected in real time via the [Google Map Python API](https://github.com/googlemaps/google-maps-services-python).
A query is made every 2 minutes for all the 20 OD pairs. So there are in total 120 data points for both AM peak and PM peak. The default [(best_guess)](https://developers.google.com/maps/documentation/directions/intro#RequestParameters) traffic model was used to estimate the in-traffic duration.

The processed data are stored as .js files in [./js/data](https://github.com/ycruan/Wardrop_Equilibrium/tree/gh-pages/js/data). For raw data please contact with the [author](mailto:ethan.ruan@berkeley.edu).


4. Visualization
--
With the help of the [Google Map JavaScript API](https://developers.google.com/maps/documentation/javascript/)
and [Chart.js](http://www.chartjs.org/), we provide online tools to visualize the traffic data. Including a on-map animation and a series of
statistical charts.

To play the animation, select a preferred OD pair and click "play". Note that:

> 1) Origin and Destination must not be the same.
>
> 2) Every path is given with a distinct path id. The info-window above the origin marker demonstrates the id of paths currently suggested by Google Map, as well as the corresponding
travel durations.
>
> 3) The color of the paths suggests the relative cost for trips between the selected OD pair. Red path implies longer duration, whereas green means less traffic time.
>
> 4) By the end of the animation, all paths that are ever appeared will be redrawn, together with the average traffic time to use them.
>
> 5) You can stop the animation at any time by clicking the "stop" button. The current state of the traffic will still reside on the page, but you are not able to resume from that point. Once the animation stops, either by manually killing or automatically terminating, you can isolate and inspect a particular path by simply clicking on it or search its id via the info-window.
>
> 6) Different paths are distinguished by their coordinates. Paths with the same text description but are comprised of even slightly different (lat, lng) pairs are regarded as different paths.

By clicking "show stat" you will be directing to another page with several statistical tools for specified OD and date of travel.
Detailed introduction can be found on that page.
