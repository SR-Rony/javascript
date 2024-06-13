// function outer () {
//     let amiOuter = 'i am outer'
//     function inner (){
//         console.log(amiOuter);
//     }

//     amiOuter = "ami outer fun"
//     return inner
    
// }

// let innerFun = outer()

// innerFun()

(function sum (x) {
    return (function sub (y) {
        console.log(x);
    })(105)
})(100)
