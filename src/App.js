import './App.css';
import { StartSwiftlyIDClient } from './utils/SwiftlyIDManager';

function App() {

  var SwiftlyIDClient = StartSwiftlyIDClient();

  return (
    <h1>{SwiftlyIDClient}</h1>
  );
}

export default App;
