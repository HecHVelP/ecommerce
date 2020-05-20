const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); // Requiriendo la funcion para crear usuarios que se encuentra en la userController

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.readUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;

/* GET users listing. */
// Si la funcion usa como parametros req, res, next esto es un middleware
// router.get('/', (req, res, next) => {
//   res.send('respond with a resource');
// });
