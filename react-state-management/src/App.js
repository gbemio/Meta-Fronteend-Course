import MealsProvider from './providers/MealsProvider';
import MealsList from './components/MealsList'
import Counter from './components/Counter'

function App() {
  return (
<div>
<MealsProvider>
    <MealsList/>
    <Counter/>
  </MealsProvider>
</div>
  );
}

export default App;


// usin useReducer hooks
// import { useReducer } from 'react';

// const reducer = (state, action) => {
//   if (action.type === "ride") return {money: state.money + 10};
//   if (action.type === 'fuel') return {money: state.money - 50};
//   return new Error();
// }

// function App() {

//   const initialState = {money: 100};
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div className='App'>
//       <h1>Wallet: {state.money}</h1>
//       <div>
//         <button onClick={() => dispatch({type: 'ride'})}>
//           A new customer!</button>
//         <button onClick={( => dispatch({type: 'fuel'}))}>
//           Refill the tank!
//         </button>
//       </div>
//     </div>

//   )
// }


// example of holding state in an object and updation it based on user-generated events

// import { useState } from "react"; 
 
// export default function App() { 
//   const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     setGreeting({ greet: "Hello, World-Wide Web" }); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 


// Correct way to update the state object in React when using useState

// import { useState } from "react"; 
 
// export default function App() { 
//   const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     const newGreeting = {...greeting}; 
//     newGreeting.greet = "Hello, World-Wide Web"; 
//     setGreeting(newGreeting); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 


// Updating the state object using arrow functions

// import { useState } from "react"; 
 
// export default function App() { 
//   const [greeting, setGreeting] = useState( 
//     { 
//         greet: "Hello", 
//         place: "World" 
//     } 
//   ); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     setGreeting(prevState => { 
//         return {...prevState, place: "World-Wide Web"} 
//     }); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}, {greeting.place}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 


// Task: Updating state stored in an Object

// import { useState } from "react";

// export default function App() {
//   const [giftCard, setGiftCard] = useState(
//     {
//         firstName: "Jennifer",
//         lastName: "Smith",
//         text: "Free dinner for 4 guests",
//         valid: true,
//         instructions: "To use your coupon, click the button below.",
//     }
//   );

//   function spendGiftCard() {
//     setGiftCard(prevState => {
//       return {
//         ...prevState,
//         text: "Your coupon has been used",
//         valid: false,
//         instructions: "Please visit our restaurant to renew your gift card"
//       }
//     })
//   }

//   return (
//     <div style={{padding: '40px'}}>
//       <h1>
//         Gift Card Page
//       </h1>
//       <h2>
//         Customer: {giftCard.firstName} {giftCard.lastName}
//       </h2>
//       <h3>
//         {giftCard.text}
//       </h3>
//       <p>
//         {giftCard.instructions}
//       </p>
//       {
//         giftCard.valid && (
//           <button onClick={spendGiftCard}>
//             Spend Gift Card
//           </button>
//         )
//       }
//     </div>
//   );
// }
