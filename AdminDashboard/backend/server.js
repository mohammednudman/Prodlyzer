const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Custom Imports
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const connectDb = require("./config/dbConnection");

// Custom Middleware
// app.use(logger);

// Port Assigned
const PORT = process.env.PORT || 5000;

//Database connection

connectDb();

//Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", require("./routes/apiRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
