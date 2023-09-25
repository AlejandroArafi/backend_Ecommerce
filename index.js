require("dotenv").config(); //con dotenv accedes a las variables de entorno
require("./models/User.model");
// const userRoutes = require('./routesUser.routes')

const cors = require("cors");


const express = require("express"); //llamamos a express
const app = express(); //inicialización de la app

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI + "wineStore");
// el segundo parametro que recibe el metodo de MODEL es el esquema, el primero es la coleccion
const userRoutes = require("./routes/User.routes.js");

const port = process.env.PORT;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json()); //valida que la app reciba datos en formato json
app.use("/users", userRoutes); // middleware...todas las rutas que ingresen en /users, van a caer en userRoutes

app.get("/", (req, res) => {
  return res.status(200).json({
    mensaje: "ruta get",
  });
});

app.post("/", (req, res) => {
  return res.status(200).json({
    mensaje: "ruta post",
    detail: "",
  });
});

app.put("/", (req, res) => {
  return res.status(200).json({
    mensaje: "ruta put",
  });
});
app.delete("/", (req, res) => {
  return res.status(200).json({
    mensaje: "ruta delete",
  });
});

app.listen(port, () => {
  console.log(`eschuchando en el puerto ${port}`);
});
