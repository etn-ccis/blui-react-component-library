# Changelog

## 6.2.0 (January 24, 2023)

### Fixed

-   DOM nesting console warnings in `<InfoListItem>`'s `title`, `subtitle` and `info` props ([#644](https://github.com/etn-ccis/blui-react-component-library/issues/644)).
-   Rendering of chevron and right component in `<InfoListItem>` at the same time ([#364](https://github.com/etn-ccis/blui-react-component-library/issues/364)).

## v6.1.2 (December 7, 2022)

### Updated

-   Remove dependency on @mui/styles ([#633](https://github.com/etn-ccis/blui-react-component-library/issues/633)).

## v6.1.1 (November 1, 2022)

### Fixed

-   `hideContentOnCollapse` prop of `<DrawerFooter>` not hiding footer content ([#484](https://github.com/etn-ccis/blui-react-component-library/issues/484)).
-   Temporary drawer rendering, due to incorrectly passing open prop ([#486](https://github.com/etn-ccis/blui-react-component-library/issues/486)).
-   `activeItemFontColor`, `activeItemIconColor` prop of `<DrawerRailItem>` not updating `font color` and `icon color` of active rail item. ([#486](https://github.com/etn-ccis/blui-react-component-library/issues/486)).
-   `condensed` prop of `<DrawerRailItem>` not appling height and width `56X56` to all rail items. ([#541](https://github.com/etn-ccis/blui-react-component-library/issues/541)).
-   Styling of `nonClickableIcon` in `<DrawerHeader>` not applying properly ([#562](https://github.com/etn-ccis/blui-react-component-library/issues/562)).
-   `animationDuration` not being applied properly to `<AppBar>` component.
-   DOM Nesting warnings when passing custom content to `title` or `description` of `<EmptyState>`.

## v6.1.0 (June 24, 2022)

### Changed

-   Components are now styled using use the new MUI styled engine and extend the sx prop.

## v6.0.0 (April 1, 2022)

### Changed

-   Components are now built to work with Material UI v5 ([#352](https://github.com/etn-ccis/blui-react-component-library/issues/352)).
-   In `<Hero>` component, `fontSize`, `value`, `valueIcon`, `valueColor` and `units` props have been replaced by `ChannelValueProps` prop, which will allow you to specify any props on the underlying `<ChannelValue>` component. ([#365](https://github.com/etn-ccis/blui-react-component-library/issues/365)).

### Removed

-   Quick set options for fontSize ('normal' and 'small') have been removed in the `<Hero>` / `<ChannelValue>` components — if you were using these options previously, they can be replaced with '1.25rem' and '1rem', respectively, e.g.:
    -   `<Hero ChannelValueProps={{ fontSize: '1rem' }} />`
-   DropdownToolbar. You should switch to using the `<ToolbarMenu>` component inside of a MUI Toolbar instead. ([#353](https://github.com/etn-ccis/blui-react-component-library/issues/353)).

## v5.4.0 (February 8, 2022)

### Added

-   Added `chevronColor` property to `<InfoListItem>` and SharedProps of `<Drawer>`.
-   Added class override for `chevron` on `<InfoListItem>` and `<DrawerNavItem>`.
-   Added `titleDivider` property onto `<DrawerNavGroup>`. ([#315](https://github.com/etn-ccis/blui-react-component-library/issues/315))
-   Added 1rem default padding to the root styles of `<EmptyState>`. ([#320](https://github.com/etn-ccis/blui-react-component-library/issues/320))
-   Added new property `unitSpace` to `<ChannelValue>` to manage spacing between the value and units. ([#350](https://github.com/etn-ccis/blui-react-component-library/issues/350))
-   Added `<ToolbarMenu>` component. ([#351](https://github.com/etn-ccis/blui-react-component-library/issues/351))
-   Added Deprecation warnings for DropdownToolbar component that will be removed in version 6.0.0.

## v5.3.3 (December 6, 2021)

### Fixed

-   Avoid rendering of HTML elements in `<InfoListItem>`'s DOM tree when `subtitle` or `info` prop is not available. ([#318](https://github.com/etn-ccis/blui-react-component-library/issues/318))

## v5.3.2 (November 11, 2021)

### Changed

-   Changed package namespace from `@pxblue` to `@brightlayer-ui`.

## Package Migration Notice

Previous versions listed after this indicator refer to our deprecated `@pxblue` packages.

---

## v5.3.2 (November 11, 2021)

### Updated

-   Import material-ui components via default imports instead of named imports to reduce overall bundle size.

## v5.3.1 (August 9, 2021)

### Added

-   Improved intellisense popup documentation with links to full component documentation.

### Fixed

-   Issue where `<UserMenu>` Avatar `onClick` prop overrides the open behavior ([#307](https://github.com/pxblue/react-component-library/issues/307)).
-   `<UserMenu>` menuGroups `iconColor` prop bug ([#305](https://github.com/pxblue/react-component-library/issues/305)).

## v5.3.0 (June 30, 2021)

### Added

-   Added `<AppBar>` component which will expand and collapse based on scroll position.
-   Added `wrapInfo` property onto `<InfoListItem>`.

## v5.2.0 (May 28, 2021)

### Changed

-   Update `<UserMenu>` to responsively display a bottom sheet in place of an overlay menu.

### Added

-   Added `disableRailTooltip` to `<DrawerRailItem>`.

## v5.1.1 (April 7, 2021)

### Fixed

-   Fixed misaligned menu icon in `<DrawerHeader>`.

## v5.1.0 (March 29, 2021)

### Changed

-   Some default colors in `<InfoListItem>`, `<Drawer>` and `<ScoreCard>` headers to work with @pxblue/react-themes version 6+.
-   Some default styles on `<ScoreCard>`, `<UserMenu>`, and `<EmptyState>` text elements.
-   Component sizing updated to use rems to better respond to system font size changes.

### Added

-   `openOnHoverDelay` to `<Drawer>` to alter open-on-hover delay for closed persistent drawers.
-   peerDependency support for using with React 17

## v5.0.0 (February 16, 2021)

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

## v4.2.0 (December 10, 2020)

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
