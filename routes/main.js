const { MainViewModel } = require('../models')

module.exports = function(r, q) {
    let model = new MainViewModel('TODO LIST', db.getTasks(), db.getStatuses());
    q.render('index', model);
}