'use strict';

module.exports = function countSameElements(collection) {
    var result =new Array();

    for(var i  = 0 ; i < collection.length;i++) {

        var elem = existKey(collection[i],result);

        if(elem){
            elem.count++;
        }else{
            result.push({"key": collection[i], "count": 1});
        }
    }

  return result;
}

function existKey(key,array) {
    for(var i = 0; i < array.length;i++) {
        if(array[i].key == key) {
            return array[i];
        }
    }

    return null;
}