var styles = ["alt", "page"];

var css = document.getElementsByTagName("link");

function setActiveStyleSheet(title, type) {
  var i, tmp;
  for(i=1; i < css.length; i++) {
    if (css[i].getAttribute("class") === type) {
      css[i].disabled = true;
      if (css[i].getAttribute("title") === title) {
        css[i].disabled = false;
      }
    }
  }
}

function getActiveStyleSheet(type) {
  var i;
  for(i=1; i < css.length; i++) {
    if (!css[i].disabled) {
      if (css[i].getAttribute("class") === type) {
        return css[i].getAttribute("title");
      }
    }
  }
  return null;
}

function getPreferredStyleSheet(type) {
  var i;
  for(i=1; i < css.length; i++) {
    if (css[i].getAttribute("rel")==="stylesheet"
      && (css[i].getAttribute("class")===type)) {
        return (css[i].getAttribute("title"));
    }
  }
  return null;
}

function createCookie(cName,value,days) {
  var i, date, expires;
  if (days) {
    date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = "; expires="+date.toGMTString();
  }
  else {
    expires = "";
  }
  document.cookie = cName+"="+value+expires+"; path=/";
}

function readCookie(cName) {
  var i, c;
  var nameEQ = cName + "=";
  var cookieStuff = document.cookie.split(';');
  for(i=0;i < cookieStuff.length;i++) {
    c = cookieStuff[i];
    while (c.charAt(0)===' ') { //Cut out empty spaces.
      c = c.substring(1,c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length,c.length);
    }
  }
  return null;
}

window.onload = function(e) {
  var i, cookie, title;
  for (i=0; i < styles.length; i++) {
    cookie = readCookie(styles[i]);
    if (cookie !== null) {
      title = cookie;
    }
    else {
      title = getPreferredStyleSheet(styles[i]);
      //If there's a cookie, use that style, else get preferred style sheet.
    }
    setActiveStyleSheet(title, styles[i]);
    //Set style sheet to one chosen above.
  }
};

//Get current style sheet and save to cookie.
window.onunload = function(e) {
  var i, title;
  for (i=0; i < styles.length; i++) {
    title = getActiveStyleSheet(styles[i]);
    createCookie(styles[i], title, 365);
  }
};

var i, title;
for (i=0; i < styles.length; i++) {
  var cookie = readCookie(styles[i]);
  if (cookie !== null) {
    title = cookie;
  }
  else {
    title = getPreferredStyleSheet(styles[i]);
  }
  setActiveStyleSheet(title, styles[i]);
}
