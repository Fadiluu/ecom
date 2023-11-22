// function add(num1,num2,callback){
//     let err = false
//     if(num1==0){
//         err=true
//     }
//     callback(num1+num2,err)
// }

// function multiply(num1,num2,callback){
//     callback(num1*num2)
// }

// function div(num1,num2,callback){
//     callback(num1/num2)
// }

// add(10,20,(sum,err)=>{
//     if(err){
//         console.log("First Number Zero")
//     }else{
//     console.log(sum)
//     multiply(sum,sum,(product)=>{
//         console.log(product)
//         div(product,10,(division)=>{
//             console.log(division)
//         })
//     })
//     }
// })                         Callback hell


// Promise

const Promise = require('promise')

function add(num1,num2){
    return  new Promise ((resolve,reject)=>{
        if(num1==0){
            reject('Error')
        }
        resolve(num1+num2)
    })                                      //resolve (success state) and reject
}

function multiply(num1,num2){
    return  new Promise ((resolve,reject)=>{
        if(num1==0){
            reject('Error')
        }
        resolve(num1*num2)
    })                                      //resolve (success state) and reject
}

function div(num1,num2){
    return  new Promise ((resolve,reject)=>{
        if(num2==0){
            reject('Error1')
        }
        resolve(num1/num2)
    })                                      //resolve (success state) and reject
}


add(10,20).then((sum)=>{
    console.log(sum)
    return multiply(sum,sum)
}).then((product)=>{
    console.log(product)
    return div(product,10)
}).then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})