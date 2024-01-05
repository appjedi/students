const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Happy Friday!");
});
app.get("/hello/:name", (req, res) => {
    const name = req.params.name;
    res.send("Hello " + name);
});

app.listen(3000, () => {
    console.log("listening on port:", 3000);
});