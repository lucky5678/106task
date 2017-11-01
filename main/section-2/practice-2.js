'use strict';

module.exports = function countSameElements(collection) {
    var array = new Array();
    for (var i = 0; i < collection.length; i++) {
            array =isExist(collection[i],array);
    }
    return array;

    function isExist(element, array) {
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


}

//     var result = [];
//
//     collection.forEach((element, index) => {
//         var item = element.split("-");
//         if (item.length > 1) {
//             collection.splice(index, 1);
//             for (var i = 0; i < item[1]; i++) {
//                 collection.push(item[0]);
//             }
//         }
//     });
//
//     collection.forEach(item => {
//         if (!result.find(element => element.key === item))
//             result.push({key: item, count: collection.filter(element => element === item).length});
//     });
//
//     return result;
// }


