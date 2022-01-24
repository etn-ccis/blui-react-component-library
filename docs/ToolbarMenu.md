# Toolbar Menu

The `ToolbarMenu` component is used to display a dropdown menu with label. The Menu can be populated via the `menuGroups` prop, or can be entirely customized by supplying your own `<Menu>` via the `menu` prop.

## Usage

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="Toolbar Menu" src="./images/ToolbarMenuAnatomy.png">
</div>

```tsx
import { ToolbarMenu } from '@brightlayer-ui/react-components';
...
const useStyles  = makeStyles((theme: Theme) =>
    createStyles({
            labelContent: {
            '& > span': {
                display: 'flex',
            }
        },
        icon: {
            marginRight: `${theme.spacing(1)}px`,
        },
    })
);

<ToolbarMenu
    label={
        <span className={classes.labelContent}>
            <GradeA className={classes.icon} />
            <span>Subtitle</span>
        </span>
    }
    menuGroups={[
      {
        items: [{
            title: "Menu Item 1";
            onClick: () => {};
          },
          {
            title: "Menu Item 2";
            onClick: () => {};
          },
          {
            title: "Menu Item 3";
            onClick: () => {};
          }
        ]
      }
    ]}
/>
```

## API

<div style="overflow: auto;">

| Prop Name      | Description                                  | Type                  | Required | Default |
| -------------- | -------------------------------------------- | --------------------- | -------- | ------- |
| classes        | Style Overrides                              | `ToolbarMenuClasses`  | no       |         |
| menu           | Custom content to be displayed in the menu   | Material-UI `Menu`    | no       |         |
| menuGroups     | Groups of menu items to display              | `ToolbarMenuGroups[]` | no       |         |
| MenuProps      | Property overrides for the MUI Menu          | `MenuProps`           | no       |         |
| navigationIcon | Navigation Icon to be displayed              | `JSX.Element`         | no       |         |
| onClose        | Function called when the menu is closed      | `Function`            | no       |         |
| onOpen         | Function called when the menu is opened      | `Function`            | no       |         |
| label          | Custom content for label text / icon + label | `ReactNode`           | yes      |         |

</div>
### Classes

You can override the classes used by Brightlayer UI by passing a `classes` prop. It supports the following keys:

| Name          | Description                                   |
| ------------- | --------------------------------------------- |
| root          | Styles applied to the root element            |
| label         | Styles applied to the label text              |
| dropdownArrow | Styles applied to the dropdownArrow container |
| menuItem      | Styles applied to the menuItem                |
