const router = require("express").Router();
const Favourite = require("../models/Favourites");

// Display the Favourites List
// breakingbad
router.post("/breakingbad", (req, res) => {
  const currUser = req.body.username;
  console.log(currUser);
  Favourite.find({ username: currUser })
    .then((favourites) => res.json(favourites.FavBreakingBad)
    
    )
    .catch((err) =>
      res.status(404).json({ nofavouritesfound: "No Favourites found" })
    );
});
// rickandmorty
router.post("/rickandmorty", (req, res) => {
  const currUser = req.body.username;
  Favourite.find({ username: currUser })
    .then((favourites) => res.json(favourites.FavRickandMorty))
    .catch((err) =>
      res.status(404).json({ nofavouritesfound: "No Favourites found" })
    );
});
// harrypotter
router.post("/rickandmorty", (req, res) => {
  const currUser = req.body.username;
  Favourite.find({ username: currUser })
    .then((favourites) => res.json(favourites.FavHarryPotter))
    .catch((err) =>
      res.status(404).json({ nofavouritesfound: "No Favourites found" })
    );
});

// Add a new Favourite
// breakingbad
router.post("/breakingbad/add", (req, res) => {
  const currUser = req.body.username;
  Favourite.findOne({ username: currUser })
    .then((favourites) => {
      if (favourites) {
        if (favourites.FavBreakingBad.includes(req.body.name)) {
          res.json({
            message: "Already in favourites",
          });
        } else {
          favourites.FavBreakingBad.push(req.body);
          favourites.save().then((favourites) => res.json(favourites));
        }
      } else {
        const newFavourite = new Favourite({
          username: currUser,
          FavBreakingBad: [req.body],
        });
        newFavourite.save().then((favourites) => res.json(favourites));
      }
    })
    .catch((err) =>
      res.status(404).json({ nofavouritesfound: "No Favourites found" })
    );
});
// rickandmorty
router.post("/rickandmorty/add", (req, res) => {
  const currUser = req.body.username;
  Favourite.findOne({ username: currUser })
    .then((favourites) => {
      if (favourites) {
        favourites.FavRickandMorty.push(req.body);
        favourites.save().then((favourites) => res.json(favourites));
      } else {
        const newFavourite = [
          {
            username: currUser,
            FavRickandMorty: [req.body],
          },
        ];

        newFavourite.save().then((favourites) => res.json(favourites));
      }
    })
    .catch((err) =>
      res.status(404).json({ nofavouritesfound: "No Favourites found" })
    );
});
// harrypotter
router.post("/harrypotter/add", (req, res) => {
  const currUser = req.body.username;
  Favourite.findOne({ username: currUser })
    .then((favourites) => {
      if (favourites) {
        favourites.FavHarryPotter.push(req.body);
        favourites.save().then((favourites) => res.json(favourites));
      } else {
        const newFavourite = new Favourite({
          username: currUser,
          FavHarryPotter: [req.body],
        });
        newFavourite.save().then((favourites) => res.json(favourites));
      }
    })
    .catch((err) =>
      res.status(404).json({ nofavouritesfound: "No Favourites found" })
    );
});

module.exports = router;
