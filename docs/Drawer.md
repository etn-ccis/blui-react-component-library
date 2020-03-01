# Drawer
The Drawer component is wrapper around the Material UI Drawer that adds specific PX Blue functionality and styling. It is used to organize content (typically navigation links) in a collapsible side panel. The PX Blue Drawer includes helper components for `DrawerHeader`, `DrawerSubheader`, `DrawerBody`, and `DrawerFooter` to help organize the content.

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
import { Drawer, DrawerHeader, DrawerSubheader, DrawerBody, DrawerFooter } from '@pxblue/react-components';
...
<Drawer open={true}>
    <DrawerHeader />
    <DrawerSubheader />
    <DrawerBody />
    <DrawerFooter />
</Drawer>
```

### Drawer API
| Prop Name           | Description                                      | Type        | Required | Default  |          
|---------------------|--------------------------------------------------|-------------|----------|----------|
| open                | Controls the open/closed state of the drawer     | `boolean`   | yes      |          |
| width               | Sets the width of the drawer (in px) when open   | `number `   | no       |          |


## DrawerHeader
The `DrawerHeader` contains the content at the top of the `Drawer`. It can render multiple lines of text in the PX Blue style, or your own custom content. 
    
### DrawerHeader API
| Prop Name         | Description                                    | Type              | Required | Default                      |
|-------------------|------------------------------------------------|-------------------|----------|------------------------------|
| backgroundColor   | The color used for the background              | `string`          | no       | `theme.palette.primary[500]` |
| backgroundImage   | An image to display in the header              | `string`          | no       |                              |
| backgroundOpacity | The opacity of the background image            | `number`          | no       | `0.3`                        |
| fontColor         | The color of the text elements                 | `string`          | no       | `Colors.white[50]`           |
| icon              | A component to render for the icon             | `React.Component` | no       |                              |
| onIconClick       | A function to execute when the icon is clicked | `function`        | no       | `() => {}`                   |
| subtitle          | The text to show on the second line            | `string`          | no       |                              |
| title             | The text to show on the first line             | `string`          | no       |                              |
| titleContent      | Custom content for header                      | `React.Component` | no       |                              |

## DrawerSubheader
The `DrawerSubheader` is an optional section that renders below the header and above the body of the `Drawer`. It can be used to support custom content, such as filtering options or to display additional information.

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
</DrawerBody>
```

### DrawerBody API
| Prop Name               | Description                                    | Type          | Required | Default |
|-------------------------|------------------------------------------------|---------------|----------|---------|
| activeBackgroundColor   | Background color for the 'active' item         | `string`      | no       |         |
| activeFontColor         | Font color for the 'active' item               | `string`      | no       |         |
| activeIconColor         | Icon color for the 'active' item               | `string`      | no       |         |
| backgroundColor         | The color used for the background              | `string`      | no       |         |
| fontColor               | The color used for the text                    | `string`      | no       |         |
| iconColor               | The color used for icons                       | `string`      | no       |         |
| titleColor              | The color used for `DrawerNavGroup` title text | `string`      | no       |         |

## DrawerNavGroup 
A `DrawerNavGroup` will render inside of the `DrawerBody` and is used to organize links. Each group consists of a group title and a series of navigation items. Most style props are inherited from the `DrawerBody` but can be overridden at the NavGroup level if desired.

We **discourage** you to use menu hierarchies with more than three levels, as it generally performs poorly on discoverability. 

### DrawerNavGroup API
| Prop Name             | Description                                                      | Type                      | Required | Default   |
|-----------------------|------------------------------------------------------------------|---------------------------|----------|-----------|
| activeBackgroundColor | Background color for the 'active' item                           | `string`                  | no       |           |
| activeFontColor       | Font color for the 'active' item                                 | `string`                  | no       |           |
| activeIconColor       | Icon color for the 'active' item                                 | `string`                  | no       |           | 
| activeItem            | itemID for the 'active' item                                     | `string`                  | no       |           | 
| activeItemShape       | shape of the active item background                              | `'rectangular'|'rounded'` | no       | 'rounded' | 
| backgroundColor       | The color used for the background                                | `string`                  | no       |           |   
| chevron               | Whether to have chevrons for all menu items                      | `boolean`                 | no       |           |    
| titleContent          | Custom element, substitute for title                             | `React.Component`         | no       |           |    
| divider               | Whether to show a line between all items                         | `boolean`                 | no       | true      |    
| fontColor             | The color used for inactive menu items                           | `string`                  | no       | theme.palette.text.secondary |   
| hidePadding           | Whether to hide the paddings reserved for menu item icons        | `boolean`                 | no       |           | 
| iconColor             | The color used for the icon                                      | `string`                  | no       |           |   
| items                 | List of navigation items to render                               | `NestedNavItem[]`         | yes      |           | 
| nestedDivider         | Whether to show a line between nested menu items                 | `boolean`                 | no       | false     |    
| open                  | Whether the group is expanded                                    | `function`                | no       |           |
| ripple                | Whether to apply material ripple effect to items                 | `boolean`                 | no       | true      |
| title                 | Text to display in the group header                              | `string`                  | no       |           |  
| titleColor            | Font color for group header                                      | `string`                  | no       |           | 

#### NavItem Object
The `items` prop of the `DrawerNavGroup` takes a list of items with the following structure (most of these properties are inherited from `<InfoListItem/>`). NavItem can also include a list of `NestedNavItem` to build a tree (see the section "NestedNavItem Object" below).

| Attribute       | Description                                                                                                    | Type               | Required | Default                          |
|-----------------|----------------------------------------------------------------------------------------------------------------|--------------------|----------|----------------------------------|
| chevron         | Show chevron icon to the right. Override by `rightComponent`                                                   | `boolean`          | no       | false                            |  
| collapseIcon    | Icon used to collapse drawer                                                                                   | `JSX.Element`      | no       | expandIcon rotated 180 deg       |  
| divider         | Show a divider line below the top-level item                                                                   | `boolean`          | no       | true                             | 
| expandIcon      | Icon used to expand drawer                                                                                     | `JSX.Element`      | no       | `<ExpandLess />`                 |  
| icon            | A component to render for the icon                                                                             | `JSX.Element`      | no       |                                  |
| itemID          | An unique identifier of the NavItem. Set the menu item to 'active' when matches with DrawerNavGroup.activeItem | `string`           | yes      |                                  |  
| items           | The items nested under this item                                                                               | `NestedNavItem[]`  | no       |                                  |    
| onClick         | A function to execute when clicked                                                                             | `function`         | no       |                                  |       
| rightComponent  | An icon to display to the right                                                                                | `JSX.Element`      | no       |                                  |   
| statusColor     | Status stripe and icon color                                                                                   | `string`           | no       |                                  |   
| subtitle        | The text to show on the second line                                                                            | `string`           | no       |                                  |    
| title           | The text to show on the first line                                                                             | `string`           | yes      |                                  |    

#### NestedNavItem Object
If your Drawer needs to include a hierarchied menu item tree rather than just a plain list of NavItems, you will need to have a list of `NestedNavItem`s in the `items` field of the `NavItem` object. For example, you can have: 

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
        {
            title: 'b',
            itemID: 'b',
            items: [
                {
                    title: 'b-1',
                    itemID: 'b-1',
                },
            ]
        }, 
    ]
/>
```

The API of `NestedNavItem` is the same as that of `NavItem`, except the `statusColor` and `icon` fields are not allowed. Besides, the default `expandIcon` prop is `<ArrowDropUp />`.

## Drawer Footer
The `DrawerFooter` is an optional section that renders at the bottom of the `Drawer`. It can be used to add any custom content.


### Drawer Footer API
| Prop Name       | Description                             | Type          | Required | Default |
|-----------------|-----------------------------------------|---------------|----------|---------|
| backgroundColor | The color used for the background       | `string`      | no       |         |   

### Usage
```typescript
import DrawerFooter from '@pxblue/react-components/core/Drawer';
...
<DrawerFooter>
    <div>Custom Footer goes here</div>
</DrawerFooter>
```
