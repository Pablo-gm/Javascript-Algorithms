/*
<p>Write a recursive function called <strong>flatten</strong> which accepts an array of arrays and 
returns a new array with all values flattened.</p>
*/

function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    let result = [];

    function flattenR(arr) {
        for(let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                result.concat(flattenR(arr[i]));
            } else {
                result.push(arr[i]);
            }
        }
    }

    flattenR(arr);

    return result;
}

// maybe
function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

// instructor
function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }