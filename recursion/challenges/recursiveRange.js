/*
<p>Write a function called <strong>recursiveRange</strong> which accepts a number and adds up all the numbers
 from 0 to the number passed to the function&nbsp;</p>
*/

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){

   function recursiveRangeR(num) {
        if(num <= 1) return num;
        return num + recursiveRangeR(num - 1)
   }

   return recursiveRangeR(num);
}

// instructor
function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
 }