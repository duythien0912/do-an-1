function calculateAndDisplayRoute(directionsService, directionsDisplay, x) {

    var startadd = document.getElementById('autocomplete').value;
    var waypts = findthebestway(directionsService, directionsDisplay, x);
    var pointway = [];
    distanceList = [];
    path = [];
    pathFinish = [];
    currentLevel = 0;
    currentTotalDistance = 0;
    flagOfNext = true;
    counter = 0;
    // finishLoop = null;
    calculateReturn = false;
    listPath = [];
    listFinalDistance = [];
    finallllly = 0;

    calculateMainInterval = setInterval(function () {
        if (flagOfNext == true) {
            sumway = document.getElementById('thebestwaygo').innerHTML.split(";");
            sumway.splice(-1, 1);

            if (counter >= sumway.length) {
                window.clearInterval(calculateMainInterval);
                console.log("---Result---");
                console.log(listPath);
                console.log(listFinalDistance);
                console.log("Path: " + (listPath[listFinalDistance.indexOf(Math.min(...listFinalDistance))]));
                console.log("Distance:" + Math.min(...listFinalDistance));
                var sortBestway = (listPath[listFinalDistance.indexOf(Math.min(...listFinalDistance))]);
                var haa = sortBestway.split(",");
                console.log(haa);
                for (i = 0; i < haa.length; i++) {
                    if (haa[i] == ' Ho Chi Minh' && haa[i + 1] == ' Vietnam') {
                        haa.splice(i, 1);
                    }
                }
                for (i = 0; i < haa.length; i++) {

                    if (haa[i] == ' Vietnam') {
                        haa.splice(i, 1);
                    }
                }
                var starttt = document.getElementById('autocomplete').innerHTML.split(",");
                for (i = 0; i < starttt.length; i++) {
                    if (starttt[i] == ' Ho Chi Minh' && starttt[i + 1] == ' Vietnam') {
                        starttt.splice(i, 1);
                    }
                }
                for (i = 0; i < starttt.length; i++) {

                    if (starttt[i] == ' Vietnam') {
                        starttt.splice(i, 1);
                    }
                }

                console.log(haa);
                document.getElementById('thebestwaygo').innerHTML = '';

                for (var i = 0; i < haa.length; i++) {

                    if (haa[i].indexOf('Quận 1') >= 0) {
                        // console.log('haa[i] === sumway[1]: ' + haa[i] + '::' + document.getElementById('autocomplete').innerHTML);
                        for (var j = i+1; j < haa.length; j++) {
                            document.getElementById('thebestwaygo').innerHTML += haa[j] + '->';
                            pathFinish.push({
                                location: haa[j],
                                stopover: true
                            });
                        }
                        for (var k = 0; k < i-1; k++) {
                            document.getElementById('thebestwaygo').innerHTML += haa[k + 1] + '->';
                            pathFinish.push({
                                location: haa[k + 1],
                                stopover: true
                            });
                        }
                        break;
                    }
                }

                  document.getElementById('thebestway').innerHTML = document.getElementById('thebestwaygo').innerHTML;
                    setTimeout(function(){
                        finishDraw(directionsService, directionsDisplay, sumway[0], pathFinish);
                    }, 1500);
            } else {

                for (var i = 1; i < sumway.length; i++) {
                    pointway.push({
                        location: sumway[i],
                        stopover: true
                    });
                    distanceList.push(-1);
                }
                calculateReturn = false;
                currentLevel = 0;
                currentTotalDistance = 0;
                path = [];
                path[0] = sumway[counter];
                sumway.splice(counter, 1);
                tmpSumway = sumway.slice(0);
                calculateNextDistance(directionsService);
                counter++;

            }
        }

    }, 100);
}