

var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 37.365937, lng: -89.017761},
            zoom: 7,
            zoomControl: false,
            scaleControl: false,
    });
        
        var pinColor = "007507";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
        
        var pinMclean = "fff600";
        var pinYellow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinMclean,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
        
        var pinHutson = "000000";
        var pinBlack = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinHutson,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

        
        var AnnaJonesboro  = {lat: 37.463655, lng: -89.2199};
        var idealLawn = {lat: 37.745068, lng: -88.969802};
        var wrightImplementOne = {lat: 37.740332, lng: -87.149361};
        var wrightImplementTwo  = {lat: 36.929065, lng: -86.422804};
        var wrightImplementThree  = {lat: 37.764039, lng: -86.461411};
        var wrightImplementFour  = {lat: 37.013606, lng: -85.958802};
        var wrightImplementFive  = {lat: 38.220101, lng: -86.148049};
        var wrightImplementSix  = {lat: 38.956117, lng: -85.903904};
        var wrightImplementSeven  = {lat: 38.595682, lng: -86.335335};
        var allianceTractorOne  = {lat: 38.645269, lng: -87.531016};
        var allianceTractorTwo  = {lat: 38.990635, lng: -88.176305};
        var allianceTractorThree  = {lat: 39.454029, lng: -88.37807};
        var allianceTractorFour  = {lat: 39.307046, lng: -87.991734};
        var ahwOne  = {lat: 39.765975, lng: -87.236944};
        var ahwTwo  = {lat: 39.531711, lng: -88.027879};
        var tennesseeTractorOne  = {lat: 36.445546, lng: -89.064712};
        var tennesseeTractorTwo  = {lat: 36.304792, lng: -88.844154};
        var tennesseeTractorThree  = {lat: 36.267895, lng: -88.282091};
        var tennesseeTractorFour  = {lat: 35.805416, lng: -89.106545};
        var tennesseeTractorFive  = {lat: 35.577257, lng: -89.246282};
        var tennesseeTractorSix  = {lat: 36.066253, lng: -89.371107};
        var tennesseeTractorSeven  = {lat: 35.709724, lng: -88.835749};
        var tennesseeTractorEight  = {lat: 35.233688, lng: -89.440535};
        var tennnesseTractorNine  = {lat: 35.763735, lng: -89.545777};
        var tennesseeTractorTen  = {lat: 36.00578, lng: -88.94786};
        var wmNobbeCompanyOne  = {lat: 37.224983, lng: -89.554122};
        var wmNobbeCompanyTwo  = {lat: 37.938643, lng: -90.123057};
        var wmNobbeCompanyThree  = {lat: 38.007273, lng: -89.658433};
        var wmNobbeCompanyFour  = {lat: 37.813257, lng: -90.448904};
        var wmNobbeCompanyFive  = {lat: 38.296791, lng: -90.14503};
        var mcleanOne  = {lat: 38.037996, lng: -88.921635};
        var mcleanTwo  = {lat: 37.968674, lng: -88.328618};
        var mcleanThree  = {lat: 38.345326, lng: -88.587831};
        var mcleanFour  = {lat: 38.335108, lng: -88.026617};
        var mcleanFive  = {lat: 38.666987, lng: -88.503334};
        var greenwayOne  = {lat: 36.883324, lng: -89.531903};
        var greenwayTwo  = {lat: 36.788341, lng: -89.899555};
        var greenwayThree  = {lat: 36.84067, lng: -89.357144};
        var greenwayFour  = {lat: 36.756999, lng: -90.392888};
        var greenwayFive  = {lat: 36.547142, lng: -89.967155};
        var legacyOne  = {lat: 36.411701, lng: -90.588454};
        var legacyTwo  = {lat: 36.374834, lng: -90.188541};
        var legacyThree  = {lat: 36.234158, lng: -90.038777};
        var legacyFour  = {lat: 36.055543, lng: -90.510511};
        var legacyFive  = {lat: 36.425341, lng: -89.699526};
        var legacySix  = {lat: 36.298916, lng: -89.709198};
        var legacySeven  = {lat: 36.586449, lng: -89.527855};
        var trigreenOne  = {lat: 36.307517, lng: -86.634642};
        var trigreenTwo  = {lat: 35.925969, lng: -86.875734};
        var trigreenThree  = {lat: 36.230512, lng: -86.504118};
        var trigreenFour  = {lat: 35.586756, lng: -87.039372};
        var trigreenFive  = {lat: 35.828392, lng: -86.40601};
        var reynolds  = {lat: 39.593572, lng: -86.378314};
        var smithOne  = {lat: 39.316015, lng: -85.552123};
        var smithTwo  = {lat: 39.521593, lng: -86.062932};
        var sloanOne  = {lat: 38.963145, lng: -89.147029};
        var sloanTwo  = {lat: 39.120378, lng: -88.559788};
        var greenline  = {lat: 38.836649, lng: -88.788339};
        var riechmannOne  = {lat: 38.609578, lng: -89.508987};
        var riechmannTwo  = {lat: 38.431333, lng: -89.550536};
        var riechmannThree  = {lat: 38.458966, lng: -89.144793};
        var fourr  = {lat: 38.090895, lng: -88.552103};
        var hrOne  = {lat: 37.907854, lng: -89.332854};
        var hrTwo = {lat: 37.673422, lng: -87.12957};
        var hrThree  = {lat: 36.745164, lng: -88.623685};
        var hrFour  = {lat: 37.667011, lng: -87.932686};
        var hrFive  = {lat: 36.82038, lng: -86.884874};
        var hrSix  = {lat: 36.851165, lng: -87.55121};
        var hrSeven  = {lat: 36.415421, lng: -89.072768};
        var hrEight  = {lat: 35.254085, lng: -87.340734};
        var hrNine  = {lat: 35.549552, lng: -89.245361};
        var tricountyOne  = {lat: 36.00578, lng: -88.94786};
        var tricountyTwo  = {lat: 36.112157, lng: -89.261762};
        var medlin  = {lat: 36.923731, lng: -89.31625};
        var bakerOne  = {lat: 37.285619, lng: -89.540328};
        var bakerTwo  = {lat: 36.425358, lng: -89.697865};
        var mckeelOne = {lat: 36.665598, lng: -88.30442};
        var mckeelTwo  = {lat: 37.097359, lng: -88.628352};
        var shrum  = {lat: 36.507097, lng: -86.007602};
        var mands  = {lat: 37.722195, lng: -88.535911};
        var juncker  = {lat: 37.922724, lng: -87.917574};
        var jlFarmOne  = {lat: 38.18589, lng: -87.781081};
        var jlFarmTwo  = {lat: 38.370238, lng: -87.592831};
        var hopf  = {lat: 38.31439, lng: -86.952942};
        var hoefling  = {lat: 38.654616, lng: -87.130195};
        var jacobiOne  = {lat: 38.40921, lng: -86.115751};
        var jacobiTwo = {lat: 38.959778, lng: -85.836279};
        var jacobiThree  = {lat: 37.67929, lng: -85.889678};
        var bane  = {lat: 39.433813, lng: -87.413389};
        var farmPrideOne  = {lat: 39.3029273, lng: -88.0014071};
        var farmPrideTwo  = {lat: 38.991021, lng: -88.19937};
        var albion  = {lat: 38.397062, lng: -88.057136};
        var fliegs  = {lat: 37.921051, lng: -90.188948}; 
        var jandj  = {lat: 37.007453, lng: -85.934876};
        var michaels  = {lat: 37.27443, lng: -88.674823};
        var pappys  = {lat: 37.74488, lng: -88.993322};
        var mcafoo  = {lat: 37.9938756, lng: -88.8964882};
        var hopfOne  = {lat: 37.994855, lng: -87.477618};
        var hagan  = {lat: 37.726926, lng: -87.117035};
        var hopfTwo  = {lat: 38.387483, lng: -86.942562};
        var power  = {lat: 37.403268, lng: -87.480286};
        var cfi  = {lat: 37.004941, lng: -88.39339};
        var horizon  = {lat: 36.824683, lng: -88.654107};
        var coleman  = {lat: 36.592301, lng: -87.274263};
        var hobdyOne  = {lat: 36.932086, lng: -86.490386};
        var hobdyTwo  = {lat: 36.758796, lng: -86.215261};
        var lawrence  = {lat: 38.868902, lng: -86.446951};
        var farmPride  = {lat: 38.991021, lng: -88.19937};
        var lemonds  = {lat: 38.3452274, lng: -88.3609535};
        var davis  = {lat: 37.440278, lng: -89.638077};
        var medlinOne  = {lat: 36.894296, lng: -89.527414};
        var firstChoiceOne  = {lat: 36.038493, lng: -89.412024};
        var firstChoiceTwo  = {lat: 36.409232, lng: -89.081364};
        var colemanOne  = {lat: 36.329077, lng: -88.259764};
        var dickson  = {lat: 36.086526, lng: -87.402481};
        var cirrus  = {lat: 36.47673, lng: -86.648892};
        var littleTractor  = {lat: 37.169697, lng: -88.74612};
        var straub  = {lat: 38.106967, lng: -87.646056};
        var midstate  = {lat: 36.463968, lng: -86.837652};
        var organ  = {lat: 38.665696, lng: -87.525068};
        var holtsclaw  = {lat: 39.033063, lng: -87.053607};
        var wells  = {lat: 36.307683, lng : -88.340892};
        var montgomery  = {lat: 36.45878, lng: -87.238558};
        var ward  = {lat: 37.615748, lng: -87.394622};
        var southeastern  = {lat: 37.996913, lng: -87.460767};
        var shourds  = {lat: 37.953958, lng: -87.037174};
        var blesch  = {lat: 38.241151, lng: -87.032967};
        var bleschOne  = {lat: 38.844545, lng: -86.988157};
        var john  = {lat: 38.161142, lng: -86.794823};
        var adams  = {lat: 38.689582, lng: -87.489185};
        var herschel  = {lat: 38.378422, lng: -88.048333};
        var hobdyThree  = {lat: 37.761699, lng: -86.461655};
        var hobdyFour  = {lat: 37.127979, lng: -85.962917};
        var delta  = {lat: 36.833624, lng: -89.357196};
        var davisOne  = {lat: 37.741584, lng: -89.859001};
        var diedrich  = {lat: 38.359046, lng: -89.37148};
        var pigg  = {lat: 39.121441, lng: -87.409049};
        var riddle  = {lat: 39.286366, lng: -86.76855};
        var schafstall  = {lat: 38.583474, lng: -86.15337};
        var cumberland  = {lat: 36.256629, lng: -86.759975};
        var dicksonOne  = {lat: 36.06095, lng: -87.373212};
        var tricounty  = {lat: 36.112157, lng: -89.261762};
        var whayneOne  = {lat: 37.097108, lng: -88.620555};
        var whayneTwo  = {lat: 36.818264, lng: -88.654121};
        var whayneThree  = {lat: 37.753607, lng: -87.166107};
        var macallister  = {lat: 38.634224, lng: -87.191425};
        var whayneFour  = {lat: 38.014099, lng: -87.51796};
        var whayneFive  = {lat: 36.830569, lng: -87.448053};
        var whayneSix  = {lat: 37.010214, lng: -86.41354};
        var heuer  = {lat: 37.281442, lng: -89.558587};
        var bandg  = {lat: 36.300927, lng: -88.36784};
        var hayor  = {lat: 37.12652, lng: -88.594879};
        var colemanLawn  = {lat: 37.725754, lng: -89.213949};
        var kentenn  = {lat: 36.436412, lng:-89.060185};
        var mohon  = {lat: 36.902146, lng: -87.480926};
        var mrk  = {lat: 38.355323, lng: -87.548032};
        var hillyard  = {lat: 38.079145, lng: -88.226073};
        var canary  = {lat: 37.908144, lng: -86.73524};
        var fairview  = {lat: 36.775878, lng: -87.355562};
        var rister  = {lat: 37.72301,lng: -88.535753};
        var tworivers  = {lat: 37.227731,lng: -87.161512};
        
        //Hutson Locations
        var hutsonCypress       = {lat: 37.360281, lng: -89.018007};
        var hutsonMayfield      = {lat: 36.725433, lng: -88.661669};
        var hutsonPaducah       = {lat: 37.084924, lng: -88.693035};
        var hutsonMorganfield   = {lat: 37.680242, lng: -87.936677};
        var hutsonPoseyville    = {lat: 38.179658, lng: -87.781866};
        var hutsonJasper = { lat: 38.4207971, lng: -87.0180273};
        var hutsonNewberry = { lat: 38.9104132, lng: -87.0367961};
        var hutsonRussellville = { lat: 36.8467769, lng: -86.9020909};
        var hutsonClinton = { lat: 36.652811, lng: -88.9887638};
        var hutsonClarksville = { lat: 36.5985272, lng: -87.2786388};
        var hutsonPrinceton =  { lat: 37.100395, lng: -87.862604};
        var hutsonEvansville = { lat: 38.0070138, lng: -87.4385064};
        var hutsonHopkinsville = { lat: 36.834378, lng: -87.44094};
        
        
       
        
        
        //Anna Jonesboro Motor Company - Deere
        var AnnaJonesboroMarker = new google.maps.Marker({
            position: AnnaJonesboro,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Anna Jonesboro Motor Co.',
            icon: pinImage
        });
        
        AnnaJonesboroMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Anna Jonesboro Motor Co.</h1><hr>'+ 
            '<h3>Anna, IL</h3>'+
            '<ul><li>Deere</li></ul>';
        });
        
        //Ideal Lawn and Tractor - Deere
        var idealLawnMarker = new google.maps.Marker({
            position: idealLawn,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Ideal Lawn and Tractor',
            icon: pinImage
        });
        
        idealLawnMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Ideal Lawn and Tractor</h1><hr>'+ 
            '<h3>Marion, IL</h3>'+
            '<ul><li>Deere</li></ul>';
        });
        
        //Wright Implement Owensboro KY - Deere
        var wrightImplementOneMarker = new google.maps.Marker({
            position: wrightImplementOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Wright Implement - Ownsboro, KY',
            icon: pinImage
        });
        
        wrightImplementOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wright Implement</h1><hr>'+ 
            '<h3>Owensboro, KY</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Kentucky and Indiana</li></ul>';
        });
        
        //Wright Implement Bowling Green KY - Deere
        var wrightImplementTwoMarker = new google.maps.Marker({
            position: wrightImplementTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Wright Implement - Bowling Green, KY',
            icon: pinImage
        });
        
        wrightImplementTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wright Implement</h1><hr>'+ 
            '<h3>Bowling Green, KY</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Kentucky and Indiana</li></ul>';
        });
        
        //Wright Implement Hardinsburg KY - Deere
        var wrightImplementThreeMarker = new google.maps.Marker({
            position: wrightImplementThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Wright Implement - Bowling Green, KY',
            icon: pinImage
        });
        
       wrightImplementThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wright Implement</h1><hr>'+ 
            '<h3>Hardinsburg, KY</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Kentucky and Indiana</li></ul>';
        });
        
        //Wright Implement Glasgow KY - Deere
        var wrightImplementFourMarker = new google.maps.Marker({
            position: wrightImplementFour,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Wright Implement - Glasgow, KY',
            icon: pinImage
        });
        
       wrightImplementFourMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wright Implement</h1><hr>'+ 
            '<h3>Glasgow, KY</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Kentucky and Indiana</li></ul>';
        });
        
        //Wright Implement Corydon IN - Deere
        var wrightImplementFiveMarker = new google.maps.Marker({
            position: wrightImplementFive,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Wright Implement - Corydon, IN',
            icon: pinImage
        });
        
       wrightImplementFiveMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wright Implement</h1><hr>'+ 
            '<h3>Corydon, IN</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Kentucky and Indiana</li></ul>';
        });
        
        //Wright Implement  Seymour IN - Deere
        var wrightImplementSixMarker = new google.maps.Marker({
            position: wrightImplementSix,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Wright Implement - Seymour, IN',
            icon: pinImage
        });
        
       wrightImplementSixMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wright Implement</h1><hr>'+ 
            '<h3>Seymour, IN</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Kentucky and Indiana</li></ul>';
        });
        
        //Wright Implement Orleans IN - Deere
        var wrightImplementSevenMarker = new google.maps.Marker({
            position: wrightImplementSeven,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Wright Implement - Orleans, IN',
            icon: pinImage
        });
        
       wrightImplementSevenMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wright Implement</h1><hr>'+ 
            '<h3>Orleans, IN</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Kentucky and Indiana</li></ul>';
        });
        
        //Alliance Tractor Vincennes IN - Deere
        var allianceTractorOneMarker = new google.maps.Marker({
            position: allianceTractorOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Alliance Tractor LLC - Vincennes, IL',
            icon: pinImage
        });
        
       allianceTractorOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Alliance Tractor LLC</h1><hr>'+ 
            '<h3>Vincennes, IN</h3>'+
            '<ul><li>Deere</li><li>4 total locations in Illinois and Indiana</li></ul>';
        });
        
        //Aliance Tractor Newton IL - Deere
        var allianceTractorTwoMarker = new google.maps.Marker({
            position: allianceTractorTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Alliance Tractor LLC - Newton, IL',
            icon: pinImage
        });
        
       allianceTractorTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Alliance Tractor LLC</h1><hr>'+ 
            '<h3>Newton, IL</h3>'+
            '<ul><li>Deere</li><li>4 total locations in Illinois and Indiana</li></ul>';
        });
        
        //Aliance Tractor Mattoon IL - Deere
        var allianceTractorThreeMarker = new google.maps.Marker({
            position: allianceTractorThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Alliance Tractor LLC - Mattoon, IL',
            icon: pinImage
        });
        
       allianceTractorThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Alliance Tractor LLC</h1><hr>'+ 
            '<h3>Mattoon, IL</h3>'+
            '<ul><li>Deere</li><li>4 total locations in Illinois and Indiana</li></ul>';
        });
        
        //Aliance Tractor Casey IL - Deere
        var allianceTractorFourMarker = new google.maps.Marker({
            position: allianceTractorThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Alliance Tractor LLC - Casey, IL',
            icon: pinImage
        });
        
       allianceTractorFourMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Alliance Tractor LLC</h1><hr>'+ 
            '<h3>Casey, IL</h3>'+
            '<ul><li>Deere</li><li>4 total locations in Illinois and Indiana</li></ul>';
        });
        
        //AHW LLC Rockville IN - Deere
        var ahwOneMarker = new google.maps.Marker({
            position: ahwOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'AHW LLC - Rockville, IN',
            icon: pinImage
        });
        
       ahwOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>AHW LLC</h1><hr>'+ 
            '<h3>Rockville, IN</h3>'+
            '<ul><li>Deere</li><li>13 total locations in Illinois and Indiana</li></ul>';
        });
        
        //AHW LLC Ashmore IL - Deere
        var ahwTwoMarker = new google.maps.Marker({
            position: ahwTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'AHW LLC - Ashmore, IL',
            icon: pinImage
        });
        
       ahwTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>AHW LLC</h1><hr>'+ 
            '<h3>Ashlmore, IL</h3>'+
            '<ul><li>Deere</li><li>13 total locations in Illinois and Indiana</li></ul>';
        });
        
        //Tennessee Tractor Union City TN - Deere
        var tennesseeTractorOneMarker = new google.maps.Marker({
            position: tennesseeTractorOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Tennessee Tractor - Union City, TN',
            icon: pinImage
        });
        
       tennesseeTractorOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Tennessee Tractor</h1><hr>'+ 
            '<h3>Union City, TN</h3>'+
            '<ul><li>Deere</li><li>10 total locations in Tennessee</li></ul>';
        });
        
        //Tennessee Tractor Martin TN - Deere
        var tennesseeTractorTwoMarker = new google.maps.Marker({
            position: tennesseeTractorTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Tennessee Tractor - Martin, TN',
            icon: pinImage
        });
        
       tennesseeTractorTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Tennessee Tractor</h1><hr>'+ 
            '<h3>Martin, TN</h3>'+
            '<ul><li>Deere</li><li>10 total locations in Tennessee</li></ul>';
        });
        
        //Tennessee Tractor Paris TN - Deere
        var tennesseeTractorThreeMarker = new google.maps.Marker({
            position: tennesseeTractorThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Tennessee Tractor - Paris, TN',
            icon: pinImage
        });
        
       tennesseeTractorThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Tennessee Tractor</h1><hr>'+ 
            '<h3>Paris, TN</h3>'+
            '<ul><li>Deere</li><li>10 total locations in Tennessee</li></ul>';
        });
        
        //Tennessee Tractor Alamo TN - Deere
        var tennesseeTractorFourMarker = new google.maps.Marker({
            position: tennesseeTractorFour,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Tennessee Tractor - Alamo, TN',
            icon: pinImage
        });
        
       tennesseeTractorFourMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Tennessee Tractor</h1><hr>'+ 
            '<h3>Alamo, TN</h3>'+
            '<ul><li>Deere</li><li>10 total locations in Tennessee</li></ul>';
        });
        
        //Tennessee Tractor Jackson TN - Deere
        var tennesseeTractorFiveMarker = new google.maps.Marker({
            position: tennesseeTractorFive,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Tennessee Tractor - Jackson, TN',
            icon: pinImage
        });
        
       tennesseeTractorFiveMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Tennessee Tractor</h1><hr>'+ 
            '<h3>Jackson, TN</h3>'+
            '<ul><li>Deere</li><li>10 total locations in Tennessee</li></ul>';
        });
        
        //Tennessee Tractor Dyersburg TN - Deere
        var tennesseeTractorSixMarker = new google.maps.Marker({
            position: tennesseeTractorSix,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Tennessee Tractor - Dyersburg, TN',
            icon: pinImage
        });
        
       tennesseeTractorSixMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Tennessee Tractor</h1><hr>'+ 
            '<h3>Dyersburg, TN</h3>'+
            '<ul><li>Deere</li><li>10 total locations in Tennessee</li></ul>';
        });
        
        //Tennessee Tractor Somerville TN - Deere
        var tennesseeTractorEightMarker = new google.maps.Marker({
            position: tennesseeTractorEight,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Tennessee Tractor - Somerville, TN',
            icon: pinImage
        });
        
       tennesseeTractorEightMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Tennessee Tractor</h1><hr>'+ 
            '<h3>Somerville, TN</h3>'+
            '<ul><li>Deere</li><li>10 total locations in Tennessee</li></ul>';
        });
        
        //Tennessee Tractor Ripley TN - Deere
        var tennnesseTractorNineMarker = new google.maps.Marker({
            position: tennnesseTractorNine,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Tennessee Tractor - Ripley, TN',
            icon: pinImage
        });
        
       tennnesseTractorNineMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Tennessee Tractor</h1><hr>'+ 
            '<h3>Ripley, TN</h3>'+
            '<ul><li>Deere</li><li>10 total locations in Tennessee</li></ul>';
        });
        
        //Tennessee Tractor Trenton TN - Deere
        var tennesseeTractorTenMarker = new google.maps.Marker({
            position: tennesseeTractorTen,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Tennessee Tractor - Trenton, TN',
            icon: pinImage
        });
        
       tennesseeTractorTenMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Tennessee Tractor</h1><hr>'+ 
            '<h3>Trenton, TN</h3>'+
            '<ul><li>Deere</li><li>10 total locations in Tennessee</li></ul>';
        });
           
        //Wm. Nobbe & Company Scott City MO - Deere
        var wmNobbeCompanyOneMarker = new google.maps.Marker({
            position: wmNobbeCompanyOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Wm. Nobbe & Company - Scott City, MO',
            icon: pinImage
        });
        
        wmNobbeCompanyOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wm. Nobbe & Company</h1><hr>'+ 
            '<h3>Scott City, MO</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Missouri and Illinois</li></ul>';
        });
        
        //Wm. Nobbe & Company Ste Genevieve MO - Deere
        var wmNobbeCompanyTwoMarker = new google.maps.Marker({
            position: wmNobbeCompanyTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Wm. Nobbe & Company - Ste Genevieve, MO',
            icon: pinImage
        });
        
        wmNobbeCompanyTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wm. Nobbe & Company</h1><hr>'+ 
            '<h3>Ste Genevieve, MO</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Missouri and Illinois</li></ul>';
        });
        
        //Wm. Nobbe & Company Steeleville IL - Deere
        var wmNobbeCompanyThreeMarker = new google.maps.Marker({
            position: wmNobbeCompanyThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Wm. Nobbe & Company - Steelville, IL',
            icon: pinImage
        });
        
        wmNobbeCompanyThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wm. Nobbe & Company</h1><hr>'+ 
            '<h3>Steelville, IL</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Missouri and Illinois</li></ul>';
        });
           
        //Wm. Nobbe & Company Farmington MO - Deere
        var wmNobbeCompanyFourMarker = new google.maps.Marker({
            position: wmNobbeCompanyFour,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Wm. Nobbe & Company - Farmington, MO',
            icon: pinImage
        });
        
        wmNobbeCompanyFourMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wm. Nobbe & Company</h1><hr>'+ 
            '<h3>Farmington, MO</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Missouri and Illinois</li></ul>';
        });
        
        //Wm. Nobbe & Company Waterloo IL - Deere
        var wmNobbeCompanyFiveMarker = new google.maps.Marker({
            position: wmNobbeCompanyFive,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Wm. Nobbe & Company - Waterloo, IL',
            icon: pinImage
        });
        
        wmNobbeCompanyFiveMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wm. Nobbe & Company</h1><hr>'+ 
            '<h3>Waterloo, IL</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Missouri and Illinois</li></ul>';
        });
        
        //McLean Implement Benton IL - Deere
        var mcleanOneMarker = new google.maps.Marker({
            position: mcleanOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'McLean Implement - Benton IL',
            icon: pinYellow
        });
        
        mcleanOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>McLean Implement</h1><hr>'+ 
            '<h3>Benton, IL</h3>'+
            '<ul><li>Deere</li><li>5 total locations in Illinois</li></ul>';
        });
        
        //McLean Implement Norris City IL - Deere
        var mcleanTwoMarker = new google.maps.Marker({
            position: mcleanTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'McLean Implement - Norris City IL',
            icon: pinYellow
        });
        
        mcleanTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>McLean Implement</h1><hr>'+ 
            '<h3>Norris City, IL</h3>'+
            '<ul><li>Deere</li><li>5 total locations in Illinois</li></ul>';
        });
        
        //McLean Implement Wayne City IL - Deere
        var mcleanThreeMarker = new google.maps.Marker({
            position: mcleanThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'McLean Implement - Wayne City IL',
            icon: pinYellow
        });
        
        mcleanThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>McLean Implement</h1><hr>'+ 
            '<h3>Wayne City, IL</h3>'+
            '<ul><li>Deere</li><li>5 total locations in Illinois</li></ul>';
        });
        
        //McLean Implement Albion IL - Deere
        var mcleanFourMarker = new google.maps.Marker({
            position: mcleanFour,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'McLean Implement - Albion IL',
            icon: pinYellow
        });
        
        mcleanFourMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>McLean Implement</h1><hr>'+ 
            '<h3>Albion, IL</h3>'+
            '<ul><li>Deere</li><li>5 total locations in Illinois</li></ul>';
        });
        
        //McLean Implement Flora IL - Deere
        var mcleanFiveMarker = new google.maps.Marker({
            position: mcleanFive,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'McLean Implement - Flora IL',
            icon: pinYellow
        });
        
        mcleanFiveMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>McLean Implement</h1><hr>'+ 
            '<h3>Flora, IL</h3>'+
            '<ul><li>Deere</li><li>5 total locations in Illinois</li></ul>';
        });
        
        //Greenway Equipment Sikeston MO - Deere
        var greenwayOneMarker = new google.maps.Marker({
            position: greenwayOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Greenway Equipment - Sikeston, MO',
            icon: pinImage
        });
        
        greenwayOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Greenway Equipment</h1><hr>'+ 
            '<h3>Sikeston, MO</h3>'+
            '<ul><li>Deere</li><li>27 total locations in Missouri and Arkansas</li></ul>';
        });

        //Greenway Equipment Dexter MO - Deere
        var greenwayTwoMarker = new google.maps.Marker({
            position: greenwayTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Greenway Equipment - Dexter, MO',
            icon: pinImage
        });
        
        greenwayTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Greenway Equipment</h1><hr>'+ 
            '<h3>Dexter, MO</h3>'+
            '<ul><li>Deere</li><li>27 total locations in Missouri and Arkansas</li></ul>';
        });
        
        //Greenway Equipment Charleston MO - Deere
        var greenwayThreeMarker = new google.maps.Marker({
            position: greenwayThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Greenway Equipment - Charleston, MO',
            icon: pinImage
        });
        
        greenwayThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Greenway Equipment</h1><hr>'+ 
            '<h3>Charleston, MO</h3>'+
            '<ul><li>Deere</li><li>27 total locations in Missouri and Arkansas</li></ul>';
        });
        
        //Greenway Equipment Poplar Bluff MO - Deere
        var greenwayFourMarker = new google.maps.Marker({
            position: greenwayFour,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Greenway Equipment - Poplar Bluff, MO',
            icon: pinImage
        });
        
        greenwayFourMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Greenway Equipment</h1><hr>'+ 
            '<h3>Poplar Bluff, MO</h3>'+
            '<ul><li>Deere</li><li>27 total locations in Missouri and Arkansas</li></ul>';
        });
        
        //Greenway Equipment Malden MO - Deere
        var greenwayFiveMarker = new google.maps.Marker({
            position: greenwayFive,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Greenway Equipment - Malden, MO',
            icon: pinImage
        });
        
        greenwayFiveMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Greenway Equipment</h1><hr>'+ 
            '<h3>Malden, MO</h3>'+
            '<ul><li>Deere</li><li>27 total locations in Missouri and Arkansas</li></ul>';
        });
        
        //Legacy Equipment Corning AR - Deere
        var legacyOneMarker = new google.maps.Marker({
            position: legacyOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Legacy Equipment - Corning, AR',
            icon: pinImage
        });
        
        legacyOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Legacy Equipment</h1><hr>'+ 
            '<h3>Corning, AR</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Arkansas and Missouri</li></ul>';
        });
        
        //Legacy Equipment Piggott AR - Deere
        var legacyTwoMarker = new google.maps.Marker({
            position: legacyTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Legacy Equipment - Piggott, AR',
            icon: pinImage
        });
        
        legacyTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Legacy Equipment</h1><hr>'+ 
            '<h3>Piggott, AR</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Arkansas and Missouri</li></ul>';
        });
        
        //Legacy Equipment Kennett MO - Deere
        var legacyThreeMarker = new google.maps.Marker({
            position: legacyThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Legacy Equipment - Kennett, MO',
            icon: pinImage
        });
        
        legacyThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Legacy Equipment</h1><hr>'+ 
            '<h3>Kennett, MO</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Arkansas and Missouri</li></ul>';
        });
        
        //Legacy Equipment Paragould AR - Deere
        var legacyFourMarker = new google.maps.Marker({
            position: legacyFour,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Legacy Equipment - Paragould, AR',
            icon: pinImage
        });
        
        legacyFourMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Legacy Equipment</h1><hr>'+ 
            '<h3>Paragould, AR</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Arkansas and Missouri</li></ul>';
        });
        
        //Legacy Equipment Portageville MO - Deere
        var legacyFiveMarker = new google.maps.Marker({
            position: legacyFive,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Legacy Equipment - Portageville, MO',
            icon: pinImage
        });
        
        legacyFiveMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Legacy Equipment</h1><hr>'+ 
            '<h3>Portageville, MO</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Arkansas and Missouri</li></ul>';
        });
        
        //Legacy Equipment Hayti MO - Deere
        var legacySixMarker = new google.maps.Marker({
            position: legacySix,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Legacy Equipment - Hayti, MO',
            icon: pinImage
        });
        
        legacySixMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Legacy Equipment</h1><hr>'+ 
            '<h3>Hayti, MO</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Arkansas and Missouri</li></ul>';
        });
        
        //Legacy Equipment New Madrid MO - Deere
        var legacySevenMarker = new google.maps.Marker({
            position: legacySeven,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Legacy Equipment - New Madrid, MO',
            icon: pinImage
        });
        
        legacySevenMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Legacy Equipment</h1><hr>'+ 
            '<h3>New Madrid, MO</h3>'+
            '<ul><li>Deere</li><li>7 total locations in Arkansas and Missouri</li></ul>';
        });
        
        //TriGreen Equipment Hendersonville TN - Deere
        var trigreenOneMarker = new google.maps.Marker({
            position: trigreenOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'TriGreen Equipment - Hendersonville, TN',
            icon: pinImage
        });
        
        trigreenOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>TriGreen Equipment</h1><hr>'+ 
            '<h3>Hendersonville, TN</h3>'+
            '<ul><li>Deere</li><li>18 total locations in Tennessee, Mississippi, and Alabama</li></ul>';
        });
        
        //TriGreen Equipment Franklin TN - Deere
        var trigreenTwoMarker = new google.maps.Marker({
            position: trigreenTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'TriGreen Equipment - Franklin, TN',
            icon: pinImage
        });
        
        trigreenTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>TriGreen Equipment</h1><hr>'+ 
            '<h3>Franklin, TN</h3>'+
            '<ul><li>Deere</li><li>18 total locations in Tennessee, Mississippi, and Alabama</li></ul>';
        });
        
        //TriGreen Equipment Mount Juliet TN - Deere
        var trigreenThreeMarker = new google.maps.Marker({
            position: trigreenThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'TriGreen Equipment - Mount Juliet, TN',
            icon: pinImage
        });
        
        trigreenThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>TriGreen Equipment</h1><hr>'+ 
            '<h3>Mount Juliet, TN</h3>'+
            '<ul><li>Deere</li><li>18 total locations in Tennessee, Mississippi, and Alabama</li></ul>';
        });
        
        //TriGreen Equipment Columbia TN - Deere
        var trigreenFourMarker = new google.maps.Marker({
            position: trigreenFour,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'TriGreen Equipment - Columbia, TN',
            icon: pinImage
        });
        
        trigreenFourMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>TriGreen Equipment</h1><hr>'+ 
            '<h3>Columbia, TN</h3>'+
            '<ul><li>Deere</li><li>18 total locations in Tennessee, Mississippi, and Alabama</li></ul>';
        });
        
        //TriGreen Equipment Murfreesboro TN - Deere
        var trigreenFiveMarker = new google.maps.Marker({
            position: trigreenFive,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'TriGreen Equipment - Murfeesboro, TN',
            icon: pinImage
        });
        
        trigreenFiveMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>TriGreen Equipment</h1><hr>'+ 
            '<h3>Mufreesboro, TN</h3>'+
            '<ul><li>Deere</li><li>18 total locations in Tennessee, Mississippi, and Alabama</li></ul>';
        });
        
        //Reynolds Farm Equipment Mooresville IN - Deere
        var reynoldsMarker = new google.maps.Marker({
            position: reynolds,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Reynolds Farm Equipment - Mooresville, IN',
            icon: pinImage
        });
        
        reynoldsMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Reynolds Equipment</h1><hr>'+ 
            '<h3>Mooresville, IN</h3>'+
            '<ul><li>Deere</li><li>18 total locations in Tennessee, Mississippi, and Alabama</li></ul>';
        });
        
        //Smith Implements Greensburg IN - Deere
        var smithOneMarker = new google.maps.Marker({
            position: smithOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Smith Implements - Greensburg, IN',
            icon: pinImage
        });
        
        smithOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Smith Implements</h1><hr>'+ 
            '<h3>Greensburg, IN</h3>'+
            '<ul><li>Deere</li><li>6 total locations in Indiana</li></ul>';
        });
        
        //Smith Implements Franklin IN - Deere
        var smithTwoMarker = new google.maps.Marker({
            position: smithTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Smith Implements - Franklin, IN',
            icon: pinImage
        });
        
        smithTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Smith Implements</h1><hr>'+ 
            '<h3>Franklin, IN</h3>'+
            '<ul><li>Deere</li><li>6 total locations in Indiana</li></ul>';
        });
        
        //Sloan Implement Vandalia IL - Deere
        var sloanOneMarker = new google.maps.Marker({
            position: sloanOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Sloan Implement - Vandalia, IL',
            icon: pinImage
        });
        
        sloanOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Sloan Implement</h1><hr>'+ 
            '<h3>Vandalia, IL</h3>'+
            '<ul><li>Deere</li><li>20 total locations in Illinois and Winscosin</li></ul>';
        });
        
        //Sloan Implement Effingham IL - Deere
        var sloanTwoMarker = new google.maps.Marker({
            position: sloanTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Sloan Implement - Effingham, IL',
            icon: pinImage
        });
        
        sloanTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Sloan Implement</h1><hr>'+ 
            '<h3>Effingham, IL</h3>'+
            '<ul><li>Deere</li><li>20 total locations in Illinois and Winscosin</li></ul>';
        });
        
        //Green Line Equipment Farina IL - Deere
        var greenlineMarker = new google.maps.Marker({
            position: greenline,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Green Line Equipment - Farina, IL',
            icon: pinImage
        });
        
        greenlineMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Green Line Equipment</h1><hr>'+ 
            '<h3>Farina, IL</h3>'+
            '<ul><li>Deere</li><li>1 location</li></ul>';
        });
        
        //Riechmann Bros. LLC Breese IL - Deere
        var riechmannOneMarker = new google.maps.Marker({
            position: riechmannOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Riechmann Bros. LLC - Breese, IL',
            icon: pinImage
        });
        
        riechmannOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Riechmann Bros. LLC</h1><hr>'+ 
            '<h3>Breese, IL</h3>'+
            '<ul><li>Deere</li><li>3 total locations in Illinois</li></ul>';
        });
        
        //Riechmann Bros. LLC Okawville IL - Deere
        var riechmannTwoMarker = new google.maps.Marker({
            position: riechmannTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Riechmann Bros. LLC - Okawville, IL',
            icon: pinImage
        });
        
        riechmannTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Riechmann Bros. LLC</h1><hr>'+ 
            '<h3>Okawville, IL</h3>'+
            '<ul><li>Deere</li><li>3 total locations in Illinois</li></ul>';
        });
        
        //Riechmann Bros. LLC Centralia IL - Deere
        var riechmannThreeMarker = new google.maps.Marker({
            position: riechmannThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Riechmann Bros. LLC - Centralia, IL',
            icon: pinImage
        });
        
        riechmannThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Riechmann Bros. LLC</h1><hr>'+ 
            '<h3>Centralia, IL</h3>'+
            '<ul><li>Deere</li><li>3 total locations in Illinois</li></ul>';
        });

        //4R Equipment Mcleansboro IL - Case
        var fourrMarker = new google.maps.Marker({
            position: fourr,
            map: map,
            animation: google.maps.Animation.DROP,
            title: '4R Equipment - Mcleansboro, IL',
        });
        
        fourrMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>4R Equipment</h1><hr>'+ 
            '<h3>Mcleansboro, IL</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //H&R Agri-Power Vergennes IL - Case
        var hrOneMarker = new google.maps.Marker({
            position: hrOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'H&R Agri-Power - Vergennes, IL',
        });
        
        hrOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>H&R Agri-Power</h1><hr>'+ 
            '<h3>Vergennes, IL</h3>'+
            '<ul><li>Case</li><li>Total of 13 location in Illinois, Kentucky, Mississippi, and Tennesseee</li></ul>';
        });
        
        //H&R Agri-Power Owensboro KY - Case
        var hrTwoMarker = new google.maps.Marker({
            position: hrTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'H&R Agri-Power - Owensboro, KY',
        });
        
        hrTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>H&R Agri-Power</h1><hr>'+ 
            '<h3>Owensboro, KY</h3>'+
            '<ul><li>Case</li><li>Total of 13 location in Illinois, Kentucky, Mississippi, and Tennesseee</li></ul>';
        });
        
        //H&R Agri-Power Mayfield KY - Case
        var hrThreeMarker = new google.maps.Marker({
            position: hrThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'H&R Agri-Power - Mayfield, KY',
        });
        
        hrThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>H&R Agri-Power</h1><hr>'+ 
            '<h3>Mayfield, KY</h3>'+
            '<ul><li>Case, New Holland</li><li>Total of 13 location in Illinois, Kentucky, Mississippi, and Tennesseee</li></ul>';
        });

        //H&R Agri-Power Morganfield KY - Case
        var hrFourMarker = new google.maps.Marker({
            position: hrFour,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'H&R Agri-Power - Morganfield, KY',
        });
        
        hrFourMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>H&R Agri-Power</h1><hr>'+ 
            '<h3>Morganfield, KY</h3>'+
            '<ul><li>Case, Kubota</li><li>Total of 13 location in Illinois, Kentucky, Mississippi, and Tennesseee</li></ul>';
        });
        
        //H&R Agri-Power Russellville KY - Case
        var hrFiveMarker = new google.maps.Marker({
            position: hrFive,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'H&R Agri-Power - Russellville, KY',
        });
        
        hrFiveMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>H&R Agri-Power</h1><hr>'+ 
            '<h3>Russellville, KY</h3>'+
            '<ul><li>Case, Kubota</li><li>Total of 13 location in Illinois, Kentucky, Mississippi, and Tennesseee</li></ul>';
        });

        //H&R Agri-Power Hopkinsville KY - Case
        var hrSixMarker = new google.maps.Marker({
            position: hrSix,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'H&R Agri-Power - Hopkinsville, KY',
        });
        
        hrSixMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>H&R Agri-Power</h1><hr>'+ 
            '<h3>Hopkinsville, KY</h3>'+
            '<ul><li>Case, Kubota, New Holland</li><li>Total of 13 location in Illinois, Kentucky, Mississippi, and Tennesseee</li></ul>';
        });
        
        //H&R Agri-Power Union City, TN - Case
        var hrSevenMarker = new google.maps.Marker({
            position: hrSeven,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'H&R Agri-Power - Union City, TN',
        });
        
        hrSevenMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>H&R Agri-Power</h1><hr>'+ 
            '<h3>Union City, TN</h3>'+
            '<ul><li>Case</li><li>Total of 13 location in Illinois, Kentucky, Mississippi, and Tennesseee</li></ul>';
        });
        
        //H&R Agri-Power Lawerenceburg TN - Case
        var hrEightMarker = new google.maps.Marker({
            position: hrEight,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'H&R Agri-Power - Larenceburg, TN',
        });
        
        hrEightMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>H&R Agri-Power</h1><hr>'+ 
            '<h3>Lawrenceburg, TN</h3>'+
            '<ul><li>Case</li><li>Total of 13 location in Illinois, Kentucky, Mississippi, and Tennesseee</li></ul>';
        });
        
        //H&R Agri-Power Brownsville TN - Case
        var hrNineMarker = new google.maps.Marker({
            position: hrNine,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'H&R Agri-Power - Brownsville, TN',
        });
        
        hrNineMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>H&R Agri-Power</h1><hr>'+ 
            '<h3>Brownsville, TN</h3>'+
            '<ul><li>Case</li><li>Total of 13 location in Illinois, Kentucky, Mississippi, and Tennesseee</li></ul>';
        });
        
        //Tri County Farmers Equipment Trenton TN - Case
        var tricountyOneMarker = new google.maps.Marker({
            position: tricountyOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Tri-County Farmers Equipment - Trenton, TN',
        });
        
        tricountyOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Tri-County Farmers Equipment</h1><hr>'+ 
            '<h3>Trenton, TN</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //Tri County Farmers Equipment Newbern TN - Case
        var tricountyTwoMarker = new google.maps.Marker({
            position: tricountyTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Tri-County Farmers Equipment - Newbern, TN',
        });
        
        tricountyTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Tri-County Farmers Equipment</h1><hr>'+ 
            '<h3>Newbern, TN</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //Medlin Equipment Charleston MO - Case
        var medlinMarker = new google.maps.Marker({
            position: medlin,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Medlin Equipment - Charleston, MO',
        });
        
        medlinMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Medlin Equipment</h1><hr>'+ 
            '<h3>Charleston, MO</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //Baker Implement Cape Girardeau MO - Case
        var bakerOneMarker = new google.maps.Marker({
            position: bakerOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Baker Implement - Cape Girardeau, MO',
        });
        
        bakerOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Baker Implement</h1><hr>'+ 
            '<h3>Cape Girardeau, MO</h3>'+
            '<ul><li>Case</li><li>11 total location in Arkansas and Missouri</li></ul>';
        });
        
        //Baker Implement Portageville MO - Case
        var bakerTwoMarker = new google.maps.Marker({
            position: bakerTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Baker Implement - Portageville, MO',
        });
        
        bakerTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Baker Implement</h1><hr>'+ 
            '<h3>Portageville, MO</h3>'+
            '<ul><li>Case</li><li>11 total location in Arkansas and Missouri</li></ul>';
        });
        
        //McKeel Equipment Murray KY - Case
        var mckeelOneMarker = new google.maps.Marker({
            position: mckeelOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'McKeel Equipment - Murray, KY',
        });
        
        mckeelOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>McKeel Equipment</h1><hr>'+ 
            '<h3>Murray, KY</h3>'+
            '<ul><li>Case, Kubota</li></ul>';
        });
        
        //McKeel Equipment Paducah KY - Case
        var mckeelTwoMarker = new google.maps.Marker({
            position: mckeelTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'McKeel Equipment - Paducah, KY',
        });
        
        mckeelTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>McKeel Equipment</h1><hr>'+ 
            '<h3>Paducah, KY</h3>'+
            '<ul><li>Case</li></ul>';
        });

        //Shum Feed & Farm Supply Lafayette TN - Case
        var shrumMarker = new google.maps.Marker({
            position: shrum,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Shrum Feed & Farm Supply - Lafayette, TN',
        });
        
        shrumMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Shrum Feed & Supply</h1><hr>'+ 
            '<h3>Layfette, TN</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //M&S Implement Co Harrisburg IL - Case
        var mandsMarker = new google.maps.Marker({
            position: mands,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'M&S Implement Co - Harrisburg, IL',
        });
        
        mandsMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>M&S Implement</h1><hr>'+ 
            '<h3>Harrisburg, IL</h3>'+
            '<ul><li>Case, New Holland, AGCO</li></ul>';
        });

        //Juncker Bros. Sales & Service Mt Vernon IN - Case
        var junckerMarker = new google.maps.Marker({
            position: juncker,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Juncker Bros. Sales & Servive - Mt Vernon, IN',
        });
        
        junckerMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Juncker Bros. Sales & Service</h1><hr>'+ 
            '<h3>Mt Vernon, IL</h3>'+
            '<ul><li>Case, Mahindra</li></ul>';
        });
        
        //JL Farm Equipment Co. Poseyville, IN - Case
        var jlFarmOneMarker = new google.maps.Marker({
            position: jlFarmOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'JL Farm Equipment Co. - Poseyville, IN',
        });
        
        jlFarmOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>JL Farm Equipment Co.</h1><hr>'+ 
            '<h3>Poseyville, IN</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //JL Farm Equipment Co. Princeton, IN - Case
        var jlFarmTwoMarker = new google.maps.Marker({
            position: jlFarmTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'JL Farm Equipment Co. - Princeton, IN',
        });
        
        jlFarmTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>JL Farm Equipment Co.</h1><hr>'+ 
            '<h3>Princeton, IN</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //Hopf Equipment Huntinburg IN- Case
        var hopfMarker = new google.maps.Marker({
            position: hopf,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Hopf Equipment - Huntinburg, IN',
        });
        
        hopfMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hopf Equipment</h1><hr>'+ 
            '<h3>Huntintonburg, IN</h3>'+
            '<ul><li>Case, Kubota</li></ul>';
        });
        
        //Hoefling Truck & Tractor Washington IN - Case
        var hoeflingMarker = new google.maps.Marker({
            position: hoefling,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Hoefling Truck & Tractor - Washington IN',
        });
        
        hoeflingMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hoefling Truck & Tractor</h1><hr>'+ 
            '<h3>Washington, IN</h3>'+
            '<ul><li>Case, Kubota</li></ul>';
        });
        
        //Jacobi Sales Palmyra IN - Case
        var jacobiOneMarker = new google.maps.Marker({
            position: jacobiOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Jacobi Sales - Palmyra, IN',
        });
        
        jacobiOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Jacobi Sales</h1><hr>'+ 
            '<h3>Palmyra, IN</h3>'+
            '<ul><li>Case, Kubota</li></ul>';
        });
        
        //Jacobi Sales Seymour IN - Case
        var jacobiTwoMarker = new google.maps.Marker({
            position: jacobiTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Jacobi Sales - Seymour, IN',
        });
        
        jacobiTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Jacobi Sales</h1><hr>'+ 
            '<h3>Seymour, IN</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //Jacobi Sales Elizabethtown KY - Case
        var jacobiThreeMarker = new google.maps.Marker({
            position: jacobiThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Jacobi Sales - Elizabethtown, KY',
        });
        
        jacobiThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Jacobi Sales</h1><hr>'+ 
            '<h3>Elizabethtown</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //Bane-Welker Equipment Terre Haute IN - Case
        var baneMarker = new google.maps.Marker({
            position: bane,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Bane-Walker Equipment - Terre Haute, IN',
        });
        
        baneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Bane-Walker Equipment</h1><hr>'+ 
            '<h3>Terre Haute, IN</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //Farm Pride Casey IL - Case
        var farmPrideOneMarker = new google.maps.Marker({
            position: farmPrideOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Farm Pride - Casey, IL',
        });
        
        farmPrideOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Farm Pride</h1><hr>'+ 
            '<h3>Casey, IL</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //Farm Pride Newton IL - Case
        var farmPrideTwoMarker = new google.maps.Marker({
            position: farmPrideTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Farm Pride - Newton, IL',
        });
        
        farmPrideTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Farm Pride</h1><hr>'+ 
            '<h3>Newton, IL</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //Albion Equiopment Albion IL - Case
        var albionMarker = new google.maps.Marker({
            position: albion,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Albion Equiopment - Albion, IL',
        });
        
        albionMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Albion Equipment</h1><hr>'+ 
            '<h3>Albion, IL</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //Flieg's Equipment Ste Genevieve MO - Case
        var fliegsMarker = new google.maps.Marker({
            position: fliegs,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Flieg's Equipment - Ste Genevieve, MO",
        });
        
        fliegsMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Flieg\'s Equipment</h1><hr>'+ 
            '<h3>Ste Genevieve, MO</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //J&J Sales Glasgow KY - Case
        var jandjMarker = new google.maps.Marker({
            position: jandj,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "J&J Sales - Glasgow KY",
        });
        
        jandjMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>J&J Sales</h1><hr>'+ 
            '<h3>Glasgow, KY</h3>'+
            '<ul><li>Case</li></ul>';
        });
        
        //Michael's Equipment Metropolis IL - Kubota
        var michaelsMarker = new google.maps.Marker({
            position: michaels,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Michael's Equipment - Metropolis, IL",
        });
        
        michaelsMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Michael\'s Equipment</h1><hr>'+ 
            '<h3>Metropolis, IL</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Pappy's Outdoor Marion IL - Kubota
        var pappysMarker = new google.maps.Marker({
            position: pappys,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Pappy's Outdoor - Marion, IL",
        });
        
        pappysMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Pappy\'s Outdoor</h1><hr>'+ 
            '<h3>Marion, IL</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //F.B. McAfoos & Co. Benton IL - Kubota
        var mcafooMarker = new google.maps.Marker({
            position: mcafoo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "F.B. McAfoos & Co. - Benton, IL",
        });
        
        mcafooMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>F.B. McAfoos & Co.</h1><hr>'+ 
            '<h3>Benton, IL</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Hopf Equipment Evansville IN - Kubota
        var hopfOneMarker = new google.maps.Marker({
            position: hopfOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hopf Equipment - Evansville, IN",
        });
        
        hopfOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hopf Equipment</h1><hr>'+ 
            '<h3>Evansville, IN</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Hagan's Outdoor Equipment Owensboro KY - Kubota
        var haganMarker = new google.maps.Marker({
            position: hagan,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hagan Outdoor - Owensboro, KY",
        });
        
        haganMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hagan\'s Outdoor Equipment</h1><hr>'+ 
            '<h3>Owensboro, KY</h3>'+
            '<ul><li>Kubota</li></ul>';
        });

        //Hopf Outdoor Power Jasper IN - Kubota
        var hopfTwoMarker = new google.maps.Marker({
            position: hopfTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hopf Outdoor Power - Jasper, IN",
        });
        
        hopfTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hopf Outdoor Power</h1><hr>'+ 
            '<h3>Jasper, IN</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Power Machinery & Impl. Madisonville KY - Kubota
        var powerMarker = new google.maps.Marker({
            position: power,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Power Machinery & Impl. - Madisonville KY",
        });
        
        powerMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Power Machinery & Impl.</h1><hr>'+ 
            '<h3>Madisonville, KY</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //CFI Inc. Calvert City KY - Kubota
        var cfiMarker = new google.maps.Marker({
            position: cfi,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "CFI Inc. - Calvert City, KY",
        });
        
        cfiMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>CFI Inc.</h1><hr>'+ 
            '<h3>Calvert City, KY</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Horizon Lawn & Tractor Hickory KY - Kubota
        var horizonMarker = new google.maps.Marker({
            position: horizon,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Horizon Lawn & Tractor - Hickory, KY",
        });
        
        horizonMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Horizon Lawn & Tractor</h1><hr>'+ 
            '<h3>Hickory, KY</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Coleman Tractor of Clarksville Clarksville TN - Kubota
        var colemanMarker = new google.maps.Marker({
            position: coleman,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Coleman Tractor of Clarksville - Clarksville, TN",
        });
        
        colemanMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Coleman Tractor of Clarksville</h1><hr>'+ 
            '<h3>Clarksville, TN</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Hobdy, Dye & Reed Inc. Bowling Green KY - Kubota
        var hobdyOneMarker = new google.maps.Marker({
            position: hobdyOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hobdy, Dye & Reed Inc. - Bowling Green, KY",
        });
        
        hobdyOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hobdy, Dye & Reed Inc.</h1><hr>'+ 
            '<h3>Bowling Green, KY</h3>'+
            '<ul><li>Kubota, New Holland</li></ul>';
        });
        
        //Hobdy, Dye & Reed Inc. Scottsville KY - Kubota
        var hobdyTwoMarker = new google.maps.Marker({
            position: hobdyTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hobdy, Dye & Reed Inc. - Scottsville, KY",
        });
        
        hobdyTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hobdy, Dye & Reed Inc.</h1><hr>'+ 
            '<h3>Scottsville, KY</h3>'+
            '<ul><li>Kubota, New Holland</li></ul>';
        });
        
        //Lawrence County Equipment Bedford IN- Kubota
        var lawrenceMarker = new google.maps.Marker({
            position: lawrence,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Lawrence County Equipment - Bedford, IN",
        });
        
        lawrenceMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Lawrence County Equipment</h1><hr>'+ 
            '<h3>Bedford, IN</h3>'+
            '<ul><li>Kubota, New Holland</li></ul>';
        });
        
        //Farm Pride Newton IL - Kubota
        var farmPrideMarker = new google.maps.Marker({
            position: farmPride,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Farm Pride - Newton IL",
        });
        
        farmPrideMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Farm Pride</h1><hr>'+ 
            '<h3>Newton, IL</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Lemond's Kubota Fairfield IL - Kubota
        var lemondsMarker = new google.maps.Marker({
            position: lemonds,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Lemond's Kubota - Fairfield IL",
        });
        
        lemondsMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Lemond\'s Kubota</h1><hr>'+ 
            '<h3>Fairfield, IL</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Davis Farm Supplies Jackson MO - Kubota
        var davisMarker = new google.maps.Marker({
            position: davis,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Davis Farm Supplies - Jackson MO",
        });
        
        davisMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Davis Farm Supplies</h1><hr>'+ 
            '<h3>Jackson, MO</h3>'+
            '<ul><li>Kubota, New Holland</li></ul>';
        });
        
        //Medlin Equipment Miner MO - Kubota
        var medlinOneMarker = new google.maps.Marker({
            position: medlinOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Medlin Equipment - Miner, MO",
        });
        
        medlinOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Medlin Equipment</h1><hr>'+ 
            '<h3>Miner, MO</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //First Choice Farm & Lawn Dyersburg TN - Kubota
        var firstChoiceOneMarker = new google.maps.Marker({
            position: firstChoiceOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "First Choice Farm & Lawn - Dyersburg, TN",
        });
        
        firstChoiceOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>First Choice Farm & Lawn</h1><hr>'+ 
            '<h3>Dyersburg, TN</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //First Choice Farm & Lawn Union City TN - Kubota
        var firstChoiceTwoMarker = new google.maps.Marker({
            position: firstChoiceTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "First Choice Farm & Lawn - Union City, TN",
        });
        
        firstChoiceTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>First Choice Farm & Lawn</h1><hr>'+ 
            '<h3>Union City, TN</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Coleman Tractor of Paris Paris TN - Kubota
        var colemanOneMarker = new google.maps.Marker({
            position: colemanOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Colemna Tracotor of Paris - Paris, TN",
        });
        
        colemanOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Coleman Tractor of Paris</h1><hr>'+ 
            '<h3>Paris, TN</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Dickson Farm Sales Dickson TN - Kubota
        var dicksonMarker = new google.maps.Marker({
            position: dickson,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Dickson Farm Sales - Dickson, TN",
        });
        
        dicksonMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Dickson Farm Sales</h1><hr>'+ 
            '<h3>Dickson, TN</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Cirrus Outdoor Power Equipment White House TN - Kubota
        var cirrusMarker = new google.maps.Marker({
            position: cirrus,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Cirrus Outdoor Power Equipment - White House, TN",
        });
        
        cirrusMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Cirrus Outdoor Power Equipment</h1><hr>'+ 
            '<h3>White House, TN</h3>'+
            '<ul><li>Kubota</li></ul>';
        });
        
        //Little Tractor and Equipment Metropolis IL - Kioti
        var littleTractorMarker = new google.maps.Marker({
            position: littleTractor,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Little Tractor and Equipment - Metropolis, IL",
        });
        
        littleTractorMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Little Tractor and Equipment</h1><hr>'+ 
            '<h3>Metropolis, IL</h3>'+
            '<ul><li>Kioti</li></ul>';
        });
        
        //Straub Outdoor Power Evansville IN - Kioti
        var straubMarker = new google.maps.Marker({
            position: straub,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Straub Outdoor Power - Evansville, IN",
        });
        
        straubMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Straub Outdoor Power</h1><hr>'+ 
            '<h3>Evansville, IN</h3>'+
            '<ul><li>Kioti</li></ul>';
        });
        
        //Midstate Turf & Tractor Springfield TN - Kioti
        var midstateMarker = new google.maps.Marker({
            position: midstate,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Midstate Turf & Tractor - Springfield,TN",
        });
        
        midstateMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Midstate Turf & Tractor</h1><hr>'+ 
            '<h3>Springfield, TN</h3>'+
            '<ul><li>Kioti</li></ul>';
        });
        
        //Organ Battery & Electric Co. Vincennes IN - Kioti
        var organMarker = new google.maps.Marker({
            position: organ,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Organ Battery & Electric Co. - Vincennes, IN",
        });
        
        organMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Organ Battery & Electric Co.<h1><hr>'+ 
            '<h3>Vincennes, IN</h3>'+
            '<ul><li>Kioti</li></ul>';
        });
        
        //Holtsclaw Sales & Service Switz City IN - Kioti
        var holtsclawMarker = new google.maps.Marker({
            position: holtsclaw,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Holtsclaw Sales & Service - Switz City, IN",
        });
        
        holtsclawMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Holtsclaw Sales & Service<h1><hr>'+ 
            '<h3>Switz City, IN</h3>'+
            '<ul><li>Kioti</li></ul>';
        });
        
        //Wells Tractor Co. Paris TN - New Holland
        var wellsMarker = new google.maps.Marker({
            position: wells,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Wells Tractor Co. - Paris, TN",
        });
        
        wellsMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Wells Tractor Co.<h1><hr>'+ 
            '<h3>Paris, TN</h3>'+
            '<ul><li>New Holland, Mahindra</li></ul>';
        });
        
        //Montgomery County Equipment Clarksville TN - New Holland
        var montgomeryMarker = new google.maps.Marker({
            position: montgomery,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Montgomery County Equipment - Clarksville, TN",
        });
        
        montgomeryMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Montgomery County Equipment<h1><hr>'+ 
            '<h3>Clarksville, TN</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Ward Implement Co. Beech Grove KY - New Holland
        var wardMarker = new google.maps.Marker({
            position: ward,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Ward Implement Co. - Beech Grove, KY",
        });
        
        wardMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Ward Implement Co.<h1><hr>'+ 
            '<h3>Beech Grove, KY</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Southeastern Equipment Co. Evansville IN - New Holland
        var southeasternMarker = new google.maps.Marker({
            position: southeastern,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Southeastern Equipment Co. - Evansville, IN",
        });
        
        southeasternMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Southeastern Equipment Co.<h1><hr>'+ 
            '<h3>Evansville, IN</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Ken Shourds Equipment Rockport IN - New Holland
        var shourdsMarker = new google.maps.Marker({
            position: shourds,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Ken Shourds Equipment - Rockport, IN",
        });
        
        shourdsMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Ken Shourds Equipment<h1><hr>'+ 
            '<h3>Rockport, IN</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Blesch Brothers Equipment Holland IN - New Holland
        var bleschMarker = new google.maps.Marker({
            position: blesch,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Blesch Brothers Equipment - Holland, IN",
        });
        
        bleschMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Belsch Brothers Equipment<h1><hr>'+ 
            '<h3>Holland, IN</h3>'+
            '<ul><li>New Holland, AGCO</li></ul>';
        });
        
        //Blesch Brothers Equipment Odon IN - New Holland
        var bleschOneMarker = new google.maps.Marker({
            position: bleschOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Blesch Brothers Equipment - Odon, IN",
        });
        
        bleschOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Belsch Brothers Equipment<h1><hr>'+ 
            '<h3>Oden, IN</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //John's Tractor Service Saint Meinrad IN - New Holland
        var johnMarker = new google.maps.Marker({
            position: john,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "John's Tractor Service - Saint Meinrad, IN",
        });
        
        johnMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>John\'s Tractor Service<h1><hr>'+ 
            '<h3>Saint Meinrad, IN</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Adams-Meyer Inc Vincennes, IN - New Holland
        var adamsMarker = new google.maps.Marker({
            position: adams,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Adams-Meyer Inc - Vincennes, IN",
        });
        
        adamsMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Adams-Meyers Inc<h1><hr>'+ 
            '<h3>Vincennes, IN</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Herschel Johnson Imp. Albion IL - New Holland
        var herschelMarker = new google.maps.Marker({
            position: herschel,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Herschel Johnson Imp. - Albion, IL",
        });
        
        herschelMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hershel Johnson Imp.<h1><hr>'+ 
            '<h3>Albion, IL</h3>'+
            '<ul><li>New Holland, AGCO</li></ul>';
        });
        
        //Hobdy, Dye & Reed Inc Hardinsburg KY - New Holland
        var hobdyThreeMarker = new google.maps.Marker({
            position: hobdyThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hobdy, Dye & Reed Inc - Hardinsburg, KY",
        });
        
        hobdyThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hobdy, Dye & Reed Inc<h1><hr>'+ 
            '<h3>Hardinsburg, KY</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Hobdy, Dye & Reed Inc Cave City KY - New Holland
        var hobdyFourMarker = new google.maps.Marker({
            position: hobdyFour,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hobdy, Dye & Reed Inc - Cave City, KY",
        });
        
        hobdyFourMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hobdy, Dye & Reed Inc<h1><hr>'+ 
            '<h3>Cave City, KY</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Delta New Holland Co. Charleston MO - New Holland
        var deltaMarker = new google.maps.Marker({
            position: delta,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Delta New Holland Co. - Charleston, MO",
        });
        
        deltaMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Delta New Holland Co.<h1><hr>'+ 
            '<h3>Charleston, MO</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Davis Farm Supplies Perryville MO - New Holland
        var davisOneMarker = new google.maps.Marker({
            position: davisOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Davis Farm Supplies - Perryville, MO",
        });
        
        davisOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Davis Farm Supplies</h1><hr>'+ 
            '<h3>Perryville, MO</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Diedrich Implements Nashville IL - New Holland
        var diedrichMarker = new google.maps.Marker({
            position: diedrich,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Diedrich Implements - Nashville, IL",
        });
        
        diedrichMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Diedrich Implements</h1><hr>'+ 
            '<h3>Nashville, IL</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Pigg Implement Sullivan IN - New Holland
        var piggMarker = new google.maps.Marker({
            position: pigg,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Pigg Implement - Sullivan, IN",
        });
        
        piggMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Pigg Implement</h1><hr>'+ 
            '<h3>Sullivan, IN</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Riddle Tractor Sales Spencer IN - New Holland
        var riddleMarker = new google.maps.Marker({
            position: riddle,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Riddle Tractor4 - Spencer, IN",
        });
        
        riddleMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Riddle Tractor</h1><hr>'+ 
            '<h3>Spencer, IN</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Schafstall Inc Salem IN - New Holland
        var schafstallMarker = new google.maps.Marker({
            position: schafstall,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Schafstall Inc - Salem IN",
        });
        
        schafstallMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Schafstall Inc</h1><hr>'+ 
            '<h3>Salem, IN</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Cumberland Tractor Nashville TN - New Holland
        var cumberlandMarker = new google.maps.Marker({
            position: cumberland,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Cumberland Tractor - Nashville, TN",
        });
        
        cumberlandMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Cumberland Tractor</h1><hr>'+ 
            '<h3>Nashville, TN</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Dickson County Equipment Dickson TN - New Holland
        var dicksonOneMarker = new google.maps.Marker({
            position: dicksonOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Dickson County Equipment - Dickson TN",
        });
        
        dicksonOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Dickson County Equipment</h1><hr>'+ 
            '<h3>Dickson, TN</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Tri-County Farmers Equipment Newbern TN - New Holland
        var tricountyMarker = new google.maps.Marker({
            position: tricounty,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Tri-County Farmers Equipment - Newbern, TN",
        });
        
        tricountyMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Tri-County Farmers Equipoment</h1><hr>'+ 
            '<h3>Newbern, TN</h3>'+
            '<ul><li>New Holland</li></ul>';
        });
        
        //Whayne Supply Paducah KY - AGCO
        var whayneOneMarker = new google.maps.Marker({
            position: whayneOne,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Whayne Supply - Paducah, KY",
        });
        
        whayneOneMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Whayne Supply</h1><hr>'+ 
            '<h3>Paducah, KY</h3>'+
            '<ul><li>AGCO</li></ul>';
        });
        
        //Whayne Supply Mayfield KY - AGCO
        var whayneTwoMarker = new google.maps.Marker({
            position: whayneTwo,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Whayne Supply - Mayfield, KY",
        });
        
        whayneTwoMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Whayne Supply</h1><hr>'+ 
            '<h3>Mayfield, KY</h3>'+
            '<ul><li>AGCO</li></ul>';
        });
        
        //Whayne Supply Owensboro KY - AGCO
        var whayneThreeMarker = new google.maps.Marker({
            position: whayneThree,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Whayne Supply - Owensboro, KY",
        });
        
        whayneThreeMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Whayne Supply</h1><hr>'+ 
            '<h3>Owensboro, KY</h3>'+
            '<ul><li>AGCO</li></ul>';
        });
        
        //MacAllister Machinery Co Washington IN - AGCO
        var macallisterMarker = new google.maps.Marker({
            position: macallister,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "MacAllister Machinery Co - Washingtion, IN",
        });
        
        macallisterMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>MacAllister Machinery Co</h1><hr>'+ 
            '<h3>Washington, IN</h3>'+
            '<ul><li>AGCO</li></ul>';
        });
        
        //Whayne Supply Evansville IN - AGCO
        var whayneFourMarker = new google.maps.Marker({
            position: whayneFour,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Whayne Supply - Evansville, IN",
        });
        
        whayneFourMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Whayne Supply</h1><hr>'+ 
            '<h3>Evansville, IN</h3>'+
            '<ul><li>AGCO</li></ul>';
        });
        
        //Whayne Supply Hopkinsville KY - AGCO
        var whayneFiveMarker = new google.maps.Marker({
            position: whayneFive,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Whayne Supply - Hopkinsville, KY",
        });
        
        whayneFiveMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Whayne Supply</h1><hr>'+ 
            '<h3>Hopkinsville, KY</h3>'+
            '<ul><li>AGCO</li></ul>';
        });
        
        //Whayne Supply Bowling Green KY - AGCO
        var whayneSixMarker = new google.maps.Marker({
            position: whayneSix,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Whayne Supply - Bowling Green, KY",
        });
        
        whayneSixMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Whayne Supply</h1><hr>'+ 
            '<h3>Bowling Green, KY</h3>'+
            '<ul><li>AGCO</li></ul>';
        });
        
        //Heuer Sons Impl. Co Cape Girardeau MO - AGCO
        var heuerMarker = new google.maps.Marker({
            position: heuer,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Heuer Sons Impl. Co - Cape Girardeau",
        });
        
        heuerMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Heuer Sons Impl. Co</h1><hr>'+ 
            '<h3>Cape Girardeau, MO</h3>'+
            '<ul><li>AGCO</li></ul>';
        });
        
        //B&G Equipment Paris TN - AGCO
        var bandgMarker = new google.maps.Marker({
            position: bandg,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "B&G Equipment - Paris, TN",
        });
        
        bandgMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>B&G Equipment</h1><hr>'+ 
            '<h3>Paris, TN</h3>'+
            '<ul><li>AGCO</li></ul>';
        });
        
        //Hayor Outdoor Equipment Brookport IL - Mahindra
        var hayorMarker = new google.maps.Marker({
            position: hayor,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hayor Outdoor Equipment - Brookport, IL",
        });
        
        hayorMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hayor Outdoor Equipment</h1><hr>'+ 
            '<h3>Brookport, IL</h3>'+
            '<ul><li>Mahindra</li></ul>';
        });
        
        //Coleman Lawn Equipment Carbondale IL - Mahindra
        var colemanLawnMarker = new google.maps.Marker({
            position: colemanLawn,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Coleman Lawn Equipment - Carbondale, IL",
        });
        
        colemanLawnMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Coleman Lawn Equipment</h1><hr>'+ 
            '<h3>Carbondale, IL</h3>'+
            '<ul><li>Mahindra</li></ul>';
        });
        
        //Mahindra of KenTenn Union City TN - Mahindra
        var kentennMarker = new google.maps.Marker({
            position: kentenn,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Mahindra of KenTenn - Union City, TN",
        });
        
        kentennMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Mahindra of KenTenn</h1><hr>'+ 
            '<h3>Union City, TN</h3>'+
            '<ul><li>Mahindra</li></ul>';
        });
        
        //Mohon Tractor Sales & Service Hopkinsville KY - Mahindra
        var mohonMarker = new google.maps.Marker({
            position: mohon,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Mohon Tractor Sales & Service - Hopkinsville, KY",
        });
        
        mohonMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Mohon Tractor Sales & Service</h1><hr>'+ 
            '<h3>Hopkinsville, KY</h3>'+
            '<ul><li>Mahindra, Dixie Chopper</li></ul>';
        });
        
        //MRK Equipment Co. Princeton IN - Mahindra
        var mrkMarker = new google.maps.Marker({
            position: mrk,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "MRK Equipment Co. - Princeton, IN",
        });
        
        mrkMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>MRK Equipment Co.</h1><hr>'+ 
            '<h3>Princeton, IN</h3>'+
            '<ul><li>Mahindra</li></ul>';
        });
        
        //Hillyard Sales & Service Carmi IL - Mahindra
        var hillyardMarker = new google.maps.Marker({
            position: hillyard,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hillyard Sales & Service - Carmi IL",
        });
        
        hillyardMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hillyard Sales & Service</h1><hr>'+ 
            '<h3>Carmi, IL</h3>'+
            '<ul><li>Mahindra</li></ul>';
        });
        
        //Canary Outdoor Power Equipment Cannelton IN - Mahindra
        var canaryMarker = new google.maps.Marker({
            position: canary,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Canary Outdoor Power Equipment - Cannelton, IN",
        });
        
        canaryMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Canary Outdoor Equipment</h1><hr>'+ 
            '<h3>Cannelton, IN</h3>'+
            '<ul><li>Mahindra</li></ul>';
        });
        
        //Fairview Farm Center Pembroke KY - LS Tractor
        var fairviewMarker = new google.maps.Marker({
            position: fairview,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Fairview Farm Center - Pembroke, KY",
        });
        
        fairviewMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Fairview Farm Center</h1><hr>'+ 
            '<h3>Pembroke, KY</h3>'+
            '<ul><li>LS Tractor</li></ul>';
        });
        
        //Rister Brothers Harrisburg IL - LS Tractor
        var risterMarker = new google.maps.Marker({
            position: rister,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Rister Brothers - Harrisburg, IL",
        });
        
        risterMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Rister Brothers</h1><hr>'+ 
            '<h3>Harrisburg, IL</h3>'+
            '<ul><li>LS Tractor</li></ul>';
        });
        
        //Two Rivers Inc. Powderly KY - LS Tractor
        var tworiversMarker = new google.maps.Marker({
            position: tworivers,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Two Rivers Inc. - Powderly, KY",
        });
        
        tworiversMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Two Rivers Inc.</h1><hr>'+ 
            '<h3>Powderly, KY</h3>'+
            '<ul><li>LS Tractor</li></ul>';
        });
        
        var hutsonCypressMarker = new google.maps.Marker({
            position: hutsonCypress,
            map: map,
            icon: pinBlack,
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
            icon: pinBlack,
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
            icon: pinBlack,
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
            icon: pinBlack,
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
            icon: pinBlack,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonPoseyvilleMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Poseyville, IN</h3>';
        });
        
        var hutsonJasperMarker = new google.maps.Marker({
            position: hutsonJasper,
            map: map,
            icon: pinBlack,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonJasperMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Jasper, IN</h3>';
        });
        
        var hutsonNewberryMarker = new google.maps.Marker({
            position: hutsonNewberry,
            map: map,
            icon: pinBlack,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonNewberryMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Newberry, IN</h3>';
        });
        
        var hutsonRussellvilleMarker = new google.maps.Marker({
            position: hutsonRussellville,
            map: map,
            icon: pinBlack,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonRussellvilleMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Russellville, KY</h3>';
        });
        
        var hutsonClintonMarker = new google.maps.Marker({
            position: hutsonClinton,
            map: map,
            icon: pinBlack,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonClintonMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Clinton, KY</h3>';
        });
        
        var hutsonClarksvilleMarker = new google.maps.Marker({
            position: hutsonClarksville,
            map: map,
            icon: pinBlack,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonClarksvilleMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Clarksville, TN</h3>';
        });
        
        var hutsonPrincetonMarker = new google.maps.Marker({
            position: hutsonPrinceton,
            map: map,
            icon: pinBlack,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonPrincetonMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Princeton, KY</h3>';
        });
        
        var hutsonEvansvilleMarker = new google.maps.Marker({
            position: hutsonEvansville,
            map: map,
            icon: pinBlack,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonEvansvilleMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Evansville, IN</h3>';
        });
        
        var hutsonHopkinsvilleMarker = new google.maps.Marker({
            position: hutsonHopkinsville,
            map: map,
            icon: pinBlack,
            animation: google.maps.Animation.DROP,
            title: 'Hutson Inc.'
        });
        
        hutsonHopkinsvilleMarker.addListener('click', function() {
            document.getElementById("city").innerHTML = '<h1>Hutson Inc</h1><hr>'+ 
            '<h3>Hopkinsville, KY</h3>';
        });
        
}