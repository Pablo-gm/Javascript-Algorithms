/*
<p>Write a function called <b>averagePair.</b> 
Given a sorted array of integers and a target average, determine if there is a pair of values 
in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.</p>
Bonus constrains Time O(N), Space O(1)
averagePair([1,2,3], 2.5) // true
averagePair([1,3,3,5,6,7,10,12,19], 8) // true
*/

function averagePair(array, avg){
    // add whatever parameters you deem necessary - good luck!
    if(array.length < 2) {
        return false;
    }

    let start = 0;
    let finish = array.length - 1;
    let pairAvg;
    while(start < finish) {
        pairAvg = (array[start] + array[finish]) / 2;
        if( avg === pairAvg ) {
            return true;
        } else if(pairAvg > avg) {
            finish--;
        } else {
            start++;
        }
    }

    return false;
}

// Instructor solution
function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
}