var fetch = require('node-fetch');

module.exports = function (request, response) {
    try { 
        var apiKey = '3d591e617b58e7b304f8';
        var originalCurency = request.query.original;
        var newCurency = request.query.new;
        var url = `https://free.currconv.com/api/v7/convert?q=${originalCurency}_${newCurency}&compact=ultra&apiKey=${apiKey}`;

        fetch(url)
        .then(result => result.json())
        .then(json => response.send(json))
        .catch(error => response.send({
            error: true, 
            message: `fetching error. ${error}`
        }));
    }catch(e) {
        response.send({
            error: true, 
            message: `function error. ${e}`
        });
    }
};