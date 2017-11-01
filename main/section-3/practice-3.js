'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var result =new Array();
  for(var i=0;i<collectionA.length;i++){
      var elem = ExsitKey(collectionA[i],result);

      if(elem){
          elem.count++;
      }
      else{
          result.push({"key": collectionA[i], "count": 1});
      }

      }
      for (var i=0;i<result.length;i++){
         if(isExsit(result[i].key,objectB.value)){
           result[i].count -=parseInt((result[i].count/3));
         }
      }
      return result;
  }

  function ExsitKey(key,array) {
    for(var i=0;i<array.length;i++){
      if(array[i].key==key){
       return array[i];
      }
  }
  return null;
}
function isExsit(element,array) {
    for(var i=0;i<array.length;i++){
      if (element==array[i]){
        return true;
      }
    }


}

