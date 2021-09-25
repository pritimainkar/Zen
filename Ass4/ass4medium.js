console.log('Assignment 4 - Medium');

// Declare four variables without assigning values and print them in console

let a,b;
var c,d;

console.log(a+" "+b+" "+c+" "+d);

// How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar = "+ myvar);
// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let f1Name="Priti";
let l1Name="Mainkar";
let Married1="False";
let Country1="India";
let Age1=22;
// 4. Declare variables to store your first name, last name, marital status, country and age in a single line
let fName="Priti", Name="Mainkar", Married="False",Country="India", Age=22;
// 5. Declare variables and assign string, boolean, undefined and null data types
let s="", t="true",u, n=null;
console.log(s,t,n,u);

// I am 25 years old. 
// You are 30 years old.
// 6. Convert the string to integer
// parseInt()
// Number()
// Plus sign(+)
var an=20;
let aint=parseInt(an);
let anum=Number(an);
let nplus=(+an);

console.log(aint+""+anum+""+nplus);

// 7. Write 6 statement which provide truthy & falsey values.
let ba=10==5, bb=1==2, bc=4==4, bd= "ab"=="ab",be=0=="a", bf="ab"=="aw";

console.log(ba,bb,bc,bd,be,bf);

// Square of a number
let sq=function(n){
    console.log(n*n);
}
sq(2);
// Swapping 2 numbers
let swap=function(n,m){
    let k=n;
    n=m;
    m=k;
    console.log(n,m);
}
swap(1,2)
// Addition of 3 numbers
let add=function(n,m,o){
    console.log(n+m+o);
}
add(2,3,1);
// Celsius to Fahrenheit conversion
let ctof=function(n){
    let f=((n*(9/5))+32)
    console.log(f);
}
ctof(2);
// Meter to miles
let mtomil=function(n){
    let f=n/1600;
    console.log(f);
}
mtomil(1600);
// Pounds to kg
let ptkg = function(n){
    console.log(n / 2.205);
}
ptkg(4.41);
// Calculate Batting Average
let bat=function(r,o){

    console.log(r/o);
}
bat(1600,2);
// Calculate five test scores and print their average
let average = function(a,b,c,d,e){
    console.log((a+b+c+d+e)/5);
}
average(50,50,50,40,50);
// Power of any number x ^ y.
let power = function(x,y){
    
    console.log("power="+Math.pow(x,y));
}
power(2,4)
// Calculate Simple Interest
let SI=function(p,r,t){
    console.log((p*r*t)/100);
}
SI(1,1,100);
// Calculate area of an equilateral triangle
let ae=function(s){
  let a=s*s*Math.sqrt(3);
  console.log(a/4);
}
ae(4);
// Area Of Isosceles Triangle
let ai=function(h,b){
    let a=b*h;
    console.log(a/2);
  }
  ai(4,2);
// Volume Of Sphere
let vs=function(r){
    let a=r*r*r*4*(22/7);
    console.log(a/3);
  }
  vs(21);
// Volume Of Prism
let vp=function(h,b){
    let a=b*h;
    console.log(a);
  }
  vp(4,2);
// Find area of a triangle.
let at=function(h,b){
    let a=b*h;
    console.log(a/2);
  }
  at(4,2);
// Give the Actual cost and Sold cost, Calculate Discount Of Product
let disc=(a,s)=>{
let d=(s-a)/a;
console.log(d);
}
disc(10,20);
// Given their radius of a circle and find its diameter, circumference and area.
let circle=(r)=>{
    const pi=(22/7);
    console.log("diameter="+(2*r)+"circ="+(2*pi*r)+"area="+(pi*r*r));
}
circle(7);
// Given two numbers and perform all arithmetic operations.
// Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
let ast=()=>{
    console.log("*****");
    console.log("*****");
    console.log("*****");
    console.log("*****");
    console.log("*****");
}
// Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
let bill=()=>{
    console.log(10*100*12*30);
}
bill();
// Program To Calculate CGPA
let cgpa=(Ci,GPi)=>{
    console.log((Ci * GPi)/Ci);
}
cgpa(20,20)