/*
Given two string, determine if the second is an anagram of the first.
cinema - iceman  (same letters, just different order)
*/

function validAnagram(str1 , str2){
    // add whatever parameters you deem necessary - good luck!
    let frequency1 = {};
    let frequency2 = {};

    for(let i = 0; i < str1.length; i++) {
        let char = str1.charAt(i);
        frequency1[char] = (frequency1[char] || 0) + 1;
    }

    for(let i = 0; i < str2.length; i++) {
        let char = str2.charAt(i);
        frequency2[char] = (frequency2[char] || 0) + 1;
    }

    for(let val in frequency1) {
        if( frequency1[val] !== frequency2[val]){
            return false;
        }
    }

    return true;
}