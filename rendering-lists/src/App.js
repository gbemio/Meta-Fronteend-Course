import './index.css';

const topDeserts =[
 {
  id: "1",
  tittle: "Tiramisu",
  description: "The best tiramisu in town",
  image: "feuinnsoc",
  price:"$5.00"
},
{
  id:"2",
  tittle: "Lemon Ice Cream",
  description: "Mind blowing taste",
  image:"suen",
  price: "$4.50",
},
{
  id: "3",
  tittle: "Chocolate mousse", 
  description:"Unexplored flavour",
  image: "bswdo",
  price: "$6.00"
},
];

function App() {
  const listItems = topDeserts.map(dessert => {
    const itemText = `${dessert.tittle} - ${dessert.price}`
    return <li>{itemText}</li>
  })
return (
  <div>
    <ul>
      {listItems}
    </ul>
  </div>
)

}