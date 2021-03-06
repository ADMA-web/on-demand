"use strict";

/* Some extra js for the Webcast Cloud platform */
// auto-execute jQuery load
(function () {
  'use strict'; // Load the script

  var script = document.createElement("SCRIPT");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
  script.type = 'text/javascript';

  script.onload = function () {
    var $ = window.jQuery;
    console.log('hello jQuery');
    $(document).ready(main);
  };

  document.getElementsByTagName("head")[0].appendChild(script);
})();

function main() {
  if ($('#logoutForm').length === 0) {
    spawnLoginBtn();
  } // create a login button if user is not logged in


  appendChannelClass(); // append channel-specific class to body, when on a Channel page
}

function spawnLoginBtn() {
  var nav = $('.nav-main');
  var navList = $('.nav-main .nav-main-list');
  var loginBtn = "<a id=\"loginBtn\" class=\"button button--cta has-background-red\" href=\"https://www.adma.com.au/user/login\">Login via ADMA</a>";

  if (navList.length === 0) {
    nav.append("<ul class=\"nav-main-list\"><li>".concat(loginBtn, "</li></ul>"));
  } else {
    navList.append("<li>".concat(loginBtn, "</li>"));
  }
}

function appendChannelClass() {
  var channels = {
    'DD19': {
      uri: '://on-demand.adma.com.au/Channel/DataDay2019'
    }
  };

  if (document.documentURI.includes(channels['DD19'].uri)) {
    // only using one for now
    console.log('data day channel detected');
    $('body').addClass('data-day');
  } else {
    console.log('no channel detected');
  }
}