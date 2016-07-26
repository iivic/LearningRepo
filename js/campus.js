$.ajax({
    type: "POST",
    url: "json/information.json",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    mimeType: "application/json",
    success: function(jsonData) {
        $.each(jsonData, function(index, value){
            var loc = window.location.pathname,
                dir = loc.substring(0, loc.lastIndexOf('/'));
            $('.faculties').append('' +
                '<div class="faculty-content">' +
                    '<img class="faculty-img" src="'+ dir + value.img +'">' +
                    '<div class="faculty-info">' +
                        '<p class="faculty-name">' + value.name + '</p>' +
                        '<p class="faculty-address">' + value.address + '</p>' +
                        '<div data-lng=' + value.location.lng + ' data-lat=' + value.location.lat + '></div>' +
                    '</div>' +
                '</div>'
            );
        })
    },
    error: function (xhr, textStatus, errorThrown) {
        window.alert(xhr.responseText);
    }
});

google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
    var splitPos = new google.maps.LatLng(43.5244521, 16.4736719);

    // Create a map object and specify the DOM element for display.
    new google.maps.Map($('#mapCampus')[0], {
        center: splitPos,
        scrollwheel: false,
        zoom: 12
    });
}

$(function() {
    var lng, lat, location, map;
    $('.faculty-info').click(function() {
        lng = $(this).children('div').attr('data-lng');
        lat = $(this).children('div').attr('data-lat');
        location = {lat: parseFloat(lat), lng: parseFloat(lng)};

        map = new google.maps.Map($('#mapCampus')[0], {
            center: location,
            zoom: 14
        });

        new google.maps.Marker({
            map: map,
            position: location
        });
    });
});
