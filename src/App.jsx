import "./App.css";
import Card from "./Components/Card";
import Form from "./Components/Form";
function App() {
  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <Card texto="Hola soy una tarjeta" />
      <Form />
    </div>
  );
}

export default App;
