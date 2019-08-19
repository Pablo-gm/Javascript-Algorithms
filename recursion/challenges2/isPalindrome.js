/*
<p>Write a recursive function called <strong>isPalindrome</strong> which returns true if the string passed 
to it is a palindrome (reads the same forward and backward). Otherwise it returns false.</p>
*/

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    if(str.length === 0) return true;
    return (str[0] === str[str.length - 1]) && (isPalindrome(str.slice(1,-1)));
}

// Instructor
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}