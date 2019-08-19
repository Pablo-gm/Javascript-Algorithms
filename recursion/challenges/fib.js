/*
<p>Write a recursive function called <strong>fib</strong> which accepts a number and returns the 
<em>n</em>th number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers
 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of
  the previous two numbers.</p>
*/

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// 1 2 3 4 5 - index
// 1 1 2 3 5 8 - fib sequence
// assuming no 0 for index

function fib(index){
    // add whatever parameters you deem necessary - good luck! 
    function fibR(index) {
        if( index === 1) return index;
        if( index < 1) return 0;
        return fibR(index - 1) + fibR(index - 2)
    }

    return fibR(index);
}

// instructor
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}