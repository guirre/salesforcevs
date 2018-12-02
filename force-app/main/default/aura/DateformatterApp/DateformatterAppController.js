({
    onChange : function(component, event, helper) {
        console.log(component.get("v.DateTimeInput"));
        var dateInput = component.get("v.DateTimeInput");
        var selectdformat= component.find('select').get("v.value");
        var output = $A.localizationService.formatDate(dateInput,selectdformat);
        component.set("v.output",output);
        
    }
})
