import styles from "../Styles/Form.module.css";
import Card from "../Components/Card";
import { useState } from "react";
export default function Form() {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim().length < 3 || usuario.trim().length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setMostrarCard(false);
    } else {
      setErrorMessage("");
      setMostrarCard(true);
    }
  };

  const handleInput = (e) => {
    if (e.target.id === "nombre") {
      setNombre(e.target.value);
    } else if (e.target.id === "usuario") {
      setUsuario(e.target.value);
    }
  };

  return (
    <>
      <h3>Registrate</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={handleInput} />
        <label>Nombre de usuario:</label>
        <input
          type="text"
          id="usuario"
          value={usuario}
          onChange={handleInput}
        />
        <button type="submit">Aceptar</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {mostrarCard && <Card nombre={nombre} usuario={usuario} />}
    </>
  );
}
