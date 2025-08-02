"use strict";
const fileSource = {
    type: 'file',
    path: 'some/path/to/file.csv',
};
const dbSource = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};
function isFile(source) {
    return source.type === 'file';
}
function loadData(source) {
    if (isFile(source)) {
        return;
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
    join() {
    }
}
class Admin {
    constructor(permissions) {
        console.log(permissions);
    }
    scan() {
    }
}
const user = new User('Max');
const admin = new Admin(['ban', 'restore']);
function init(entity) {
    if (entity instanceof User) {
        entity.join();
        return;
    }
    entity.scan();
}
//# sourceMappingURL=guard.js.map