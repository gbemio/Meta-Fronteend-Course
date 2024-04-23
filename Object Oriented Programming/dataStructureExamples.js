//Working with arrays
// 1. forEach method
// basic syntac
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

// compact code
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});


// 2. filter method
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

// 3.Map Method
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})

// Working with objects
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

// Using Map method in js
// Map constructor that doesnt have inheritance or prototypes can be used as data storsge
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
// To get a specific value, you need to use the get() method.
bestBoxers.get(1); // 'The Champion'

// Working with Sets in JavaScript
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits); // {'apple', 'pear', 'plum'}