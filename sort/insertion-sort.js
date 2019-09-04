// My version
function insertionS(arr) {
    let toInsert;
    for(var i = 1; i < arr.length; i++){
        toInsert = arr[i];
        for(var j = i - 1; j >= 0; j--){
            if(toInsert < arr[j] ){
                arr[j+1] = arr[j];
            } else {
                break;
            }
        }
        // because j went to -1
        arr[j+1] = toInsert;
    }

    return arr;
}



// instructor
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])