function ModeToggler() {
    let darkModeOn = false;
    const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>Light Mode is on</h1>

    function handleClick() {
        darkModeOn = !darkModeOn;
        if (darkModeOn === true ) {
            console.log('Dark mode is on')
        }else {
            console.log('Light mode is on')
        }
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    )
}

export default ModeToggler;

// function App() {
//     function handleClick() {
//         let randomNum = Math.floor(Math.random() * 3) + 1
//         console.log(randomNum)
//         let userInput = prompt('type a number');
//         alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
//     }
    
//       return (
//         <div>
//           <h1>
//             <button onClick={handleClick}>
//               Guess the number between 1 and 3
//             </button>
//           </h1>
//         </div>
//       );
//     }
    
//     export default App;


// Using Hooks

// import { useState } from 'react'; 

// export default function RegisterForm() { 
//   const [form, setForm] = useState({ 
//     firstName: 'Luke', 
//     lastName: 'Jones', 
//     email: 'lukeJones@sculpture.com', 
//   }); 

//   return ( 
//     <> 
//       <label> 
//         First name: 
//         <input 
//           value={form.firstName} 
//           onChange={e => { 
//             setForm({ 
//               ...form, 
//               firstName: e.target.value 
//             }); 
//           }} 
//         /> 
//       </label> 
//       <label> 
//         Last name: 
//         <input 
//           value={form.lastName} 
//           onChange={e => { 
//             setForm({ 
//               ...form, 
//               lastName: e.target.value 
//             }); 
//           }} 
//         /> 
//       </label> 
//       <label> 
//         Email: 
//         <input 
//           value={form.email} 
//           onChange={e => { 
//             setForm({ 
//               ...form, 
//               email: e.target.value 
//             }); 
//           }} 
//         /> 
//       </label> 
//       <p> 
//         {form.firstName}{' '} 
//         {form.lastName}{' '} 
//         ({form.email})
//       </p> 
//     </> 
//   ); 
// } 

// PROP DRILLING
// function Main(props) { 
//     return <Header msg={props.msg} />; 
//   };
  
//   function Header(props) { 
//     return ( 
//       <div style={{ border: "10px solid whitesmoke" }}> 
//         <h1>Header here</h1> 
//         <Wrapper msg={props.msg} /> 
//       </div> 
//     ); 
//   };
  
//   function Wrapper(props) { 
//     return ( 
//       <div style={{ border: "10px solid lightgray" }}> 
//         <h2>Wrapper here</h2> 
//         <Button msg={props.msg} /> 
//       </div> 
//     ); 
//   };
  
//   function Button(props) { 
//     return ( 
//       <div style={{ border: "20px solid orange" }}> 
//         <h3>This is the Button component</h3> 
//         <button onClick={() => alert(props.msg)}>Click me!</button> 
//       </div> 
//     ); 
//   };
  
//   function App() { 
//     return ( 
//       <Main  
//         msg="I passed through the Header and the Wrapper and I reached the Button component"  
//       /> 
//     ); 
//   }; 
  
//   export default App;
    