const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
    }
    catch{
        console.log(`error ${message}`);
        process.exit(1);
    }
}


module.exports = connectDB;