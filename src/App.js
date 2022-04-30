// import './App.css';

// // import Greet from './components/Greet';          // Functional Component
// // import Greet from './components/Greet';          // Functional Component - (Arrow Function)
// // import MyComponent from './components/Greet';    // Default Export - allows us with any name
// // import { Greet } from './components/Greet';      // (Arrow Function) - Named Export - allows us with exact name

// import { Greet } from './components/Greet';         //  Props

// function App() {
//   return (
//     <div className="App">
//       {/* <Greet /> */}
//       {/* <MyComponent /> */}
      
//       {/* 
//         <Greet name="Dhanaraj" /> 
//         <Greet name="Prasanth" />
//         <Greet name="Sekar" />
//      */}
      
//       {/*
//       <Greet name="Dhanaraj" heroName="Super man" />
//       <Greet name="Prasanth" heroName="Hero man" />
//       <Greet name="Sekar" heroName="Spider man" />
//       */}

//     </div>
//   );
// }

// export default App; 


/*
import './App.css';
import { Greet } from './components/Greet';         //  Props

function App() {
  return (
    <div className="App">
      <Greet name="Dhanaraj" heroName="Super man" />
      <Greet name="Prasanth" heroName="Hero man">
        <button>Action</button>
      </Greet> 
      <Greet name="Sekar" heroName="Spider man">
        <p>This is children props</p>
      </Greet>
    </div>
  );
}

export default App; 
*/

import './App.css';
import { Greet } from './components/Greet';         //  Props

function App() {
  return (
    <div className="App">
      <Greet name="Dhanaraj" heroName="Super man" />
      <Greet name="Prasanth" heroName="Hero man">
        <button>Action</button>
      </Greet> 
      <Greet name="Sekar" heroName="Spider man">
        <p>This is children props</p>
      </Greet>
    </div>
  );
}

export default App; 
