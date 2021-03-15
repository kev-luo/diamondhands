({
  closeModal: function (component, event, helper) {
    component.set("v.isModalOpen", false);
  },
  handleSubmit: function (component, event, helper) {
    event.preventDefault();

    let fields = event.getParam("fields");
    let today = new Date();
    fields.CreatedOn__c = today.toISOString();
    fields.Market_Price__c = component.get(
      "v.coin.market_data.current_price.usd"
    );
    component.find("orderForm").submit(fields);
    component.set("v.isModalOpen", false);
  },
  handleError: function (component, event, helper) {
    console.log(
      JSON.parse(JSON.stringify(event.getParam("output").fieldErrors))
    );
  }
});
