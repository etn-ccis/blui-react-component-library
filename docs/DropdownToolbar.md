# Dropdown Toolbar
The `<DropdownToolbar>` component is used to display a toolbar with a dropdown.

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="Dropdown Toolbar" src="./images/dropdownToolbar.png">
</div>

## Usage

```tsx
import { DropdownToolbar } from '@pxblue/react-components';
...
<DropdownToolbar title={"Title"} subtitleLabel={"Subtitle"} menuItems={[
  {
    label: "Menu Item 1";
    onClick: () => {};
  },
  {
     label: "Menu Item 2";
    onClick: () => {};
  },
  {
     label: "Menu Item 3";
    onClick: () => {};
  }
]}/>
```

### API

<div style="overflow: auto;">

| Prop Name      | Description                                    | Type                     | Required | Default   |
| -------------- | ---------------------------------------------- | ------------------------ | -------- | --------- |
| classes        | Style Overrides                                | `DropdownToolbarClasses` | no       |           |
| customMenu     | Custom content to be displayed in the menu     | `JSX.Element`            | no       |           |
| menuItems      | Items to be displayed in the menu              | `ToolbarMenuItem[]`      | no       |           |
| navigationIcon | Navigation Icon to be displayed                | `JSX.Element`            | no       |           |
| subtitleLabel  | Subtitle text to be displayed                  | `string` | `undefined`   | yes      |           |
| title          | Title text to be displayed                     | `string`                 | yes      |           |

</div>

#### ToolbarMenuItem

| Prop Name | Description                                    | Type                   | Required | Default   |
| --------- | ---------------------------------------------- | ---------------------- | -------- | --------- |
| label     | Label used for a menu item                     | `string`               | yes      |           |
| onClick   | Function to call when menu item is clicked     | `Function`             | yes      |           |

#### Classes

You can override the classes used by PX Blue by passing a `classes` prop. It supports the following keys:

| Name                  | Description                          |
| --------------------- | ------------------------------------ |
| root                  | Styles applied to the root element   |
| menuItem              | Styles applied to the menu item      |
| navigationIconWrapper | Styles applied to the navigationIcon |
| subtitle              | Styles applied to the subtitle text  |
| title                 | Styles applied to the title text     |