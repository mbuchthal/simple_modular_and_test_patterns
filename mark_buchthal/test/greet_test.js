
const expect = require('chai').expect;
const speak = require(__dirname + '/../bin/greet');

describe('greet', () => {
  before(() => {
    this.process_backup = process.argv;
    process.argv = [null,null,'Mark'];
  });

  after(() => {
    process.argv = this.process_backup;
  });

  it('should have a name', () => {
    expect(speak()).to.eql('hello Mark');
  });
});

describe('arguments', () => {
  before(() => {
    process.argv = [];
  });

  it('should be undefined', () => {
    expect(speak()).to.eql('hello undefined');
  });
});
