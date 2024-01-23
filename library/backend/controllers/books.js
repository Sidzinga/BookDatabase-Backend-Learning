const { Books } = require("../models/books");


const books = (app) => {
    app.get("/book", async (req, res) => {
        try {
            const books = await Books.find()
            res.send(books)
        } catch (e) {
            console.log(e);
        }
    })


    app.post("/book", async (req, res) => {
        const bookAdded = req.body;
        try {
            const bookToBeSaved = new Books(bookAdded)
            const book = await bookToBeSaved.save();
            res.send(book)
        } catch (e) {
            console.log(e);
        }
    })

    app.put("/book/:book_id", async (req, res) => {
        try {
            const bookId = req.params.book_id;
            const bookToBeUpdated = req.body;
            const updatedBook = await Books.findByIdAndUpdate({ _id: bookId }, bookToBeUpdated)
            res.send(updatedBook)
        } catch (e) {
            console.log(e);
            res.send(400);
        }
    })


    app.delete("/book/:book_id", async (req, res) => {
        try {
            const bookId = req.params.book_id;
            const updatedBook = await Books.deleteOne({ _id: bookId })
            res.send(updatedBook)
        } catch (e) {
            console.log(e);
            res.send(400);
        }
    })
}



module.exports = { books }