function createGoogleMap(el, centerPos, zoom) {
    return new google.maps.Map(el[0], {
        center: centerPos,
        scrollwheel: false,
        zoom: zoom
    });
}

function createGoogleMarker(map, location, title='Default title') {
    return new google.maps.Marker({
        map: map,
        position: location,
        title: title
    });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: DIRECTIONS_SERVICE_ORIGIN,
        destination: DIRECTIONS_SERVICE_DESTINATION,
        travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });

}
