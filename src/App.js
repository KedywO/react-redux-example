import './App.css';
import { Provider } from 'react-redux';
import { state } from './todoStore';
import TodoInput from "./components/todoInput/TodoInput";
import TodoList from "./components/todoList/TodoList";


function App() {
  return (
    <Provider store={state}>
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
