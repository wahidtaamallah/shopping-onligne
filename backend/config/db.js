const mongoose = require('mongoose');
require("dotenv").config({ path: "./config/.env"});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/project2880", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("The Database is Connected......");   
  } catch (err) {
    console.log("Error with connection with database")   
    process.exit(1);
  }
};

module.exports = connectDB;
