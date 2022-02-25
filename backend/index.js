const express= require('express');
const mongoose = require('mongoose');
const cors= require('cors');

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
const PORT= process.env.PORT || 5000;
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
// routes
// User Route
app.use('/api/user', require('./routes/user.js'));
// Favourites Route
app.use('/api/favourites', require('./routes/Favourites.js'));
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});