const mongoose = require("mongoose");


const saveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    symbol: {
        type: String,
        required: true
    },

    market_cap: {
        type: Number,
        required: true
    },

    saved_status: {
        type: Boolean,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
})


const Saved = mongoose.model("saved", saveSchema);

module.exports = Saved;