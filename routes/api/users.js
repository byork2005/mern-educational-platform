const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const passport = require('../../passport');

// Matches with "/api/users"
router
  .route('/')
  // .get(usersController.findAll)
  .get(() => {
    console.log('hello');
  })
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// Need to dive into issue of login route vs sign-up route. Probably need to make sign-up
// The log of req.body below works. Current error is 400, bad request.
router.post(
  '/login',
  function(req, res, next) {
    console.log('hello');
    console.log(req.body);
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    const userInfo = {
      email: req.user.email
    };
    res.send(userInfo);
  }
);

module.exports = router;
