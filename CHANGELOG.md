# Changelog

## version tbd (not published)

### Changed

-   Updated styles for `<DropdownToolbar>` to support Icon Button or plain icon for `navigationIcon`.
-   Updated default styles for `<Drawer>`

### Added
-   Additional configuration properties for `<Drawer>`
    -   `sideBorder` gives the `<Drawer>` a slight border instead of a drop shadow
    -   `disableActiveItemParentStyle` disables the bold text style for active item's parent elements
-   Additional configuration options for `<DrawerHeader>` and `<DrawerFooter>`
    -   `hideContentOnCollapse` configures if content in these areas should be hidden or remain visible when the drawer is collapsed
    -   `divider` configures whether to show a dividing line separating the component from other content

## 4.2.0

### Changed

-   Updated styles for default `<ListItemTag>` and `<Hero>`

### Added

-   Adds `hidden` prop to the Drawer `NavItem` to conditionally omit items from the `<Drawer>` or `<UserMenu>`.

### Fixed

-   Mismatched transition speeds on the `<Drawer>` and `<DrawerLayout>`
-   Use more efficient icon import syntax for smaller bundle

## v4.1.1

### Changed

-   Hides Drawer Nav Item's title when the `<Drawer>` collapses in the `persistent` variant
-   Improved some icon flipping logic for RTL

## v4.1.0

### Added

-   Adds `iconAlign` prop to `<InfoListItem>` to align icon left (default), center or right
-   Adds optional prop to the `<DrawerHeader>` to add a bottom divider
-   Adds `<DropdownToolbar>` component

### Fixed

-   Fixes RTL support issues in the `<DrawerLayout>`/`<Drawer>`
-   Fixes an issue with text wrapping in the `<InfoListItem>` subtitle
-   Fixes an issue with hover color alpha channel in `<InfoListItem>`

## v4.0.2

-   Updates several prop types to `ReactNode` to support wider range of input values.
-   Adds `info` prop to `<InfoListItem>` to support a third line of text.

## v4.0.1

-   Themes updated to use [@pxblue/colors](https://www.npmjs.com/package/@pxblue/colors) version 3.0.0.

## v4.0.0

-   Style-related properties are now overridable by the `classes` prop in each component.
-   Supplemental properties are now spread to the root component for each PX Blue component.
-   Changed component font colors to address potential accessibility issues.

**Breaking Changes:**

-   Theme usage updated to Material UI v4+ format (requires v5+ of @pxblue/react-themes)

## v3.0.3

-   Fixes IE 11 issue where persistent `<Drawer>` will not close.
-   Fixes some spacing issues when using the `<DrawerLayout>`.

## v3.0.0

-   Adds support for nested items in the `<Drawer>` component.
-   Additional styling props added to `<Drawer>`.

**Breaking Changes:**

-   A few props got renamed to avoid further ambiguities:
    -   `<DrawerNavGroup>` prop `content` has been renamed to `titleContent`.
    -   Anything controlling the look of a `NavItem` / `NestedNavItem`, has been renamed to include 'item' in them. These are inheritable properties that might get confusing in different drawer hierarchy levels. List of affected props:

| Previous              | Current                   |
| --------------------- | ------------------------- |
| activeBackgroundColor | activeItemBackgroundColor |
| activeBackgroundShape | activeItemBackgroundShape |
| activeFontColor       | activeItemFontColor       |
| activeIconColor       | activeItemIconColor       |
| fontColor             | itemFontColor             |
| iconColor             | itemIconColor             |

-   New method for identifying current active item in DrawerNavGroup. Each item now has a unique `id` property and the DrawerNavGroup has a prop for `activeItem` that identifies the item that should be active.

    ```tsx
    /* Old syntax */
    <DrawerNavGroup
        items={[
            {
                title: 'Item 1',
                active: true,
            },
        ]}
    />

    /* New syntax */
    <DrawerNavGroup
      	activeItem={'item1id'}
        items={[
            {
                title: 'Item 1',
              	itemID: 'item1id',
            },
        ]}
    />
    ```

## v2.1.0

-   Adds `<InfoListTag>` Component
    -   Displays additional information inside an InfoListItem.
-   Adds `<UserMenu>` Component
    -   Avatar which opens a Menu when clicked.
-   Misc bug fixes

## v2.0.0

-   Library converted to TypeScript to provide strong typings for TS projects.
-   Adds new components for:
    -   `<Drawer>`
    -   `<DrawerHeader>`
    -   `<DrawerSubheader>`
    -   `<DrawerBody>`
    -   `<DrawerNavGroup>`
    -   `<DrawerFooter>`
    -   `<DrawerLayout>`
-   **Breaking Change:** Simpler import syntax - _default_ imports will no longer work.

    ```typescript
    /* Old import syntax */
    import ComponentName from '@pxblue/react-components/core/ComponentName';

    /* New import syntax */
    import { ComponentName } from '@pxblue/react-components';
    ```

## v1.1.0

Adds a new component for `<EmptyState>`

## v1.0.0

Fixes a bug in icon size for inline `<ChannelValue>` components

## v0.0.1

Initial beta release
