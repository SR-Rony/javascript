
// console.log("i am api calling");
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method :"POST",
//     body:JSON.stringify({
//         title: 'fooma',
//         body: 'barma',
//         userId: 1,
//     }),
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// })
// .then((res)=>{
//     if(!res.ok){
//         let error =res.status
//         throw new Error(error)
//     }
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

async function display(url,config){
    let res = await fetch(url,config)
    if(!res.ok){
        const error =res.status
        throw new Error (error)
    }
    let data = await res.json()
    return data
}

let updateData = (()=>{
    display("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foommmm',
            body: 'barmmmmmm',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
    
})

updateData()
