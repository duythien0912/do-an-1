function calcDistance(directionsService, fromway, toway,counter) {
    document.getElementById('findthebestway').innerHTML = '';
    directionsService.route({
      origin: fromway,
      destination: toway,
      travelMode: 'DRIVING'
    }, function (response, status) {
      var sum = [];
      if (status === 'OK') {
        var route = response.routes[0];
        // For each route, display summary information.
        for (var i = 0; i < route.legs.length; i++) {
          sum.push({
            k: route.legs[i].distance.value,
          });
          // console.log(route.legs[i].start_address + ' -> ' + route.legs[i].end_address + ' = ' + sum[i].k);
          // console.log(sum[i].k);
          document.getElementById('findthebestway').innerHTML += sum[i].k + ';' + route.legs[i].start_address +
            ';' + route.legs[i].end_address + ';' + '@';
            if(distanceList[counter]==-1){
              distanceList[counter] = sum[i].k;
            } else{
              distanceList[counter] += sum[i].k;
            }
            
        }
      } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) { 
        setTimeout(function(){
          calcDistance(directionsService, fromway, toway,counter);
        }, 1000);
        //alert("OQL: " + status);
       }
    });
  }