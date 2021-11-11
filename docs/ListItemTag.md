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

### Classes

You can override the classes used by Brightlayer UI by passing a `classes` prop. It supports the following keys:

| Name | Description                        |
| ---- | ---------------------------------- |
| root | Styles applied to the root element |
