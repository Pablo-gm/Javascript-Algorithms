/*
<p>Write a recursive function called <strong>nestedEvenSum</strong>. Return the sum of all even numbers 
in an object which may contain nested objects.</p>
*/

function nestedEvenSum (obj) {
    // add whatever parameters you deem necessary - good luck!
    let sum = 0;
    let values = Object.values(obj);
    for(let i = 0; i < values.length; i++){
        if( typeof values[i] === 'object' ) {
            sum += nestedEvenSum (values[i]);
        } else if( Number.isInteger(values[i]) && values[i] % 2 === 0) {
            sum += values[i];
        }
    }
    return sum;
}

// instructor
function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}
  
var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10