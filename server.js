const express = require("express");
const toursRoute = require("./routes/v1/tours.route");
const dbConnect = require("./utils/dbConnect");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const cors = require("cors");
require("dotenv").config();
require("colors");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

// connect database
dbConnect()



app.get("/", (req, res) => {
    res.send("server working")
})

app.use("/api/v1/tours", toursRoute);

// catch undefine route
app.all("*", (req, res) => {
    res.send(`
    <html>
        <body>
            <h1 style="text-align:center; color:red">
            No Route Found!</h1>
        </body>
    </html>
    `)
})

// global error handler
app.use(globalErrorHandler);

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`.bgYellow)
})

// handle globaly unhandle Rejection
process.on("unhandledRejection", (error) => {
    server.close(() => {
        process.exit(1);
    });
});