const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

connectDB();

const app = express();

const port = 3000;

app.use(express.json());

app.use("/contact", require("./routes/contactRoutes"));
app.use("/user", require("./routes/userRoutes"));


app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
