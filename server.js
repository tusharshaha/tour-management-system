const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const toursRoute = require("./routes/v1/tours.route");

const app = express();
app.use(cors());


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

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
})