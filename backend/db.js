// local mongodb database
const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://Meet:Meet123@cluster0.eunkaz9.mongodb.net/Fileofax?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connect to mongo Succesfully");
  });
};

module.exports = connectToMongo;
