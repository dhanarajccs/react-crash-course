import './App.css';
import { Greet } from './components/Greet';         //  Props

function App() {
  return (
    <div className="App">
      <Greet name="Dhanaraj" heroName="Super man" />
      <Greet name="Prasanth" heroName="Hero man" />
      <Greet name="Sekar" heroName="Spider man" />
    </div>
  );
}

export default App; 