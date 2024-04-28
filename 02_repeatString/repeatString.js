const repeatedString = 
function(abc, num) {
    let repeatsString = ""
if (num < 0) {
    return "ERROR";
}

while (num > 0) {
    repeatsString = repeatsString + abc;
    num--;
}
return repeatsString
}; 


// Do not edit below this line
module.exports = repeatedString;
