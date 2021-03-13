({
  getCoinList: function (component) {
    let action = component.get("c.makeGetCallout");
    action.setCallback(this, function (response) {
      component.set("v.coins", response.getReturnValue()[0]);
    });
    $A.enqueueAction(action);
  }
});
