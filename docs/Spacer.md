# Spacer

An invisible utility component that acts as a spacer element in various layouts. It works with flexbox sizing or fixed sizing.

<div style="width: 100%; text-align:center">
    <img width="40%" alt="Spacer used in Drawer Body" src="./images/spacer.png"><br/>
</div>

## Usage

```tsx
import { Spacer } from '@brightlayer-ui/react-components';
...
<div style={{display: 'flex'}}>
    {/* Left Content */}
    <Spacer flex={1}/>
    {/* Right Content */}
</div>
```

## API

<div style="overflow: auto;">

| Prop Name | Description                             | Type                 | Required | Default | Examples                  |
| --------- | --------------------------------------- | -------------------- | -------- | ------- | ------------------------- |
| classes   | Classes object to override styles       | `SpacerClasses`      | no       |         | {root: 'customRootClass'} |
| flex      | Flex grow/shrink value for flex layouts | `number`             | no       | 1       |                           |
| height    | Height (in px) for static layouts       | `number` \| `string` | no       |         |                           |
| width     | Width (in px) for static layouts        | `number` \| `string` | no       |         |                           |

</div>

Any other props supplied will be provided to the root element (`div`).

### Classes

You can override the classes used by Brightlayer UI by passing a `classes` prop. It supports the following keys:

| Name | Description                        |
| ---- | ---------------------------------- |
| root | Styles applied to the root element |
