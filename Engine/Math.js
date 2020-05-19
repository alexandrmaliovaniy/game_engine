/**
 * Convert radians to degree
 * @param {Number} rad - radians to convert
 */
Math.RadToDegree = function(rad = 0) {
    return (rad * 180) / Math.PI;
}
/**
 * Convert degree to radians
 * @param {Number} deg - degree
 */
Math.DegreeToRad = function(deg = 0) {
    return (deg * Math.PI) / 180;
}
/**
 * Returns random float from min to max
 * @param {Number} min
 * @param {Number} max
 */
Math.randomFloat = function (min, max) {
    return Math.random() * (max - min) + min;
}
/**
 * Returns random int from min to max
 * @param {Number} min
 * @param {Number} max
 */
Math.randomInt = function (min, max) {
    return Math.floor(Math.randomFloat(min, max));
}
