import logo from './logo.svg';
import './App.css';

function App() {
  const time = new Date();
  const day = time.toLocaleDateString("en-us", { weekday: "long"});
  const morning = time.getHours( ) >= 6 && time.getHours() <= 12;
  let dayMessage;

  if (dayMessage.toLowerCase() === "monday") {
    dayMessage = `Happy ${day}`;
} else if (dayMessage.toLowerCase() === "tuesday") {
  dayMessage = `Happy ${day}, four days to go`;
} else if (dayMessage.toLowerCase() === "wednesday") {
  dayMessage = `Happy ${day}, half way there`;
} else if (dayMessage.toLowerCase() === "thursday") {
  dayMessage = `Happy ${day}, start planning the weekend`;
} else if (dayMessage.toLowerCase() === "friday") {
  dayMessage = `Woo - hoo, the weekend is coming!`;
} else {
  dayMessage = "Stay calm and keep having fun"
}
return (
   <div className='App'>
      <h1>
        {dayMessage}
      </h1>
      {morning ? <h2>Have you had breakfast yet?</h2> : ''}
   </div>
  );
}

export default App;
