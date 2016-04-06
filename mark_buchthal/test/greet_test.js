
const expect = require('chai').expect;
const Greet = require(__dirname + '/../lib/greet');

const myGreet = new Greet('Mark');

describe('greet', () => {
  it('should have a name', () => {
    expect(myGreet.name).to.eql('Mark');
  });

  it('should say hello ' + myGreet.name, () => {
    expect(myGreet.greet()).to.eql('hello Mark');
  });
});

describe('arguments', () => {
  it('should be an array', () => {
    expect(Array.isArray(myGreet.args)).to.eql(true);
  });
});
