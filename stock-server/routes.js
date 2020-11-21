var express = require("express");
const router = express.Router();

router.post("/create-account", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, 10, function (err, hash) {
    db.NewUsers.create({
      username: username,
      password: hash,
    });
  });
  res.send({ message: "Account created successfully" });
});

router.get("/user-watchlist/:id", (req, res) => {
  const userid = req.params.id;
  db.Watchlist.findAll({
    where: {
      userid: userid,
    },
  })
    .then((stocks) => {
      if (stocks) {
        res.send({ watchlist: stocks });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/remove-item/:id", (req, res) => {
  const userid = req.params.id;
  const itemToDelete = req.body.item;

  db.Watchlist.destroy({
    where: {
      userid: userid,
      symbol: itemToDelete,
    },
  });

  db.Watchlist.findAll({
    where: {
      userid: userid,
    },
  })
    .then((response) => {
      res.send({ watchlist: response });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/watchlist", (req, res) => {
  const symbol = req.body.symbol;
  const userid = req.body.userid;

  db.Watchlist.findAll({
    where: {
      userid: userid,
    },
  }).then((response) => {
    if (response.length <= 3) {
      db.Watchlist.create({
        userid: userid,
        symbol: symbol,
      });
      res.send({ message: "Successfully added" });
    } else {
      res.send({ message: "You can only have 4 watchlisted items" });
    }
  });
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.NewUsers.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user !== null) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          res.send({ login: true, id: user.id });
        }
      });
    } else {
      res.send({ login: false });
    }
  });
});

module.exports = router;
