function clock() {
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var clock = document.getElementById("clock");
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var weekday = weekdays[date.getDay()];

  clock.innerHTML = "Today is " + weekday + ", the " + suffix(day) + " day of the "
    + suffix(month) + " month of the " + suffix(year) + " year A.D.";
}

function suffix(num) {
  var numString = num.toString();
  var tmp = (numString.charAt(numString.length - 1)).toString();

  if (numString.charAt(numString.length - 2) === '1') {
    num += "th";
  }
  else {
    switch (tmp) {
      case '0': num += "th";
        break;
      case '1': num += "st";
        break;
      case '2': num += "nd";
        break;
      case '3': num += "rd";
        break;
      case '4': num += "th";
        break;
      case '5': num += "th";
        break;
      case '6': num += "th";
        break;
      case '7': num += "th";
        break;
      case '8': num += "th";
        break;
      case '9': num += "th";
        break;
    }
  }

  return num;
}
