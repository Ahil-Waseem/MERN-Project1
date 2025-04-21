const mongoose = require("mongoose");

// MongoDB Connection String
const mongoURI = "mongodb+srv://Ahil:%40%23Ahilmongo@cluster0.psjlqxt.mongodb.net/orderfoodsmern?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected Successfully");

    //  Fetching Data from Collections
    const foodCollection = mongoose.connection.db.collection("food_items");
    const categoryCollection = mongoose.connection.db.collection("foodCategory");

    global.foodData = await foodCollection.find({}).toArray();
    global.foodCategory = await categoryCollection.find({}).toArray();

    console.log("Food Data & Categories Fetched Successfully");

    //  Print the data to check in Terminal
    console.log("Food Data:", global.foodData);
    console.log("Category Data:", global.foodCategory);

  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

// Correct Export
module.exports = connectDB;
