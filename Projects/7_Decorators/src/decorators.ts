function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    console.log('logger decorator');
    console.log(target);
    console.log(ctx);

    return class extends target {
        constructor(...args: any[]) {
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    };
}

@logger
class Person {
    name = 'Arjun';

    greet() {
        console.log("Hi, I am " + this.name);
    }
}

console.log(new Person());