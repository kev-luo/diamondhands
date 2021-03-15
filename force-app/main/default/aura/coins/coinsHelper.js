({
  searchCoin: function (component) {
    let searchValue = component.get("v.coin");
    let action = component.get("c.makeGetCallout");
    action.setParams({
      url: `https://api.coingecko.com/api/v3/coins/${searchValue}`
    });
    action.setCallback(this, function (response) {
      component.set("v.searchResult", response.getReturnValue());
    });
    $A.enqueueAction(action);
  },
  retrievePortfolios: function (component) {
    let action = component.get("c.retrievePortfolios");
    action.setCallback(this, function (response) {
      component.set("v.portfolios", response.getReturnValue()[0]);
      console.log(response.getReturnValue()[0]);
    });
    $A.enqueueAction(action);
  }
});
