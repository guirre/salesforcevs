({
    displayOpportunities : function(component, event, helper) {
        var appEvent = $A.get("e.c:displayDetails");
        appEvent.setParams({"userId":component.get('v.saleUser.userId')});
        appEvent.fire();
    }
})
