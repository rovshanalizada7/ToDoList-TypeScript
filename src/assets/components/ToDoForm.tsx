import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../Redux/store';
import { add, toggle } from '../Redux/feature/tasksSlice';
import { set } from '../Redux/feature/filterSlice';
import { Filter } from '../types/types';

const ToDoForm: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const tasks = useSelector((state: RootState) => state.tasks);
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(add(newTask.trim()));
      setNewTask('');
    } else {
        alert('Please enter value')
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <div className="input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task..."
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      
      <div className="filter-group">
        {(['all', 'active', 'completed'] as Filter[]).map((item) => (
          <button
            key={item}
            onClick={() => dispatch(set(item))}
            className={filter === item ? 'active' : ''}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
      
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggle(task.id))}
            />
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoForm;



























// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Todo } from "../types/types";
// import { todoAdded } from "../Redux/feature/filterSlice";
// import TodoList from "./TodoLIst";

// const ToDoForm = () => {

//     const [todo, setTodo] = useState<string>("");
//     const dispatch = useDispatch();
  
//     const getAddedTodo = (e:React.FormEvent) => {
//        e.preventDefault();
//       if (!todo.trim()) {
//         alert("todonu doldurun ");
//         return;
//       }
//       const payload: Todo = {
//         id: Math.floor(Math.random() * 99999999),
//         content: todo,
//       };
//       dispatch(todoAdded(payload));
//       setTodo("");
//     };

//   return (
    
//     <section>
//     <div className="toDo">
//     <form action="">
//     <input
//      type="text" 
//      placeholder='New task...'
//      value={todo}
//      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//        setTodo(e.target.value)
//      }
//      />
//     <button onClick={getAddedTodo}>ADD</button>
//      </form>
//      <div>
//         <span>All</span>
//         <span>Active</span>
//         <span>Completed</span>
//      </div>
//      <TodoList/>
     
//    </div>
//    </section>
//   )
// }

// export default ToDoForm