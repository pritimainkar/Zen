console.log('Assignment 4');

// Comparing two objects with same properties in different order with Lodash
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

console.log("Comparing two objects with same properties in different order = "+_.isEqual(obj1, obj2));

//Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
//Use the same rest countries and print all countries name, region, sub region and population (sub region and population not given)

//1. create XHR object
let req= new XMLHttpRequest();
//2. open connection - API KEY - 8e6bbd3fe57c93e0e7c9f065966247f0 - changed to http(less secure) - https://restcountries.com/v2/all
req.open('GET','http://api.countrylayer.com/v2/all?access_key=8e6bbd3fe57c93e0e7c9f065966247f0',true);
//3. send request
req.send();    
//4. event handler for onload
req.onload=function(){
        //5. convert to string
        let result=JSON.parse(req.response);

        for(let i=0; i<result.length; i++){
        console.log("FLag: "+result[i].alpha2Code + " Name: "+ result[i].name + " Region: "+ result[i].region);}
}

//https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373
