ec.views.userSummary = (function() {
  var model, fullName, email, subscription, dateJoined, recentPurchases;

  function init(parentNode) {
    var getNode = parentNode.querySelector.bind(parentNode);
    fullName = getNode('.fullname');
    email = getNode('.email');
    subscription = getNode('.subscription');
    dateJoined = getNode('.date-joined');
    recentPurchases = getNode('.purchases');

    ec.util.getJson(function(result) {
      model = new User();
      for (var prop in result) {
        model[prop] = result[prop];
      }
    });

    render(model);

    return model;
  }

  function render(model) {
    fullName.textContent = model.getFullName() || '';
    email.textContent = model.getEmail() || '';
    subscription.textContent = model.getSubscription() || '';
    dateJoined.textContent = model.getDateJoined() || '';
    recentPurchases.textContent = model.getRecentPurchases() || '';
  }

  return {
    init: init,
    render: render
  };
})();
