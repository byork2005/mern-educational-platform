const router = require("express").Router();

const userRoutes = require("./users");

// user routes
router.use("/users", userRoutes);


const userRoutes = require("./users");

// user routes
router.use("/users", userRoutes);

module.exports = router;
