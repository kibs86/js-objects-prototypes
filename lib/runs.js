'use strict';

const User = function (name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

const Run = function (date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

User.prototype.totalDistance = function () {
  let runs = this.runs;
  let result = 0;
  for (let i = 0; i < runs.length; i++) {
    result += runs[i].distance;
  }

  return result;
};

User.prototype.longestRun = function () {
  let runs = this.runs;
  let result = runs[0].distance;
  for (let i = 1; i < runs.length; i++) {
    if (runs[i].distance > result) {
      result = runs[i].distance;
    }
  }

  return result;
};

User.prototype.averageSpeed = function () {
  let runs = this.runs;
  let totalTime = 0;
  for (let i = 0; i < runs.length; i++) {
    totalTime += runs[i].timeTaken;
  }

  return this.totalDistance() / totalTime;
};

module.exports = {
  Run,
  User,
};

// In node, use like so:
//
//    const runTracker = require('./lib/runs');
//    let mcFace = new runTracker.User('Person McFace', 'wdi@personmcface.com');
