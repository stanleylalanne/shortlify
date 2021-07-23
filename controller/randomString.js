function getRandomString(){
    const alphanum = '5ibWpB1XVLkfNwvrx3aljKczg76uQHeGTt8JCFoU2OZMIDP4SsymqndYR9hA0E';
    const size = alphanum.length;

    function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }

    var str = alphanum[getRandomInt(size)] + alphanum[getRandomInt(size)] + alphanum[getRandomInt(size)] + alphanum[getRandomInt(size)] + alphanum[getRandomInt(size)] + alphanum[getRandomInt(size)];
    return str;
}

module.exports = getRandomString;