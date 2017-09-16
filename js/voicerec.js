$(document).ready(function(){



  if (annyang) {
    console.log("annyang")
    let $writeHTML = $("#pen-HTML");
    let $writeCSS = $("#pen-CSS");
    let $writeJS = $("#pen-JS");
    let $selected; 
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'change HTML': function() {
        $selected = $writeHTML;
        console.log("HTML");
      },
      'change CSS': function() {
        $selected = $writeCSS;
        console.log("CSS");
      },
      'change JS': function() {
        $selected = $writeJS;
        console.log("Javascript");
      },
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
    
  }

});