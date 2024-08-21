$(document).ready(function () {
  //gnb
  setGnbMenuMenuHighlight();

  //left menu
  setLeftMenuHighlight();
});

function setGnbMenuMenuHighlight() {
  var subUrl = "";

  try {
    var curr_url = location.href.split("/");
    subUrl = curr_url[3];
  } catch (e) {}

  //alert(subUrl);

  $("#gnb")
    .find("a")
    .each(function () {
      var menuNm = $(this).text();

      if (subUrl == menuNm.toLowerCase()) {
        $(this).addClass("on");
      }
    });
}

function setLeftMenuHighlight() {
  var nav_url = "";

  try {
    var curr_url = location.href.split("/");
    nav_url = "/" + curr_url[3] + "/" + curr_url[4] + "/";
  } catch (e) {}

  //alert(nav_url);

  $("#lnb")
    .find("a")
    .each(function () {
      var href = $(this).attr("href");

      if (href.indexOf(nav_url) > -1) {
        $(this).addClass("on");
      }
    });
}

function getCookie(cookieName) {
  var i,
    x,
    y,
    ARRcookies = document.cookie.split(";");

  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");

    if (x == cookieName) {
      return unescape(y);
    }
  }
}

function setCookie(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);

  document.cookie =
    name +
    "=" +
    escape(value) +
    "; path=/; expires=" +
    todayDate.toGMTString() +
    ";";
}
