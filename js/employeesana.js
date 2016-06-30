var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 37.365937, lng: -89.017761},
            zoom: 10,
            zoomControl: false,
            scaleControl: false,
            disableDefaultUI: true
    });
        
    var cypressStore = {lat: 37.464647, lng: -89.223659};
    var billyDalton = {lat: 37.539173, lng: -88.805190};
    var ritaDunning  = {lat: 37.435574, lng: -88.735117};
    var davidGarren  = {lat: 37.555838, lng: -88.73565};
    var deborahGreen  = {lat: 37.349702, lng: -89.029470};
    var cecilHammontree  = {lat: 36.932408, lng: -89.559396};
    var clayHarris = {lat: 37.380277, lng: -89.099200};
    var warrenLofton = {lat: 37.540022, lng: -89.290964};
    var dustyMiller = {lat: 37.396998, lng: -89.299613};
    var jefferySims = {lat: 37.622788, lng: -88.818503};
    var gaylonStricklin  = {lat: 37.658275, lng: -88.573134};
    
    var greenMarker = "https://mt.google.com/vt/icon?psize=20&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=48&scale=1&text=%E2%80%A2";
    
    var cypressMarker = new google.maps.Marker({
        position: cypressStore,
        map: map,
        icon: greenMarker,
        animation: google.maps.Animation.DROP,
        title: 'Cypress Store'
    });

    var billyDaltonMarker = new google.maps.Marker({
        position: billyDalton,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Billy Dalton'
    });

    var ritaDunningMarker = new google.maps.Marker({
        position: ritaDunning,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Rita Dunning'
    });

    var davidGarrenMarker = new google.maps.Marker({
        position: davidGarren,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'David Garren'
    });

    var deborahGreenMarker = new google.maps.Marker({
        position: deborahGreen,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Deborah Green'
    });
    
    var cecilHammontreeMarker = new google.maps.Marker({
        position: cecilHammontree,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Cecil Hammontree'
    });

    var clayHarrisMarker = new google.maps.Marker({
        position: clayHarris,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Clay Harris'
    });

    var warrenLoftonMarker = new google.maps.Marker({
        position: warrenLofton,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Warren Lofton'
    });

    var dustyMillerMarker = new google.maps.Marker({
        position: dustyMiller,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Dusty Miller'
    });

    var jefferySimsMarker = new google.maps.Marker({
        position: jefferySims,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Jeffery Sims'
    });

    var gaylonSticklinMarker = new google.maps.Marker({
        position: gaylonStricklin,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Gaylon Sticklin'
    });

}