/* Requried Packages */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

/* Connects to Atlas */
const URI = process.env.ATLAS_URI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

/* Logs the connection */
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

/* Creating instance of the necessary middleware */
app.use(cors());
app.use(express.json());

/* Requiring and then using the routes */
const userRouter = require("./routes/users");
const exerciseRouter = require("./routes/exercises");

app.use("/users", userRouter);
app.use("/exercises", exerciseRouter);

app.listen(PORT, () => console.log(`Server is running in Port: ${PORT}`));
