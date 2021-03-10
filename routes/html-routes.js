// Requiring path to so we can use relative routes to our HTML files
const db = require("../models");
const path = require("path");
const exphbs = require("express-handlebars")
const Handlebars = require("handlebars")

// const passport = require("../config/passport");
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  // Set Handlebars as the default templating engine.
  app.engine("handlebars", exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  }));
  app.set("view engine", "handlebars");

  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    } else {
      res.sendFile(path.join(__dirname, "../public/signup.html"));
    }
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    } else {
      res.sendFile(path.join(__dirname, "../public/login.html"));
    }
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("home")
  });

  app.get("/members/:setname/:cardyear", isAuthenticated, (req, res) => {
    var setSearch = req.params.setname;
    var yearSearch = req.params.cardyear;
    db.cards.findAll({
      where: {
        cardyear: yearSearch,
        setname: setSearch,
      }
    }).then(function (data) {
      db.userscards.findAll({
        where: {
          userId: req.user.id,
        }
      }).then(function (info) {
        var userCards = info.map((element) => element.cardId)
        for (let index = 0; index < data.length; index++) {
          const card = data[index];
          if (userCards.includes(card.id)) {
            card.checked = true;
          } else {
            card.checked = false
          };
        }
        res.render("set", { cards: data })
      })
    });
  });
};