const users = (app) => {
    app.get("users", (req , res) => {
        res.send("users")
    })
}




module.exports = { users }