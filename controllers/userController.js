const userModel = require("../models/userModel");
const userController = {};

userController.createUser = async (req, res) => {
  try {
    const createUser = await userModel.create(req.body); // Creando un usuario con un metodo de mongoose(create) y es asincrono por eso el await
    res
      .status(201)
      .json({ createUser, message: "El usuario fue creado exitosamente" }); // Devuelve como respuesta un json con el usuario creado
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "El conyo de la madre!!!!" });
  }
};

userController.getAllUsers = async (req, res) => {
  try {
    const getAllUsers = await userModel.find();
    res.status(200).json({ getAllUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "El conyo de la madre!!!!" });
  }
};

userController.readUser = async (req, res) => {
  try {
    const readUser = await userModel.findById(req.params.id); // Metodo findById para buscar usuarios por ID, si quiera buscar todo utilizaria el metodo find
    res.status(200).json({ readUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "El conyo de la madre!!!!" });
  }
};

userController.updateUser = async (req, res) => {
  try {
    const updateUser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ); // Primero trae el user por el ID, actualiza lo que trae el body y new:true porque sino no te muestra el cambio
    res.status(200).json({ updateUser, message: "Cambio exitoso" }); //
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "El conyo de la madre!!!!" });
  }
};

userController.deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id); // Esto no lleva variable porque estamos eliminando y despues de ejecutarse donde carajo se va a almacenar!!!
    res.json({ message: "PLATA O PLOMO!!!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "El conyo de la madre!!!!" });
  }
};

module.exports = userController;
