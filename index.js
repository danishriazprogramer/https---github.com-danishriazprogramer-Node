const express = require("express");
const ejs = require("ejs");
const cookieparser=require("cookie-parser")
const app = express();
const db=require("./config");

app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 5000;

app.use("/static", express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.set("view engine", "ejs");
app.set("views", "views")


 




//init Route

require("./routes/user")(app);

app.listen(port, () => {
  console.log("this sever running at the port", port);
})

  