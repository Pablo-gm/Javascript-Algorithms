/*
<p>Write a recursive function called <strong>someRecursive</strong> which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback.
 Otherwise it returns false.</p>
*/

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// assuming arr has something
function someRecursive(arr, call){
    // add whatever parameters you deem necessary - good luck!
    if( arr.length ===  1) return call(arr[0]);
    return call(arr[0]) || someRecursive(arr.slice(1), call);
}

// Instructor
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}