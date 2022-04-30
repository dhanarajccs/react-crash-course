import './App.css';

// import Greet from './components/Greet';          // Functional Component
// import Greet from './components/Greet';          // Functional Component - (Arrow Function)
// import MyComponent from './components/Greet';    //  Default Export - allows us with any name

import { Greet } from './components/Greet';         //  (Arrow Function) - Named Export - allows us with exact name

function App() {
  return (
    <div className="App">
     {/* <Greet /> */}
     {/* <MyComponent /> */}
     <Greet />
    </div>
  );
}

export default App; 