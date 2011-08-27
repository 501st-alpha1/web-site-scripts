<?php
  $num = $_GET["num"];
  //$num = 0;
  $response = "";
  $i;

  for ($i = $num * 5 + 1; $i < $num * 5 + 6; $i++) {
    $filename="http://dl.dropbox.com/u/12163144/Jokes/" . str_pad($i, 4, 0, STR_PAD_LEFT) . ".txt";
    if (url_exists($filename)) {
      $response = $response . "<p class=\"jokes\">";
      $file=fopen($filename, "r") or exit("Fail!");
      while(!feof($file)) {
        $response = $response . fgets($file) . "<br />";
      }
      fclose($file);
      $response = $response . "</p>";
    }
  }

/*  for ($i = 10, $x=true; $x == true; $i++) {
    $filename="http://dl.dropbox.com/u/12163144/Jokes/00" . $i . ".txt";
    if (url_exists($filename)) {
      $response = $response . '<p class="jokes">';
      $file=fopen($filename, "r") or exit("Fail!");
      while(!feof($file)) {
        $response = $response . fgets($file). "<br />";
      }
      fclose($file);
      $response = $response . "</p>";
    }
    else {
      $x = false;
    }
  }*/

  echo str_pad($i, 4, 0, STR_PAD_LEFT) . $response;

  function url_exists($url) {
    $hdrs = @get_headers($url);
    return is_array($hdrs) ? preg_match('/^HTTP\\/\\d+\\.\\d+\\s+2\\d\\d\\s+.*$/',$hdrs[0]) : false;
  }
?>
