// EXPRESS PART
const express = require('express');
const app = express();
const ax = require("axios");

app.get('/', function(request, response) {
  response.Send('OK');
});

const listener = app.listen(process.env.PORT || 3333, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

var Arr = ["http://dc-slf.glitch.me/","https://productive-violin.glitch.me/",
          "https://slender-bot-test.glitch.me","https://slender-bot.glitch.me",
          "http://proxy-googlesheet.glitch.me","http://project-r.glitch.me/",
          "https://dear-airmail.glitch.me/","https://fabbot.glitch.me/",
          "https://slender-bot-officiel.glitch.me/"]

setInterval(function(){
  for(var i=0; Arr.length > i; i++){
      console.log("Requesting "+Arr[i]);
      ax(Arr[i]);
    //},(4000/Arr.length)*i);
  }
}, 40000);
