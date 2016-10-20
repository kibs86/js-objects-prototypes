'use strict';

const chai = require('chai');
const expect = chai.expect;

const Hero = require('../lib/hero');

describe('Storm', function () {

  let storm = new Hero('Ororo Iquadi T\'Challa',
    'Storm', 'weather control');

  describe('super power', function () {

    it('weather control', function () {
      expect(storm._power).to.equal('weather control');
    });

  });

});
