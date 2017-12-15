function returnbestway(directionsService, directionsDisplay, x) {
    var delayInMilliseconds = 500; //1 second
    var bestway;
    var strlong = [];
    var sumway = [];
    var sumwaydetail = [];

    setTimeout(function () {
      sumway = document.getElementById('findthebestway').innerHTML.split("@");
      sumway.splice(-1, 1);
      var sreee = [];
      var hehehe;
      hehehe = document.getElementById('thebestway').innerHTML.split("@");
      console.log('hehehe.length' + hehehe.length);
      sreee = [];
      for (var i = 0; i < sumway.length; i++) {
        sumwaydetail.push(sumway[i].split(";"));
        sumwaydetail[i].splice(-1, 1);
        if (sumwaydetail[i][0] != 0) {
            if (sumwaydetail[i][2] != hehehe[0] && sumwaydetail[i][2] != hehehe[1] && sumwaydetail[i][2] !=
              hehehe[3] && sumwaydetail[i][2] != hehehe[4]) {
              sreee.push(sumwaydetail[i][0]);
          }
        }
      }

      console.log(sreee + ': sreee');

      var min_of_array = Math.min.apply(Math, sreee);
      console.log('Math.min : ' + min_of_array);
      console.log(sumwaydetail);
      console.log('hehehe : ' + hehehe);
      for (var i = 0; i < sumwaydetail.length; i++) {
        if (sumwaydetail[i][0] == min_of_array) {
          bestway = sumwaydetail[i][2];
        }
      }

      console.log(bestway);
      document.getElementById('thebestway').innerHTML += bestway + '@';
      console.log('best: ' + document.getElementById('thebestway').innerHTML);
      allway = document.getElementById('thebestway').innerHTML.split("@");
      allway.splice(-1, 1);
      console.log(allway);

    }, delayInMilliseconds);
  }
