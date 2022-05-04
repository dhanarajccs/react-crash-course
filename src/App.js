import './App.css';
import './appStyles.css'                      // CSS Stylesheet
import styles from './appStyles.module.css'   // CSS Module
import { Inline } from './components/Inline';

function App() {
  return (
    <div className='App'>
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App; 

