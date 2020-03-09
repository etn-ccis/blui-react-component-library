# Drawer
The Drawer component is a wrapper around the Material UI Drawer that adds specific PX Blue functionality and styling. It is used to organize content (typically navigation links) in a collapsible side panel. The PX Blue Drawer includes helper components for `DrawerHeader`, `DrawerSubheader`, `DrawerBody`, `DrawerNavGroup`, and `DrawerFooter` to help organize the content.

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 200px" alt="Nested Drawer" src="./images/drawer.png">
</div>

## Drawer
The Drawer component is the parent container, which manages the overall state of the drawer and renders the child components.

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 400px" alt="Drawer Anatomy" src="./images/drawerAnatomy.png">
</div>

### Drawer Usage
```typescript
import { Drawer, DrawerHeader, DrawerSubheader, DrawerBody, DrawerNavGroup, DrawerFooter } from '@pxblue/react-components';
...
<Drawer open={true}>
    <DrawerHeader />
    <DrawerSubheader />
    <DrawerBody>
        <DrawerNavGroup/>
        <DrawerNavGroup/>
        <DrawerNavGroup/>
    </DrawerBody>
    <DrawerFooter />
</Drawer>
```

### Drawer API

<div style="overflow: auto;">

| Prop Name           | Description                                      | Type        | Required | Default  |          
|---------------------|--------------------------------------------------|-------------|----------|----------|
| open                | Controls the open/closed state of the drawer     | `boolean`   | yes      |          |
| width               | Sets the width of the drawer (in px) when open   | `number `   | no       |          |
</div>

## DrawerHeader
The `DrawerHeader` contains the content at the top of the `Drawer`. By default, it renders multiple lines of text in the PX Blue style. If you supply a `titleContent`, you can render your own custom content in the title area. 
    
### DrawerHeader API

<div style="overflow: auto;">

| Prop Name         | Description                                    | Type              | Required | Default                      |
|-------------------|------------------------------------------------|-------------------|----------|------------------------------|
| backgroundColor   | The color used for the background              | `string`          | no       | `theme.palette.primary.main` |
| backgroundImage   | An image to display in the header              | `string`          | no       |                              |
| backgroundOpacity | The opacity of the background image            | `number`          | no       | `0.3`                        |
| fontColor         | The color of the text elements                 | `string`          | no       | `Colors.white[50]`           |
| icon              | A component to render for the icon             | `React.Component` | no       |                              |
| onIconClick       | A function to execute when the icon is clicked | `function`        | no       | `() => {}`                   |
| subtitle          | The text to show on the second line            | `string`          | no       |                              |
| title             | The text to show on the first line             | `string`          | no       |                              |
| titleContent      | Custom content for header title area           | `React.Component` | no       |                              |
</div>

## DrawerSubheader
The `DrawerSubheader` is an optional section that renders below the header and above the body of the `Drawer`. It can be used to support custom content (passed as children), such as filtering options or to display additional information.

### DrawerSubheader Usage
```typescript
import DrawerSubheader from '@pxblue/react-components/core/Drawer';
...
<DrawerSubheader>
    <div>Custom Subheader Content</div>
</DrawerSubheader>
```

## DrawerBody
The `DrawerBody` is a wrapper for the main content of the Drawer. The typical use case is to display `DrawerNavGroup` elements, but custom elements (e.g., for spacing) are accepted as well.

### DrawerBody Usage
```typescript
import DrawerBody from '@pxblue/react-components/core/Drawer';
...
<DrawerBody>
    <DrawerNavGroup title={'Nav Items'} items={...} />
    <DrawerNavGroup title={'More Nav Items'} items={...} />
</DrawerBody>
```

### DrawerBody API

<div style="overflow: auto;">

| Prop Name               | Description                                    | Type          | Required | Default |
|-------------------------|------------------------------------------------|---------------|----------|---------|
| activeBackgroundColor   | Background color for the 'active' item         | `string`      | no       |         |
| activeFontColor         | Font color for the 'active' item               | `string`      | no       |         |
| activeIconColor         | Icon color for the 'active' item               | `string`      | no       |         |
| backgroundColor         | The color used for the background              | `string`      | no       |         |
| fontColor               | The color used for the text                    | `string`      | no       |         |
| iconColor               | The color used for icons                       | `string`      | no       |         |
| titleColor              | The color used for `DrawerNavGroup` title text | `string`      | no       |         |
</div>

## DrawerNavGroup 
A `DrawerNavGroup` is used inside of the `DrawerBody` to organize links/content. Each group consists of an (optional) group title and a series of NavItems. Most visual props are inherited from the `DrawerBody` but can be overridden at the NavGroup level if desired.

The `items` property supports nested items to generate collapsible sections in the menu. This can be used to create an arbitrary tree depth, but we do not recommend going more than two levels deep in a navigation Drawer.

### DrawerNavGroup API

<div style="overflow: auto;">

| Prop Name             | Description                                                      | Type                      | Required | Default   |
|-----------------------|------------------------------------------------------------------|---------------------------|----------|-----------|
| activeBackgroundColor | Background color for the 'active' item                           | `string`                  | no       |           |
| activeFontColor       | Font color for the 'active' item                                 | `string`                  | no       |           |
| activeIconColor       | Icon color for the 'active' item                                 | `string`                  | no       |           | 
| activeItem            | `itemID` of the 'active' item                                    | `string`                  | no       |           | 
| activeItemShape       | Shape of the active item highlight                               | `'square'` \| `'round'`   | no       | 'round'   | 
| backgroundColor       | The color used for the background                                | `string`                  | no       |           |   
| chevron               | Show chevron icon (shortcut for `rightComponent`)                | `boolean`                 | no       |           |    
| titleContent          | Custom element to render as the title                            | `React.Component`         | no       |           |    
| divider               | Whether to show a line between top-level NavItems                | `boolean`                 | no       | true      |    
| fontColor             | The color used for NavItem text                                  | `string`                  | no       | theme.palette.text.secondary |   
| hidePadding           | Whether to hide the paddings reserved for NavItem icons          | `boolean`                 | no       |           | 
| iconColor             | The color used for the icon                                      | `string`                  | no       |           |   
| items                 | List of NavItems to render                                       | `NestedNavItem[]`         | yes      |           | 
| nestedDivider         | Whether to show a line between nested NavItems                   | `boolean`                 | no       | false     |    
| open                  | Whether the group is expanded                                    | `function`                | no       |           |
| ripple                | Whether to apply material ripple effect to items                 | `boolean`                 | no       | true      |
| title                 | Text to display in the group header                              | `string`                  | no       |           |  
| titleColor            | Font color for group header title text                           | `string`                  | no       |           | 
</div>

#### NavItem Object
The `items` prop of the `DrawerNavGroup` takes a list of items with the following structure (most of these properties are inherited from `<InfoListItem/>`). NavItem can also include a list of `NestedNavItem` to create a tree structure (see below).

<div style="overflow: auto;">

| Attribute       | Description                                                                                                    | Type               | Required | Default                          |
|-----------------|----------------------------------------------------------------------------------------------------------------|--------------------|----------|----------------------------------|
| chevron         | Show chevron icon to the right (shortcut for `rightComponent` )                                                | `boolean`          | no       | false                            |  
| collapseIcon    | Icon used to collapse drawer                                                                                   | `JSX.Element`      | no       | expandIcon rotated 180 deg       |  
| divider         | Show a divider line below the top-level item                                                                   | `boolean`          | no       | true                             | 
| expandIcon      | Icon used to expand drawer                                                                                     | `JSX.Element`      | no       | `<ExpandLess />`, or  `<ArrowDropUp />` if it is a `NestedNavItem` |  
| icon            | A component to render for the left icon                                                                        | `JSX.Element`      | no       |                                  |
| itemID          | An unique identifier of the NavItem. Item will have 'active' style when this matches  DrawerNavGroup.activeItem | `string`          | yes      |                                  |  
| items           | The items nested under this item                                                                               | `NestedNavItem[]`  | no       |                                  |    
| onClick         | A function to execute when clicked                                                                             | `function`         | no       |                                  |       
| rightComponent  | An icon/component to display to the right                                                                      | `JSX.Element`      | no       |                                  |   
| statusColor     | Status stripe and icon color                                                                                   | `string`           | no       |                                  |   
| subtitle        | The text to show on the second line                                                                            | `string`           | no       |                                  |    
| title           | The text to show on the first line                                                                             | `string`           | yes      |                                  |    
</div>

#### NestedNavItem Object
The `items` property of the NavItem can be nested to create a tree structure with expand/collapse panels. Nested items take the same properties as `NavItem` with the exception of `icon` (nested items cannot use icons). 

``` typescript
<DrawerNavGroup 
    items=[
        {
            title: 'a',
            itemID: 'a',
            items: [
                {
                    title: 'a-1',
                    itemID: 'a-1',
                },
                {
                    title: 'a-2',
                    itemID: 'a-2',
                    items: [
                        {
                            title: 'a-2-1',
                            itemID: 'a-2-1',
                        },
                        {
                            title: 'a-2-2',
                            itemID: 'a-2-2',
                        },
                    ]
                },
                {
                    title: 'a-3',
                    itemID: 'a-3',
                },
            ]
        },
    ]
/>
```

## Drawer Footer
The `DrawerFooter` is an optional section that renders at the bottom of the `Drawer`. It can be used to add any custom content (as children).


### Drawer Footer API

<div style="overflow: auto;">

| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| backgroundColor | The color used for the background       | `string`      | no       |         |   
</div>

### Usage
```typescript
import DrawerFooter from '@pxblue/react-components/core/Drawer';
...
<DrawerFooter>
    <div>Custom Footer goes here</div>
</DrawerFooter>
```
