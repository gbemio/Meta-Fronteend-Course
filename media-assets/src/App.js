import './App.css';
import ReactPlayer from "react-player"

function App() {
  const vidUrl = "https://www.facebook.com/CentralParkNYC/videos/exploring-central-parks-winter-wonderland/370388158795316/"
  return (
    <div className="App">
   <ReactPlayer
      url={vidUrl}
      playing={false}
      volume={.5}
      />
    </div>
  );
}

export default App;
