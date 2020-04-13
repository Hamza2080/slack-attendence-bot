var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* basic route registering in application. */
router.post('/integrateSlack', function(req, res, next) {
  const body = req.body;
  console.log("new message")

  process.emit('slack event', {...body});
  res.json(body.challenge);
});

// function (data) {
//   console.log(data);
//   var url = "https://slack.com/api/chat.postMessage";
//   var auth_token = 'xoxb-1053090501763-1075675858208-bGDpV6lBhUA53gwRdMAl8w6M'; //Your Bot's auth token
//   var headers = {
//      "Authorization": "Bearer " + auth_token,
//      "Content-Type" : "application/json"
//   }
//   var body = {
//       channel: "C011K2NFFQB", // Slack user or channel, where you want to send the message
//       text: "Your text goes here."
//   }
//   request.post({
//      "url": url,
//      "headers": headers,
//      "body": JSON.stringify(body)
//   }, (err, response, body) => {
//      if (err) {
//          reject(err);
//      }
//     //  console.log("response: ", JSON.stringify(response));
//      console.log("body: ",body);
//   });
// }


module.exports = router;
