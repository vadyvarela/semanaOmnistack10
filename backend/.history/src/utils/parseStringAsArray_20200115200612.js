module.exports = function parseStringAsArray(arrayAsString) {
    return techs.split(',').map(tech => tech.trim());
}