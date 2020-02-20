const { MainViewModel } = require('../models');
let db = require('../utils/sqlitedb');


exports.get = (r, q) => {
    console.log(Date().toLocaleString().substr(16,8) + " | Get from db");
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
            q.redirect('/');
        }
    });
}

exports.add = (r, q) => {
    console.log(Date().toLocaleString().substr(16,8) + " | Add in db");
    db.getStatuses(+r.body.status).then(status=>{
        r.body.status = status;
        db.addTask(r.body).then(x=>{
            q.redirect('/');
        });
    });
}

exports.update = (r, q) => {
    console.log(Date().toLocaleString().substr(16,8) + " | Update in db");
    r.body.id = +r.body.id;
    db.getStatuses(+r.body.status).then(x => {
        r.body.status = x;
        db.updateTask(r.body).then(y => {
            q.redirect('/');
        });
    });
};

exports.delete = (r, q) => {
    console.log(Date().toLocaleString().substr(16,8) + " | Delete from db");
    db.removeTask(+r.params.id).then(x=>{
        q.redirect('/');
    });
};