const mainButton = document.getElementById("main-button")
const body = document.querySelector("body")
const input = document.querySelector("input")



mainButton.addEventListener("click",function () {
    let bgColor = rendomColor()
    console.log(bgColor);
    body.style.background = bgColor
    input.value = bgColor
})

function rendomColor (){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    
}
