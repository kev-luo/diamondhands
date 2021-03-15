({
  searchHelper: function (component, searchText) {
    let action = component.get("c.fetchLookUpValues");
    action.setParams({
      searchKeyWord: searchText
    });
    action.setCallback(this, function (response) {
      if (response.getState() === "SUCCESS") {
        let returnList = response.getReturnValue();
        if (returnList.length > 0) {
          component.set("v.listOfSearchRecords", returnList);
        }
      }
    });
    $A.enqueueAction(action);
  }
});
