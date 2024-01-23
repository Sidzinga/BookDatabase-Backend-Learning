const express = require("express");
const { connectMongoose } = require("./database/index")
const { books } = require("./controllers/books");
const { users } = require("./controllers/users");
const app = express()
const bodyParser = require("body-parser")


app.use(bodyParser.json())
connectMongoose();
books(app)
users(app);

app.listen(3003, () => {
    console.log("serve running")
})