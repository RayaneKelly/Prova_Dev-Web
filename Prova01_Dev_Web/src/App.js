import './App.css';



import Questao01 from './components/Questao01/Questao01';
import Questao02 from './components/Questao02/Questao02';
import Questao03 from './components/Questao3/Questao03';
import Questao04 from './components/Questao04/Questao04';
import Questao05 from './components/Questao05.jsx/Questao05';
import Questao01A from './components/Questao01/Questao01A';
import Questao01B from './components/Questao01/Questao01B';


function App(props) {
  return (
    <div className="App">
      {/* <Questao01>
          <Questao01A 
            nome='Rayane Kelly'
            sobrenome='Freitas'
            curso='DD'
          />
          <Questao01B />
      </Questao01> */}
      {/* <Questao02 /> */}
      {/* <Questao03 /> */}
      {/* <Questao04 /> */}
      <Questao05 />

 
    </div>
  );
}
export default App;



