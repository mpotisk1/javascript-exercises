const removeFromArray = function(list, remove) {

let i = 0
let x = 0

let = removeArray = Array.from(remove);
for(let x in removeArray){

for (let i in list){
    if(removeArray[x] === list[i]){
        list.splice(i, 1);
        i++
    }
    else{i++};
}
x++;
}


console.log(list);
console.log(remove);
console.log(removeArray);
return list

};

removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
//module.exports = removeFromArray;
