const URL = "https://restcountries.com/v3.1/all"

const myReq = new XMLHttpRequest();

myReq.addEventListener("load", function () {
    
    const obj = JSON.parse(this.response)
    for (let v of obj){
        
        console.log(v.flags.svg)
    }
});
myReq.open("GET", URL);
myReq.send()