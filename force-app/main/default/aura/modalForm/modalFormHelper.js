({
  setMarketPrice: function (component, event) {
    let fields = event.getParam("fields");
    fields.Market_Price__c = component.get(
      "v.coin.market_data.current_price.usd"
    );
    component.find("orderForm").submit(fields);
    component.set("v.isModalOpen", false);
  }
});
