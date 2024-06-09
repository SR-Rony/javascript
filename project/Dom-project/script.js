const mainButton = document.getElementById("main-button")
const body = document.querySelector("body")
const input = document.querySelector("input")
const copyButton = document.querySelector(".copy-button")

let div = null

// create color button
mainButton.addEventListener("click",function () {
    let bgColor = rendomColor()
    body.style.background = bgColor

    // input color code add
    input.value = bgColor

    // copy button
    copyButton.addEventListener("click",function(){
        if(div != null){
            div.remove()
            div = null
        }
       navigator.clipboard.writeText(input.value)
       tostMessage(`${input.value} Copied`)
    })
})

// color function
function rendomColor (){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    
}

// create a tost messages
function tostMessage(msg){
    div = document.createElement('div')
    div.innerText = msg;
    div.className = "tost-messages tost-in"

    div.addEventListener("click",()=>{
        div.classList.remove("tost-in");
        div.classList.add("tost-out")
        div.addEventListener("animationend",()=>{
            div.remove()
            div = null
        })
    })
    document.body.appendChild(div)
}
