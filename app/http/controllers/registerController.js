
const book= require("../../models/booksCollection");
const axios=require("axios");
const firebase = require("firebase/app")
var amdin=require("../../../config");
var  adminData=amdin.adminData;
//console.log(adminData)
function registerController() {

  return {
    async login(req, resp) {
          const email=req.body.email;
      try {
        const user= await  adminData.auth().getUserByEmail(email)
        
        console.log(user)
        
        // Perform actions after successful login
      } catch (error) {
        console.error("Login error:", error);
        // Handle login error
      }
    },
    async registerPage(req, resp) {
        resp.render("register")
    },

    async register(req, resp) {
      try {

        
        const user= await  adminData.auth().createUser({
          email:req.body.email,
          password:req.body.password,
          emailVerified:false,
          disable:false,
          
        })
    
        const createBook= await book.add(req.body);     
          const getbooks = await book.get();
          const list = getbooks.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          console.log(list)
          resp.render("index",{booksList:list})        
    
      } catch (error) {
         console.log(error)
      }
    
    },
    
  }
}
module.exports = registerController;