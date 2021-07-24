
function User(user,password,name,lastname) {
    this.user = user; this.password = password;
    this.name=name; this.lastname=lastname;
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