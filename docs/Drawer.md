# Drawer

The `<Drawer>` component is a wrapper around the [Material UI Drawer](https://material-ui.com/api/drawer/) that adds specific PX Blue functionality and styling. It is used to organize content (typically navigation links) in a collapsible side panel. The PX Blue Drawer includes helper components for `<DrawerHeader>`, `<DrawerSubheader>`, `<DrawerBody>`, `<DrawerNavGroup>`, `<DrawerFooter>`, and `<DrawerLayout>` to help organize the content.

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 200px" alt="Nested Drawer" src="./images/drawer.png">
</div>

## Drawer

The `<Drawer>` component is the parent container, which manages the overall state of the drawer and renders the child components.

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 500px" alt="Drawer Anatomy" src="./images/drawerAnatomy.png">
</div>

### Drawer Usage

```tsx
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

// a responsive Drawer using Drawer variant
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
const theme = useTheme();
const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
<Drawer
    open={true}
    variant={xsDown ? 'temporary' : 'persistent'}
>
</Drawer>
```

### Drawer API

<div style="overflow: auto;">

| Prop Name                       | Description                                                | Type                                         | Required | Default |
| ------------------------------- | ---------------------------------------------------------- | -------------------------------------------- | -------- | ------- |
| open                            | Controls the open/closed state of the drawer               | `boolean`                                    | yes      |         |
| variant                         | The variant to use (see below)                             | `'permanent'`\|`'persistent'`\|`'temporary'` | no       |         |
| width                           | Sets the width of the drawer (in px) when open             | `number`                                     | no       |         |
| [...sharedProps](#shared-props) | Props that can be set at any level in the drawer hierarchy | -                                            | no       |         |

</div>

Any other props will be passed to the root element [**Material UI Drawer**](https://material-ui.com/api/drawer/).

The `Drawer` has three `variant`s:

-   **Permanent**: Always open, even when `open` is set to false.
-   **Persistent**: When `open` is set to false, the `<Drawer>` collapses itself as a navigation rail, and hover will make it expand temporarily; when `open` is set to true, it behaves like a permanent `<Drawer>`.
-   **Temporary**: When `open` is set to false, the `<Drawer>` is hidden; when `open` is set to true, it slides in.

#### Classes

You can override the classes used by PX Blue by passing a `classes` prop. The Drawer supports the following keys:

| Name    | Description                                     |
| ------- | ----------------------------------------------- |
| content | Styles applied to the drawer content container  |
| paper   | MUI Drawer style override for desktop viewports |
| root    | MUI Drawer style override for the root element  |

## Drawer Header

The `<DrawerHeader>` contains the content at the top of the `<Drawer>`. By default, it renders multiple lines of text in the PX Blue style. If you supply a `titleContent`, you can render your own custom content in the title area.

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="Drawer Header Anatomy" src="./images/drawerHeaderAnatomy.png">
</div>

### Drawer Header API

<div style="overflow: auto;">

| Prop Name         | Description                                    | Type              | Required | Default                      |
| ----------------- | ---------------------------------------------- | ----------------- | -------- | ---------------------------- |
| backgroundColor   | The color used for the background              | `string`          | no       | `theme.palette.primary.main` |
| backgroundImage   | An image to display in the header              | `string`          | no       |                              |
| backgroundOpacity | The opacity of the background image            | `number`          | no       | `0.3`                        |
| fontColor         | The color of the text elements                 | `string`          | no       | dynamic based on background  |
| icon              | A component to render for the icon             | `React.Component` | no       |                              |
| onIconClick       | A function to execute when the icon is clicked | `function`        | no       | `() => {}`                   |
| subtitle          | The text to show on the second line            | `string`          | no       |                              |
| title             | The text to show on the first line             | `string`          | no       |                              |
| titleContent      | Custom content for header title area           | `React.Component` | no       |                              |

</div>

Any other props will be passed to the root element [**Material UI Toolbar**](https://material-ui.com/api/toolbar/).

#### Classes

You can override the classes used by PX Blue by passing a `classes` prop. The `<DrawerHeader>` supports the following keys:

| Name             | Description                                      |
| ---------------- | ------------------------------------------------ |
| root             | Styles applied to the root element               |
| content          | Styles applied to the content container          |
| background       | Styles applied to the header background          |
| navigation       | Styles applied to the icon element               |
| nonClickableIcon | Styles applied to the non-clickable icon element |
| subtitle         | Styles applied to the subtitle element           |
| title            | Styles applied to the title element              |

## Drawer Subheader

The `<DrawerSubheader>` is an optional section that renders below the header and above the body of the `<Drawer>`. It can be used to support custom content (passed as children), such as filtering options or to display additional information.

### Drawer Subheader Usage

```tsx
import DrawerSubheader from '@pxblue/react-components/core/Drawer';
...
<DrawerSubheader>
    <div>Custom Subheader Content</div>
</DrawerSubheader>
```

## Drawer Body

The `<DrawerBody>` is a wrapper for the main content of the Drawer. The typical use case is to display `<DrawerNavGroup>` elements, but custom elements (e.g., for spacing) are accepted as well.

### Drawer Body Usage

```tsx
import DrawerBody from '@pxblue/react-components/core/Drawer';
...
<DrawerBody>
    <DrawerNavGroup title={'Nav Items'} items={...} />
    <DrawerNavGroup title={'More Nav Items'} items={...} />
</DrawerBody>
```

### Drawer Body API

<div style="overflow: auto;">

| Prop Name       | Description                       | Type         | Required | Default |
| --------------- | --------------------------------- | ------------ | -------- | ------- |
| backgroundColor | The color used for the background | `string`     | no       |         |
| classes         | Style overrides                   | `StyleRules` | no       |         |

</div>

#### Classes

You can override the classes used by PX Blue by passing a `classes` prop. The `<DrawerBody>` supports the following keys:

| Name | Description                        |
| ---- | ---------------------------------- |
| root | Styles applied to the root element |

## Drawer Nav Group

A `<DrawerNavGroup>` is used inside of the `<DrawerBody>` to organize links/content. Each group consists of an (optional) group title and a series of NavItems. Most visual props are inherited from the `<DrawerBody>` but can be overridden at the NavGroup level if desired.

The `items` property supports nested items to generate collapsible sections in the menu. This can be used to create an arbitrary tree depth, but we do not recommend going more than two levels deep in a navigation Drawer.

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="Drawer Nav Group Anatomy" src="./images/drawerNavGroupAnatomy.png">
</div>

### Drawer Nav Group API

<div style="overflow: auto;">

| Prop Name                       | Description                                                | Type              | Required | Default |
| ------------------------------- | ---------------------------------------------------------- | ----------------- | -------- | ------- |
| backgroundColor                 | The color used for the background                          | `string`          | no       |         |
| classes                         | Style overrides                                            | `StyleRules`      | no       |         |
| items                           | List of NavItems to render                                 | `NestedNavItem[]` | yes      |         |
| title                           | Text to display in the group header                        | `string`          | no       |         |
| titleContent                    | Custom element, substitute for title                       | `React.Component` | no       |         |
| [...sharedProps](#shared-props) | Props that can be set at any level in the drawer hierarchy | -                 | no       |         |

</div>

Any other props will be passed to the root element [**Material UI List**](https://material-ui.com/api/list/).

#### Classes

You can override the classes used by PX Blue by passing a `classes` prop. The `<DrawerNavGroup>` supports the following keys:

| Name              | Description                                   |
| ----------------- | --------------------------------------------- |
| active            | Styles applied to the active element          |
| expandIcon        | Styles applied to the expandIcon element      |
| groupHeader       | Styles applied to the NavGroup header element |
| listGroup         | Styles applied to the NavGroup list           |
| listItemContainer | Styles applied to the NavItem container       |
| nestedListGroup   | Styles applied to nested NavItems             |
| subheader         | Styles applied to the List subheader element  |
| nestedTitle       | Styles applied to nested NavItem title        |

## Drawer Footer

The `<DrawerFooter>` is an optional section that renders at the bottom of the `<Drawer>`. It can be used to add any custom content (as children).

### Usage

```tsx
import DrawerFooter from '@pxblue/react-components/core/Drawer';
...
<DrawerFooter>
    <div>Custom Footer goes here</div>
</DrawerFooter>
```

### Drawer Footer API

<div style="overflow: auto;">

| Prop Name       | Description                       | Type     | Required | Default |
| --------------- | --------------------------------- | -------- | -------- | ------- |
| backgroundColor | The color used for the background | `string` | no       |         |

</div>

## Drawer Nav Item

#### Nav Item Object

The `items` prop of the `<DrawerNavGroup>` takes a list of items with the following structure (most of these properties are inherited from `<InfoListItem/>`). A `NavItem` can also include a list of `NestedNavItem` to create a tree structure (see below).

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="Nav Item Anatomy" src="./images/navItemAnatomy.png">
</div>

<div style="overflow: auto;">

| Attribute                       | Description                                                                                     | Type              | Required | Default |
| ------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------- | -------- | ------- |
| icon                            | A component to render for the left icon                                                         | `JSX.Element`     | no       |         |
| itemID                          | An unique identifier of the NavItem. Item will have 'active' style when this matches activeItem | `string`          | yes      |         |
| items                           | The items nested under this item                                                                | `NestedNavItem[]` | no       |         |
| onClick                         | A function to execute when clicked                                                              | `function`        | no       |         |
| rightComponent                  | An icon/component to display to the right                                                       | `JSX.Element`     | no       |         |
| statusColor                     | Status stripe and icon color                                                                    | `string`          | no       |         |
| subtitle                        | The text to show on the second line                                                             | `string`          | no       |         |
| title                           | The text to show on the first line                                                              | `string`          | yes      |         |
| [...sharedProps](#shared-props) | Props that can be set at any level in the drawer hierarchy                                      | -                 | no       |         |

</div>

#### Nested Nav Item Object

The `items` property of the NavItem can be nested to create a tree structure with expand/collapse panels. Nested items take the same properties as `NavItem` with the exception of `icon` (nested items cannot use icons).

```tsx
<DrawerNavGroup
    items={[
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
                    ],
                },
                {
                    title: 'a-3',
                    itemID: 'a-3',
                },
            ],
        },
    ]}
/>
```

## Shared Props

The following props can be set at any level in the drawer hierarchy (`<Drawer>`, `<DrawerNavGroup>`, `NavItem`, or `NestedNavItem`). If they are set on a parent, they will be used for all children. For more customization, you can set these props on individual children and they will override any value set on the parent.

<div style="overflow: auto;">

| Name                      | Description                                               | Type                  | Required | Default                                                      |
| ------------------------- | --------------------------------------------------------- | --------------------- | -------- | ------------------------------------------------------------ |
| activeItemBackgroundColor | Background color for the 'active' item                    | `string`              | no       | varies for light/dark theme                                  |
| activeItemBackgroundShape | shape of the active item background                       | `'round'`\|`'square'` | no       | round                                                        |
| activeItemFontColor       | Font color for the 'active' item                          | `string`              | no       | varies for light/dark theme                                  |
| activeItemIconColor       | Icon color for the 'active' item                          | `string`              | no       | varies for light/dark theme                                  |
| chevron                   | Whether to have chevrons for all menu items               | `boolean`             | no       |                                                              |
| collapseIcon              | Icon used to collapse drawer                              | `JSX.Element`         | no       | `expandIcon` rotated 180 degrees                             |
| divider                   | Whether to show a line between all items                  | `boolean`             | no       | true                                                         |
| expandIcon                | Icon used to expand drawer                                | `JSX.Element`         | no       | `<ExpandMore />` at top-level, `<ArrowDropDown />` otherwise |
| hidePadding               | Whether to hide the paddings reserved for menu item icons | `boolean`             | no       |                                                              |
| InfoListItemProps         | Used to override InfoListItem props set by the Drawer     | `InfoListItemProps`   | no       |                                                              |
| itemFontColor             | The color used for the item text                          | `string`              | no       | black[500]                                                   |
| itemIconColor             | The color used for the icon                               | `string`              | no       | black[500]                                                   |
| ripple                    | Whether to apply material ripple effect to items          | `boolean`             | no       | true                                                         |

</div>

The following props control the NavGroup and thus only apply to `<Drawer>`, and `DrawerNavGroupProps` (so not `NavItem` or `NestedNavItem`):

<div style="overflow: auto;">

| Name                  | Description                                      | Type      | Required | Default                                                      |
| --------------------- | ------------------------------------------------ | --------- | -------- | ------------------------------------------------------------ |
| activeItem            | itemID for the 'active' item                     | `string`  | no       |                                                              |
| nestedBackgroundColor | background color for nested menu items           | `string`  | no       | theme.palette.type === 'light' ? white[200] : black['A200'], |
| nestedDivider         | Whether to show a line between nested menu items | `boolean` | no       | false                                                        |
| titleColor            | Font color for group header                      | `string`  | no       | theme.palette.text.primary                                   |

</div>

# Drawer Layout

The `<DrawerLayout>` component is used to provide the appropriate resizing behavior for your main application content when used in conjunction with a PX Blue `<Drawer>`. It accepts a `<Drawer>` as a prop, and the main page content is passed in through child elements.

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="DrawerLayout with labels" src="./images/drawerLayout.png">
</div>

## Drawer Layout Usage

```tsx
import { Drawer, DrawerLayout } from '@pxblue/react-components';
...
<DrawerLayout drawer={<Drawer ... />}>
    <>
        /* Page content goes here */
    </>
</DrawerLayout>
```

### Drawer Layout API

<div style="overflow: auto;">

| Prop Name | Description                     | Type              | Required | Default |
| --------- | ------------------------------- | ----------------- | -------- | ------- |
| drawer    | Drawer component to be embedded | `React.ReactNode` | yes      |         |

</div>

> **Note on Scrolling**: When using client-side routing in your application, you may notice that the window scroll position does not reset when navigating to new routes. To address this issue, you will need to manually update the scroll position when new pages are loaded. If you are using React Router they have [several examples](https://reacttraining.com/react-router/web/guides/scroll-restoration) on how to implement this in your application.

#### Classes

You can override the classes used by PX Blue by passing a `classes` prop. The `<DrawerLayout>` supports the following keys:

| Name    | Description                                  |
| ------- | -------------------------------------------- |
| root    | Styles applied to the root element           |
| content | Styles applied to the body content container |
| drawer  | Styles applied to the drawer container       |
