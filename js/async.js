console.log(2);
const timeoutId = setTimeout(()=>{
    console.log('lazgy girl')
},4000)
console.log(4);
console.log(5);
console.log(6);
function doSomething(){
    console.log(3);
}
let num = 0;
const intervalId = setInterval(()=>{
    if(num === 7){
        console.log(++num)
    }
    
},2000)