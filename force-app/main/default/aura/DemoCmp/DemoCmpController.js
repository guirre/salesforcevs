({
    handleClick : function(component, event, helper){
        console.log("cmp.getElement(): ", component.find("div1").getElement());
        var div1 = component.find("div1").getElement();
        for (var i = 0; i < div1.childNodes.length; i++) {
            console.log(div1.childNodes[i].outerHtml);
            console.log(div1.childNodes[i].className
                );
            
            
        }
        
    }
})
