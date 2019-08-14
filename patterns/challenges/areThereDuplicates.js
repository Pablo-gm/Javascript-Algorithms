/*
<p>Implement a function called, <strong>areThereDuplicates</strong> which accepts a <strong>
variable number of arguments, </strong>and<em> </em>checks whether there are any duplicates 
among the arguments passed in.&nbsp; You can solve this using the frequency counter pattern
 OR the multiple pointers pattern.</p>

*/

// multiple pointers
function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    if( arguments.length < 2){
        return false;
    }
    let i = 0;
    let j = arguments.length - 1;
    while(i != j) {
        if(arguments[i] === arguments[j]) {
            return true;
        } else if ( i+1 == j) {
            j--;
            i = 0;
        } else {
            i++;
        }
    }
    return false;
}

// Multiple pointers instructor
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

// frequency
function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    if( arguments.length < 2){
        return false;
    }

    let freq = {};
    let val;
    for(let i = 0; i < arguments.length; i++) {
        val = arguments[i];
        if(freq[val]) {
            return true;
        } else {
            freq[val] = 1;
        }
    }

    return false;
}

// frequency instructor
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }