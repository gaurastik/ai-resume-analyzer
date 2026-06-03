const mongoose = require("mongoose")



async function connectToDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000
        })

        console.log("Connected to Database")
    }
    catch (err) {
        console.log("Database connection error:", err)
    }
}

module.exports = connectToDB