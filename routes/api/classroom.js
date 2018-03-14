const router = require("express").Router();
const classroomController = require("../../controllers/classroomController");

// Matches with "/api/classroom"
router.route("/")
  .get(classroomController.findAll)
  .post(classroomController.create)
  .put(classroomController.update)
  .delete(classroomController.remove)

// Matches with "/api/classroom/id
  .route("/id")
  .get(classroomController.findById)
  .put(classroomController.update)
  .delete(classroomController.remove);


module.exports = router;
