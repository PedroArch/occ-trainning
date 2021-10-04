module.exports = function(app) {
  app.get('/curencyConverter', require('./curencyConverter'));
};
