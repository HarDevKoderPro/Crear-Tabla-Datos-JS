"use strict";
export class Libreria {
  //-------------------------------------------------------
  // TABLA PARA MOSTRAR DATOS
  //-------------------------------------------------------
  // Recibe un Objeto con los Parámetros
  static crearTablaDatos(params) {
    // Creo el elemento principal (Tabla)
    const tabla = document.createElement("table");
    tabla.id = params.id;
    tabla.className = params.id;

    // Titulo de la tabla
    const titulo = document.createElement("caption");
    titulo.className = "tituloTabla";
    titulo.textContent = params.tituloTabla;
    tabla.appendChild(titulo);

    // Encabezados de la tabla (Campos)
    const encabezado = document.createElement("thead");
    const encabezadoFila = document.createElement("tr");
    params.campos.forEach((campo) => {
      encabezadoFila.innerHTML += `
      <th class = "tablaCampos"> ${campo}</th>`;
    });
    encabezado.appendChild(encabezadoFila);
    tabla.appendChild(encabezado);

    // Cuerpo de la tabla
    const cuerpo = document.createElement("tbody");
    cuerpo.id = "tablaResultados";
    cuerpo.className = "tablaResultados";
    params.datos.forEach((dato) => {
      const fila = document.createElement("tr");
      fila.innerHTML += `
        <td>${dato.id}</td>
        <td>${dato.nombre}</td>
        <td>${dato.apellido}</td>
        <td>${dato.edad}</td>
      `;
      cuerpo.appendChild(fila);
    });
    tabla.appendChild(cuerpo);

    // Agrego la tabla al contenedor padre y la retorno
    document.querySelector(params.padre).appendChild(tabla);
  }
}
