const express = require("express");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const port = 3000;

app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
