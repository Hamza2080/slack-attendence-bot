var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var axios = require("axios");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var request = require('request');

app.get("/", function (req, res) {
  res.send("hello ");
});

app.post("/handle", function (request, response) {
  let body = request.body;

  axiosCall(body);
  // console.log(body)
  response.send();
});

function axiosCall(data) {
  console.log(data);
  var url = "https://slack.com/api/chat.postMessage";
  var auth_token = 'xoxb-1053090501763-1075675858208-bGDpV6lBhUA53gwRdMAl8w6M'; //Your Bot's auth token
  var headers = {
     "Authorization": "Bearer " + auth_token,
     "Content-Type" : "application/json"
  }
  var body = {
      channel: "C011K2NFFQB", // Slack user or channel, where you want to send the message
      text: "Your text goes here."
  }
  request.post({
     "url": url,
     "headers": headers,
     "body": JSON.stringify(body)
  }, (err, response, body) => {
     if (err) {
         reject(err);
     }
    //  console.log("response: ", JSON.stringify(response));
     console.log("body: ",body);
  });
}

app.listen(3000, function () {
  console.log("Started on PORT 3000");
});
