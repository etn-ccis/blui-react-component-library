# Change Log

## v3.0.0
- Adds support for nested items in the Drawer component

**Breaking Changes:** 
- DrawerNavGroup prop `content` has been renamed to `titleContent`.
- New method for identifying current active item in DrawerNavGroup. Each item now has a unique `id` property and the DrawerNavGroup has a prop for `activeItem` that identifies the item that should be active.
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
- Adds InfoListTag Component
    - Displays additional information inside an InfoListItem.
- Adds UserMenu Component
    - Avatar which opens a Menu when clicked.
- Misc bug fixes

## v2.0.0
- Library converted to TypeScript to provide strong typings for TS projects.
- Adds new components for:
    - Drawer
    - DrawerHeader
    - DrawerSubheader
    - DrawerBody
    - DrawerNavGroup
    - DrawerFooter
    - DrawerLayout
- **Breaking Change:** Simpler import syntax - _default_ imports will no longer work.
    ```typescript
    /* Old import syntax */
    import ComponentName from '@pxblue/react-components/core/ComponentName';

    /* New import syntax */
    import { ComponentName } from '@pxblue/react-components';
    ```

## v1.1.0
Adds a new component for EmptyState

## v1.0.0 
Fixes a bug in icon size for inline ChannelValue components

## v0.0.1
Initial beta release
