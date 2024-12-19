## Style Overrides Guide

Material UI, and by extension, Brightlayer UI provides several different ways to customize a component's styles. Your specific context will determine which one is ideal. From narrowest to broadest use case, here are the options:

## 1. The `sx` prop

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

### Overriding nested component styles

To customize a specific part of a component, you can use the global CSS class provided by Brightlayer UI inside the sx prop\*. These global CSS class names can be found in the `Style Overrides` section of the documentation for each component. As an example, let's say you want to customize the InfoListItem component's icon size and padding.

> \* not all classes can be targeted via nesting. Pay attention to the actual DOM structure as some elements live as siblings to the root element and some are in separate containers entirely.

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

## 2. Styled component

To reuse the same overrides in different locations across your application, create a reusable component using the [styled()](https://mui.com/system/styled/) utility.

#### Usage

```tsx
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { InfoListItem, InfoListItemProps } from '@brightlayer-ui/react-components';
import { CheckCircle } from '@mui/icons-material';
import * as Colors from '@brightlayer-ui/colors';
...
const SuccessInfoListItem = styled(InfoListItem)<InfoListItemProps>(({ theme }) => ({
    color: theme.vars.palette.success.main,
    '& .BluiInfoListItem-icon': {
        fontSize: '1.5rem',
    },
}));

// usage
<SuccessInfoListItem
    title={'Success'}
    icon={<CheckCircle />}
    statusColor={Colors.green[500]}
    iconColor={Colors.green[500]}
/>;

```

## 3. Overriding Styles with the `className` and `classes` prop

If you want to override a component's styles using custom classes, you can use the `className` prop, available on each component. `className` is only applied to the root element of each component.

To customize a specific part of a component, you can use the `classes` prop provided by Brightlayer UI. These classes can be found in the `Style Overrides` section of the documentation for each component. There are 4 ways you can approach using these:

### 1. Use [tss-react](https://mui.com/material-ui/migration/migrating-from-jss/#2-use-tss-react)

The `tss-react` API is similar to JSS makeStyles, but under the hood, it uses @emotion/react. It also features much better TypeScript support than v4's makeStyles. For more details on the `tss-react` API visit the [mui migration docs](https://mui.com/material-ui/migration/migrating-from-jss/#2-use-tss-react).

```tsx
import { makeStyles } from 'tss-react/mui';
import { InfoListItem } from '@brightlayer-ui/react-components';
import { Leaf } from '@brightlayer-ui/icons-mui';
...
const useStyles = makeStyles()((theme: Theme) => ({
        root: {
            padding: '1rem',
            backgroundColor: theme.vars.palette.background.paper,
        },
    }));

const { classes } = useStyles();

// className usage
<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    className={classes.root}
/>

// classes usage
<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    classes={{ root: classes.root }}
/>
```

### 2. Emotion styles

(predefined)

```tsx
import { InfoListItem } from '@brightlayer-ui/react-components';
import { Leaf } from '@brightlayer-ui/icons-mui';
import { css } from '@emotion/css';
...
const ILIStyles = css`
    margin-top: 2px;
    padding: 1rem;
`

// className usage
<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    className={ILIStyles}
/>

// classes usage
<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    classes={{ root: ILIStyles }}
/>
```

(inline)

```tsx
import { InfoListItem } from '@brightlayer-ui/react-components';
import { Leaf } from '@brightlayer-ui/icons-mui';
import { css } from '@emotion/css';
...
// className usage
<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    className={css`margin-top: 2px; font-size: 1rem;`}
/>

// classes usage
<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    classes={{ root: css`margin-top: 2px; font-size: 1rem;`}}
/>
```

### 3. Continue using JSS until it is fully removed from @mui/material

```tsx
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { InfoListItem } from '@brightlayer-ui/react-components';
import { Leaf } from '@brightlayer-ui/icons-mui';
...
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
         root: {
            padding: '1rem'
            backgroundColor: theme.vars.palette.background.paper
        },
    })
);

const classes = useStyles();

// className usage
<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    className={ classes.root }
/>

// classes usage
<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    classes={{ root: classes.root }}
/>
```

### 4. Global style sheets

ComponentFile.tsx

```tsx
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { InfoListItem } from '@brightlayer-ui/react-components';
import { Leaf } from '@brightlayer-ui/icons-mui';
...
// className usage
<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    className={'custom-info-list-item'}
/>

// classes usage
<InfoListItem
    title={'Info List Item'}
    icon={<Leaf />}
    classes={{ root: 'custom-info-list-item' }}
/>
```

index.css

```css
.custom-info-list-item {
    margin-top: 2px;
    font-size: 1rem;
}
```
