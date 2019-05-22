const path = require("path");

app.get("/survey", function(req, res) {
    res.sendFile(path.join(_dirname, "./app/public/surey.html"));
});

// app.get("/home", function (req, res) {
    res.sendFile(path.join(_dirname, "./app/public/home.html"));
// });