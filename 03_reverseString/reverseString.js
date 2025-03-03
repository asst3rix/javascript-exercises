const reverseString = function(expression) 
{
    let result = "";
    for (let i = expression.length - 1; i >= 0; i--)
    {
        result += expression.at(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
