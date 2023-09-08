const book= require("../../models/booksCollection");





function bookController() {

  return {
    async create(req, resp) {
          const createBook= await book.add(req.body);     
          const getbooks = await book.get();
          const list = getbooks.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          console.log(list)
          resp.render("index",{booksList:list})
    },
    async get(req, resp) {
      const getbooks = await book.get();
      const list = getbooks.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log(list)
      resp.render("index",{booksList:list})

    },
    async delete(req, resp) {
          const id = req.params.id;
          const del= await book.doc(id).delete();
          const getbooks = await book.get();
          const list = getbooks.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          console.log(list)
          resp.render("index",{booksList:list})
          
    },
    async update(req, resp) {
      try {
        const itemid = req.params.id;
        const del= await book.doc(itemid).delete();

        const createBook= await book.add(req.body); 
        const getbooks = await book.get();
        const list = getbooks.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(list)
        resp.render("index",{booksList:list})
        //resp.send(list)
      } catch (error) {
        console.error(error);
        resp.status(500).json({ error: 'Internal server error' });
      } 
     
    }
    ,async  edit (req, resp) {
      const id = req.params.id;
      const getbooks = await book.get();
        let list = getbooks.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        //console.log(list)
        console.log(typeof(list))

        list.forEach(element => {
          console.log(element.id);
          if(element.id==id)
          {
            list=element
          }
        });
      resp.render("edit",{bookList:list});
    },
    
   

  }
}
module.exports = bookController;