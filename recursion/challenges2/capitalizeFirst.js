function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    let result = [];
    if(arr.length <= 1) {
        result.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    } else {
        result.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
        result = result.concat(capitalizeFirst(arr.slice(1)));
    }
    
    return result;
}
  
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// instructor
function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
}