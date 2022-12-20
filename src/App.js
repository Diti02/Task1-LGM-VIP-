
import './App.css';
import Todo from "./component/todo";

function App() {

  const data ="";

  return (
    <div className="App">
      <header className="App-header">
        <Todo data={data} />
      </header>
    </div>
  );
}

export default App;
