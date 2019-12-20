# Dark Mode Detector

## Description

The **Dark Mode Detector** checks if the running user has Dark Mode on the Salesforce Lightning Extension enabled, or has toggled it on or off. It will detect whether Dark Mode is on upon initial loading of the component. In any case, it fires a `modechange` event that can be handled by the parent component.

## Usage

Example of the Dark Mode Detector embedded in an Aura component:


```
// someComponent.cmp
<aura:component>
  <c:darkModeDetector onmodechange="{!c.handleModeChange}" />
</aura:component>
```

```
// someComponentController.js
({
  handleModeChange: function(component, event) {
    let darkModeEnabled = event.getParam("darkMode");
    if (darkModeEnabled) {
      // It's dark. Do something... dark.
    } else {
      // It's not dark. Do something... dark... just because.
    }
  }
});
```