/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== 'function') {
        return false;
    }
    let curr = Object.getPrototypeOf(Object(obj));
    while (curr !== null) {
        if (curr === classFunction.prototype) {
            return true;
        }
        curr = Object.getPrototypeOf(curr);
    }

    return false;
};
