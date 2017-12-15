
    function calculateAndDisplayRoute3(directionsService, directionsDisplay, x) {
      var pointway = [];

      var bestsumway = document.getElementById('thebestway').innerHTML.split("@");
      bestsumway.splice(-1, 1);
      console.log('sadsad');
      console.log(bestsumway.length);

      for (var i = 0; i < bestsumway.length; i++) {
        pointway.push({
          location: bestsumway[i],
          stopover: true
        });

      }


      directionsService.route({
        origin: document.getElementById('autocomplete').value,
        destination: document.getElementById('autocomplete').value,
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
    function calculateNextDistance(directionsService) {
      flagOfNext = false;
      // console.log(path);
      //   console.log(tmpSumway);
      //   console.log(currentLevel);
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
  