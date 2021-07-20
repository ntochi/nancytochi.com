const express = require('express');
const port = process.env.PORT || process.env.IP || 3003;

const app = express();

// View engine setup
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


// Routes
app.get("/", (req, res) => {
    try {
        res.render("home")
    } catch (e) {
        console.log(`There was an error: ${e}`);
    }
});


app.get("/blog", (req, res) => {
    try {
        res.render("blog/index")
    } catch (e) {
        console.log(`There was an error: ${e}`);
    }
});

app.get("/blog/code", (req, res) => {
    try {
        res.render("blog/code")
    } catch (e) {
        console.log(`There was an error: ${e}`);
    }
});

app.get("/blog/reads", (req, res) => {
    try {
        res.render("blog/books")
    } catch (e) {
        console.log(`There was an error: ${e}`);
    }
});


app.get("/blog/faith", (req, res) => {
    try {
        res.render("blog/faith/index")
    } catch (e) {
        console.log(`There was an error: ${e}`);
    }
});

app.get("/blog/faith/are-you-foolish", (req, res) => {
    try {
        res.render("blog/faith/are-you-foolish")
    } catch (e) {
        console.log(`There was an error: ${e}`);
    }
});


app.listen(port, () => {
    console.log('Portfolio Has Started on Port 3003');
});