# SFDX  App
Starting SFDX: Authorize a Dev Hub

sfdx force:auth:web:login --setdefaultdevhubusername
Successfully authorized mohamed.guirre.sfdx@secours-islamique.org with org ID 00D1t000000rxyTEAQ
You may now close the browser
sfdx force:auth:web:login --setdefaultdevhubusername ended with exit code 0

Starting SFDX: Create a Default Scratch Org...

sfdx force:org:create -f config\project-scratch-def.json --setalias HelloWorldProject --setdefaultusername
Successfully created scratch org: 00D4E0000001SxKUAU, username: test-xkwc3bjjkjlt@example.com
sfdx force:org:create -f config\project-scratch-def.json --setalias HelloWorldProject --setdefaultusername ended with exit code 0

Starting SFDX: Create Lightning Component

sfdx force:lightning:component:create --componentname HelloWorld --outputdir force-app\main\default\aura
target dir = c:\outils\salesforce\tutorial\HelloWorldProject\force-app\main\default\aura
   create HelloWorld\HelloWorld.cmp
   create HelloWorld\HelloWorld.cmp-meta.xml
   create HelloWorld\HelloWorldController.js
   create HelloWorld\HelloWorldHelper.js
   create HelloWorld\HelloWorld.css
   create HelloWorld\HelloWorldRenderer.js
   create HelloWorld\HelloWorld.svg
   create HelloWorld\HelloWorld.auradoc
   create HelloWorld\HelloWorld.design

sfdx force:lightning:component:create --componentname HelloWorld --outputdir force-app\main\default\aura ended with exit code 0

Starting SFDX: Push Source to Default Scratch Org

sfdx force:source:push
=== Pushed Source
STATE  FULL NAME                           TYPE                  PROJECT PATH
─────  ──────────────────────────────────  ────────────────────  ──────────────────────────────────────────────────────────────
Add    HelloWorld\HelloWorld.auradoc       AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorld.auradoc
Add    HelloWorld\HelloWorld.cmp           AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorld.cmp
Add    HelloWorld\HelloWorld.cmp           AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorld.cmp-meta.xml
Add    HelloWorld\HelloWorld.css           AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorld.css
Add    HelloWorld\HelloWorld.design        AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorld.design
Add    HelloWorld\HelloWorld.svg           AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorld.svg
Add    HelloWorld\HelloWorldController.js  AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorldController.js
Add    HelloWorld\HelloWorldHelper.js      AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorldHelper.js
Add    HelloWorld\HelloWorldRenderer.js    AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorldRenderer.js
sfdx force:source:push ended with exit code 0

Starting SFDX: Open Default Org

sfdx force:org:open
Access org 00D4E0000001SxKUAU as user test-xkwc3bjjkjlt@example.com with the following URL: https://agility-ruby-216-dev-ed.cs83.my.salesforce.com//secur/frontdoor.jsp?sid=00D4E0000001SxK!ARMAQM9lnug7a582glmvRZh8XxKz53grE6gf.o2nADYMotkUMgrCxeyo0QWPcgDXdRvaCPVdAyoNaJJfaZFsajkLfiOB5Ti5
sfdx force:org:open ended with exit code 0

Starting SFDX: Pull Source from Default Scratch Org

sfdx force:source:pull
=== Pulled Source
STATE    FULL NAME                           TYPE                  PROJECT PATH
───────  ──────────────────────────────────  ────────────────────  ──────────────────────────────────────────────────────────────
Changed  HelloWorld\HelloWorld.cmp           AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorld.cmp-meta.xml
Changed  HelloWorld\HelloWorld.css           AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorld.css
Changed  HelloWorld\HelloWorldHelper.js      AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorldHelper.js
Changed  HelloWorld\HelloWorldController.js  AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorldController.js
Changed  HelloWorld\HelloWorldRenderer.js    AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorldRenderer.js
Changed  HelloWorld\HelloWorld.cmp           AuraDefinitionBundle  force-app\main\default\aura\HelloWorld\HelloWorld.cmp
sfdx force:source:pull ended with exit code 0

Starting View All Changes (Local and in Default Scratch Org)

sfdx force:source:status
=== Source Status
No results found
sfdx force:source:status ended with exit code 0

Starting SFDX: Open Default Org

sfdx force:org:open
Access org 00D4E0000001SxKUAU as user test-xkwc3bjjkjlt@example.com with the following URL: https://agility-ruby-216-dev-ed.cs83.my.salesforce.com//secur/frontdoor.jsp?sid=00D4E0000001SxK!ARMAQM9lnug7a582glmvRZh8XxKz53grE6gf.o2nADYMotkUMgrCxeyo0QWPcgDXdRvaCPVdAyoNaJJfaZFsajkLfiOB5Ti5
sfdx force:org:open ended with exit code 0



## Dev, Build and Test


## Resources


## Description of Files and Directories


## Issues


