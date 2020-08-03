import React from 'react';
import ReactDOM from 'react-dom';
import style from "../src/index.css"
ReactDOM.render(
  <div>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Diego Emanuel</td>
          <td>Ortiz Lopez</td>
          <td>Emanuelortizlopez@gmail.com</td>
          <td>3013067082</td>
        </tr>
        <tr>
          <td>Samuel</td>
          <td>Diosa Lopez</td>
          <td>samueldiosalopez2702@gmail.com</td>
          <td>3046658683</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h1>¿Qué es babel?</h1>
    <p>Babel es una herramienta que nos permite
    transformar nuestro código JS de última generación
    (o con funcionalidades extras) a JS que cualquier
    navegador o versión de node.js entienda.
    Babel funciona mediante plugins para que le indiquemos
que cosas queremos que transforme, por ejemplo con el plugin babel-plugin-transform-es2015-arrow-functions podemos decirle que transforme las arrow functions </p>

    <h1>¿Qué es Webpack?</h1>
    <p>Es una herramienta extremadamente útil cuando desarrollas aplicaciones web diseñadas con filosofía modular, es decir, separando el código en módulos que luego se utilizan como dependencias en otros módulos. Una de las cosas que hace realmente bien Webpack es la gestión de esos módulos y de sus dependencias, pero también puede usarse para cuestiones como concatenación de código, minimización y ofuscación, verificación de buenas prácticas (linting), carga bajo demanda de módulos, etc...

Una de las muchas cosas interesantes de Webpack es que no solo el código JavaScript se considera un módulo. Las hojas de estilo, las páginas HTML e incluso las imágenes se pueden utilizar también como tales, lo cual da un extra de potencia muy interesante.</p>
  </div>,
  document.getElementById('root')
);


