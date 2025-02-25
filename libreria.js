"use strict";
export class Libreria {
  //-------------------------------------------------------
  // TABLA PARA MOSTRAR DATOS
  //-------------------------------------------------------
  static crearTablaDatos(id, padre, tituloTabla, campos, datos) {
    // Creo el elemento principal (Tabla)
    const tabla = document.createElement("table");
    tabla.id = id;
    tabla.className = id;

    // Titulo de la tabla
    const titulo = document.createElement("caption");
    titulo.className = "tituloTabla";
    titulo.textContent = tituloTabla;
    tabla.appendChild(titulo);

    // Encabezados de la tabla (Campos)
    const encabezado = document.createElement("thead");
    const encabezadoFila = document.createElement("tr");
    campos.forEach((campo, index) => {
      encabezadoFila.innerHTML += `
      <th class = "tablaCampos"> ${campos[index]}</th>`;
    });
    encabezado.appendChild(encabezadoFila);
    tabla.appendChild(encabezado);

    // Cuerpo de la tabla
    const cuerpo = document.createElement("tbody");
    cuerpo.id = "tablaResultados";
    cuerpo.className = "tablaResultados";
    datos.forEach((dato, index) => {
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
    document.querySelector(padre).appendChild(tabla);
  }
}
