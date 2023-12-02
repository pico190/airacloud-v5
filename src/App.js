import './App.css';
import { StartSwiftlyIDClient } from './utils/SwiftlyIDManager';

function App() {

  var SwiftlyIDClient = StartSwiftlyIDClient();
  console.log(SwiftlyIDClient);

  return (
    <h1>Consola</h1>
  );
}

export default App;
