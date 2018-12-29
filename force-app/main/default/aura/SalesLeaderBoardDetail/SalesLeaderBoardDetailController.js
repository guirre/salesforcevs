({
    showOppmodal : function(component, event, helper) {
        // Toggle CSS styles for open Modal
        helper.toggleClass(component, 'backdrop', 'slds-backdrop--');
        helper.toggleClass(component, 'modaldialog', 'slds-fade-in');
        helper.getopportunitylst(component,event);

    },
    hideModal : function(component, event, helper) {
        // Toggle CSS styles for hidden Modal
        helper.toggleInverse(component, 'backdrop', 'slds-backdrop--');
        helper.toggleInverse(component, 'modaldialog', 'slds-fade-in');
    },
   
})
