"use strict";
import { Libreria } from "./libreria.js";

// -------------------------------------------
// PROGRAMA PRINCIPAL
// -------------------------------------------
// Datos de ejemplo para llenar la tabla
const params = {
  id: "tablaDatos",
  padre: "body",
  tituloTabla: "USUARIOS REGISTRADOS",
  campos: ["ID", "NOMBRE", "APELLIDO", "EDAD"],
  datos: [
    { id: 1, nombre: "Juan", apellido: "Perez", edad: 20 },
    { id: 2, nombre: "María", apellido: "Gómez", edad: 34 },
    { id: 3, nombre: "Pedro", apellido: "Martínez", edad: 45 },
    { id: 4, nombre: "Kelly", apellido: "Jaramillo", edad: 22 },
    { id: 5, nombre: "Miguel", apellido: "Gallo", edad: 40},
  ],
};

// Creación de la Tabla
Libreria.crearTablaDatos(params);
