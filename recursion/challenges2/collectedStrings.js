/*
<p>Write a function called&nbsp;<code>collectStrings</code>&nbsp;which accepts an object and returns 
an array of all the values in the object that have a typeof string</p>

*/

// Funny cause, this and StringifyNumbers took the alternative of instructor
function collectStrings(obj) {
    let result = [];
    for(var key in obj) {
        if( typeof obj[key] === 'object') {
            result = result.concat(collectStrings(obj[key]));
        } else if( typeof obj[key] === 'string'){
            result.push(obj[key]);
        }
    }

    return result;
}

// instructor
function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])