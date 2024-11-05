import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../Redux/store';
import { add, deleteTask, editTask, toggle } from '../Redux/feature/tasksSlice';
import { set } from '../Redux/feature/filterSlice';
import { Filter, Task } from '../types/types';
import { FaTrash, FaPen, FaCheck } from "react-icons/fa";

const ToDoForm: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const tasks = useSelector((state: RootState) => state.tasks);
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();


  const handleAddTask = () => {
    if(!newTask.trim()) {
      alert('Please enter a value');
    } else{
        dispatch(add(newTask.trim()));
        setNewTask('');
    }
  } 

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (task: Task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const handleSave = (id: number) => {
    dispatch(editTask({ id, text: editText, completed: false }));
    setEditId(null);
    setEditText('');
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
          onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <button onClick={handleAddTask} >ADD</button>
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
            <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggle(task.id))}
                style={{height:"16px",width:"16px"}}
              />
              {editId === task.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className='editTask'
                />
              ) : (
                <span style={{fontSize:"17px"}}>{task.text}</span>
              )}
            </div>
            <div style={{display:"flex",gap:"15px"}}>
              <FaTrash className="trash" onClick={() => handleDelete(task.id)} />
              {editId === task.id ? (
                <FaCheck onClick={() => handleSave(task.id)} className='faCheck'/>
              ) : (
                <FaPen onClick={() => handleEdit(task)} className='faPen'/>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoForm;
