let userName = 'Arjun';

console.log(typeof userName);

type UserName = typeof userName;

const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['Arjun', 'Max']
}

type Settings = typeof settings;

function loadData(s: typeof settings) {
    console.log(s);
}


function sum(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b;
}
 
type SumFn = typeof sum;
type SubtractFn = typeof subtract;
 
function performMathAction(cb: SumFn | SubtractFn) {
  cb(10, 20);
}