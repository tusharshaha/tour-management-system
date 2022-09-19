const mongoose = require("mongoose");

const dbConnect = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("database connected successfully.".bgGreen))
        .catch((err) => console.log("database connection failed!".bgRed))
}

module.exports = dbConnect;