
const expect = require('chai').expect;
const Greet = require(__dirname + '/../lib/greet');

const greet = new Greet('Mark');

describe('greet', () => {
  it('should have a name', () => {
    expect(greet.name).to.eql('Mark');
  });

  it('should say hello ' + greet.name, () => {
    expect(greet.hello()).to.eql('hello Mark');
  });
});

describe('arguments', () => {
  it('should be an array', () => {
    expect(Array.isArray(greet.args)).to.eql(true);
  })
})
