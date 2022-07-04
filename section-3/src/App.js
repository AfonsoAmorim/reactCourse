import './App.css';
import Praia from "./assets/praia.jpg"
import Lista from './componentes/Lista';
import Manage from './componentes/Manage';

function App() {
  return (
    <div className="App">
     <h1>React Avançado!</h1>
     <div>
      <img src="/img1.jpg" alt="paisagem publica" />
     </div>
     <div>
      <img src={Praia} alt="Praia 2" />
     </div>
     <Manage/>
    <Lista />
    </div>
  );
}

export default App;
