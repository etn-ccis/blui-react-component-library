# Score Card

Card component that calls attention to particular values.

<div style="align-items: center; text-align: center; width: 100%; display: flex; justify-content: space-evenly; margin-bottom: 20px">
    <img width="40%" alt="Score Card with multiple highlighted values" src="./images/scoreCard.png"><br/>
    <img width="40%" alt="Score Card with single badge-style value" src="./images/scoreCard_alt.png"><br/>
</div>

## Usage

<div style="align-items: center; text-align: center; width: 100%; display: flex; justify-content: space-evenly; margin-bottom: 20px">
    <img width="80%" alt="Score Card with labels on different parts" src="./images/scoreCardAnatomy.png"><br/>
</div>

```tsx
import { Hero, HeroBanner, ScoreCard } from '@brightlayer-ui/react-components';
import { List, Card, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import * as Colors from '@brightlayer-ui/colors';
import MoreVert from '@material-ui/icons/MoreVert';
import { Temp } from '@brightlayer-ui/icons-mui';

...
<ScoreCard
    headerColor={Colors.red[500]}
    headerTitle={'Substation 3'}
    headerFontColor={Colors.white[50]}
    actionItems={[
        <MoreVert onClick={() => {}} />,
    ]}
    badge={
        <HeroBanner>
            <Hero
                icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
                label={'Temperature'}
                iconSize={48}
                value={98}
                units={'°F'}
                fontSize={'normal'}
            />
        </HeroBanner>
    }
    actionRow={
        <List>
            <ListItem>
                <ListItemText primary="View Location" />
                <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
            </ListItem>
        </List>
    }
>
    {/* Card Body Content */}
</ScoreCard>
```

## API

<div style="overflow: auto;">

| Prop Name             | Description                                 | Type               | Required | Default                      |
| --------------------- | ------------------------------------------- | ------------------ | -------- | ---------------------------- |
| actionItems           | Icons to show to the right of the text      | `JSX.Element[]`    | no       |                              |
| actionLimit           | Max number of actionItems in the header     | `number`           | no       | 3                            |
| actionRow             | Component to render for the footer          | `JSX.Element`      | no       |                              |
| badge                 | The component to render in the callout area | `JSX.Element`      | no       |                              |
| badgeOffset           | Vertical offset for the badge component     | `number`           | no       | 0                            |
| classes               | Style overrides                             | `ScoreCardClasses` | no       |                              |
| headerBackgroundImage | An image to display in the header           | `string`           | no       |                              |
| headerColor           | The color of the header                     | `string`           | no       | `theme.palette.primary.main` |
| headerFontColor       | The color for text and icons in header      | `string`           | no       | `white`                      |
| headerInfo            | Tertiary text                               | `string`           | no       |                              |
| headerTitle           | The primary text                            | `string`           | yes      |                              |
| headerSubtitle        | The secondary text                          | `string`           | no       |                              |

</div>

Any other props will be provided to the root element [**Material UI Card**](https://material-ui.com/api/card/).

### Style Overrides

You can override the default styles used by Brightlayer UI by:

-   using the `sx` prop
-   passing a `classes` prop with keys from the `Name` column below
-   using the `Global CSS Class` in your main stylesheet

For more details on styling options check out our [Styling Guide](https://github.com/brightlayer-ui/react-component-library/tree/master/docs#style-guide).

| Name             | Global CSS Class                | Description                                             |
| ---------------- | ------------------------------- | ------------------------------------------------------- |
| root             | .BluiScoreCard-root             | Styles applied to the root element                      |
| actionItems      | .BluiScoreCard-actionItems      | Styles applied to the action items container            |
| badgeWrapper     | .BluiScoreCard-badgeWrapper     | Styles applied to the badge container                   |
| bodyWrapper      | .BluiScoreCard-bodyWrapper      | Styles applied to the child nodes container             |
| content          | .BluiScoreCard-content          | Styles applied to justify all body content              |
| header           | .BluiScoreCard-header           | Styles applied to the header container                  |
| headerBackground | .BluiScoreCard-headerBackground | Styles applied to header background image               |
| headerContent    | .BluiScoreCard-headerContent    | Styles applied to the header text and actions container |
| headerInfo       | .BluiScoreCard-headerInfo       | Styles applied to the tertiary text element             |
| headerTitle      | .BluiScoreCard-headerTitle      | Styles applied to the title element                     |
| headerSubtitle   | .BluiScoreCard-headerSubtitle   | Styles applied to the subtitle element                  |
