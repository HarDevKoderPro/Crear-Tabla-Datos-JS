'use strict';
import { Libreria } from "./libreria.js";

// -------------------------------------------
// PROGRAMA PRINCIPAL
// -------------------------------------------
// Datos de ejemplo para llenar la tabla
const datos = [
  { id: 1, nombre: "Juan", apellido: "Perez", edad: 20 },
  { id: 2, nombre: "María", apellido: "Gómez", edad: 34 },
  { id: 3, nombre: "Pedro", apellido: "Martínez", edad: 45 },
];

// Creación de la Tabla 
Libreria.crearTablaDatos(
  'tablaDatos', 
  'body', 
  'USUARIOS REGISTRADOS',
  ['ID', 'NOMBRE', 'APELLIDO', 'EDAD'],
  datos,
);




