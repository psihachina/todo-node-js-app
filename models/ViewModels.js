exports.Task = class {

    constructor(title, start, end, status) {
        this.title = title || '';
        this.startDate = start || new Date();
        this.endDate = end || new Date();
        this.status = status || '';
    }
}

exports.MainViewModel = class {
    constructor(title, tasks) {
        this.title = title || '';
        this.tasks = tasks || [];
    }
}