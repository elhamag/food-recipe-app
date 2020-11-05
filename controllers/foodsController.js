const express = require('express');
const router = express.Router();


//const foods = require('../foods.js');
const Food = require('../models').Food;
const User = require('../models').User;
const Recipe = require("../models").Recipe;

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
router.get("/:id", (req, res) => {
  Food.findByPk(req.params.id, {
      include : [{
          model: User,
          attributes: ['name']
      }],
  })
  .then(food => {
      console.log(food)
      res.render('show.ejs', {
          food: food
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
router.get("/:id/edit", function (req, res) {
  Food.findByPk(req.params.id).then((foundFood) => {
    Recipe.findAll().then((allRecipes) => {
      res.render("edit.ejs", {
        food: foundFood,
        recipes: allRecipes,
      });
    });
  });
});


//PUT ==> update the data in our model after clicking edit
router.put("/:id", (req, res) => {
  Food.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((updatedFood) => {
    Recipe.findByPk(req.body.recipe).then((foundRecipe) => {
      Food.findByPk(req.params.id).then((foundFood) => {
        foundFood.addRecipe(foundRecipe);
        res.redirect("/foods");
      });
    });
  });
});


module.exports = router;