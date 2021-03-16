({
  closeModal: function (component, event, helper) {
    component.set("v.isModalOpen", false);
  },
  handleSubmit: function (component, event, helper) {
    event.preventDefault();
    helper.setMarketPrice(component, event);
  },
  handleError: function (component, event, helper) {
    console.log(
      JSON.parse(JSON.stringify(event.getParam("output").fieldErrors))
    );
  }
});
