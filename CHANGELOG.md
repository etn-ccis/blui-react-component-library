# Changelog

## 5.3.1 (August 6, 2021)

### Added

-   Improved intellisense popup documentation with links to full component documentation.

### Fixed

-   Issue where `<UserMenu>` Avatar `onClick` prop overrides the open behavior ([#307](https://github.com/pxblue/react-component-library/issues/307)).
-   `<UserMenu>` menuGroups `iconColor` prop bug ([#305](https://github.com/pxblue/react-component-library/issues/305)).

## 5.3.0 (June 30, 2021)

### Added

-   Added `<AppBar>` component which will expand and collapse based on scroll position.
-   Added `wrapInfo` property onto `<InfoListItem>`.

## 5.2.0 (May 28, 2021)

### Changed

-   Update `<UserMenu>` to responsively display a bottom sheet in place of an overlay menu.

### Added

-   Added `disableRailTooltip` to `<DrawerRailItem>`.

## 5.1.1 (April 7, 2021)

### Fixed

-   Fixed misaligned menu icon in `<DrawerHeader>`.

## 5.1.0 (March 29, 2021)

### Changed

-   Some default colors in `<InfoListItem>`, `<Drawer>` and `<ScoreCard>` headers to work with @pxblue/react-themes version 6+.
-   Some default styles on `<ScoreCard>`, `<UserMenu>`, and `<EmptyState>` text elements.
-   Component sizing updated to use rems to better respond to system font size changes.

### Added

-   `openOnHoverDelay` to `<Drawer>` to alter open-on-hover delay for closed persistent drawers.
-   peerDependency support for using with React 17

## 5.0.0 (February 16, 2021)

### Changed

-   Updated styles for `<DropdownToolbar>` to support Icon Button or plain icon for `navigationIcon`.
-   Updated default styles for `<Drawer>`.
-   `activeItem` must now specified on the `<Drawer>` component instead of `<DrawerNavGroup>`.
-   Moved `titleColor` prop from shared props to the local props for `<DrawerNavGroup>`.
-   Some of the class names for style overrides have changed

### Added

-   Additional configuration properties for `<Drawer>`:
    -   `sideBorder` gives the `<Drawer>` a slight border instead of a drop shadow.
    -   `disableActiveItemParentStyle` disables the bold text style for active item's parent elements.
    -   `variant` now supports 'rail' option.
-   Additional configuration options for `<DrawerSubheader>` and `<DrawerFooter>`:
    -   `hideContentOnCollapse` configures if content in these areas should be hidden or remain visible when the drawer is collapsed.
    -   `divider` configures whether to show a dividing line separating the component from other content.
-   Added new property `openOnHover` to `<Drawer>`.
-   Ability to build `<Drawer>` contents declaratively instead of using `items` prop.

## 4.2.0 (December 10, 2020)

### Changed

-   Updated styles for default `<ListItemTag>` and `<Hero>`.

### Added

-   Adds `hidden` prop to the Drawer `NavItem` to conditionally omit items from the `<Drawer>` or `<UserMenu>`.

### Fixed

-   Mismatched transition speeds on the `<Drawer>` and `<DrawerLayout>`
-   Use more efficient icon import syntax for smaller bundle

## v4.1.1 (September 29, 2020)

### Changed

-   Hides Drawer Nav Item's title when the `<Drawer>` collapses in the `persistent` variant.
-   Improved some icon flipping logic for RTL.

## v4.1.0 (August 28, 2020)

### Added

-   Adds `iconAlign` prop to `<InfoListItem>` to align icon left (default), center or right.
-   Adds optional prop to the `<DrawerHeader>` to add a bottom divider.
-   Adds `<DropdownToolbar>` component.

### Fixed

-   Fixes RTL support issues in the `<DrawerLayout>`/`<Drawer>`
-   Fixes an issue with text wrapping in the `<InfoListItem>` subtitle
-   Fixes an issue with hover color alpha channel in `<InfoListItem>`

## v4.0.2 (June 30, 2020)

### Added

-   Adds `info` prop to `<InfoListItem>` to support a third line of text.

### Changed

-   Updates several prop types to `ReactNode` to support wider range of input values.

## v4.0.1 (May 20, 2020)

-   Themes updated to use [@pxblue/colors](https://www.npmjs.com/package/@pxblue/colors) version 3.0.0.

## v4.0.0 (May 8, 2020)

### Added

-   Style-related properties are now overridable by the `classes` prop in each component.

### Changed

-   Supplemental properties are now spread to the root component for each PX Blue component.
-   Changed component font colors to address potential accessibility issues.

**Breaking Changes:**

-   Theme usage updated to Material UI v4+ format (requires v5+ of @pxblue/react-themes).

## v3.0.3 (April 17, 2020)

### Fixed

-   Fixes IE 11 issue where persistent `<Drawer>` will not close.
-   Fixes some spacing issues when using the `<DrawerLayout>`.

## v3.0.0 (March 26, 2020)

### Added

-   Adds support for nested items in the `<Drawer>` component.
-   Additional styling props added to `<Drawer>`.

### Changed

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

## v2.1.0 (February 12, 2020)

### Added

-   Adds `<InfoListTag>` Component
    -   Displays additional information inside an InfoListItem.
-   Adds `<UserMenu>` Component
    -   Avatar which opens a Menu when clicked.

### Fixed

-   Misc bug fixes.

## v2.0.0 (February 3, 2020)

### Added

-   Adds new components for:
    -   `<Drawer>`
    -   `<DrawerHeader>`
    -   `<DrawerSubheader>`
    -   `<DrawerBody>`
    -   `<DrawerNavGroup>`
    -   `<DrawerFooter>`
    -   `<DrawerLayout>`

### Changed

-   Library converted to TypeScript to provide strong typings for TS projects.
-   **Breaking Change:** Simpler import syntax - _default_ imports will no longer work.

    ```typescript
    /* Old import syntax */
    import ComponentName from '@pxblue/react-components/core/ComponentName';

    /* New import syntax */
    import { ComponentName } from '@pxblue/react-components';
    ```

## v1.1.0 (October 29, 2019)

### Added

Adds a new component for `<EmptyState>`.

## v1.0.0 (June 17, 2019)

### Fixed

Fixes a bug in icon size for inline `<ChannelValue>` components.

## v0.0.1 (May 24, 2019)

Initial beta release
