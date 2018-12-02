({
    handleClick : function(component, event, helper) {
        console.log(event.target.innerHtml);
        var divElement = document.getElementById('divId');
        divElement.addEventListener('click',helper.helperMethod(component,event),false);
        
    }
})