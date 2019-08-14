function maxSubArray(arr, n) {
    if( arr.length < n) {
      return null;
    }
    let sum = 0;
    let temp = 0;
    
    for(let i = 0; i < n; i++) {
      temp += arr[i];
    }
    
    sum = temp;
    
    for(let i = n; i < arr.length; i++){
      temp = temp + arr[i] - arr[i - n];
      if(temp > sum) {
        sum = temp;
      }
    }
    return sum;
  }
  
  maxSubArray([2,6,9,2,1,8,5,6,3], 3);