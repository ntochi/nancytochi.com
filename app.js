const express = require('express');
const port = process.env.PORT || process.env.IP || 3003;

const app = express();

// View engine setup
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



// Routes
app.get("/", (req, res) => {
    res.render("home")
});

app.get("/books", (req, res) => {
    res.render("books")
});


app.listen(port, () => {
    console.log('Portfolio Has Started on Port 3003');
});