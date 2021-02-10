// 1
//console.log(hello);                                   
//let hello = 'world'; 
/*
console.log(hello);
let hello = 'world';

output:
error - can't access hello before initialization
*/

// 2
let needle = 'haystack';
test();
function test(){
    let needle = 'magnet';
    console.log(needle);
}
/*
let needle = 'haystack';
function test(){
    let needle = 'magnet';
    console.log(needle);
}
test();

output:
magnet
*/

// 3
let brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/*
let brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

output:
super cool
*/

// 4
/*let food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    let food = 'gone';
}*/
/*
function eat(){
    food = 'half-chicken';
    console.log(food);
    let food = 'gone';
}
let food = 'chicken';
console.log(food);
eat();

output:
chicken
error - cannot access 'food' before initialization
*/


// 5
/*mean();
console.log(food);
const mean = function() {
    food = "chicken";
    console.log(food);
    let food = "fish";
    console.log(food);
}
console.log(food);*/
/*
mean();
console.log(food);
const mean = function() {
    food = "chicken";
    console.log(food);
    let food = "fish";
    console.log(food);
}
console.log(food);

output:
error - mean is not a function
*/

// 6 
/*console.log(genre);
let genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    let genre = "r&b";
    console.log(genre);
}
console.log(genre); */
/*
function rewind() {
    genre = "rock";
    console.log(genre);
    let genre = "r&b";
    console.log(genre);
}
console.log(genre);
let genre = "disco";
rewind();
console.log(genre); 

output:
error - cannot access genre at initialization
*/

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    let dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); 
/*
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    let dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo); 

output:
san jose
error- cannot access 'dojo' before initilization
*/