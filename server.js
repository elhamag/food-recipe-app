const express = require('express');
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.use("/foods", require("./controllers/foodsController.js"));
app.use("/users", require("./controllers/usersController.js"));


app.listen(3000, () => {
    console.log('listening');
});


