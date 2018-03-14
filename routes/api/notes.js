const router = require("express").Router();
const notesController = require("../../controllers/notesController");

// Matches with "/api/notes"
router.route("/")
  .get(notesController.findAll)
  .post(notesController.create)
  .put(notesController.update)
  .delete(notesController.remove)

// Matches with "/api/notes/id
  .route("/id")
  .get(notesController.findById)
  .put(notesController.update)
  .delete(notesController.remove);


module.exports = router;