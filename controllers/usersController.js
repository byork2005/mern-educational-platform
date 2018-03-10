const db = require("../models");
const passport = require('../passport');

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Checks if current user email exists, if not creates new user and saves to db
  create: function(req, res) {
    const { email, password, name, role } = req.body;
    db.User.findOne({ email: email }, (err, user) => {
      if (err) {
        console.log('userController.js post error: ', err)
      } else if (user) {
        res.json({
            error: `Sorry, already a user with the email: ${email}`
        })
      } else {
        const newUser = new db.User({
          name: name,
          password: password,
          email: email,
          role: role
        })
        newUser.save((err, savedUser) => {
          if (err) return res.json(err)
          res.json(savedUser)
        })
      }  
    })  
  },
  // Authenticates user and logs them in
  login: function(req, res) {
    // console.log('login working')
    // res.redirect('/studenthome')
    // passport.authenticate('local'),
    // (req, res) => {
    //   console.log('req', req);
    //   const userInfo = {
    //     email: req.user.email
    //   };
         const userInfo = {
        email: req.user.email,
        name: req.user.name }
      res.send(userInfo);
    // }
  },

  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
