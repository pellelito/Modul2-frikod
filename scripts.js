/*************************************** 
Assignment in JavaScript class aug 2020
Author: Pellelito
****************************************/

//global variables
var msg = "Detta är en global variabel";

// self invoked anonymous function
(function () {

  var text = document.createElement('DIV');
  //hämtar global variabel
  text.innerText= msg;

document.body.appendChild(text);

  document.getElementById("msgbox").addEventListener(
    "submit",
    function () {
      msg = document.querySelector("#msg").value.trim();

      // Assignment with &&
      msg && alert("Du skrev; " + msg);
      document.querySelector("#msg").value = "";

      // Custom events
      let event = new CustomEvent("newMessage", {
        detail: {
          message: "Hello Daniel!",
          time: new Date(),
        },
      });
      //dispatches the event
      document.dispatchEvent(event);
      document.querySelector("#msg").dispatchEvent(event);
    },
    false
  );

  // Minst 2 listeners till ditt Custom Event

  // listen for newMessage event
  document.addEventListener("newMessage", hiddenMessage);
  document.querySelector("#msg").addEventListener("newMessage", timeTell);

  // newMessage event handler
  function hiddenMessage(e) {
    console.log(e.detail.message);
  }
  function timeTell(e) {
    console.log(e.detail.time);
  }
})(); // end of self invoked anonymous function
