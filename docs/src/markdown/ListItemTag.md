# List Item Tag

`<ListItemTag>` is a text item with a colored background and rounded corners that is used to tag lists.

<img width="100%" alt="List Item Tag" src="./images/listItemTag.png">

## Usage

```tsx
import { ListItemTag } from '@brightlayer-ui/react-components';

<ListItemTag label={'Foo Bar'} backgroundColor={'gold'} fontColor={'black'} />;
```

## API

<div style="overflow: auto;">

| Prop Name       | Description                   | Type     | Required | Default                     |
| --------------- | ----------------------------- | -------- | -------- | --------------------------- |
| label           | The label text                | `string` | yes      |                             |
| fontColor       | Color of the label            | `string` | no       | varies for light/dark theme |
| backgroundColor | Color of the label background | `string` | no       | varies for light/dark theme |

</div>

Any other props will be provided to the root element [**Material UI Typography**](https://material-ui.com/api/typography/).

### Style Overrides

You can override the default styles used by Brightlayer UI by:

-   using the `sx` prop
-   passing a `classes` prop with keys from the Name column below
-   using the `Global CSS Class` in your main stylesheet

For more details on styling options check out our [Styling Guide](https://github.com/brightlayer-ui/react-component-library/tree/master/docs#style-guide).

| Name | Global CSS Class      | Description                        |
| ---- | --------------------- | ---------------------------------- |
| root | .BluiListItemTag-root | Styles applied to the root element |
