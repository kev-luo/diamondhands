({
  doInit: function (component, event, helper) {
    component.set("v.columns", [
      { label: "Id", fieldName: "id", type: "text" },
      { label: "Symbol", fieldName: "symbol", type: "text" },
      { label: "Name", fieldName: "name", type: "text" }
    ]);
    helper.getCoinList(component);
  }
});
