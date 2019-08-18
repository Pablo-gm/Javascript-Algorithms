/*
Write a function called<strong> isSubsequence</strong> which takes in two strings and checks whether 
the characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string appear 
somewhere in the second string, <strong>without their order changing.</strong>
isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'abaracadabra') // true
isSubsequence('abc', 'acb') // false (order matters)
Solution at least
Time O(N + M)
Space O(1)
*/

function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    // assuming null or empty strings are true..
    if(str1.length > str2.length) {
        return false;
    }

    let index1 = 0;
    let index2 = 0;
    let char1 = str1[index1];
    while( index2 < str2.length) {
        if( char1 === str2[index2] ) {
            index1++;
            index2++;
            if (index1 === str1.length){
                return true;
            }
            char1 = str1[index1];
        } else {
            index2++;
        }
    }

    return false;
}

// Instructor - iterative
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
}

// Instructor - recursive but not Space O(1)
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
}