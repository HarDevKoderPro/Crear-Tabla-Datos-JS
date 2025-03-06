"use strict";
export class Libreria {
  //-------------------------------------------------------
  // TABLA PARA MOSTRAR DATOS (Sin Datos)
  //-------------------------------------------------------
  static crearTablaDatos(id, tituloTabla, camposArr, padre) {

    // Creo el elemento principal (Tabla)
    const tabla = document.createElement("table");
    tabla.id = id;
    tabla.classList.add(id);

    // Titulo de la tabla
    const titulo = document.createElement("caption");
    titulo.id = "tituloTabla";
    titulo.classList.add("tituloTabla");
    titulo.textContent = tituloTabla;
    tabla.appendChild(titulo);

    // Encabezados de la tabla (Campos)
    const encabezado = document.createElement("thead");
    const encabezadoFila = document.createElement("tr");
    camposArr.forEach((campo) => {
      encabezadoFila.innerHTML += `
      <th class = "tablaCampos"> ${campo}</th>`;
    });
    encabezado.appendChild(encabezadoFila);
    tabla.appendChild(encabezado);

    // Cuerpo de la tabla
    const cuerpo = document.createElement("tbody");
    cuerpo.id = "tablaResultados";
    cuerpo.classList.add("tablaResultados");
    tabla.appendChild(cuerpo);

    // Agrego la tabla al contenedor padre y la retorno
    document.querySelector(padre).appendChild(tabla);

    // Retorno la Referencia de la tabla
    return tabla;
  }

  //-------------------------------------------------------
  //2- LLenar Tabla
  //-------------------------------------------------------
  static llenarTablaDatos(datos) {
    // Obtener el cuerpo de la tabla
    const cuerpo = document.getElementById("tablaResultados");

    // Limpiar el cuerpo de la tabla (por si ya tiene datos)
    cuerpo.innerHTML = "";

    // Agregar los datos al cuerpo de la tabla
    datos.forEach((dato) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
      <td>${dato.id}</td>
      <td>${dato.nombre}</td>
      <td>${dato.apellido}</td>
      <td>${dato.edad}</td>
    `;
      cuerpo.appendChild(fila);
    });
  }
}
