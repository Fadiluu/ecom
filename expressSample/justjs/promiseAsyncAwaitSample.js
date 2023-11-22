const Promise = require('promise')


function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Fadil')
        },3000)
    })
}

function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('123456789')
        },2000)
    })
}
// Promise.all([getName(),getMobile()]).then((result)=>{
//    console.log (result)
// })


async function getUser(){
    let name = await getName()
    console.log(name)

    let mobile = await getMobile()
    console.log(mobile)
}

getUser()