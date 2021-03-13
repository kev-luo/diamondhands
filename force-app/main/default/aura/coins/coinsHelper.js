({
    getCoinList : function(component) {
      let action = component.get("c.makeGetCallout");
      action.setCallback(this, function(response) {
        console.log(response.getState());
        console.log(response.getReturnValue()[0].name);
        let state = response.getState();
        
      })
      $A.enqueueAction(action);
    }
})
