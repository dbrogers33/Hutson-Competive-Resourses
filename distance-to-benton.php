<?php 
    $map = file_get_contents('https://maps.googleapis.com/maps/api/distancematrix/json?origins=37.539173,-88.805190|37.435574,-88.735117|37.555838,-88.73565|37.349702,-89.029470|36.932408,-89.559396|37.380277,-89.099200|37.540022,-89.290964|37.396998,-89.299613|37.622788,-88.818503|37.658275,-88.573134&destinations=37.996917,-88.934475&key=AIzaSyCL4aB4k7M7uN33n18YtcTbed1CtqTiEsw');
    $map_array = json_decode($map, true);

    $employee_array = array("Billy Dalton", "Rita Dunning", "David Garren", "Deborah Green", "Cecil Hammontree", "Clay Harris", "Warren Lofton", "Dusty Miller", "Jeffery Sims", "Gaylon Stricklin");
?>

<!DOCTYPE html>
<html>
<head>
 <title>Driving Distance to Ana</title>
<!-- Bootstrap CDN -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha256-7s5uDGW3AHqw6xtJmNNtr+OBRJUlgkNJEo78P4b0yRw= sha512-nNo+yCHEyn0smMxSswnf/OnX6/KwJuZTlNZBjauKhTK0c+zT+q5JOCx0UFhXQ6rJR9jg6Es8gPuD2uZcYDLqSw==" crossorigin="anonymous">
<!-- Custom CSS -->
<link href="css/style.css" type="text/css" rel="stylesheet" />
<!-- Google Fonts -->
<link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
<!-- map.js -->
<script src="js/employeesbenton.js" type="text/javascript"></script>

</head>
<body>
    
<div class="page"> 
<a href="/distance-to-ana.php">Previous Page</a><span>

<div id="map">

</div>
<aside>
    <div id="city">
        <h1>Employees Drive Time to Benton, IL</h1>
        <hr>
    
        <ul>
            <?php 
                for ($i=0; $i < 10 ; $i++) { 
                    # code...
                    echo '<li>'.$employee_array[$i].'</li><ul><li>'.$map_array['rows'][$i]['elements'][0]['duration']['text'].'</li></ul>';
                }
            ?>
        </ul>


    </div>  
</aside>
<!-- Google Maps API Key -->  
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnEHpxM1Sh_zgYztLHaeRVyJQO7Vu5QVc&signed_in=true&libraries=visualization&callback=initMap">
</script>

</body>

</html>