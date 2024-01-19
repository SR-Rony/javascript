
let promise1 = new Promise((res,rej)=>{
    let myPromise=true
    if(myPromise){
        res("yes i am accect promise")
    }else{
        rej("i am reject your promise")
    }
})

// promise1.then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{
//     console.log(error);
// })

let promise2 = new Promise((res,rej)=>{
    let yourPromise =true
    if(yourPromise){
        res('yes my promise true')
    }
})

// promise2.then((res)=>{
//     console.log(res);
// })

Promise.race([promise1,promise2])
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})

