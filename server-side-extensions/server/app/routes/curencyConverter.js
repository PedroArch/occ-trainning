var https = require('https');

module.exports = function (request, response) {
    try { 

        var originalCurrency = request.query.original;
        var newCurrency = request.query.new;
        var amount = request.query.amount;
       

        function convertCurrency(amount, fromCurrency, toCurrency, cb) {
            var apiKey = '3d591e617b58e7b304f8';
          
            fromCurrency = encodeURIComponent(fromCurrency);
            toCurrency = encodeURIComponent(toCurrency);
            var query = fromCurrency + '_' + toCurrency;
          
            var url = 'https://api.currconv.com/api/v7/convert?q='
                      + query + '&compact=ultra&apiKey=' + apiKey;
          
            https.get(url, function(res){
                var body = '';
          
                res.on('data', function(chunk){
                    body += chunk;
                });
          
                res.on('end', function(){
                    try {
                      var jsonObj = JSON.parse(body);
          
                      var val = jsonObj[query];
                      if (val) {
                        var total = val * amount;
                        cb(null, Math.round(total * 100) / 100);
                      } else {
                        var err = new Error("Value not found for " + query);
                        console.log(err);
                        cb(err);
                      }
                    } catch(e) {
                      console.log("Parse error: ", e);
                      cb(e);
                    }
                });
            }).on('error', function(e){
                  console.log("Got an error: ", e);
                  cb(e);
            });
          }

          convertCurrency(
              amount, 
              originalCurrency, 
              newCurrency, 
              function(err) { 
                  response.send({
                      msg: 'Fail to convert', err
                })
            });


    } catch(err) {
        response.send({
            error: true, 
            message: `Cannot fetch data. ${err}`
        });
    }
};