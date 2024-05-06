

let otp ;

console.log(otp);

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
        otpMessage.innerText = "Otp has been validate successfull"
    }else{
        otpMessage.innerText = "Otp is Invalide "
    }

}

function init (){
    otpBox()
    setTimeout(otpGenerat,2000)
}

init()