const mongoose = require("mongoose"); //inclode mongoose in our page

//connection to mongodb
mongoose
  .connect("mongodb://localhost:27017/booksDB", { useNewUrlParser: true })
  .then(() => {
    console.log(" The connecting is good :) ");
  })
  .catch((err) => {
    console.log(" Err when conecting To DataBase :( ", err);
  });
//schema about book info
let booksSchema = mongoose.Schema({
 title: { type: String },
 author:[{
    type:String,
}],
 dateOfPublication: { type: String },
  img: { type: String }
});


let BooksModel = mongoose.model("books", booksSchema);

module.exports.BooksModel = BooksModel;
