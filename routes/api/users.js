const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require('../../passport')

// Matches with "/api/users"
router.route("/user")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router.route("/user/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router.post(
  'user/login',
  function(req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body)
    next()
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    const userInfo = {
      email: req.user.email
    };
    res.send(userInfo)
  }
)

module.exports = router;
