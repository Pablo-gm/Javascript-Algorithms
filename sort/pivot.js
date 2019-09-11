/*
Example: pivot([5,1,9,3,7,4,10])
Returns "3" and change arr to [4, 1, 3, 5, 7, 9, 10]
*/
// My version
function pivotArr(arr, start=0, end=arr.length+1) {
  var pivot = arr[start];
  var smallers = 0;
  var biggers = 0;
  const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  };

  for(var i = start + 1; i < end; i++){
    if(arr[i] < pivot){
      smallers++;
      if(biggers > 0) {
        swap(arr, start + smallers, start + smallers + biggers );
      }
    } else {
      biggers++;
    }
  }
  
  swap(arr, start, start + smallers );

  return pivot;
}


// First Version
function pivot(arr, start=0, end=arr.length+1){
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4,8,2,1,5,7,6,3])


