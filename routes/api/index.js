const router = require("express").Router();
<<<<<<< HEAD
const userRoutes = require("./users");

// user routes
router.use("/users", userRoutes);
=======
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);
>>>>>>> fb9ba0c724ce48aec4faa78211e315cec5b6bfb5

module.exports = router;
