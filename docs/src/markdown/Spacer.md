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

### Style Overrides

You can override the default styles used by Brightlayer UI by:

-   using the `sx` prop
-   passing a `classes` prop with keys from the Name column below
-   using the `Global CSS Class` in your main stylesheet

For more details on styling options check out our [Styling Guide](https://github.com/brightlayer-ui/react-component-library/tree/master/docs#style-guide).

| Name | Global CSS Class | Description                        |
| ---- | ---------------- | ---------------------------------- |
| root | .BluiSpacer-root | Styles applied to the root element |
