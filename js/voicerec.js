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
        $("#pen-HTML").val($("#pen-HTML").val() + "<h1>");
      },
      'close tag one': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</h1>");
      },
      'tags one': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<h1></h1>");
      },
      'tag two': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<h2>");
      },
      'close tag two': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</h2>");
      },
      'tag three': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<h3>");
      },
      'tag three': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</h3>");
      },
      'tag four': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<h4>");
      },
      'close tag four': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</h4>");
      },
      'tag five': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<h5>");
      },
      'close tag five': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</h5>");
      },
      'tag six': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<h6>");
      },
      'close tag six': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</h6>");
      },
      'tag p': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<p>");
      },
      'close tag p': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</p>");
      },
      'tag div': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<div>");
      },
      'close tag div': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</div>");
      },
      'tag a': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<a>");
      },
      'close tag a': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</a>");
      },
      'tag break': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<br>");
      },
      'tag rule': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<hr>");
      },
      'tag form': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<form>");
      },
      'close tag form': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</form>");
      },
      'tag input': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<input>");
      },
      'tag label': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<label>");
      },
      'close tag label': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</label>");
      },
      'tag audio': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<audio>");
      },
      'close tag audio': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</audio>");
      },
      'tag unordered list': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<ul>");
      },
      'close tag unordered list': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</ul>");
      },
      'tag ordered list': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<ol>");
      },
      'close tag ordered list': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</ol>");
      },
      'tag list': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "<li>");
      },
      'close tag list': function() {
        $("#pen-HTML").val($("#pen-HTML").val() + "</li>");
      },
      'style one': function() {
        $("#pen-CSS").val($("#pen-CSS").val() + "h1 { }");
      },
      'style two': function() {
        $("#pen-CSS").val($("#pen-CSS").val() + "h2 { }");
      },
      'style three': function() {
        $("#pen-CSS").val($("#pen-CSS").val() + "h3 { }");
      },
      'style four': function() {
        $("#pen-CSS").val($("#pen-CSS").val() + "h4 { }");
      },
      'style five': function() {
        $("#pen-CSS").val($("#pen-CSS").val() + "h5 { }");
      },
      'style six': function() {
        $("#pen-CSS").val($("#pen-CSS").val() + "h6 { }");
      },
      "*anything": anything
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