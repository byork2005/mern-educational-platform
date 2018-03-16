const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const passport = require('../../passport');

// Matches with "/api/users"
// router
//   .route('/')
//   .get(usersController.getUser)

  router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(res.body)
    // if (req.user) {
    //     res.json({ user: req.user })
    // } else {
    //     res.json({ user: null })
    // }
})

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// Don't Delete: may need to revert back to this.
// router.post('/login', passport.authenticate('local', {failureRedirect: '/logout' }), usersController.login)

router
  .route('/login')
  .post(usersController.login)



// Matches with api/users/signup
router
  .route('/signup')
  .post(usersController.create)

// Matches with api/users/logout
router
  .route('/logout')
  .post(usersController.logout)

module.exports = router;

