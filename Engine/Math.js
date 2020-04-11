Math.RadToDegree = function(rad = 0) {
    return (rad * 180) / Math.PI;
}
Math.DegreeToRad = function(deg = 0) {
    return (deg * Math.PI) / 180;
}
Math.randomFloat = function (min, max) {
    return Math.random() * (max - min) + min;
}
Math.randomInt = function (min, max) {
    return Math.floor(Math.randomFloat(min, max));
}
