console.log(1)
console.log(2)
console.log(3)
let num = 1;
const intervalId = setInterval(()=>{
    console.log(num++)
    if(num === 6){
        setInterval(intervalId)
    }
   
},2000)
console.log(5)
console.log(6)
console.log(7)