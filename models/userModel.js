const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    role: {
      type: String,
      enum: ["Admin", "User", "Seller"],
      default: "User",
    },
    tokens: [String], // Asi lo reconoce como un Array de type String
  },
  {
    timestamp: true, // Esto es para guardar la fecha de creacion del Modelo Usuario
  }
);

module.exports = mongoose.model("User", userSchema); // Exporto para utilizar los metodos de la BD sin usar destructuracion(pendiente con esto que es un beta)
