/*

Function that convert each numbe in string

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/


function stringifyNumbers(obj) {
    let result = {};
    function stringifyNumbersR(objR) {
        for(var key in objR) {
            if(typeof objR[key] === 'object' && !Array.isArray(objR[key])) {
                result[key] = stringifyNumbers(objR[key]);
            } else if(typeof objR[key] === 'number') {
                result[key] = objR[key].toString();
            } else {
                result[key] = objR[key];
            }
        }
    }
    stringifyNumbersR(obj);
    return result;
}

// instructor
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
}