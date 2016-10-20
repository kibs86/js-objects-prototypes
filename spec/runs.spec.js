'use strict';

const chai = require('chai');
const expect = chai.expect;

const runs = require('../lib/runs');

describe('runs', function () {

  const user = new runs.User('Person McFace', 'wdi@personmcface.com');
  user.runs.push(new runs.Run('2015-05-25 15:00', 1200, 600));
  user.runs.push(new runs.Run('2015-05-25 15:00', 1400, 800));

  describe('user', function () {
    it('has the correct name and e-mail address', function () {
      expect(user.name).to.equal('Person McFace');
      expect(user.email).to.equal('wdi@personmcface.com');
    });
  });

  describe('length', function () {
    it('is correct', function () {
      expect(user.runs.length).to.equal(2);
    });
  });

  describe('total distance', function () {

    it('has the correct length', function () {
      expect(user.totalDistance()).to.equal(2600);
    });

  });

  describe('longest run', function () {

    it('has the correct length', function () {
      expect(user.longestRun()).to.equal(1400);
    });

  });

  describe('average speed', function () {

    it('has the correct value', function () {
      expect(user.averageSpeed().toLocaleString('en-US')).to.equal('1.857');
    });

  });

});
