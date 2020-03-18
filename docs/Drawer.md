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

| Prop Name                       | Description                                                | Type      | Required | Default  |          
|---------------------------------|------------------------------------------------------------|-----------|----------|----------|
| open                            | Controls the open/closed state of the drawer               | `boolean` | yes      |          |
| width                           | Sets the width of the drawer (in px) when open             | `number ` | no       |          |
| [...sharedProps](#shared-props) | Props that can be set at any level in the drawer hierarchy | -         | no       |          |

</div>


#### Classes

You can override the classes used by PX Blue by passing a `classes` prop. The Drawer supports the following keys:

| Name             | Description                                     |
|------------------|-------------------------------------------------|
| root             | Styles applied to the root element              |
| content          | Styles applied to the drawer content container  |
| paper            | MUI Drawer style override for desktop viewports |
| paperMobile      | MUI Drawer style override for mobile  viewports |
| smooth           | Styles applied to the open/close animation      |


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


#### Classes
You can override the classes used by PX Blue by passing a `classes` prop. The DrawerHeader supports the following keys:

| Name             | Description                                     |
|------------------|-------------------------------------------------|
| root             | Styles applied to the root element              |
| content          | Styles applied to the content container         |
| background       | Styles applied to the header background         |
| navigation       | Styles applied to the icon element              |
| nonClickableIcon | Styles applied to the non-clickable icon element|
| subtitle         | Styles applied to the subtitle element          |
| title            | Styles applied to the title element             |


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
| backgroundColor         | The color used for the background              | `string`      | no       |         |

</div>

#### Classes
You can override the classes used by PX Blue by passing a `classes` prop. The DrawerBody supports the following keys:

| Name             | Description                                     |
|------------------|-------------------------------------------------|
| root             | Styles applied to the root element              |

## DrawerNavGroup 
A `DrawerNavGroup` is used inside of the `DrawerBody` to organize links/content. Each group consists of an (optional) group title and a series of NavItems. Most visual props are inherited from the `DrawerBody` but can be overridden at the NavGroup level if desired.

The `items` property supports nested items to generate collapsible sections in the menu. This can be used to create an arbitrary tree depth, but we do not recommend going more than two levels deep in a navigation Drawer.

### DrawerNavGroup API

<div style="overflow: auto;">

| Prop Name                       | Description                                                | Type              | Required | Default |
|---------------------------------|------------------------------------------------------------|-------------------|----------|---------|
| backgroundColor                 | The color used for the background                          | `string`          | no       |         | 
| items                           | List of NavItems to render                                 | `NestedNavItem[]` | yes      |         | 
| title                           | Text to display in the group header                        | `string`          | no       |         |  
| titleContent                    | Custom element, substitute for title                       | `React.Component` | no       |         | 
| [...sharedProps](#shared-props) | Props that can be set at any level in the drawer hierarchy | -                 | no       |         |


#### Classes
You can override the classes used by PX Blue by passing a `classes` prop. The DrawerNavGroup supports the following keys:

| Name                        | Description                                     |
|-----------------------------|-------------------------------------------------|
| active                      | Styles applied to the active element            |
| expandIcon                  | Styles applied to the expandIcon element        |
| groupHeader                 | Styles applied to the NavGroup header element   |
| listItemContainer           | Styles applied to the NavItem container         |
| nestedListGroup             | Styles applied to nested NavItems               |
| subheader                   | Styles applied to the List subheader element    |


#### NavItem Object
The `items` prop of the `DrawerNavGroup` takes a list of items with the following structure (most of these properties are inherited from `<InfoListItem/>`). NavItem can also include a list of `NestedNavItem` to create a tree structure (see below).

<div style="overflow: auto;">

| Attribute                       | Description                                                  | Type              | Required | Default |
| ------------------------------- | ------------------------------------------------------------ | ----------------- | -------- | ------- |
| icon                            | A component to render for the left icon                      | `JSX.Element`     | no       |         |
| itemID                          | An unique identifier of the NavItem. Item will have 'active' style when this matches activeItem | `string` | yes      |         |
| items                           | The items nested under this item                             | `NestedNavItem[]` | no       |         |
| onClick                         | A function to execute when clicked                           | `function`        | no       |         |
| rightComponent                  | An icon/component to display to the right                    | `JSX.Element`     | no       |         |
| statusColor                     | Status stripe and icon color                                 | `string`          | no       |         |
| subtitle                        | The text to show on the second line                          | `string`          | no       |         |
| title                           | The text to show on the first line                           | `string`          | yes      |         |
| [...sharedProps](#shared-props) | Props that can be set at any level in the drawer hierarchy   | -                 | no       |         |

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

| Prop Name       | Description                       | Type          | Required | Default |
|-----------------|-----------------------------------|---------------|----------|---------|
| backgroundColor | The color used for the background | `string`      | no       |         |   

</div>

### Usage
```typescript
import DrawerFooter from '@pxblue/react-components/core/Drawer';
...
<DrawerFooter>
    <div>Custom Footer goes here</div>
</DrawerFooter>
```

## Shared Props
The following props can be set at any level in the drawer hierarchy (`Drawer`, `DrawerNavGroup`, `NavItem`, or `NestedNavItem`). If they are set on a parent, they will be used for all children. For more customization, you can set these props on individual children and they will override any value set on the parent.

| Name                      | Description                                                | Type               | Required | Default                                                    |
| ------------------------- | ---------------------------------------------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| activeItemBackgroundColor | Background color for the 'active' item                     | `string`           | no       | varies for light/dark theme                                |
| activeItemBackgroundShape | shape of the active item background                        | `'round'|'square'` | no       | round                                                      |
| activeItemFontColor       | Font color for the 'active' item                           | `string`           | no       | varies for light/dark theme                                |
| activeItemIconColor       | Icon color for the 'active' item                           | `string`           | no       | varies for light/dark theme                                |
| chevron                   | Whether to have chevrons for all menu items                | `boolean`          | no       |                                                            |
| collapseIcon              | Icon used to collapse drawer                               | `JSX.Element`      | no       | `expandIcon` rotated 180 degrees                           |
| divider                   | Whether to show a line between all items                   | `boolean`          | no       | true                                                       |
| expandIcon                | Icon used to expand drawer                                 | `JSX.Element`      | no       | `<ExpandLess />` at top-level, `<ArrowDropUp />` otherwise |
| hidePadding               | Whether to hide the paddings reserved for menu item icons  | `boolean`          | no       |                                                            |
| itemFontColor             | The color used for the item text                           | `string`           | no       | gray[500]                                                  |
| itemIconColor             | The color used for the icon                                | `string`           | no       | gray[500]                                                  |
| ripple                    | Whether to apply material ripple effect to items           | `boolean`          | no       | true                                                       |

The following props control the NavGroup and thus only apply to `Drawer`, and `DrawerNavGroupProps` (so not `NavItem` or `NestedNavItem`):

| Name                  | Description                                      | Type      | Required | Default                                                      |
| --------------------- | ------------------------------------------------ | --------- | -------- | ------------------------------------------------------------ |
| activeItem            | itemID for the 'active' item                     | `string`  | no       |                                                              |
| nestedBackgroundColor | background color for nested menu items           | `string`  | no       | theme.palette.type === 'light' ? white[200] : black['A200'], |
| nestedDivider         | Whether to show a line between nested menu items | `boolean` | no       | false                                                        |
| titleColor            | Font color for group header                      | `string`  | no       | theme.palette.text.primary                                   |

# DrawerLayout
The `DrawerLayout` component is used to provide the appropriate resizing behavior for your main application content when used in conjunction with  a PX Blue `Drawer`. It accepts a `Drawer` as a prop, and the main page content is passed in through child elements.

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="DrawerLayout with labels" src="./images/drawerLayout.png">
</div>

## DrawerLayout Usage
```typescript
import { Drawer, DrawerLayout } from '@pxblue/react-components';
...
<DrawerLayout drawer={<Drawer ... />} >
    <>
        /* Page content goes here */
    </>
</DrawerLayout>
```


## Limitations
The PX Blue react component library is currently is not dependent on a single Router provider.  
Because of this limitation, there are a few things additional steps that need happen for users to have an optimal routing experience.
It is recommended that when new page content loads, the window is adjusted so the top of the page is shown.
If your application supports routing that occurs outside the scope of the Drawer, the window will have to be manually adjusted.
If you are using React-Router, the [documentation](https://reacttraining.com/react-router/web/guides/scroll-restoration) references this situation and has a solution. 
