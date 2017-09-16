$(document).ready(function(){



  if (annyang) {
  
    const $writeHTML = $("#pen-HTML");
    const $writeCSS = $("#pen-CSS");
    const $writeJS = $("#pen-JS");
    let $selected; 
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'change page': function() {
        $selected = $writeHTML;
        selectWriteType($selected);
      },
      'change style': function() {
        $selected = $writeCSS;
        selectWriteType($selected);
      },
      'change javascript': function() {
        $selected = $writeJS;
        selectWriteType($selected);
      },
      'tag one': function() {
        console.log("TAG ONE");
        $("#pen-HTML").val($("#pen-HTML").val() + "<h1>");
      },
      'close tag one': function() {
        console.log("CLOSE TAG ONE");
        $("#pen-HTML").val($("#pen-HTML").val() + "</h1>");
      },
      'tag two': function() {
        console.log("TAG TWO");
        $("#pen-HTML").val($("#pen-HTML").val() + "<h2>");
      },
      'close tag two': function() {
        console.log("CLOSE TAG TWO");
        $("#pen-HTML").val($("#pen-HTML").val() + "</h2>");
      },
      'tag three': function() {
        console.log("TAG THREE");
        $("#pen-HTML").val($("#pen-HTML").val() + "<h3>");
      },
      'tag three': function() {
        console.log("CLOSE TAG THREE");
        $("#pen-HTML").val($("#pen-HTML").val() + "</h3>");
      },
      'tag four': function() {
        console.log("TAG FOUR");
        $("#pen-HTML").val($("#pen-HTML").val() + "<h4>");
      },
      'close tag four': function() {
        console.log("CLOSE TAG FOUR");
        $("#pen-HTML").val($("#pen-HTML").val() + "</h4>");
      },
      'tag five': function() {
        console.log("TAG FIVE");
        $("#pen-HTML").val($("#pen-HTML").val() + "<h5>");
      },
      'close tag five': function() {
        console.log("CLOSE TAG FIVE");
        $("#pen-HTML").val($("#pen-HTML").val() + "</h5>");
      },
      'tag six': function() {
        console.log("TAG SIX");
        $("#pen-HTML").val($("#pen-HTML").val() + "<h6>");
      },
      'close tag six': function() {
        console.log("TAG SIX");
        $("#pen-HTML").val($("#pen-HTML").val() + "</h6>");
      },
      'tag p': function() {
        console.log("TAG P");
        $("#pen-HTML").val($("#pen-HTML").val() + "<p>");
      },
      'close tag p': function() {
        console.log("TAG P");
        $("#pen-HTML").val($("#pen-HTML").val() + "</p>");
      },
      'tag div': function() {
        console.log("TAG DIV");
        $("#pen-HTML").val($("#pen-HTML").val() + "<div>");
      },
      'close tag div': function() {
        console.log("CLOSE TAG DIV");
        $("#pen-HTML").val($("#pen-HTML").val() + "<div>");
      },
        '*anything': anything
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    annyang.debug();

    annyang.setLanguage("en-GB");

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
    
  }

});

function selectWriteType(type){
  $(".pen-box").css("border", "1px solid black");
  type.css("border", "1px solid red");
}

function anything(text) {
  $("#pen-HTML").val($("#pen-HTML").val() + text);
}