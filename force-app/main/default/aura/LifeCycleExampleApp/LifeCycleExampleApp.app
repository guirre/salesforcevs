<aura:application extends="force:slds">
    <aura:handler name="init" value="{!this}" action="{!c.onInit}"/>
    <aura:handler name="render" value="{!this}" action="{!c.onRender}"/>
    <aura:attribute name="search" type="string"/>
    <div aura:id="example">
        <span> 1 </span>
        <span> 2 </span>
        <span> 3 </span>
        <span> 4 </span>
        <div>{!$Label.c.Pickone}</div>
    </div>
    <Lightning:input value="{!v.search}" label="search" name="search" aura:id="searchInput"/>
    <Lightning:button variant="brand" label="Submit" onclick="{!c.handleClick}"></Lightning:button>
</aura:application>	
