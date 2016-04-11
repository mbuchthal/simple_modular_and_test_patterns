
const args = process.argv;
const speak = module.exports = exports = {};

speak.greet = function (name) {
  return 'hello ' + name;
};

if (args[2]) {
  console.log('hello ' + args[2]);
}
