const removeFromArray = function(array, ...args) {
   let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let n = array[i] ;
        if (args.includes(n) ) {
            continue;
        } else 
        {newArray.push(n)
        }
}   
return newArray; 
};
   // array.splice(2, 1);
//return  array; }
// npm test removeFromArray.spec.js

// Do not edit below this line
module.exports = removeFromArray;
