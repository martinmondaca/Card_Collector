// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/cards", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.cards.findAll({}).then(function (dbPP) {
      // We have access to the todos as an argument inside of the callback function
      console.log(dbPP)
      res.json(dbPP);
    });
  });

  app.get("/api/userscards", async function (req, res) {
    await db.sequelize.query(`SELECT cards.id, cards.cardnumber, cards.name, cards.setname, cards.cardyear
    FROM cards
    INNER JOIN userscards
    ON cards.id = userscards.cardId
    INNER JOIN Users
    ON Users.id = userscards.UserId
    WHERE Users.id = ${req.user.id}`, { type: QueryTypes.SELECT }).then((results) => {
      res.json(results)
    }).catch(err => {
      console.log(err)
    })
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.delete("/api/cardlist/:cardId", async (req, res) => {
    db.userscards.destroy({
      where: {
        UserId: req.user.id,
        cardId: req.params.cardId
      }
    }).then(() => {
    })
  })

  app.post("/api/cardlist", async (req, res) => {
    db.userscards.create({
      UserId: req.user.id,
      cardId: req.body.cardId
    }).then(() => {
    })
  })
};