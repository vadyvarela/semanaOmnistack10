module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.techs.split(',').map(tech => tech.trim());
}