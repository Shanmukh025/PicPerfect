const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});