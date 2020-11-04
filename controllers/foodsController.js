const express = require('express');
const router = express.Router();

//const foods = require('../foods.js');
const Food = require('../models').Food;


//GET ==> HomePage and user can create a new food recipe
router.get("/", (req, res) => {
    Food.findAll().then((foods) => {
      res.render("index.ejs", {
        foods: foods,
      });
    });
  });


//GET ==> show form to the user
router.get('/new', (req,res) => {
    res.render('new.ejs');
});



//GET ==> show route
router.get("/:id/new", (req, res) => {
    Food.findByPk(req.params.id).then((food) => {
      res.render("show.ejs", {
        food: food,
      });
    });
  });



//POST ==> create new food recipe
router.post('/', (req,res) => {
    // console.log(req.body);
    Food.create(req.body).then((newFood) => {
        res.redirect("/foods");
      });
    });



//DELETE ==> Single object
router.delete("/:id", (req, res) => {
    Food.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/foods");
    });
  });


//EDIT
router.get('/:id/edit', function(req,res){
    res.render('edit.ejs',
        {
            food: foods[req.params.index],
            index: req.params.index
        }
    );
});


//PUT ==> update the data in our model after clicking edit
router.put('/:index', (req,res) => {
    foods[req.params.index] = req.body;
    res.redirect('/foods');
})


module.exports = router;