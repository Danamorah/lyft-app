



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    // mi ubicacion
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    // pin
    //var pin = "https://mapbuildr.com/assets/img/markers/default.png";
    //mostrar mapa

    //var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=17&size=800x500&sensor=false&markers";

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=label:S%7C40.702147,-74.015794"

    document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

getLocation();




// pruebas geo



// google maps

/*

//obtener la lat y lng y mostrarla por consola

navigator.geolocation.getCurrentPosition(function(position) {
    // mi ubicacion
    window.latitude = position.coords.latitude;
    window.longitude = position.coords.longitude;
    console.log( latitude + "," + longitude );


    //

})
/*

/*
google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {

    var lat = 36.208823;
    var lng = -106.483155;
    var mapOptions = {
        //center: new google.maps.LatLng(-33.371825,-70.680085),
        center: new google.maps.LatLng(lat, lng),
        zoom: 10,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: true,
        scrollwheel: true,
        panControl: true,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
        ['casa', 'undefined', 'undefined', 'undefined', 'undefined', lat, lng, 'https://mapbuildr.com/assets/img/markers/default.png']
    ];
    for (i = 0; i < locations.length; i++) {
        if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
        marker = new google.maps.Marker({
            icon: markericon,
            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
            map: map,
            title: locations[i][0],
        });
        link = '';     }

}
*/

/*
function initMap() {
    var lat = 36.208823;
    var lng = -106.483155;



    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: (lat, lng)
    });

    var marker = new google.maps.Marker({
        position: (lat, lng),
        map: map,
        title: 'Hello World!'
    });
}

initMap();

/*
function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}
*/






