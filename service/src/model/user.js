
function User(userName,password,names,lastnames) {
    this.userName = userName; this.password = password;
    this.names=names; this.lastnames=lastnames;
  }
  
  User.prototype.setPassword = function(password) {
      this.password = password;
  };

/*
  Person.prototype.isAdult = function() {
      return this.age >= 18? true: false;
  };

  Person.prototype.canHaveBankAccounts = function() {
      return this.isAdult()?true:false;
  };
  
  Person.prototype.passportStatus = function(status) {
      this.passport = status;
  };

  Person.prototype.hasPassport = function() {
      return this.passport;
  };
  */

  module.exports = User;