function initMap(data) {
    
  console.log(data)

  var locations = [];

  var cdmx = {lat: 19.4978, lng: -99.1269};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: cdmx  });

  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  for (i in data){
      locations.push({lat: Number(data[i].lat), lng: Number(data[i].lng)});
    }
  console.log(locations)

  var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
      position: {lat:Number(location.lat), lng:Number(location.lng)},
      label: labels[i % labels.length]
      });
    });
  
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
};