import styles from "../Styles/Card.module.css";
export default function Card({ nombre, usuario }) {
  return (
    <>
      <div className={styles.card}>
        <h2>Hola, tu nombre registrado es: </h2>
        <h1>{nombre}</h1>
        <p>Tu usuario es: {usuario}</p>
      </div>
    </>
  );
}
