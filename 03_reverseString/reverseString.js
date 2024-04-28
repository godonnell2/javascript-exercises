const reverseString = function(abc) {
    let abcArray = abc.split("");
    let reversedString = ""; 
    for (let i = abc.length-1 ; i >= 0   ; i-- ) {
      reversedString  = reversedString +  abcArray[i];
    }
    return reversedString;
    };

// Do not edit below this line
module.exports = reverseString;
