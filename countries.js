const URL = "https://restcountries.com/v3.1/all"

const myReq = new XMLHttpRequest();

myReq.addEventListener("load", function () {
    
    const obj = JSON.parse(this.response)
    for (let v of obj){
        console.log("Countrie Name:",v.name.common)
        console.log("Region Name:",v.region)
        console.log("SubRegion Name:",v.subregion)
        console.log("Population:",v.population)
    }
});
myReq.open("GET", URL);
myReq.send()