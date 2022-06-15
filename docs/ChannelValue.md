# Channel Value

The `<ChannelValue>` component is used to display a channel value (and units). This component abstracts the styles used to display the channel and units as well as an optional inline icon. These are used as part of the [`<Hero>`](./Hero.md) component, but can also be used inline (e.g., in a list).

<div style="text-align:center; width: 100%">
    <img width="100%" style="max-width: 600px" alt="Channel Value in Hero" src="./images/heroes.png">
    <hr />
    <img width="100%" style="max-width: 600px" alt="Channel Value in a list item" src="./images/channelValue.png">
</div>

## Usage

<div style="text-align:center; width: 100%">
    <img width="100%" style="max-width: 400px" alt="Channel Value Anatomy" src="./images/channelValueAnatomy.png">
</div>

```tsx
import { ChannelValue } from '@brightlayer-ui/react-components';
...
<ChannelValue value={100} units={'%'} icon={<Icon/>} />
```

## API

<div style="overflow: auto;">

| Prop Name | Description                                    | Type                             | Required | Default   |
| --------- | ---------------------------------------------- | -------------------------------- | -------- | --------- |
| color     | The color of the font                          | `string`                         | no       | 'inherit' |
| classes   | Style overrides                                | `ChannelValueClasses`            | no       |           |
| fontSize  | The size of the font                           | `string` \| `number`             | no       | 'inherit' |
| icon      | The inline icon to display                     | `JSX.Element`                    | no       |           |
| prefix    | Show units before the value                    | `boolean`                        | no       | false     |
| units     | The text to display for the units (light text) | `string`                         | no       |           |
| unitSpace | Show/Hide spacing between the value and units  | `'auto'` \| `'hide'` \| `'show'` | yes      | 'auto'    |
| value     | The value (bold text) to display               | `string` \| `number`             | yes      |           |

</div>

Any other props supplied will be provided to the root element (`span`).

### Style Overrides

You can override the default styles used by Brightlayer UI by:

-   using the `sx` prop
-   passing a `classes` prop with keys from the `Name` column below
-   using the `Global CSS Class` in your main stylesheet

For more details on styling options check out our [Styling Guide](https://github.com/brightlayer-ui/react-component-library/tree/master/docs#style-guide).

| Name  | Global CSS Class        | Description                         |
| ----- | ----------------------- | ----------------------------------- |
| root  | .BluiChannelValue-root  | Styles applied to the root element  |
| icon  | .BluiChannelValue-icon  | Styles applied to the icon element  |
| text  | .BluiChannelValue-text  | Styles applied to the text element  |
| units | .BluiChannelValue-units | Styles applied to the units element |
| value | .BluiChannelValue-value | Styles applied to the value element |
