function User() {
  this.loggedIn = false;
}

// ie. John Doe
User.prototype.getFullName = function() {};

// ie. john.doe@gmail.com
User.prototype.getEmail = function() {};

// ie. Small business
User.prototype.getSubscription = function() {};

// ie. 14 Decemeber 2013
User.prototype.getDateJoined = function() {};

// ie. Festival of Marketing booking, Small business subscription
User.prototype.getRecentPurchases = function() {};
