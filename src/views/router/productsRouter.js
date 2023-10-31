const express = require("express");
const productsRouter = express.Router(); //สร้าง router เหมือนจะเป็นตัวรนับเลข

const products = require("../data/products.json");


/* fucntion ที่สร้างการร้องขอตอบกลับสำหรับหน้เาโปรดัค */
productsRouter.route("/").get((req, res) => { 
  
   res.render("products",{
     products,
   });
 }); 
 
 productsRouter.route("/:id").get((req, res) => { 
   const id = req.params.id;
    res.render("product",{
     product: products[id],
    })
  });

module.exports = productsRouter;