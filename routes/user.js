
const  registerController= require("../app/http/controllers/registerController");
const  bookCrud=require("../app/http/controllers/crud")

function initRoute(app){
   
    app.post('/create', bookCrud().create)
    app.get('/get', bookCrud().get)
    app.get('/delete/:id', bookCrud().delete)
    app.get('/update/:id', bookCrud().update)
    app.get('/edit/:id', bookCrud().edit)
    app.get("/", registerController().registerPage)
    app.post("/login", registerController().login)
    app.post("/register", registerController().register)

    
}

module.exports = initRoute;







