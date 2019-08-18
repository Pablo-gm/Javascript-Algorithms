/*
<p>Given an array of integers and a number, write a function called <b>maxSubarraySum</b>, which finds the maximum 
sum of a subarray with the length of the number passed to the function. </p>

<p>Note that a subarray must consist of <i>consecutive</i> elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.</p>
 maxSubarraySum([-3,4,0,-2,6,-1],2) // 5

 Time complexity O(N)
 Space complexity O(1)
*/


function maxSubarraySum(array, number){
    // add whatever parameters you deem necessary - good luck!

    if(number > array.length || number < 1) {
        return null;
    }

    let start = 0;
    let arrayLength = array.length;
    let sum = 0;

    for(let i = 0; i < number; i++) {
      sum += array[i];
    }

    let maxSum = sum;

    for(let finish = number; finish < arrayLength; finish++) {
        sum += array[finish] - array[start];
        start++;
        if( sum > maxSum ) {
            maxSum = sum;
        }
    }
  
    return maxSum;
}

// instructor
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}