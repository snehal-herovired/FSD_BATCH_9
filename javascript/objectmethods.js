// const calculator={
//     add: function (a,b) {
//         return a+b;
//     },
//     subtract: function(a,b){
//         return a-b
//     }
// }
const calculator={
    add(a,b){
        return a+b
    },
    subtract(a,b){
        return a-b
    }
}
console.log(calculator.add(6,9));
console.log(calculator.subtract(7,3));