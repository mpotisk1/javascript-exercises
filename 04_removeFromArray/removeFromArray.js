 const removeFromArray = function(list, ...rest) {

        let i = 0
        let x = 0
        
        let remove = Array.from(rest);
        let firstArray = list;

        //console.log(remove);
        //console.log(firstArray)

        for(i in remove){

            x = 0;

            for(x in firstArray){

                while(remove[i] === firstArray[x]){

                    firstArray.splice(x, 1);

                    
                }
                x++
            }
            i++;
        }
        console.log(firstArray)
        return firstArray; 
        
};

removeFromArray([1, 2, 2, 3], 2);

// Do not edit below this line
module.exports = removeFromArray;
