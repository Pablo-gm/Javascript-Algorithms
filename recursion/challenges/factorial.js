/*
<p>Write a function&nbsp;<strong>factorial</strong> which accepts a number and returns the factorial of that number.
 A&nbsp;factorial is the product of an integer and all the integers below it; e.g.,
  factorial four (&nbsp;<em>4!</em>&nbsp;) is equal to 24, because 4 *&nbsp;3&nbsp;* 2 * 1 equals 24.&nbsp;
  <strong> factorial zero (0!) is always 1.</strong></p>
*/

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// assuming no negative numbers
function factorial(num){
    let result = 1;

    function factorialR(num) {
        if (num === 0) return 1;
        return num * factorialR(num - 1);
    }

   return result * factorialR(num);
}

// instructor
function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
 }