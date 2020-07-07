/* Requried Packages */
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

/* Createing instance of the necessary middleware */
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running in Port: ${PORT}`));
