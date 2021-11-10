# User Menu

The `<UserMenu>` is an Avatar that opens a Menu when clicked. It is typically used in the top-right corner of an application and indicates who is logged in. By default, the Menu will responsively transition to a bottom sheet for mobile views (if passing in a custom menu, you will be responsible for handling any responsiveness on your content). Setting the `useBottomSheetAt` prop to zero will disable the responsiveness.

<div style="width: 100%; text-align: center; margin-bottom: 16px">
<img width="30%" alt="UserMenu Avatar" src="./images/userMenuAvatar.png">
</div>

<div style="align-items: center; display:flex; justify-content: space-around; margin-bottom: 16px">
<img width="30%" alt="UserMenu Opened" src="./images/userMenuOpened.png">
<img width="35%" alt="UserMenu Opened Mobile" src="./images/userMenuOpenedMobile.png">
</div>

The Menu can be populated via the `menuGroups` prop, or can be entirely customized by supplying your own `<Menu>`.

## Usage

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 500px" alt="User Menu Anatomy" src="./images/userMenuAnatomy.png">
</div>

```tsx
import { UserMenu } from '@brightlayer-ui/react-components';
import { Avatar, Menu } from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import Settings from '@material-ui/icons/Settings';
import Send from '@material-ui/icons/Send';

const avatar = <Avatar><SendIcon/></Avatar>;
...
/* Using menuGroups prop */
<UserMenu avatar={avatar} menuGroups={[
    {
       items: [
           {
               title: 'Log Out',
               icon: <Send />,
           },
           {
               title: 'Account Settings',
               icon: <Settings />,
           },
           {
               title: 'Contact Us',
               icon: <Email />,
           },
       ],
    },
]} />

/* Using menu prop */
<UserMenu avatar={avatar} menu={<Menu/>} />

```

## API

<div style="overflow: auto;">

| Prop Name        | Description                                                                                                         | Type               | Required | Default                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------ | -------- | ----------------------------- |
| avatar           | MUI Avatar that displays                                                                                            | `Avatar`           | yes      |                               |
| classes          | Style overrides                                                                                                     | `UserMenuClasses`  | no       |                               |
| menu             | Custom MUI Menu displayed when Avatar is clicked                                                                    | Material-UI `Menu` | no       |                               |
| menuGroups       | Groups of menu items that display                                                                                   | `UserMenuGroups[]` | no       |                               |
| menuSubtitle     | Subtitle shown when menu is open                                                                                    | `string`           | no       |                               |
| menuTitle        | Title shown when menu is open                                                                                       | `string`           | no       |                               |
| MenuProps        | Property overrides for the MUI Menu                                                                                 | `MenuProps`        | no       |                               |
| onClose          | Function called when the menu is closed                                                                             | `Function`         | no       |                               |
| onOpen           | Function called when the menu is opened                                                                             | `Function`         | no       |                               |
| useBottomSheetAt | Window pixel width at which the responsive bottom sheet menu is triggered (set to 0 to disable responsive behavior) | `number`           | no       | `theme.breakpoints.values.sm` |

</div>

Any other props supplied will be provided to the root element (`div`).

### Classes

You can override the classes used by Brightlayer UI by passing a `classes` prop. It supports the following keys:

| Name        | Description                               |
| ----------- | ----------------------------------------- |
| root        | Styles applied to the root element        |
| bottomSheet | Styles applied to responsive bottom sheet |

### User Menu Groups Object

The `menuGroups` prop of the `<UserMenu>` includes many properties from the [`<DrawerNavGroup>`](https://brightlayer-ui-components.github.io/react/?path=/info/components-drawer--get-read-me-story) array found within a [`<DrawerBody>`](https://brightlayer-ui-components.github.io/react/?path=/info/components-drawer--get-read-me-story).

<div style="overflow: auto;">

| Prop Name | Description                         | Type             | Required | Default |
| --------- | ----------------------------------- | ---------------- | -------- | ------- |
| fontColor | The color used for the text         | `string`         | no       |         |
| iconColor | The color used for icons            | `string`         | no       |         |
| items     | List of navigation items to render  | `UserMenuItem[]` | yes      |         |
| title     | Text to display in the group header | `string`         | no       |         |

</div>

### User Menu Item Object

<div style="overflow: auto;">

| Attribute   | Description                         | Type          | Required | Default |
| ----------- | ----------------------------------- | ------------- | -------- | ------- |
| chevron     | Show chevron icon to the right      | `boolean`     | no       | false   |
| divider     | Show a divider line below the item  | `boolean`     | no       | true    |
| icon        | A component to render for the icon  | `JSX.Element` | no       |         |
| onClick     | A function to execute when clicked  | `function`    | no       |         |
| statusColor | Status stripe and icon color        | `string`      | no       |         |
| subtitle    | The text to show on the second line | `string`      | no       |         |
| title       | The text to show on the first line  | `string`      | yes      |         |

</div>
