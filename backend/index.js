const express = require('express');
const connectDB = require("./db");
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));

connectDB()
  .then(() => {
    console.log("✅ Database Connected, Starting Server...");

    app.use(express.json());

    app.use('/api', require("./Routes/CreateUser"));
    app.use('/api', require("./Routes/DisplayData"));

    app.listen(port, () => {
      console.log(`✅ Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error Connecting to Database:", err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});
