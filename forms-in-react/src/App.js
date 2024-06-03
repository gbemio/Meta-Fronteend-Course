import {useState} from 'react';
import './App.css';

// Feedback form with controlled component that ahs a range

function App() {
  const [score, setScore] = useState('10');
const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comjment expllaining why the experience was poor.")
      return;
    }

    console.log("Form submitted");
    setComment("");
    setScore("10");
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className='Field'>
            <label>Score:</label>
            <input
              type='range'
              min="0"
              max="10"
              value={score}
              onChange={e => setScore(e.target.value)}
               />
            <div className='Field'>
              <label>Comment:</label>
              <textarea value={comment} onChange={e => setComment(e.target.value)}/>
            </div>
          </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
      </div>
  )
}







// Controlled forn
// function App() {
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setName("");
//     console.log("Form Submitted")
//   }

//   return (
//     <div className='App'>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <div className='Field'>
//             <label htmlFor='name'>Name:</label>
//             <input id='name' type='text' placeholder='Name' name='name' value={name} onChange={e => setName(e.target.value)}/>
//           </div>
//           <button disabled={!name} type='submit'>Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   )
// }

// export default App;

// Uncontrolled form
// function App() {

//   return (
//     <div className='App'>
//       <form>
//         <fieldset>
//           <div className='Field'>
//             <label>Name:</label>
//             <input type='text' placeholder='Name' name='name'/>
//           </div>
//           <button type='submit'>Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   )
// }
