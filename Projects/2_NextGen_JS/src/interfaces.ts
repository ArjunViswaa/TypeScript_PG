// Interfaces vs Type Aliases - Declaration merging
interface Authenticatable {
    email: string;
    password: string;
    login(email: string): void;
    logout(email: string): void;
}

interface Authenticatable {
    role: string;
}

let user: Authenticatable;
user = {
    email: 'arjunviswaa@gmail.com',
    password: '123',
    login(email) {
        console.log(email);
    },
    logout(email) {
        console.log(email);
    },
    role: 'developer'
}

// using in classes
class AuthenticatableUser implements Authenticatable {
    constructor(public email: string, public password: string, public role: string) {}

    login() {}
    logout() {}
}

// extending interfaces...
interface AuthenticatableAdmin extends Authenticatable {
    hasAdminAccess(email: string): boolean;
}