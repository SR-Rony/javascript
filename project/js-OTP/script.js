

let otp ;

let expirElement = document.getElementById("expire-message")

let stopInterval;

function expire (){
    const totalTime = 20000;
    const interval = 1000;

    let slice = totalTime/interval;

    stopInterval = setInterval(function(){
        expirElement.innerText = `OTP will expire in ${slice} seconds`
        slice = slice-1
        console.log(slice);
    },interval)

    setTimeout(function(){
        expirElement.innerText = `OTP expire `
        clearInterval(stopInterval)
        otpGenerat()
    },totalTime)
}

function otpBox (){
    const inputBox = document.getElementById("input-box-id");

    inputBox.addEventListener("input",function(e){
        let target = e.target;
        let inputValue = target.value;

        if(isNaN(inputValue)){
            target.value = "";
            return
        }

        let nextElement = target.nextElementSibling;
        if(nextElement){
            nextElement.focus()
        }
        validateOtp()
    })
}
// otp generate function
function otpGenerat (){
    otp = Math.floor(1000 + Math.random() *9000)
    const otpElement = document.getElementById("generate-opt-id")

    otpElement.innerText = `Yout OTP : ${otp}`
    expire()
}

// validate opt fun
function validateOtp (){
    let inputValue="";

    const inputBox = document.getElementById("input-box-id");
    [...inputBox.children].forEach((child)=>{
       inputValue =inputValue + child.value;
    })

    let result = (otp === parseInt(inputValue,10))
    const otpMessage= document.getElementById("message-opt");
    if(result){
        // clearInterval(stopInterval)
        otpMessage.innerText = "Otp has been validate successfull"
        otpMessage.classList.add("seccess-message")
    }else{
        otpMessage.innerText = "Otp is Invalide "
        otpMessage.classList.add("fail-message")

    }

}

function init (){
    otpBox()
    otpGenerat()
}

init()