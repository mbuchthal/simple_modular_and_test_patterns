
const args = process.argv;

const Greet = module.exports = function(name) {
  this.args = args,
  this.name = name;
};

Greet.prototype.greet = function () {
  return 'hello ' + this.name;
};

if (args[2]) {
  console.log('hello ' + args[2]);
}
