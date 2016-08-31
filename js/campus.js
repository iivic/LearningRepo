function initializeMap(mapElement) {
    // Create a map object and specify the DOM element for display.
    createGoogleMap(mapElement, SPLIT_POS, 12);
}

$(function() {
    var lng, lat, location, map,
        facultiesTemplate = $("#facultiesTemplate").html(),
        mapElement = $('#mapCampus');

    initializeMap(mapElement);

    $.ajax({
        type: "POST",
        url: "json/information.json",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        mimeType: "application/json",
        success: function(jsonData) {
            $.each(jsonData, function(index, value){
                $('.faculties').append( _.template( facultiesTemplate, value ));
            })
        },
        error: function (xhr, textStatus, errorThrown) {
            window.alert(xhr.responseText);
        }
    });

    $('body').on('click', '.faculty-info', function() {
        lng = $(this).children('div').attr('data-lng');
        lat = $(this).children('div').attr('data-lat');
        location = {lat: parseFloat(lat), lng: parseFloat(lng)};

        map = createGoogleMap(mapElement, location, 14);

        createGoogleMarker(map, location);
    });
});
