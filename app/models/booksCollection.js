const data=require("../../config");
const db=data.db;
const book=db.collection("book");
module.exports = book;
