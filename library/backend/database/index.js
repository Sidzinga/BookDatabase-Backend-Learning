const mongoose = require("mongoose")


//Change connection string to your own
const url = "mongodb+srv://<username>:<password>@maseko-s.kw2a4va.mongodb.net/?retryWrites=true&w=majority"


const connectMongoose = async () => {
    try {
        const connect = await mongoose.connect(url)
        console.log("database running...")
    } catch (e) {
        console.log(e)
    }
}


module.exports = {connectMongoose}