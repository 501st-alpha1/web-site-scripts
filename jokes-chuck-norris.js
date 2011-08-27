var cont = true;

function loadJokesSet(num) {
  var myDiv = document.getElementById("jokes");
  var xmlhttp;
  var url;
  var response;
  var loading = document.createElement('p');
  var loadingGif = document.createElement('img');

  loading.setAttribute("id", "loading");

  loadingGif.setAttribute("src", "/images/loading.gif"); 
  loadingGif.setAttribute("width", "20");
  loadingGif.setAttribute("height", "20");

  loading.appendChild(document.createTextNode("Loading, please wait..."));
  loading.appendChild(loadingGif);

  if (num === 0) {
    myDiv.removeChild(myDiv.childNodes[0]);
    myDiv.appendChild(loading);
  }
  //if (num === 1) {
  //  myDiv.removeChild(document.getElementById("loading"));
  //}

  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  }
  else {
    //Stupid Internet Explorer...
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  url = "/scripts/jokes-chuck-norris.php?num=" + num;
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      //if (xmlhttp.responseText.slice(0, 3) > 20) {
      //  cont = false;
      //}
      response = xmlhttp.responseText.slice(4, xmlhttp.responseText.length - 1);
      myDiv.innerHTML += response;
    }
  };
}

function loadJokes() {
  for (var i=0; i < 22; i++) {
    loadJokesSet(i);
  }
}
