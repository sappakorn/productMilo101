const express = require("express");
const app = express();
const path = require("path");
const debug = require("debug")("App");
const morgans = require("morgan");
const PORT = process.env.PORT || 4000;



app.use(morgans("combined"));
app.use(express.static(path.join(__dirname, "/public/"))); //สร้าง พาท
const productsRouter = require("./src/views/router/productsRouter");


app.set("views","./src/views"); //views อยุ่ใน พาทที่ชื่อ src
app.set("view engine", "ejs"); //เรียกใช้ ejs


app.use("/products",productsRouter);

//static 
app.get("/", (req, res) => {
  res.render("index", {
    username: "eiei",
  });
});


app.listen(PORT, (req, res) => {
  console.log("run PORT 3000");
});
