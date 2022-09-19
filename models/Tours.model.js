const mongoose = require("mongoose");

const toursSchema = mongoose.Schema({

});

const Tours = mongoose.model("Tours", toursSchema);

module.exports = Tours;