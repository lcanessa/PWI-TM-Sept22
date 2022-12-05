import logo from './logo.svg';
import './App.css';
import Navegacion from './components/nav/Navegacion';

//componente funcional
function App() {

  return(
    <div className='componente-app'>
      <Navegacion datos={{nombre:"Productos", zona:"principal"}}/>
      <main>
        <h1>Titulo Principal</h1>
        <h2>Hola soy otro Titulo</h2>
      </main>
    </div>  
    )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

//componente de clases
// class App extends React.Component{
//   render(){
//     return (
//       <div className='componente-app'>
//         <h1>Titulo Principal</h1>
//         <h2>Hola soy otro Titulo</h2>
//       </div> 
//     )
//   }
// }

export default App;

