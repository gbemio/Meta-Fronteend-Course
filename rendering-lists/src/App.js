
import "./App.css";
import DessertsList from "./DessertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}

export default App;


// import './index.css';

// const topDeserts =[
//  {
//   id: "1",
//   tittle: "Tiramisu",
//   description: "The best tiramisu in town",
//   image: "feuinnsoc",
//   price:"$5.00"
// },
// {
//   id:"2",
//   tittle: "Lemon Ice Cream",
//   description: "Mind blowing taste",
//   image:"suen",
//   price: "$4.50",
// },
// {
//   id: "3",
//   tittle: "Chocolate mousse", 
//   description:"Unexplored flavour",
//   image: "bswdo",
//   price: "$6.00"
// },
// ];

// function App() {
//   const listItems = topDeserts.map(dessert => {
//     const itemText = `${dessert.tittle} - ${dessert.price}`
//     return <li>{itemText}</li>
//   })
// return (
//   <div>
//     <ul>
//       {listItems}
//     </ul>
//   </div>
// )

// }