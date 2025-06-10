<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Array</title>
  </head>
  <body>
    <h1>Array</h1>
    <?php
    $coworkers = array('egoing', 'leezche', 'duru', 'taeho');
    echo $coworkers[1].'<br>';
    echo $coworkers[3].'<br>';
    var_dump(count($coworkers)); // Dumps information about a variable
    array_push($coworkers, 'graphittie'); //Push one or more elements onto the end of array
    var_dump($coworkers);
    ?>
  </body>
</html>
