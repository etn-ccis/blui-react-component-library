# Empty State

The `<EmptyState>` component is an element that can be used as a placeholder when no data is present (such as an empty list, or a placeholder page for future content). This is only used when no data is available, rather than during loading (see [empty states pattern](https://brightlayer-ui.github.io/patterns/empty-states)).

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 200px" alt="Empty State component with action button" src="./images/emptyState.png">
</div>

## Usage

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="Empty State Anatomy" src="./images/emptyStateAnatomy.png">
</div>

```tsx
import { EmptyState } from '@brightlayer-ui/react-components';

<EmptyState icon={<AlertIcon fontSize={'inherit'} />} title={'No Alarms Found'} />;
```

## API

<div style="overflow: auto;">

| Prop Name   | Description                           | Type                | Required | Default |
| ----------- | ------------------------------------- | ------------------- | -------- | ------- |
| actions     | Additional components to render below | `ReactNode`         | no       |         |
| classes     | Style overrides                       | `EmptyStateClasses` | no       |         |
| icon        | The primary icon                      | `ReactNode`         | yes      |         |
| description | The secondary text to display         | `ReactNode`         | no       |         |
| title       | The main text to display              | `ReactNode`         | yes      |         |

</div>

Any other props supplied will be provided to the root element (`div`).

### Classes

You can override the classes used by Brightlayer UI by passing a `classes` prop. It supports the following keys:

| Name        | Description                        |
| ----------- | ---------------------------------- |
| root        | Styles applied to the root element |
| actions     | Styles applied to the actions      |
| description | Styles applied to the description  |
| icon        | Styles applied to the icon         |
| title       | Styles applied to the title        |
