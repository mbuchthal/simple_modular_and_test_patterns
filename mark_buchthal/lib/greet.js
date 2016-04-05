
const args = process.argv;

const Greet = module.exports = function(name) {
  this.args = args,
  this.name = process.argv[2] || name
};

Greet.prototype.hello = function () {
  return 'hello ' + this.name;
}

if (args[2]) {
  console.log('hello ' + args[2]);
}
