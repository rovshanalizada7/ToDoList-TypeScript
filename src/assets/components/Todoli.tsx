// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { deleteTodo, updateTodo } from "../Redux/feature/filterSlice";
// import { FaTrash } from "react-icons/fa6";
// import { FaPen } from "react-icons/fa";
// import { FaCheck } from "react-icons/fa";
// import { Todo } from "../types/types";

// export interface todoItem {
//   todoItem: Todo;
// }

// const TodoLi = ({ todoItem }: todoItem) => {
//   const { id, content } = todoItem;
//   const [edit, setEdit] = useState<boolean>(true);
//   const [newEdit, setNewEdit] = useState<string>(content);

//   const dispatch = useDispatch();

//   const getdeleteTodo = (id: number) => {
//     dispatch(deleteTodo(id));
//   };

//   const updateTodoList = () => {
//     const payload: Todo = {
//       id: id,
//       content: newEdit,
//     };
//     dispatch(updateTodo(payload));
//   };

//   return (
//     <>
//       <li>
//           <input type="checkbox" style={{width:"20px",height:"20px"}} />
//         {edit ? (
//             content
//         ) : (
//             <input
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               setNewEdit(e.target.value)
//             }
//             type="text"
//             value={newEdit}
//           />
      
//         )}
//         <div className="btns">
//           <FaTrash onClick={() => getdeleteTodo(id)} />
//           {edit ? (
//             <FaPen onClick={() => setEdit(false)} />
//           ) : (
//             <FaCheck
//               onClick={() => {
//                 setEdit(true);
//                 updateTodoList();
//               }}
//             />
//           )}
//         </div>
//       </li>
//     </>
//   );
// };

// export default TodoLi;