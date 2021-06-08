# Dropdown Toolbar

The `<AppBar>` component is an extension of the default AppBar from Material UI that can be resized / collapsed as the page is scrolled. It supports three modes:

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="Dropdown Toolbar" src="./images/appBar.png">
    <img width="100%" style="max-width: 600px" alt="Dropdown Toolbar" src="./images/appBarCollapsed.png">
</div>

## Usage

```tsx
import { AppBar } from '@pxblue/react-components';
...
// Default: AppBar will resize between collapsedHeight and expandedHeight as the window is scrolled
<AppBar mode={'dynamic'}>
  {/* Contents */}
</AppBar>

// App Bar will stay fixed at the collapsedHeight size
<AppBar mode={'collapsed'}>
  {/* Contents */}
</AppBar>

// App Bar will stay fixed at the expandedHeight size
<AppBar mode={'expanded'}>
  {/* Contents */}
</AppBar>
```

## API

<div style="overflow: auto;">

| Prop Name              | Description                                      | Type                                         | Required | Default       |
| ---------------------- | ------------------------------------------------ | -------------------------------------------- | -------- | ------------- |
| animationDuration      | Length of the collapse / expand animation (ms)   | `number`                                     | no       | theme default |
| backgroundImage        | Image to use as the app bar background           | `string`                                     | no       |               |
| backgroundImageOpacity | Opacity to use to blend the background image     | `number`                                     | no       | 0.3           |
| classes                | Style Overrides                                  | `AppBarClasses`                              | no       |               |
| collapsedHeight        | Height of the AppBar when collapsed              | `number`                                     | no       | theme default |
| expandedHeight         | Height of the AppBar when expanded               | `number`                                     | no       | 200           |
| mode                   | Behavior mode of the App Bar                     | `'expanded'` \| `'collapsed'` \| `'dynamic'` | no       | 'dynamic'     |
| scrollThreshold        | Distance to scroll before collapsing the app bar | `number`                                     | no       | 100           |

</div>

Any other props supplied will be provided to the root element ([`AppBar`](https://material-ui.com/api/appbar/)).

### Classes

You can override the classes used by PX Blue by passing a `classes` prop. It supports the following keys:

| Name       | Description                            |
| ---------- | -------------------------------------- |
| root       | Styles applied to the root element     |
| background | Styles applied to the background image |
