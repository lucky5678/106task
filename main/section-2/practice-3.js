'use strict';

module.exports = function countSameElements(collection) {
    var result = [];

    for (var i = 0; i < collection.length; i++) {
        result = isExist(collection[i], result);
    }

    return result;
}

function isExist(element, result) {
    var keyCount = get(element);

    for (var i = 0; i < result.length; i++) {
        if ((result[i]).name == keyCount[0]) {

            (result[i]).summary += parseInt(keyCount[1]);
            return result;
        }
    }
    result.push({"name": keyCount[0], "summary": parseInt(keyCount[1])});

    return result;
}

function get(element) {
    var keyCount = [element, 1];

    if (element.split("-").length > 1) {
        keyCount[0] = element.split("-")[0];
        keyCount[1] = element.split("-")[1];
    } else if (element.split(":").length > 1) {
        keyCount[0] = element.split(":")[0];
        keyCount[1] = element.split(":")[1];
    } else if (element.split("[").length > 1) {
        keyCount[0] = element.split("[")[0];
        keyCount[1] = element.split("[")[1].split("]")[0];
    }

    return keyCount;
}

