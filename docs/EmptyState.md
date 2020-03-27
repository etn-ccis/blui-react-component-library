# EmptyState
The EmptyState component is an element that can be used as a placeholder when no data is present (such as an empty list, or a placeholder page for future content). This is only used when no data is available, rather than during loading (see [empty states pattern](https://pxblue.github.io/patterns/empty-states)).

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 200px" alt="Empty State component with action button" src="./images/emptyState.png">
</div>

## Usage

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="Empty State Anatomy" src="./images/emptyStateAnatomy.png">
</div>

```typescript
import { EmptyState } from '@pxblue/react-components';

<EmptyState
    icon={<AlertIcon style={{ fontSize: '100px', marginBottom: '15px' }} />}
    title={"No Alarms Found"}
/>
```
 
## API

<div style="overflow: auto;">

| Prop Name   | Description                             | Type              | Required | Default |
|-------------|-----------------------------------------|-------------------|----------|---------|
| actions     | Additional components to render below   | `React.Component` | no       |         |
| classes     | Style overrides                         | `StyleRules`      | no       |         |    
| icon        | The primary icon                        | `React.Component` | yes      |         |
| description | The secondary text to display           | `string`          | no       |         | 
| title       | The main text to display                | `string`          | yes      |         |

</div>

### Classes
You can override the classes used by PX Blue by passing a `classes` prop. It supports the following keys:

| Name             | Description                                 |
|------------------|---------------------------------------------|
| root             | Styles applied to the root element          |
| actions          | Styles applied to the actions               |
| description      | Styles applied to the description           |
| icon             | Styles applied to the icon                  |
| title            | Styles applied to the title                 |