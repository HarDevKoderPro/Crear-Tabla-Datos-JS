"use strict";
import { Libreria } from "./libreria.js";

// -------------------------------------------
// CREACIÓN DE ELEMENTOS DEL DOM
// -------------------------------------------
// Creo la Tabla
Libreria.crearTablaDatos(
  "tablaDatos",
  "USUARIOS REGISTRADOS",
  ["ID", "NOMBRE", "APELLIDO", "EDAD"],
  "body"
);

// -------------------------------------------
// REFERENCIAS A ELEMENTOS DEL DOM
// -------------------------------------------
const getEl = (id) => document.getElementById(id);
const tablaDatos = getEl('tablaDatos'); 

// -------------------------------------------
// PROGRAMA PRINCIPAL
// -------------------------------------------
// Datos de Prueba para llenar la tabla
const datos = [
  { id: 1, nombre: "Juan", apellido: "Perez", edad: 20 },
  { id: 2, nombre: "María", apellido: "Gómez", edad: 34 },
  { id: 3, nombre: "Pedro", apellido: "Martínez", edad: 45 },
  { id: 4, nombre: "Kelly", apellido: "Jaramillo", edad: 22 },
  { id: 5, nombre: "Miguel", apellido: "Gallo", edad: 40 },
];

// Llenado de Tabla con Datos de Prueba
Libreria.llenarTablaDatos(datos);

