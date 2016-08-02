google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
    var mapLocation, mapPath;

    mapLocation = createGoogleMap($('#mapLocation'), MANAS_POS, 15);

    createGoogleMarker(mapLocation, MANAS_POS, 'Manas');

    mapPath = createGoogleMap($('#mapPath'), MANAS_POS, 15);

    DIRECTIONS_DISPLAY.setMap(mapPath);
    calculateAndDisplayRoute(DIRECTIONS_SERVICE, DIRECTIONS_DISPLAY);
}
