<aura:application extends="force:slds">
    <aura:attribute name="DateTimeInput" type="DateTime"/>
    <aura:attribute name="output" type="DateTime"/>
    <lightning:input type="datetime-local" label="Input Date" name="date" value="{! v.DateTimeInput}"/>
    <lightning:select aura:id="select" name="select" label="Select a pie" onchange="{! c.onChange}">
        <option value="">Choose one</option>
        <option value="YYYY MM DD">YYYY MM DD</option>
        <option value="YYYY MM DD, hh:mm:ss">YYYY MM DD, hh:mm:ss</option>
        <option value="YYYY MM DD, hh:mm:ss.SS">YYYY MM DD, hh:mm:ss.SS</option>
    </lightning:select>
    <p>outputDate : {!v.output}</p>
</aura:application>	
