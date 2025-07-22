function generateError(msg) {
    throw new Error(msg);
}
var user1 = {
    name: "Arjun",
    age: 27
};
var input = "";
var didProvideInput = input || false;
var didProvideInputOrEmpty = input ?? false;
console.log(didProvideInput, didProvideInputOrEmpty);
