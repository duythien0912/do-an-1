function calculateAndDisplayRoutefortext(directionsService, directionsDisplay, x) {
    var pointway = [];
    distanceList = [];
    path = [];
    pathFinish = [];
    currentLevel = 0;
    currentTotalDistance = 0;
    flagOfNext = true;
    counter = 0;
    calculateReturn = false;
    listPath = [];
    listFinalDistance = [];

    calculateMainInterval = setInterval(function () {
        if (flagOfNext == true) {
            sumway = document.getElementById('output').innerHTML.split(",");
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
                for (var i = 0; i < haa.length; i++) {
                    if (haa[i] === sumway[0]) {
                        console.log('haa[i] === sumway[0]: ' + haa[i] + '::' + sumway[0]);
                        for (var j = i; j < haa.length; j++) {
                            document.getElementById('thebestwaygo').innerHTML += haa[j] + '->';
                            pathFinish.push({
                                location: haa[j],
                                stopover: true
                            });
                        }
                        for (var k = 0; k < i; k++) {
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

                pathFinish.pop();
                pathFinish.shift();

                finishDraw(directionsService, directionsDisplay, sumway[0], pathFinish);
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


function finishCalculateDistance(directionsService) {
    finishLoop = setInterval(function () {
        // console.log(distanceList);
        // console.log("outside if "+calculateReturn);
        if ((typeof (distanceList[tmpSumway.length - 1]) != "undefined" &&
                distanceList[tmpSumway.length - 1] != null &&
                distanceList[tmpSumway.length - 1] > -1) ||
            calculateReturn == true) {

            //  console.log("inside if "+calculateReturn);
            if (tmpSumway.length > 0) {
                window.clearInterval(finishLoop);
                currentLevel++;
                path[currentLevel] = tmpSumway[distanceList.indexOf(Math.min(...distanceList))];
                currentTotalDistance += Math.min(...distanceList);
                tmpSumway.splice(distanceList.indexOf(Math.min(...distanceList)), 1);
                if (tmpSumway.length == 0 && calculateReturn == false) {
                    calculateReturn = true;
                    tmpSumway.push(path[0]);
                }
                calculateNextDistance(directionsService);
            } else {
                console.log("end of 1 path");
                console.log(path);
                console.log(currentTotalDistance);
                window.clearInterval(finishLoop);
                listPath.push(path.join());
                listFinalDistance.push(currentTotalDistance);

                flagOfNext = true;
            }
        }
    }, 100);
}

function calculateNextDistance(directionsService) {
    flagOfNext = false;
    distanceList = [];
    distanceToBegin = -1;
    for (var i = 0; i < tmpSumway.length; i++) {
        distanceList.push(-1);
    }
    for (var i = 0; i < tmpSumway.length; i++) {
        calcDistance(directionsService, path[currentLevel], tmpSumway[i], (i));
    }
    finishCalculateDistance(directionsService);
}

// finishCalculateDistance(directionsService);


function finishDraw(directionsService, directionsDisplay, startlocation, pointway) {
    directionsService.route({
        origin: startlocation,
        destination: startlocation,
        waypoints: pointway,
        optimizeWaypoints: false,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {

            directionsDisplay.setDirections(response);
            var route = response.routes[0];
            var summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = '';
            // For each route, display summary information.
            for (var i = 0; i < route.legs.length; i++) {
                var routeSegment = i + 1;
                summaryPanel.innerHTML += '<b>Tuyến đường: ' + routeSegment +
                    '</b><br>';
                summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
                summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
                summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
            }
        } else {
            window.alert(' Bị lỗi ' + status + ' xin hãy thử lại sau ');
        }
    });
}