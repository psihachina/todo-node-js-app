const { MainViewModel } = require('../models');
let db = require('../utils/sqlitedb');


exports.get = (r, q) => {
    db.addLog("Get from db", Date().toLocaleString().substr(16,8));
    db.getTasks(+r.params.id).then(item => {
        if(item) {
            console.log(item);
            db.getTasks().then(tasks => {
                db.getStatuses().then(statuses => {
                    let model = new MainViewModel("TODO LIST" , tasks, statuses, item);
                    q.render('index', model);
                });
            });
        } else {
            q.redirect('../');
        }
    });
}

exports.add = (r, q) => {
    db.addLog("Add in db", Date().toLocaleString().substr(16,8));
    db.getStatuses(+r.body.status).then(status=>{
        r.body.status = status;
        db.addTask(r.body).then(x=>{
            q.redirect('../');
        });
    });
}

exports.update = (r, q) => {
    db.addLog("Update in db", Date().toLocaleString().substr(16,8));
    r.body.id = +r.body.id;
    db.getStatuses(+r.body.status).then(x => {
        r.body.status = x;
        db.updateTask(r.body).then(y => {
            q.redirect('../');
        });
    });
};

exports.delete = (r, q) => {
    db.addLog("Delete from db", Date().toLocaleString().substr(16,8));
    db.removeTask(+r.params.id).then(x=>{
        q.redirect('../');
    });
};