// 1.callback fn
// function square(n){return n*n}
// function cube(n){return n*n*n}
// function sum(m,n,call_fn){
//     return call_fn(n)+call_fn(m)
// }
// console.log(sum(1,3,cube))

// 2.Async fns--->CREATING OUT OWN 
// function my_own_timeout(callback_fn,timeout){
//     setTimeout(callback_fn,timeout)
// }
// my_own_timeout(function(){
//     console.log("Helloooo Coderrrx!")
//     setTimeout(function(){
//         console.log("Inside Second nested timeout")
//     },2000)
// },1000)

// 3.Using Promises to create our Async Fns-->Promisifying Async functions

function promisified_my_own_timeout(timeout){
    return new Promise(function(resolve){
        setTimeout(resolve,timeout)
    })
}

promisified_my_own_timeout(2000).then(function(){
    console.log("timeout completed coderrrx!")
})