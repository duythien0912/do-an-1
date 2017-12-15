function newway(x) {
    var summaryPanel = document.getElementById('add-new');

    summaryPanel.innerHTML += '<input class="inputbox" id="searchboxx' + x + '"  placeholder="" type="text"></input>';

    var inputs = document.getElementsByClassName('inputbox');

    var options = {
      componentRestrictions: {
        country: 'vn'
      },
    };

    var autocompletes = [];

    for (var i = 0; i < inputs.length; i++) {
      var autocomplete = new google.maps.places.Autocomplete(inputs[i], options);
      autocomplete.inputId = inputs[i].id;
      autocomplete.addListener('place_changed', fillIn);
      autocompletes.push(autocomplete);
    }

    function fillIn() {
      console.log(this.inputId);
      var place = this.getPlace();
      console.log(place.address_components[0].long_name);
    }
  }