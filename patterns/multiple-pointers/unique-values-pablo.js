function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    let i = 0;
    let j = 1;
    
    if ( !arr || arr.length < 2 ) {
      return 0;
    }
    
    while( j < arr.length  ) {
      if ( arr[i] != arr[j] ) {
          i++;
          arr[i] = arr[j];
          j++;
      } else {
        j++;
      }
    }
    
    return i + 1;
  }