const express = require('express');
const port =  process.env.IP || process.env.PORT || 3003;
// || process.env.IP || process.env.PORT || 3003;

const app = express();

// Serve CSS static files
// app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public"));

// Set-up view engine
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

app.get("/blog/faith/happy-new-year", (req, res) => {
    try {
        res.render("blog/faith/happy-new-year")
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

app.get("/blog/faith/fight-to-win", (req, res) => {
    try {
        res.render("blog/faith/fight-to-win")
    } catch (e) {
        console.log(`There was an error: ${e}`);
    }
});

app.get("/blog/faith/human-god", (req, res) => {
    try {
        res.render("blog/faith/human-god")
    } catch (e) {
        console.log(`There was an error: ${e}`);
    }
});

app.get("/blog/faith/grace", (req, res) => {
    try {
        res.render("blog/faith/grace")
    } catch (e) {
        console.log(`There was an error: ${e}`);
    }
});

app.get("/blog/faith/highlands", (req, res) => {
    try {
        res.render("blog/faith/highlands")
    } catch (e) {
        console.log(`There was an error: ${e}`);
    }
});


app.listen(port, () => {
    console.log('App started on http://localhost:3003/');
});