const field = document.querySelector(".field")
const field2 = document.querySelector(".field2")
const playgroundSize = document.querySelector(".size")
const randomColorInput = document.querySelector(".color__choice-input")
const sizeText = document.querySelector(".size__playgr")
const playground = document.querySelector('.playground')
//рандомный цвет

playgroundSize.addEventListener("input", () => sizeText.innerHTML = `${playgroundSize.value} &#215; ${playgroundSize.value}`)
function randomColor (){
    const hex = "012345789ABCDEF";
    let color = "#";
    for (i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

function createSquare(n, mode='random'){
    playground.innerHTML = "";
    const size = 500/n-1;
    for (let i=0; i < n*n; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('child');
        newDiv.style.flex = `0 0 calc(100% / ${n})`;
        newDiv.style.height = `calc(100% / ${n})`;
        
        
        newDiv.addEventListener('mouseenter', ()=> {
            if(mode==="picker"){
            newDiv.style.backgroundColor = randomColorInput.value;
            }
            else{
            newDiv.style.backgroundColor = randomColor()
            }})
        playground.appendChild(newDiv)
    }
    
}
field.addEventListener('click', () => {
    createSquare(playgroundSize.value, 'picker')
})

field2.addEventListener('click', () => {
    createSquare(playgroundSize.value, 'random')
})

