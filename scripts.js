/*************************************** 
Assignment in JavaScript class aug 2020
Author: Pellelito
****************************************/

//global variables
var msg = "Detta är en global variabel";

// self invoked anonymous function
(function () {
  var text1 = document.createElement("DIV");
  //hämtar global variabel
  text1.innerText = msg;

  document.body.appendChild(text1);

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
          message: "Hej Daniel!",
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
    var text2 = document.createElement("DIV");
    text2.innerText = e.detail.message;
    document.body.appendChild(text2);
  }
  function timeTell(e) {
    var text3 = document.createElement("DIV");
    text3.innerText = "Tiden är nu: " + e.detail.time;
    document.body.appendChild(text3);
  }
})(); // end of self invoked anonymous function
