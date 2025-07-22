let userRole = 0; // 0 => Admin 1 => User

enum Role {
    Admin, // 0
    Editor, // 1
    Guest // 2
}

let userRole2: Role = 0

let userRole3: ('admin' | 'user' | 'guest') = 'admin';

let possibleResults: [1 | -1, 1 | -1];
possibleResults = [1, -1];

type role = 'admin' | 'user' | 'guest' | 'reader';
function access(role: role) {
    return role;
}

function add(a: number, b: number): number {
    return a + b;
}

function log(message: string): void {
    console.log(message);
}

function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

function performJob(cb: (m: string) => void) {
    //...
    cb('21');
}