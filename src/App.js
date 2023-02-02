import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Andersoooon"/>
      <SayMyName nome="Muleke"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Anderson" 
        idade="36" 
        profissao="Dev" 
        foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
