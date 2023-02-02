import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <HelloWorld/>
      <SayMyName nome="Andersoooon"/>
      <SayMyName nome="Muleke"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Anderson" 
        idade="36" 
        profissao="Dev" 
        foto="https://via.placeholder.com/150"/>
        <List/>
    </div>
  );
}

export default App;
