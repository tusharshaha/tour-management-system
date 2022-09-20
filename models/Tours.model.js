const mongoose = require("mongoose");

const toursSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required!"],
            unique: [true, "The name already exists!"]
        },
        image: {
            type: String,
            required: [true, "A tour must have an image!"]
        },
        destination: {
            type: String,
            required: [true, "A tour must have a destination."],
        },
        price: {
            type: Number,
            required: [true, "Tour must have a price"],
            validate: {
                validator: (value) => value.isInteger && value > 0,
                message: "{VALUE} must be number and grater then 0"
            }
        },
        startDate: {
            type: String,
            required: [true, "Tour must have a start date"]
        },
        rating: {
            type: Number,
            default: 0
        },
        hitPoint: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const Tours = mongoose.model("Tours", toursSchema);

module.exports = Tours;