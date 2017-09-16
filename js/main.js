$(document).ready(function(){

  setInterval(getInfo, 1000);

});

function getInfo() {
  $("#results-div").remove();
  $("#results-box").append("<div id='results-div'></h1>")
  const penHTML = $("#pen-HTML").val();
  const penCSS = $("#pen-CSS").val();
  const penJS = $("#pen-JS").val();
  console.log("<style>" + penCSS + "</style>")
  $("#results-div").append("<style>" + penCSS + "</style>")
  $("#results-div").append(penHTML);
  $("#results-div").append("<script>" + penJS + "</script>")
}