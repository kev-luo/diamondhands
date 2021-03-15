({
  doInit: function (component, event, helper) {
    component.set("v.columns", [
      { label: "Name", fieldName: "Name__c", type: "text" },
      {
        label: "Order Price",
        fieldName: "Market_Price__c",
        type: "currency",
        typeAttributes: { currencyCode: "USD" },
        cellAttributes: { alignment: "center" }
      },
      {
        label: "Order Quantity",
        fieldName: "Quantity__c",
        type: "number",
        cellAttributes: { alignment: "center" }
      },
      {
        label: "Order Date",
        fieldName: "CreatedDate",
        type: "date",
        cellAttributes: { alignment: "center" }
      }
    ]);
  }
});
