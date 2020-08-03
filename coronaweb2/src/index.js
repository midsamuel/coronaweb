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
  </div>,
  document.getElementById('root')
);


