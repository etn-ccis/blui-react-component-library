# React Components

We currently have the following components available for React applications:

-   [Channel Value](https://github.com/brightlayer-ui/react-component-library/blob/dev/docs/ChannelValue.md)
-   [Drawer](https://github.com/brightlayer-ui/react-component-library/blob/dev/docs/Drawer.md)
-   [Drawer Layout](https://github.com/brightlayer-ui/react-component-library/blob/dev/docs/DrawerLayout.md)
-   [Empty State](https://github.com/brightlayer-ui/react-component-library/blob/dev/docs/EmptyState.md)
-   [Hero & Hero Banner](https://github.com/brightlayer-ui/react-component-library/blob/dev/docs/Hero.md)
-   [Info List Item](https://github.com/brightlayer-ui/react-component-library/blob/dev/docs/InfoListItem.md)
-   [List Item Tag](https://github.com/brightlayer-ui/react-component-library/blob/dev/docs/ListItemTag.md)
-   [Score Card](https://github.com/brightlayer-ui/react-component-library/blob/dev/docs/ScoreCard.md)
-   [Spacer](https://github.com/brightlayer-ui/react-component-library/blob/dev/docs/Spacer.md)
-   [User Menu](https://github.com/brightlayer-ui/react-component-library/blob/dev/docs/UserMenu.md)

---

## Style Guide

Material UI, and by extension, Brightlayer UI provides several different ways to customize a component's styles. Your specific context will determine which one is ideal. From narrowest to broadest use case, here are the options:

### 1. The `sx` prop

The [sx prop](https://mui.com/system/basics/#the-sx-prop) is the best option for adding style overrides to a single instance of a component in most cases.

#### Usage

```tsx
import { InfoListItem } from '@brightlayer-ui/react-components';
...
<InfoListItem
    title={'Info List Item'}
    sx={{ my: 2, backgroundColor: '#efefef' }}
/>
```

### 2. Overriding nested component styles

To customize a specific part of a component, you can use the global CSS class provided by Brightlayer UI inside the sx prop. These global CSS class names can be found in the `Styles` section of the documentation for each component. As an example, let's say you want to customize the InfoListItem component's icon size and padding.

#### Usage

```tsx
import { InfoListItem } from '@brightlayer-ui/react-components';
import { Leaf } from '@brightlayer-ui/icons-mui';
...
<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    sx={{ width: '100%', '& .BluiInfoListItem-icon' : { ml: '2px', fontSize: '1rem' } }}
/>
```

### 3. Overriding styles with class names

If you want to override a component's styles using custom classes, you can use the className prop, available on each component. To override the styles of a specific part of the component, use the global CSS classes provided, as described in the previous section "Overriding nested component styles".

### 4. Styled component

To reuse the same overrides in different locations across your application, create a reusable component using the [styled()](https://mui.com/system/styled/) utility.

#### Usage

```tsx
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { InfoListItem, InfoListItemProps } from '@brightlayer-ui/react-components';
import { CheckCircle } from '@mui/icons-material';
...
const SuccessInfoListItem = styled(InfoListItem)<InfoListItemProps>(({ theme }) => ({
    color: theme.palette.success.main,
    '& .BluiInfoListItem-icon': {
        color: theme.palette.success.main,
    },
}));

export default function StyledCustomization() {
  return  <SuccessInfoListItem
              title={'Success'}
              icon={<CheckCircle />}
              statusColor={Colors.green[500]}
          />;
}
```

### 5. Overriding Styles with the `classes` prop

To customize a specific part of a component, you can use the `classes` prop provided by Brightlayer UI. These classes can be found in the `Styles` section of the documentation for each component. There are 4 ways you can approach using these:

1. Continue using JSS until it is fully removed from @mui/material

```tsx
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { InfoListItem } from '@brightlayer-ui/react-components';
import { Leaf } from '@brightlayer-ui/icons-mui';
...
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            marginLeft: '2px',
            fontSize: '1rem'
        }
    })
);

const classes = useStyles();

<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    classes={{ icon: classes.icon }}
/>
```

2. Global style sheets

ComponentFile.tsx

```tsx
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { InfoListItem } from '@brightlayer-ui/react-components';
import { Leaf } from '@brightlayer-ui/icons-mui';
...
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            marginLeft: '2px',
            fontSize: '1rem'
        }
    })
);

const classes = useStyles();

<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    classes={{ icon: 'info-list-item-icon' }}
/>
```

index.css

```css
.info-list-item-icon {
    margin-left: 2px;
    font-size: 1rem;
}
```

3. [tss-react](https://mui.com/material-ui/migration/migrating-from-jss/#2-use-tss-react)

4. Emotion styles

(predefined)

```tsx
import { InfoListItem } from '@brightlayer-ui/react-components';
import { Leaf } from '@brightlayer-ui/icons-mui';
import { css } from '@emotion/css';
...
const ILIIconStyles = css`
    margin-left: 2px;
    font-size: 1rem;
`

<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    classes={{ icon: ILIIconStyles }}
/>
```

(inline)

```tsx
import { InfoListItem } from '@brightlayer-ui/react-components';
import { Leaf } from '@brightlayer-ui/icons-mui';
import { css } from '@emotion/css';
...
<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    classes={{ icon: css`margin-left: 2px; font-size: 1rem;`}}
/>
```
