import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewToDoForm from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  
  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: "Feed Puppy", rowAssigned: "User One"},
    {rowNumber: 2, rowDescription: "Salon Appt", rowAssigned: "User Two"},
    {rowNumber: 3, rowDescription: "Get Drinks", rowAssigned: "User Three"},
    {rowNumber: 4, rowDescription: "Make Dinner", rowAssigned: "User Three"}
  ]
  )


  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned,
      };
      setTodos(todos => [...todos, newTodo]);
    }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <TodoTable todos={todos} deleteTodo={deleteTodo}/>
            <button 
              className='btn btn-primary'
              onClick={() => setShowAddTodoForm(!showAddTodoForm)}
            >
              {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
            </button>
            {showAddTodoForm && 
            <NewToDoForm addTodo={addTodo}/>
            }
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
