import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Card from './components/Card';
import "./styles.css";
function App() {
  return (
    <div className="App">
      <First />
      <Card />
      <div style={{fontSize:'20px',color:'white'}}>Hover on Card... </div>
   
    </div>
  );
}

export default App;
