const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db/db");
const dotenv = require("dotenv");
const savedRoutes = require("./routes/savedRoute");

dotenv.config();

connectDB();


const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


app.use("/stock", savedRoutes);


app.listen(2000, () => console.log("server started at PORT 2000"))
