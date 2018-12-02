({
    onInit : function(component, event, helper) {
        console.log("Inside init event");
        console.log("step 1");
        console.log("Find component IN INIT .. "+component.find("example"));
        console.log("Find DOM IN INIT .. "+component.find("example").getElement());
    },
    onRender : function(component, event, helper) {
        console.log("Inside render event");
        console.log("step 4");
        console.log("Find component IN RENDER event is fired .. "+component.find("example"));
        console.log("Find DOM once render event is fired .. "+component.find("example").getElement());
    },
    handleClick : function(component, event, helper) {
        component.set('v.search', $A.get("$Label.c.Pickone"));
    }

})
