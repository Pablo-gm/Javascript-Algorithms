function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
    let result = [];
    if( arr.length === 1) {
        result.push(arr[0].toUpperCase());
    } else {
        result.push(arr[0].toUpperCase());
        result = result.concat(capitalizeWords(arr.slice(1)));
    }

    return result;
}
  
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// instructor
function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
}