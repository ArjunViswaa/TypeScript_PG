// Index types
type DataStore = {
    [prop: string]: number | boolean;
}

let store: DataStore = {};
store.id = 1;
store.isAdmin = false;
// store.name = 'namer'; // error

// as const
let roles = ['admin', 'guest', 'editor'] as const;
// roles.push("employee") // Error as roles is readonly

// Does the same work as Instance Types
let someObj: Record<string, number | boolean>;


// satisfies...
const dataEntries = {
    entry1: 0.51,
    entry2: -1.23
} satisfies Record<string, number>;

// ...
// dataEntries.entry3