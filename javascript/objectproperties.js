const obj1={
    name:"shakul",
    age:30,
    gender:"f",
    salary:90000

};
//defineproperty
// Object.defineProperty(obj1,'name',{
//     //value
//     //enumerable
//     //writable

//     enumerable:false
// });
for(let i in obj1){
    console.log(i +":-"+ obj1[i]);
}
const keys=Object.keys(obj1);
console.log(keys);
const val= Object.values(obj1);
console.log(val);
const entry=Object.entries(obj1)
console.log(entry);
//iterating over the object properties using object.entries
Object.entries(obj1).forEach(([key,value]) => {
    console.log(`${key} :-${value}`)
})