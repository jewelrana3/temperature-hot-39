// const { reject } = require("async");

const getData = new Promise((resolve,reject)=>{
    const num = Math.random()*10;
    console.log(num)
    if(num < 5){
        resolve(98794382);
    }else{
        reject("not a found")
    }
})
getData
.then(data => console.error(data))
. catch(err => console.log('err',err))