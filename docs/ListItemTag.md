# ListItemTag
ListItemTag is a text item with a colored background and rounded corners that is used to tag lists.

<img width="100%" alt="List Item Tag" src="./images/listItemTag.png">

## Usage

```typescript
import { ListItemTag } from '@pxblue/react-components';

<ListItemTag label={"Foo Bar"} backgroundColor={'gold'} fontColor={'black'} />
```

## API

Besides what's listed below, as an extension of [Material UI's Typography API](https://material-ui.com/api/typography/), the component will pass in all extra props.

<div style="overflow: auto;">

| Prop Name       | Description                   | Type     | Required | Default   | 
| --------------- | ----------------------------- | -------- | -------- | --------- | 
| label           | The label text                | `string` | yes      |           |
| fontColor       | Color of the label            | `string` | no       |           | 
| backgroundColor | Color of the label background | `string` | no       |           | 

</div>
