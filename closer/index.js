// function outer () {
//     let amiOuter = 'i am outer'
//     function inner (){
//         // console.log(amiOuter);
//     }

//     amiOuter = "ami outer fun"
//     return inner
    
// }

// let innerFun = outer()

// innerFun()

// (function sum (x) {
//     return (function sub (y) {
//         // console.log(x);
//     })(105)
// })(100)

// output 100


for (let i = 0; i < 5; i++) {
    setTimeout(()=>{
        console.log(i);
    },1000)
    
}