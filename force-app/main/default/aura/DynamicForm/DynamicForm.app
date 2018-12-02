<aura:application extends="force:slds">
    <aura:attribute name="dynamicForm" type="Aura.component[]"/>
    <aura:handler name="init" value="{!this}" action="{!c.onInit}"/>
    {!v.dynamicForm}
    <br/>
    <lightning:Button variant="brand" label="Submit" onclick="{!c.handleClick}"/>
</aura:application>	
