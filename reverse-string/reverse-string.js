var reverseString = function(string)
{
    var reversedString = "";
    for (var i = string.length - 1; i >= 0; i--)
    {
        reversedString += string[i];
    }
    return reversedString;
}

export {reverseString};