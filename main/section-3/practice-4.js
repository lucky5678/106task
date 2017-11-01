'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var array = new Array();
    for (var i = 0; i < collectionA.length; i++) {
        array = isExist1(collectionA[i], array);
    }

    for(var i=0;i<array.length;i++){
        if(isExsit(array[i].key,objectB.value)) {
            array[i].count -=parseInt((array[i].count/3));
        }
    }
    return array;


}
    function isExist1(element, array) {
        var keycount= element.split("-");
        var key =keycount.length==1?element:keycount[0];
        var count = keycount.length==1?1:keycount[1];
        for (var i = 0; i < array.length; i++) {
            if (array[i].key==key) {
                array[i].count +=parseInt(count);
                return array;

            }
        }
        array.push({"key":key,"count":parseInt(count)});
        return array;
    }
        function isExsit(element,array) {
            for(var  i=0;i<array.length;i++){
                if (element==array[i])
                  return true;
        }
}


