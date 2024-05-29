import rooftops from './assets/images/centralpark.jpg'

function App() {
   const randomImageUrl =  "https://th.bing.com/th/id/OIP.JlYgf0DyFd8u0XO3UACdzQHaE8?rs=1&pid=ImgDetMain"
  return (
    <div className="App">
      <h1>
        Task: add tree images with some styling
      </h1>
      <img
      height={200}
      src={rooftops}
      alt='An image of a rooftop in Newyork' />
    
    <img
    height={200}
    src={require('./assets/images/centralpark.jpg')}
    alt='An image of a central park in Newyork' 
    />

    <img
    src={randomImageUrl}
    height={200}
    />
    </div>

   
  );
}

export default App;
