function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: {
        lat: 10.746903,
        lng: 106.676292
      }
    });
    var search = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete')), {
        types: ['geocode']
      });
    var search = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete2')), {
        types: ['geocode']
      });

    var x = 1;
    directionsDisplay.setMap(map);
    document.getElementById('submit-2').addEventListener('click', function () {
      newway(x);
      x += 1;
    });
    document.getElementById('submit').parentElement.addEventListener('click', function () {
      document.getElementById('thebestway').innerHTML = '';
      document.getElementById('directions-panel').innerHTML = '';
      calculateAndDisplayRoute(directionsService, directionsDisplay, x);
    });
    document.getElementById('submittest').parentElement.addEventListener('click', function () {
      calculateAndDisplayRoutefortext(directionsService, directionsDisplay, x);
      
    });
    document.getElementById('submitinput').parentElement.addEventListener('click', function () {
      document.getElementById('thebestway').innerHTML = '';
      document.getElementById('directions-panel').innerHTML = '';
      calculateAndDisplayRoutefortext(directionsService, directionsDisplay, x);

    });
    


  }
