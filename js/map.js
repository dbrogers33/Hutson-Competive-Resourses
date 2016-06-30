var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 37.365937, lng: -89.017761},
            zoom: 10,
            zoomControl: false,
            scaleControl: false,
            disableDefaultUI: true
    });
        
        var alexander = {lat: 37.189363, lng: -89.346294};
        var pulaski = {lat: 37.209139, lng: -89.133787};
        var massac = {lat: 37.219773, lng: -88.702755};
        var pope = {lat: 37.427223, lng: -88.572443};
        var johnson = {lat: 37.459877, lng: -88.867756};
        var jackson = {lat: 37.778104, lng: -89.375931};
        var union = {lat: 37.454719, lng: -89.246678};
        var williamson = {lat: 37.725484, lng: -88.933685};
        
        var alexanderMarker = new google.maps.Marker({
            position: alexander,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Alexander County'
        });
        
        alexanderMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Alexander County</h1><hr>'+ 
            '<h3>Total</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>208</li>'+
                '<li><b>Estimated Value: </b>$13,008,000</li>'+
                '<li><b>Average Price of Unit: </b>$62,538</li>'+
            '</ul>'+
            '<h3>Large Ag</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>79</li>'+
                '<li><b>Estimated Value: </b>$10,973,000</li>'+
                '<li><b>Average Price of Unit: </b>$138,899</li>'+
            '</ul>';
        });
        
        var pulaskiMarker = new google.maps.Marker({
            position: pulaski,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Pulaski County'
        });
        
        pulaskiMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Pulaski County</h1><hr>'+  
            '<h3>Total</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>343</li>'+
                '<li><b>Estimated Value: </b>$21,500,000</li>'+
                '<li><b>Average Price of Unit: </b>$62,682</li>'+
            '</ul>'+
            '<h3>Large Ag</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>124</li>'+
                '<li><b>Estimated Value: </b>$18,178,000</li>'+
                '<li><b>Average Price of Unit: </b>$146,580</li>'+
            '</ul>';
        });
        
        var massacMarker = new google.maps.Marker({
            position: massac,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Massac County'
        });
        
         massacMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Massac County</h1><hr>'+  
            '<h3>Total</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>394</li>'+
                '<li><b>Estimated Value: </b>$16,865,000</li>'+
                '<li><b>Average Price of Unit: </b>$42,804</li>'+
            '</ul>'+
            '<h3>Large Ag</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>92</li>'+
                '<li><b>Estimated Value: </b>$12,538,000</li>'+
                '<li><b>Average Price of Unit: </b>$136,282</li>'+
            '</ul>';
        });
        
        var popeMarker = new google.maps.Marker({
            position: pope,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Pope County'
        });
        
         popeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Pope County</h1><hr>'+  
            '<h3>Total</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>154</li>'+
                '<li><b>Estimated Value: </b>$5,194,000</li>'+
                '<li><b>Average Price of Unit: </b>$33,727</li>'+
            '</ul>'+
            '<h3>Large Ag</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>18</li>'+
                '<li><b>Estimated Value: </b>$2,240,000</li>'+
                '<li><b>Average Price of Unit: </b>$124,444</li>'+
            '</ul>';
        });
        
        var johnsonMarker = new google.maps.Marker({
            position: johnson,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Johnson County'
        });
        
         johnsonMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Johnson County</h1><hr>'+  
            '<h3>Total</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>572</li>'+
                '<li><b>Estimated Value: </b>$15,319,000</li>'+
                '<li><b>Average Price of Unit: </b>$26,781</li>'+
            '</ul>'+
            '<h3>Large Ag</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>80</li>'+
                '<li><b>Estimated Value: </b>$7,398,000</li>'+
                '<li><b>Average Price of Unit: </b>$92,475</li>'+
            '</ul>';
        });
        
        var jacksonMarker = new google.maps.Marker({
            position: jackson,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Jackson County'
        });
        
         jacksonMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Jackson County</h1><hr>'+  
            '<h3>Total</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>1275</li>'+
                '<li><b>Estimated Value: </b>$76,225,000</li>'+
                '<li><b>Average Price of Unit: </b>$59,784</li>'+
            '</ul>'+
            '<h3>Large Ag</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>392</li>'+
                '<li><b>Estimated Value: </b>$62,646,000</li>'+
                '<li><b>Average Price of Unit: </b>$159,811</li>'+
            '</ul>';
        });
        
        var unionMarker = new google.maps.Marker({
            position: union,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Union County'
        });
        
         unionMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Union County</h1><hr>'+  
            '<h3>Total</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>734</li>'+
                '<li><b>Estimated Value: </b>$29,071,000</li>'+
                '<li><b>Average Price of Unit: </b>$39,606</li>'+
            '</ul>'+
            '<h3>Large Ag</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>149</li>'+
                '<li><b>Estimated Value: </b>$19,111,000</li>'+
                '<li><b>Average Price of Unit: </b>$128,261</li>'+
            '</ul>';
        });
        
        var williamsonMarker = new google.maps.Marker({
            position: williamson,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Williamson County'
        });
        
         williamsonMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Williamson County</h1><hr>'+  
            '<h3>Total</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>1051</li>'+
                '<li><b>Estimated Value: </b>$19,032,000</li>'+
                '<li><b>Average Price of Unit: </b>$18,108</li>'+
            '</ul>'+
            '<h3>Large Ag</h3>'+
            '<ul>'+
                '<li><b>Units Sold: </b>74</li>'+
                '<li><b>Estimated Value: </b>$9,217,000</li>'+
                '<li><b>Average Price of Unit: </b>$124,554</li>'+
            '</ul>';
        });
        
        var alexanderLayer = new google.maps.KmlLayer({
            url: 'http://theplacename.com/download/file/Alexander-County-49220.kml',
            map: map
        });
        
        var pulaskiLayer = new google.maps.KmlLayer({
            url: 'http://theplacename.com/download/file/Pulaski-County-49638.kml',
            map: map
        });
        
        var massacLayer = new google.maps.KmlLayer({
            url: 'http://theplacename.com/download/file/Massac-County-50164.kml',
            map: map
        });
        
        var johnsonLayer = new google.maps.KmlLayer({
            url: 'http://theplacename.com/download/file/Johnson-County-49102.kml',
            map: map
        });
        
        var unionLayer = new google.maps.KmlLayer({
            url: 'http://theplacename.com/download/file/Union-County-48133.kml',
            map: map
        });
        
        var popeLayer = new google.maps.KmlLayer({
            url: 'http://theplacename.com/download/file/Pope-County-50438.kml',
            map: map
        });
        
        var jacksonLayer = new google.maps.KmlLayer({
            url: 'http://theplacename.com/download/file/Jackson-County-48079.kml',
            map: map
        });
        
        var williamsonLayer = new google.maps.KmlLayer({
            url: 'http://theplacename.com/download/file/Williamson-County-49361.kml',
            map: map
        });
}