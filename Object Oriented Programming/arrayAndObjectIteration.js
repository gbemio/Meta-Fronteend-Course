// Task 1
var diary = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDiary() {
    for (var diar of diary) {
        console.log(diar);
    }
}
logDiary();

// Task 2
const animal = {
canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop]);
    }
}
birdCan();
// Task 3
function animalCan() {
    for (prop in bird) {
        console.log(prop + ": " + bird[prop] );
    }
}
animalCan();