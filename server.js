const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("server working")
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}/`)
})