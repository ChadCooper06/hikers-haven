import React from "react";


const Topic = () => {
  return <h1>Topics</h1>;
};
export default Topic

// export default function Topic({ input, setInput, comments, setComments }) {

//   //places the value input by user to the text input
//   //const [filter, setFilter] = useState('all');
//   const inputHandler = (e) => {
//       setInput(e.target.value);
//   }
//   const submitHandler = (e) => {
//       if(e.key === 'Enter') {
//           setComments([
//               ...comments,
//               {
//                   text: input,
//               }
//           ])
//           setInput('')
//       };
//   }

//   //draws my input, adds fns to it and draws my buttons below-theyre not working yet
//   return (
//     <div className="comment">
//       <div className='add-task'>
//       <input
//           type='text'
//           placeholder='Add Task'
//           value={input}
//           name='text'
//           className='input'
//           onChange={inputHandler}
//           onKeyDown={submitHandler} 
//         />
//       </div>
        
//     </div>
//   );
// };