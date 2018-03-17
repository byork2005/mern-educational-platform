const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const passport = require('./passport');
const MongoStore = require('connect-mongo')(session)
const Auth = require('./passport/index.js')

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

// Passport
app.use(passport.initialize())
app.use(passport.session())

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(

  process.env.MONGODB_URI || "mongodb://heroku_x1111kh0:c6rtgsbrchf64l96kv9jf6usv1@ds117539.mlab.com:17539/heroku_x1111kh0");

// Sessions
app.use(
  session({
    secret: 'rock-chalk',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false
  })
)

// Passport
// app.use(passport.initialize())
// app.use(passport.session())

// passport.use(new LocalStrategy(Account.authenticate()));
// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
