const express = require('express');
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.use("/foods", require("./controllers/foodsController.js"));
app.use("/users", require("./controllers/usersController.js"));


var port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("listening");
});

