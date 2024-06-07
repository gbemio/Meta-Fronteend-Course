import {useReducer} from 'react';
import './App.css';

const reducer = (state, action) => {
  if (action.type === 'buy_ingredients') return {money: state.money - 10};
  if (action.type === 'sell_a_meal') return {money: state.money + 10};
  if (action.type === 'celebrity_visit') return {money: state.money + 5000};
  return state;
}

function App() {

  const initialState = {money: 100};
  const {state, dispatch} = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: 'buy_ingredients'})}>Shopping for veggies!</button>
        <button onClick={() => dispatch({type: 'sell_a_meal'})}>Serve a meal the customer</button>
        <button onClick={() => dispatch({type: 'celebrity_visit'})}>Celebrity visit</button>
      </div>
    </div>
  );
};

export default App;

// Using useRef Hook to access underlying DOM

// import React from 'react';
// import './App.css';

// function App() {
//   const formInputRef = React.useRef(null);

//   const focusInput = () => {
//     formInputRef.current.focus();
//   }

//   return (
//     <>
//       <h1>Using useRef to access an underlying DOM</h1>
//       <input ref={formInputRef} type='text'/>
//       <button onClick={focusInput}>
//         Focus input
//       </button>
//     </>
//   )
// }

// export default App;