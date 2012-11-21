function getLocation() {
  var url = document.URL;
  var heirarchy = url.split("\/");
  var div = document.getElementById("location");

  heirarchy.shift();
  heirarchy.shift();
  heirarchy.shift();
  heirarchy[heirarchy.length - 1] =
      (heirarchy[heirarchy.length - 1].split("."))[0];

  var title = new Array(heirarchy.length);
  for (var i = 0; i < heirarchy.length; i++) {
    title[i] = heirarchy[i].charAt(0).toUpperCase() +
        heirarchy[i].slice(1);
  }

  div.innerHTML = "Location: / <a href=\"/index.php\">Home</a>";

  while (heirarchy.length > 1) {
    div.innerHTML = div.innerHTML + " / <a href=\"/" + heirarchy[0] +
        ".php\">" + title[0] + "</a>";
    heirarchy[1] = heirarchy[0] + "/" + heirarchy[1];
    heirarchy.shift();
    title.shift();
  }

  div.innerHTML = div.innerHTML + "/ <a href=\"/" + heirarchy[0] +
      ".php\">" + title[0] + "</a>";
}
