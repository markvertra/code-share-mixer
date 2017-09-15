$(document).ready(function(){

  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'hello': function() {
        $('#pen-html').html("Hello");
      }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    $("#listen").on("click", function(){
      annyang.start();
    });
    
    
  }

});