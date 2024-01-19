

function taxt1 (fun){
    console.log("taxt1");
    fun()
}

function taxt2 (fun){
    setTimeout(()=>{
        console.log("taxt2");
        fun()
    },5000)

}

function taxt3 (){
    console.log("taxt3");
}

taxt1(()=>{
    taxt2(()=>{
        taxt3()
    })
})

