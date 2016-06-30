var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 37.8377740, lng: -88.930985},
            zoom: 9,
            zoomControl: false,
            scaleControl: false,
    });
        
        var nobbeScott          = {lat: 37.224775, lng: -89.554258};
        var nobbeSteeleville    = {lat: 38.014125, lng: -89.695985};
        var mcleanBenton        = {lat: 38.037997, lng: -88.921299};
        var mcleanNorris        = {lat: 37.96726, lng: -88.327738};
        var mcleanWayne         = {lat: 38.344861, lng: -88.588437};
        var mcleanAlbion        = {lat: 38.971261, lng: -88.050481};
        var mcleanFlora         = {lat: 38.672724, lng: -88.454046};
        var hutsonCypress       = {lat: 37.360281, lng: -89.018007};
        var hutsonMayfield      = {lat: 36.725433, lng: -88.661669};
        var hutsonPaducah       = {lat: 37.084924, lng: -88.693035};
        var hutsonMorganfield   = {lat: 37.680242, lng: -87.936677};
        var hutsonPoseyville    = {lat: 38.179658, lng: -87.781866};
        var annaJonesboro       = {lat: 37.464711, lng: -89.223538};
        var idealLawn           = {lat: 37.751713, lng: -88.974401};
        var greenwayCharleston  = {lat: 36.840728, lng: -89.357027};
        var fourEquipment       = {lat: 38.090502, lng: -88.552001};
        var agripowerVergennes  = {lat: 37.908655, lng: -89.333624};
        var bakerImplement      = {lat: 37.296569, lng: -89.554845};
        var medlinEquipment     = {lat: 36.923041, lng: -89.32039};
        var michaelsEquipment   = {lat: 37.278267, lng: -88.676244};
        var pappysOutdoor       = {lat: 37.743727, lng: -88.984357};
        var macafoos            = {lat: 37.993814, lng: -88.896495};
        var littleTractor       = {lat: 37.169677, lng: -88.746181};
        var perryvilleOutdoor   = {lat: 37.740346, lng: -89.871909};
        var davisFarmJackson    = {lat: 37.440195, lng: -89.637602};
        var davisFarmPerryville = {lat: 37.742184, lng: -89.859215};
        var msImplement         = {lat: 37.722074, lng: -88.536606};
        var hoyerOutdoor        = {lat: 37.126316, lng: -88.595018};
        var colemanEquipment    = {lat: 37.725723, lng: -89.213981};
        var whayneSupply        = {lat: 37.097056, lng: -88.620499};
        var holtAgriBusiness    = {lat: 36.867435, lng: -89.553882};
        var heurSons            = {lat: 37.281483, lng: -89.558218};
        
        var greenMarker = "https://mt.google.com/vt/icon?psize=20&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=48&scale=1&text=%E2%80%A2";
        
    

        var nobbeScottMarker = new google.maps.Marker({
            position: nobbeScott,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'Wm Nobbe Co.'
        });
        
        nobbeScottMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wm Nobe Co.</h1><hr>'+ 
            '<h3>Scott City, MO</h3>';
        });
        
        var nobbeSteelevilleMarker = new google.maps.Marker({
            position: nobbeSteeleville,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'Wm Nobbe Co.'
        });
        
        nobbeSteelevilleMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wm Nobe Co.</h1><hr>'+ 
            '<h3>Steeleville, MO</h3>';
        });
        
        var mcleanBentonMarker = new google.maps.Marker({
            position: mcleanBenton,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'McLean Implement.'
        });
        
        mcleanBentonMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>McLean Implement</h1><hr>'+ 
            '<h3>Benton, IL</h3>';
        });
       
        var mcleanNorrisMarker = new google.maps.Marker({
            position: mcleanNorris,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'McLean Implement.'
        });
        
        mcleanNorrisMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>McLean Implement</h1><hr>'+ 
            '<h3>Norris City, IL</h3>';
        });
        
        var mcleanWyaneMarker = new google.maps.Marker({
            position: mcleanWayne,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'McLean Implement.'
        });
        
        mcleanWyaneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>McLean Implement</h1><hr>'+ 
            '<h3>Wayne City, IL</h3>';
        });
        
        var mcleanAlbionMarker = new google.maps.Marker({
            position: mcleanAlbion,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'McLean Implement.'
        });
        
        mcleanAlbionMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>McLean Implement</h1><hr>'+ 
            '<h3>Albion, IL</h3>';
        });
        
        var mcleanFloraMarker = new google.maps.Marker({
            position: mcleanFlora,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'McLean Implement.'
        });
        
        mcleanFloraMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>McLean Implement</h1><hr>'+ 
            '<h3>Flora, IL</h3>';
        });
        
        var hutsonCypressMarker = new google.maps.Marker({
            position: hutsonCypress,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonCypressMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Cypress, IL</h3>';
        });
        
        var hutsonMayfieldMarker = new google.maps.Marker({
            position: hutsonMayfield,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonMayfieldMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Mayfield, KY</h3>';
        });
        
        var hutsonPaducahMarker = new google.maps.Marker({
            position: hutsonPaducah,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonPaducahMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Paducah, KY</h3>';
        });
        
        var hutsonMorganfieldMarker = new google.maps.Marker({
            position: hutsonMorganfield,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonMorganfieldMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Morganfield, KY</h3>';
        });
        
        var hutsonPoseyvilleMarker = new google.maps.Marker({
            position: hutsonPoseyville,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonPoseyvilleMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Poseyville, IN</h3>';
        });
        
        var annaJonesboroMarker = new google.maps.Marker({
            position: annaJonesboro,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        annaJonesboroMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Anna Jonesboro Motor Co.</h1><hr>'+ 
            '<h3>Anna, IL</h3>';
        });
        
        var idealLawnMarker = new google.maps.Marker({
            position: idealLawn,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'Ideal Lawn and Tractor'
        });
        
        idealLawnMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Ideal Lawn and Tractor</h1><hr>'+ 
            '<h3>Marion, IL</h3>';
        });
        
        var greenwayCharlestonMarker = new google.maps.Marker({
            position: greenwayCharleston,
            map: map,
            icon: greenMarker,
            animation: google.maps.Animation.DROP,
            title: 'Greenway Equipment'
        });
        
        greenwayCharlestonMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Greenway Equipment</h1><hr>'+ 
            '<h3>Charleston, MO</h3>';
        });
        
        var fourEquipmentMarker = new google.maps.Marker({
            position: fourEquipment,
            map: map,
            animation: google.maps.Animation.DROP,
            title: '4R Equipment'
        });
        
        fourEquipmentMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>4R Equipment</h1><hr>'+ 
            '<h3>McLeansboro, IL</h3>';
        });
        
        var agripowerVergennesMarker = new google.maps.Marker({
            position: agripowerVergennes,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'H&R Agri-Power'
        });
        
        agripowerVergennesMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>H&R Agri-Power</h1><hr>'+ 
            '<h3>Vergennes, IL</h3>';
        });
        
        var bakerImplementMarker = new google.maps.Marker({
            position: bakerImplement,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Baker Implement Co.'
        });
        
        bakerImplementMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Baker Implement Co.</h1><hr>'+ 
            '<h3>Cape Girardeau, MO</h3>';
        });
        
        var medlinEquipmentMarker = new google.maps.Marker({
            position: medlinEquipment,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Medline Equipment Co.'
        });
        
        medlinEquipmentMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Medlin Equipment Co.</h1><hr>'+ 
            '<h3>Charleston, IL</h3>';
        });
        
        var michealsEquipmentMarker = new google.maps.Marker({
            position: michaelsEquipment,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Micheals Equipment'
        });
        
        michealsEquipmentMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Micheals Equipment</h1><hr>'+ 
            '<h3>Metropolis, IL</h3>';
        });
        
        var pappysOutdoorMarker = new google.maps.Marker({
            position: pappysOutdoor,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Pappy\'s Outdoor'
        });
        
        pappysOutdoorMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Pappy\'s Outdoor</h1><hr>'+ 
            '<h3>Marion, IL</h3>';
        });
        
        var mcafoosMarker = new google.maps.Marker({
            position: macafoos,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'F.B. McAfoos & Co.'
        });
        
        mcafoosMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>F.B. McAfoos & Co.</h1><hr>'+ 
            '<h3>Benton, IL</h3>';
        });
        
        var littleTractorMarker = new google.maps.Marker({
            position: littleTractor,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Little Tractor & Equipment'
        });
        
        littleTractorMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Little Tractor & Equipment</h1><hr>'+ 
            '<h3>Metropolis, IL</h3>';
        });
        
        var perryvilleOutdoorMarker = new google.maps.Marker({
            position: perryvilleOutdoor,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Perryville Outdoor Products'
        });
        
        perryvilleOutdoorMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Perryville Outdoor Products</h1><hr>'+ 
            '<h3>Perryville, MO</h3>';
        });
        
        var davisFarmJacksonMarker = new google.maps.Marker({
            position: davisFarmJackson,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Davis Farm Supply'
        });
        
        davisFarmJacksonMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Davis Farm Supply</h1><hr>'+ 
            '<h3>Jackson, MO</h3>';
        });
        
        var davisFarmPerryvilleMarker = new google.maps.Marker({
            position: davisFarmPerryville,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Davis Farm Supply'
        });
        
        davisFarmPerryvilleMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Davis Farm Supply</h1><hr>'+ 
            '<h3>Perryville, MO</h3>';
        });
        
        var msImplementMarker = new google.maps.Marker({
            position: msImplement,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'M&S Implement Co.'
        });
        
        msImplementMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>M&S Implement Co.</h1><hr>'+ 
            '<h3>Harrisburg, IL</h3>';
        });
        
        var hoyerOutdoorMarker = new google.maps.Marker({
            position: hoyerOutdoor,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Hoyer Outdoor Equipment'
        });
        
        hoyerOutdoorMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hoyer Outdoor Equipment</h1><hr>'+ 
            '<h3>Brookport, IL</h3>';
        });
        
        var colemanEquipmentMarker = new google.maps.Marker({
            position: colemanEquipment,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Coleman Lawn Equipment'
        });
        
        colemanEquipmentMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Coleman Lawn Equipment</h1><hr>'+ 
            '<h3>Carbondale, IL</h3>';
        });
        
        var whayneSupplyMarker = new google.maps.Marker({
            position: whayneSupply,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Coleman Lawn Equipment'
        });
        
        whayneSupplyMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Whayne Supply</h1><hr>'+ 
            '<h3>Paducah, KY</h3>';
        });
        
        var holtAgriBusinessMarker = new google.maps.Marker({
            position: holtAgriBusiness,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Holt AgriBusiness'
        });
        
        holtAgriBusinessMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Holt AgriBusiness</h1><hr>'+ 
            '<h3>Sikeston, MO</h3>';
        });
        
        var heurSonsMarker = new google.maps.Marker({
            position: heurSons,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Heuer Sons Implement'
        });
        
        heurSonsMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Heuer Sons Implement</h1><hr>'+ 
            '<h3>Cape Girardeau, MO</h3>';
        });
        
        
}