import logo from './logo.svg';
import './App.css';

function App(props) {
  return(
    <button> {props.children} </button>
  );
}

export default App;
