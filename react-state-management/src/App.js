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