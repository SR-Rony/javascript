let mainButton = document.getElementById("main-button")
let body = document.querySelector("body")



mainButton.addEventListener("click",function () {
    let bgColor = rendomColor()
    body.style.background = bgColor
})

function rendomColor (){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`
    
}
