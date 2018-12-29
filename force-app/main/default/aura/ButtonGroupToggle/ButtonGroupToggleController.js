({
    myAction : function(component, event, helper) {

    },
    setActive : function(component, event, helper){
        var buttons = component.find("myBtn");
        buttons.forEach(function(buttomCmp){
            buttomCmp.set("v.variant","Neutral");
            console.log("Bonjour Safiya");
        });
        event.getSource().set("v.variant", "Brand");
    }
})
