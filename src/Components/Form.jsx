import React from "react";
import styles from "../Styles/Form.module.css";

export default function Form() {
  return (
    <div>
      <form action="" id="form">
        <label>Nombre: </label>
        <input type="text" />
        <label>Dirección</label>
        <input type="text" />
      </form>
    </div>
  );
}
