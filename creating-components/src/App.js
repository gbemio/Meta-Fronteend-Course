import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import './App.css';
import Btn from "./Btn.js"

function App() {
  return(
    <div>
      <Btn />
    <Header name="Anna" color="purple" />
    <Main greet="Howdy" />
    <Sidebar greet="Hi"/>
    </div>
  ) 
}

export default App;
