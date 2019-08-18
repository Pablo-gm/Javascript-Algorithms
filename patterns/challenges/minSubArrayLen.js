/*
<p>Write a function called <b>minSubArrayLen</b> which accepts two parameters - an array of positive integers 
and a positive integer. </p>

<p>This function should return the minimal length of a <b>contiguous</b> subarray of which the sum is greater 
than or equal to the integer passed to the function. If there isn't one
, return 0 instead.<br>Examples:</p>
([2,3,1,2,4,3], 7) // 2   4,3 is the smallest
Time O(n)
space O(1)
*/

function minSubArrayLen(array, goal) {
    if ( goal < 0 && array.length < 1) {
        return 0;
    }

    // start, finish indexes and length
    let s = 0;
    let f = 0;
    let l = 0;
    let minL = Infinity;
    let sum = 0;
    let maxIndex = array.length - 1;

    while( f <= maxIndex ) {
        while( f <= maxIndex) {
            sum += array[f];
            f++;
            if(sum >= goal) {
                l = f - s;
                break;
            }
        }
    
        while( s < maxIndex) {
            sum -= array[s];
            s++
            if(sum >= goal) {
                l--;
            } else {
                break;
            }
        }
        if( minL > l) {
            minL = l;
        }
    }

    return minL;
}

// instructor
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }