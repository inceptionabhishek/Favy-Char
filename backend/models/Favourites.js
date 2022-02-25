const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  userName: String,
  FavHarryPotter: [
    {
      name: String,
      Species: String,
      Gender: String,
      house: String,
      image: String,
      yearOfBirth: String,
      ancestry: String,
      eyeColour: String,
      hairColour: String,
      actor: String,
      uniqueID: String,
      username: String,
    },
  ],
  FavRickandMorty: [
    {
      name: String,
      image: String,
      species: String,
      type: String,
      uniqueID: String,
      username: String,
    },
  ],
  FavBreakingBad: [
    {
      name: String,
      birthday: String,
      occupation: String,
      status: String,
      image: String,
      portrayed: String,
      category: String,
      uniqueID: String,
      username: String,
    },
  ],
});


const Favourite = mongoose.model('Favourite', userSchema);
module.exports = Favourite;