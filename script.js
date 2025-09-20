const field = document.querySelector(".field")
const field2 = document.querySelector(".field2")
const playgroundSize = document.querySelector(".size")
const randomColorInput = document.querySelector(".color__choice-input")
const sizeText = document.querySelector(".size__playgr")
const playground = document.querySelector('.playground')
const del = document.querySelector('.delete')

playgroundSize.addEventListener("input", () => sizeText.innerHTML = `${playgroundSize.value} &#215; ${playgroundSize.value}`)

function randomColor (){
    const hex = "012345789ABCDEF";
    let color = "#";
    for (i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
function createSquare(n){
    if(playground.children.length !==n*n){
        playground.innerHTML = "";
        for (let i=0; i < n*n; i++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('child');
            newDiv.style.flex = `0 0 calc(100% / ${n})`;
            newDiv.style.height = `calc(100% / ${n})`;
            playground.appendChild(newDiv)
        }
    }
}
function setMode(mode){
    const children = playground.querySelectorAll('.child')
    children.forEach(child =>{
        child.onmouseenter = () =>{
            if (mode === 'picker'){
                child.style.backgroundColor = randomColorInput.value;
            }
            else{
                child.style.backgroundColor = randomColor()
            }
        }
    })
}
field.addEventListener('click', () => {
    createSquare(playgroundSize.value)
    setMode('picker')
})

field2.addEventListener('click', () => {
    createSquare(playgroundSize.value)
    setMode('random')
})
del.addEventListener('click', () => {
    const children = playground.querySelectorAll('.child');
    children.forEach(child =>{
        child.style.backgroundColor = "white";
    })
})

