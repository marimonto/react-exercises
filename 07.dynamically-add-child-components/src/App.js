import './App.css';
import Child from './components/Child';
import Parent from './components/Parent';

function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}

export default App;
