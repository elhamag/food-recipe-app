const express = require("express");
const router = express.Router();
const User = require("../models").User;
const Food = require('../models').Food;


  router.get("/", (req, res) => {
    User.findAll().then((users) => {
      res.render("users/index.ejs", {
        users: users,
      });
    });
  });

  // GET SIGNUP FORM
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
  });


  // POST - CREATE NEW USER FROM SIGNUP
  router.post('/', (req,res) => {
 console.log(req.body)
    User.create(req.body).then((newUser) => {
      // console.log(newUser)
        res.redirect(`/users/profile/${newUser.id}`);
      });
    });


  // GET LOGIN
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
  });
  
  // POST LOGIN
  router.post('/login',(req,res)=>{
    User.findOne({where: { username: req.body.username, password: req.body.password} }).then((loginUsers) => {
        console.log(loginUsers);
        res.redirect(`/users/profile/${loginUsers.id}`)
    }).catch((err) => {
        res.redirect("/users");
    });
  });

  
//Get USER PROFILE
  router.get("/profile/:id", (req, res) => {
    User.findByPk(req.params.id, {
      include: [
        {
          model: Food,
          attributes: ["id", "name"],
        },
      ],
    }).then((userProfile) => {
      res.render("users/profile.ejs", {
        user: userProfile,
      });
    });
  });




  // EDIT PROFILE
  router.put("/profile/:id", (req, res) => {
    User.update(req.body, {
          where: {
            id: req.params.id,
          },
          returning: true,
        }).then((updatedUser) => {
          res.redirect(`/users/profile/${req.params.id}`);
        });
      });


  // DELETE USER
  router.delete('/:id',(req,res)=>{
    User.destroy({ where: { id: req.params.id } }).then(() => {
        res.redirect("/foods");
      }); 
});

  
module.exports = router;