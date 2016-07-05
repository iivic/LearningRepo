/**
 * Created by ivanivic on 09/05/16.
 */
// GOOGLE MAPS
var mapLocation, mapPath, mapLocationMarker,
    manasPosition = {lat: 43.5244521, lng: 16.4736719};

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: 'Vukovarska ul. 199 21000, Split',
        destination: 'Sarajevska ul. 46C 21000, Split',
        travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });

}

function initMap() {
    var directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer;

    mapLocation = new google.maps.Map(document.getElementById('mapLocation'), {
        center: manasPosition,
        scrollwheel: false,
        zoom: 15
    });

    // Create a marker and set its position.
    mapLocationMarker = new google.maps.Marker({
        map: mapLocation,
        position: manasPosition,
        title: 'Manas'
    });

    mapPath = new google.maps.Map(document.getElementById('mapPath'), {
        center: mapLocation,
        scrollwheel: false,
        zoom: 15
    });
    directionsDisplay.setMap(mapPath);
    calculateAndDisplayRoute(directionsService, directionsDisplay);
}
