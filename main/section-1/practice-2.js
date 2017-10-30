'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var array = new Array();
    for (var i = 0; i < collectionA.length; i++) {
        for (var j = 0; j < collectionB.length; j++) {
            for (var w = 0; w < collectionB[j].length; w++) {
                if (collectionA[i] === collectionB[j][w]) {
                    array.push(collectionA[i])
                }
            }
        }
    }
    return array;
}
