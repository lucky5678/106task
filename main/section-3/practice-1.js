'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
      for(var i=0;i<collectionA.length;i++){
        if(isExsit(collectionA[i].key,objectB.value)) {
          collectionA[i].count -=1;
        }
      }
        return collectionA;
    }
    function isExsit(element,array) {
        for(var  i=0;i<array.length;i++){
          if (element==array[i])
              return true;
        }
    }

