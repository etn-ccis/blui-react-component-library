# Info List Item

The `<InfoListItem>` is intended to be used in [`<List>`](https://material-ui.com/api/list/) views. It positions a title as well as optional subtitle(s), icon, and status stripe.

<img width="100%" alt="Info List Items in a variety of styles" src="./images/infoListItem.png">

## Usage

```tsx
import { InfoListItem } from '@brightlayer-ui/react-components';
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp } from '@brightlayer-ui/icons-mui';
import * as Colors from '@brightlayer-ui/colors';
...
<InfoListItem
    title={'Status'}
    divider={'full'}
    statusColor={Colors.green[500]}
    subtitleSeparator={'/'}
    icon={<Leaf color={'inherit'} />}
/>
```

## API

<div style="overflow: auto;">

| Prop Name         | Description                                      | Type                                 | Required | Default        |
| ----------------- | ------------------------------------------------ | ------------------------------------ | -------- | -------------- |
| avatar            | Show colored background for icon                 | `boolean`                            | no       | false          |
| backgroundColor   | The color used for the background                | `string`                             | no       |                |
| chevron           | Add a chevron icon on the right                  | `boolean`                            | no       | false          |
| classes           | Style overrides                                  | `InfoListItemClasses`                | no       |                |
| dense             | Smaller height row with less padding             | `boolean`                            | no       | false          |
| divider           | Show a row separator below the row               | `'full'` \| `'partial'`              | no       |                |
| fontColor         | Main text color                                  | `string`                             | no       |                |
| hidePadding       | Remove left padding if no icon is used           | `boolean`                            | no       | false          |
| icon              | A component to render for the icon               | `JSX.Element`                        | no       |                |
| iconAlign         | Icon alignment when `avatar` is set to false     | `'left'` \| `'center'` \| `'right'`  | no       | 'left'         |
| iconColor         | Color override for the row icon                  | `string`                             | no       |                |
| info              | The text to show on the third line               | `string` \| `Array<React.ReactNode>` | no       |                |
| leftComponent     | Component to render on the left side             | `ReactNode`                          | no       |                |
| onClick           | A function to execute when clicked               | `function`                           | no       |                |
| rightComponent    | Component to render on the right side            | `ReactNode`                          | no       |                |
| ripple            | Whether to apply material ripple effect on click | `boolean`                            | no       | false          |
| statusColor       | Status stripe and icon color                     | `string`                             | no       |                |
| subtitle          | The text to show on the second line              | `string` \| `Array<React.ReactNode>` | no       |                |
| subtitleSeparator | Separator character for subtitle and info        | `string`                             | no       | '·' ('\u00B7') |
| title             | The text to show on the first line               | `ReactNode`                          | yes      |                |
| wrapInfo          | Whether to wrap info on overflow                 | `boolean`                            | no       | false          |
| wrapSubtitle      | Whether to wrap subtitle on overflow             | `boolean`                            | no       | false          |
| wrapTitle         | Whether to wrap title on overflow                | `boolean`                            | no       | false          |

</div>

Any other props will be provided to the root element [**Material UI ListItem**](https://material-ui.com/api/list-item/).

### Classes

You can override the classes used by Brightlayer UI by passing a `classes` prop. It supports the following keys:

| Name           | Description                                         |
| -------------- | --------------------------------------------------- |
| root           | Styles applied to the root element                  |
| avatar         | Styles applied to the Avatar element                |
| divider        | Styles applied to the divider element               |
| icon           | Styles applied to the icon element                  |
| info           | Styles applied to the third line of text element    |
| listItemText   | Styles applied to the title/subtitle wrapper        |
| rightComponent | Styles applied to the rightComponent parent element |
| separator      | Styles applied to subtitle delimiter                |
| statusStripe   | Styles applied to the status stripe element         |
| subtitle       | Styles applied to the subtitle element              |
| title          | Styles applied to the title element                 |

## Tips

You can render the `<InfoListItem>` as a link by using the [`<Link>`](https://reactrouter.com/web/api/Link) component from `react-router-dom` (recommended), or the native anchor tag `<a>`. This allows you to perform helpful actions such as opening a link in a new browser tab.

```tsx
import { Link } from 'react-router-dom';

<InfoListItem
    ...
    component={Link}
    // @ts-ignore
    to={'/overview'}
    button
/>
```

```tsx
<InfoListItem
    ...
    component={'a'}
    // @ts-ignore
    href={'eaton.com'}
    button
/>
```
