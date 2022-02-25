const router = require("express").Router();
const user = require("../models/user");

router.route("/validate").post((req, res) => {
  console.log(req.body.username);
  user
    .find({ username: req.body.username })
    .then((users) => {
      //console.log(users);
      if (users.length === 0) res.send("User Not exist! Please Sign Up");
      else {
        // check password is equal or not
        if (users[0].password === req.body.password) {
          res.send("Login Successful");
        } else {
          res.send("Wrong Password");
        }
      }
    })
    .catch((err) => console.log(err));
});

router.route("/signup").post((req, res) => {
  user
    .find({ username: req.body.username })
    .then((users) => {
      if (users.length === 0) {
        const newUser = new user({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        });
        newUser
          .save()
          .then((user) => res.send("success"))
          .catch((err) => console.log(err));
      } else res.send("User Already Exist");
    })
    .catch((err) => console.log(err));
});

// Get all users from database
router.route("/getall").get((req, res) => {
  user
    .find()
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});



module.exports = router;
