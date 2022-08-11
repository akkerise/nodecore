// list job
const jobList = ['FE', 'BE'];

// function
var strategies = {
  verifyRole: function (value) {
    return value === 'admin';
  },
  verifyGrade: function (value) {
    return value >= 1;
  },
  verifyJob: function (value) {
    return jobList.includes(value);
  },
  verifyEatType: function (value) {
    return value === 'eat Dog';
  }
}

var Validator = function () {
  this.cache = [];

  this.add = function (value, method) {
    this.cache.push(function () {
      return strategies[method](value);
    });
  };

  this.verify = function () {
    return this.cache.every(fn => fn());
  };
}

var compose = function () {
  var validator = new Validator();
  const data = {
    role: 'admin',
    grade: 3
  };
  validator.add(data.role, 'verifyRole');
  validator.add(data.grade, 'verifyGrade');
  return validator.verify();
}
