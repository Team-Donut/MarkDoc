const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/_docs/index.html");
})

app.get("/:name", function(req, res) {
  if (req.params.name === "index.html") {
    res.redirect("/");
  } else {
    res.sendFile(__dirname + "/_docs/" + req.params.name);  
  }
});

app.get("/:folder/:name", function(req,res) {
  res.sendFile(__dirname + "/_docs/" + req.params.folder + "/" + req.params.name);  
})

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});