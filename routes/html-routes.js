// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const exphbs = require("express-handlebars")

// const db = require("../models");
// const passport = require("../config/passport");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // Set Handlebars as the default templating engine.
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");
  //hard coding years
  var Bazooka = {
    setYear: [
      { year: 1959 },
      { year: 1960 },
      { year: 1961 },
      { year: 1962 },
      { year: 1963 },
      { year: 1964 },
      { year: 1965 },
      { year: 1966 },
      { year: 1967 },
      { year: 1968 },
      { year: 1971 },
      { year: 1988 },
      { year: 1989 },
      { year: 1990 },
      { year: 1991 },
    ]
  }


  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("home", Bazooka)
  });

  app.get("/collections", isAuthenticated, (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.sendFile(path.join(__dirname, "../public/members.html"))
  });

  // app.get("/members/:setname/:cardyear", isAuthenticated, (req, res) => {
  //   console.log(req.params.cardyear)
  //   console.log(req.params.setname)
  // db.cards.findAll({
  //   setname: req.params.setname
  // }).then(function (data) {
  //   // We have access to the todos as an argument inside of the callback function
  //   console.log(data)
  //   res.render("home", data)

  // });

  // });



};


