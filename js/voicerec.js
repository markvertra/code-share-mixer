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
        console.log("HTML");
      },
      'change styles': function() {
        $selected = $writeCSS;
        selectWriteType($selected);
        console.log("CSS");
      },
      'change javascript': function() {
        $selected = $writeJS;
        selectWriteType($selected);
        console.log("Javascript");
      },
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
  type.css("border", "1px solid red");
}