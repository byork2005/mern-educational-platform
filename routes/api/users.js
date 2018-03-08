const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const passport = require('../../passport');

// Matches with "/api/users"
router
  .route('/')
  // .get(usersController.findAll)
  .get(() => {console.log('GET Hello')})

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
    console.log('req', req);
    const userInfo = {
      // email: req.user.email
    };
    res.send(userInfo);
  }
);

// Matches with api/users/signup
router
  .route('/signup')
  .post(usersController.create)

// router.post('/signup', (req, res) => {
//   console.log('user signup');

//   const { email, password, name, role } = req.body
//   // ADD VALIDATION
//   User.findOne({ email: email }, (err, user) => {
//       if (err) {
//           console.log('User.js post error: ', err)
//       } else if (user) {
//           res.json({
//               error: `Sorry, already a user with the email: ${email}`
//           })
//       }
//       else {
//           const newUser = new User({
//               username: name,
//               password: password,
//               role: role,
//               name: name
//           })
//           newUser.save((err, savedUser) => {
//               if (err) return res.json(err)
//               res.json(savedUser)
//           })
//       }
//   })
// })

module.exports = router;
