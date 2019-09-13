// accepts list of numbers
// how many digits greater has
// loop from 0 to largest digits
// In each loop: 
// create bucket for each digit 0-9
// place it on bucket according to current digit
// replace array with content of bucket
// ending the loop, return array
radixS([23,345,5467,12,2345,9852]);

function radixS(arr) {
  let max = mostDigitsBrew(arr);

  for(let i = 0; i < max; i++){
    let buckets = Array.from({length: 10}, (v) => []);
    for(let j = 0; j < arr.length; j++){
      buckets[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = buckets.flat();
  }

  return arr;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// My version
function mostDigitsBrew(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, nums[i]);
  }
  return digitCount(maxDigits);
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])








