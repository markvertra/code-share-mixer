$(document).ready(function(){

  setInterval(getInfo, 1000);

  $('#jquery-giver').on('click', () => {
    giveMeJQuery();
  });

  $('.change-HTML').on('click', () => {
    changeHTML();
  });

  $('.change-CSS').on('click', () => {
    changeCSS();
  });

  $('.change-JS').on('click', () => {
    changeJS();
  });

  $(window).resize(() => {
    if ($(window).width() > 700) {
      $(".pen-input").show();
    }
  });

  $(window).resize(() => {
    if ($(window).width() < 700) {
      $(".pen-input").hide();
      $(".pen-holder-HTML").show();
    }
  });




});

function getInfo() {
  $("#results-div").remove();
  $("#results-box").append("<div id='results-div'></div>")
  const penHTML = $("#pen-HTML").val();
  const penCSS = $("#pen-CSS").val();
  const penJS = $("#pen-JS").val();
  $("#results-div").append("<style>" + penCSS + "</style>")
  $("#results-div").append(penHTML);
  $("#results-div").append("<script>" + penJS + "</script>")
}

function giveMeJQuery() {
  console.log("YOU HAVE JQUERY");
  $("#results-box").append(`<script src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>`)
}

function changeHTML() {
  $(".pen-input").hide();
  $(".pen-holder-HTML").show();
}

function changeCSS() {
  $(".pen-input").hide()
  $(".pen-holder-CSS").show();
}

function changeJS() {
  $(".pen-input").hide();
  $(".pen-holder-JS").show();
}