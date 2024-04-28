const sumAll = function(a, b) {
    if ( typeof a !== "number" || typeof b !== "number" ){
        return 'ERROR';
    }
    let sumTotal = 0; 
    let min = Math.min(a,b);
    let max = Math.max(a,b);
 if (min < 0 || max < 0 ) {
        return "ERROR";
    } else { 
            for (let i = min ; i <= max; i++){
                sumTotal += i;
            } return sumTotal;
        } 
}
   

// Do not edit below this line
module.exports = sumAll;
