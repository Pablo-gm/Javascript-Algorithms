/*
<p>Write a function called <strong>binarySearch</strong> which accepts a <strong>sorted</strong> array and a value
 and returns the index at which the value exists. Otherwise, return -1. </p>

<p>This algorithm should be more efficient than linearSearch - you can read how to implement it here - 
https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here
 - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/</p>


myString.replace(/<[^>]*>?/gm, '');


Examples:

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,   40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
binarySearch([  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,   40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
binarySearch([  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,   40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1"
*/

function binarySearch(arr, val){
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((right - left)/2);

    while(left <= right) {

        // we find solution
        if( val === arr[left]) {
            return left;
        } else if ( val === arr[right]) {
            return right;
        } else if ( val === arr[mid]) {
            return mid;
        }

        // no solution possible
        if(val < arr[left] || val > arr[right]) {
            break;
        // we change pointers
        } else if ( val > arr[mid]) {
            left = mid + 1;
            right--;
            mid = Math.floor((right - left)/2);
        } else {
            left--;
            right = mid - 1;
            mid = Math.floor((right - left)/2);
        }
    }
    return -1;
}

// better solution
function binarySearch(arr, val){
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((right + left)/2);

    while(left <= right) {
        if( val === arr[mid]) {
            return mid;
        } else if( val > arr[mid]){
            left = mid + 1;
            mid = Math.floor((right + left)/2);
        } else {
            right = mid - 1;
            mid = Math.floor((right + left)/2);
        }
    }

    if(val === arr[mid]) {
        return mid;
    }
    return -1;
}