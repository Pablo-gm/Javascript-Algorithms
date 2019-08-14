/*
<p>Write a function called <b>sameFrequency. </b>
Given two positive integers, find out if the two numbers have the same frequency of digits.</p>
sameFrequency(123, 321) true
sameFrequency(123, 324) false
*/

function sameFrequency(int1, int2){
    // good luck. Add any arguments you deem necessary.
    let freq1 = {};
    let num1 = '' + int1;
    let num2 = '' + int2;
    let char;
  
    if(num1.length != num2.length){
      return false;
    }
  
    for( let i = 0; i < num1.length ; i++) {
      char = num1[i];
      freq1[char] = (freq1[char] || 0) + 1;
    }
  
    for( let i = 0; i < num2.length ; i++) {
      char = num2[i];
      if(!freq1[char]) {
        return false;
      } else {
        freq1[char] -= 1;
      }
    }

    return true;
}

// Instructor solution
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}