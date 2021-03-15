({
  doInit: function (component, event, helper) {
    helper.retrievePortfolios(component);
  },
  handleSearch: function (component, event, helper) {
    helper.searchCoin(component);
  }
});
