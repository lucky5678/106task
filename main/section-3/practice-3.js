'use strict';


module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result = [];

    statistics(collectionA, result);
    filter(result, objectB);
    return result;
};

function ExistKey(key, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].key == key) {
            return array[i];
        }
    }
    return null;
}
function isExist(element, array) {
    for (var i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return true;
        }
    }

}
function filter(result, objectB) {
    for (var i = 0; i < result.length; i++) {
        if (isExist(result[i].key, objectB.value)) {
            result[i].count -= parseInt((result[i].count / 3));
        }
    }
}
function statistics(collectionA, result) {
    for (var i = 0; i < collectionA.length; i++) {
        var elem = ExistKey(collectionA[i], result);
        if (elem) {
            elem.count++;
        }
        else {
            result.push({"key": collectionA[i], "count": 1});
        }
    }
}

