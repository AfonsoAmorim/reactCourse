let x = 10
let b = 5
console.log(x*b);
for(let y=1;y<x;y++){
    console.log(y);
}

/*-------------------- arrow function  */
const sum = function sum(a,b){
    return a+b
}

const arrow = (a,b)=> a+b
console.log(sum(20,20));
console.log(arrow(20,30));

const apresentar = (nome) =>{
    if (nome) {
        console.log("Oi " + nome);
    }else{
        console.log("Não é nome");
    }
}

console.log(apresentar("Alon"));
console.log(apresentar());