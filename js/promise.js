// const { reject } = require("async");

const getData = new Promise((resolve,reject)=>{
    // resolve(98794382);
    reject("not a found")
})
getData
.then(data => console.error(data))
. catch(err => console.log('err',err))