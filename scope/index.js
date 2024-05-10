// global scope=============//

var x =10;  //please global scope var is not use

// global scope let and const use
let y = 10;
const z = 10

// functional scope============//

function sum (){
    var x = 20;
    let y = 10;
    const z =20
}
// sum()

// local scope==============//

if(true){
    var a= "i am local variable" //var not use
    let b = "i am";
    const c = "student"

}

for (var i =0; i<10;i++){
    // local scop var not user 
    // use let and const
}

// console.log(i);

let num =10

function sun (){
    console.log(num);
    let num2 =20
    function sum2 (){
        console.log(num2);
        const ami = "ami"
        function sum3(){
            console.log(ami);
        }
        sum3()
    }
    sum2()
}
sum()

