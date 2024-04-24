// Using the console inspect function in the browser
const target = document.querySelector('body')

function handleClick() {
    console.log('clicked the body')
}

target.addEventListener('click', handleClick)

// returns: clicked the body