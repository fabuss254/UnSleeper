// EXPRESS PART
const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.send('OK');
});

const listener = app.listen(process.env.PORT || 3333, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
