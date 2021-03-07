// Requiring path to so we can use relative routes to our HTML files
const db = require("../models");
const path = require("path");
const exphbs = require("express-handlebars")
const Handlebars = require("handlebars")

// const passport = require("../config/passport");
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { doc } = require("prettier");

module.exports = function (app) {

  // Set Handlebars as the default templating engine.
  app.engine("handlebars", exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  }));
  app.set("view engine", "handlebars");
  //hard coding years

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
    res.render("home")
  });

  app.get("/collections", isAuthenticated, (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.sendFile(path.join(__dirname, "../public/members.html"))
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
      // We have access to the todos as an argument inside of the callback function
      console.log(typeof (data))
      console.log("end of data")
      // console.log(data)
      db.userscards.findAll({
        where: {
          userId: req.user.id,
        }
      }).then(function (info) {
        console.log("this is the info")
        console.log(info)
        var userCards = info.map((element) => element.cardId)
        console.log(userCards)
        for (let index = 0; index < data.length; index++) {
          const card = data[index];
          if (userCards.includes(card.id)) {
            card.checked = true;
          } else {
            card.checked = false
          };
        }
        console.log(data)
        //   console.log(data)
        res.render("set", { cards: data })
        // console.log(data)
      })
      // res.send(data)

      // var currentSet = {
      //   cardInfo: []
      // }

      // for (var i = 0; i < data.length; i++) {
      //   var currentCardData = JSON.parse(data[i]);
      //   currentSet.cardInfo.concat(currentCardData)
      // }
      // var setToRender = currentSet
      //res.render("set", { cards: data })
    });
  });

  //ANDREWS CODE
  // app.get("/members/:setname/:cardyear", isAuthenticated, (req, res) => {
  //   console.log(req.params.cardyear)
  //   var setSearch = req.params.setname;
  //   var yearSearch = req.params.cardyear;
  //   var setSearch = req.params.setname
  //   db.cards.findAll({
  //     where: {
  //       cardyear: yearSearch,
  //       setname: setSearch,
  //     }
  //   }).then(function (data) { //JASON: this is cards
  //     // We have access to the todos as an argument inside of the callback function
  //     // console.log(typeof (data))
  //     // console.log(data)
  //     console.log("end of data")
  //     db.userscards.findAll({
  //       where: {
  //         userId: req.user.id,
  //       }
  //     }).then(info => { //JASON: this is usercards
  //       console.log(info)
  //       // console.log(info)
  //       data.map(c => { //this is cards
  //         c.checked = info.filter(uc => uc.cardId == card.Id && uc.userId == req.user.id).length > 0
  //       })
  //       // var newArray = [];
  //       // var userCards = info.map((element) => element.cardId)
  //       // console.log(userCards)
  //       // for (let index = 0; index < data.length; index++) {
  //       //     const card = data[index];
  //       //     if (userCards.includes(card.cardId)) {
  //       //         card.checked = "true";
  //       //     } else {
  //       //         card.checked = "false"
  //       //     };
  //       // }
  //       // console.log(data)
  //       console.log("heres the data")
  //       // console.log(data.filter(d => d.checked))
  //       // res.render("set", { cards: data })
  //     })
  //     // res.send(data)
  //     // var currentSet = {
  //     //   cardInfo: []
  //     // }
  //     // for (var i = 0; i < data.length; i++) {
  //     //   var currentCardData = JSON.parse(data[i]);
  //     //   currentSet.cardInfo.concat(currentCardData)
  //     // }
  //     // var setToRender = currentSet
  //     //res.render("set", { cards: data })
  //   });
  // });


};