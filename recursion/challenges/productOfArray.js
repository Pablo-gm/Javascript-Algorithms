/*
<p>Write a function called&nbsp;<code>productOfArray</code>&nbsp;which takes in an array of numbers 
and returns the product of them all.</p>
*/

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    let product;

    function productOfArrayR(arr) {
        if( arr.length === 1) return arr[0];
        return arr[0] * productOfArrayR(arr.slice(1));
    }

    return productOfArrayR(arr);
}

// instructor
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}