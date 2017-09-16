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
        $("#pen-HTML").val($("#pen-HTML").val() + "<h1>");
      }
      
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