import './App.css';
import './assets/css/style.css'
import './assets/fonts/stylesheet.css'
import Ingredientes from './components/Ingredientes';
import Saludo from './components/Saludo'

function App() {
  return (
    <div>
      <Ingredientes title={"huevo"} type={"light"} size={"lg"} darkmode={false}/>
      <Ingredientes title={"huevo"} type={"dark"} size={"sm"} darkmode={true}/>
      <Saludo/>
    </div>
  );
}

export default App;
