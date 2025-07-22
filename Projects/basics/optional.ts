function generateError(msg?: string) {
    throw new Error(msg);
}

// generateError("message");

type User = {
    name: string,
    age: number,
    role?: 'admin' | 'user' | 'guest'
}

const user1: User = {
    name: "Arjun",
    age: 27
}


let input = '';
const didProvideInput = input || false;
console.log(didProvideInput);