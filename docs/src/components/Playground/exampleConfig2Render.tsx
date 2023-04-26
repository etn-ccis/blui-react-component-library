import React from 'react';
import { Playground } from './Playground';
import exampleConfig2 from './exampleConfig2';
import Search from '@mui/icons-material/Search';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Favorite from '@mui/icons-material/Favorite';
import Cloud from '@mui/icons-material/Cloud';
import MoreVert from '@mui/icons-material/MoreVert';
import Temp from '@brightlayer-ui/icons-mui/Temp';
import Humidity from '@brightlayer-ui/icons-mui/Moisture';
import * as Colors from '@brightlayer-ui/colors';
import { ScoreCard, Hero } from '@brightlayer-ui/react-components';
import { List, ListItem, ListItemText } from '@mui/material';

const exampleConfig2Render = (): JSX.Element => (
    <Playground
        demoComponent={ScoreCard}
        demoComponentProps={{
            actionItems: [
                <Search key={'search'} />,
                <Mail key={'mail'} />,
                <Notifications key={'notifications'} />,
                <Favorite key={'favorite'} />,
                <Cloud key={'cloud'} />,
                <MoreVert key={'more-vert'} />,
            ],
            heroes: [
                <Hero
                    key={'hero1'}
                    icon={<Temp fontSize={'inherit'} />}
                    label={'Temperature'}
                    iconSize={48}
                    iconBackgroundColor={Colors.white[50]}
                    ChannelValueProps={{ value: 98, units: '°F' }}
                    fontSize={'normal'}
                />,
                <Hero
                    key={'hero2'}
                    icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                    label={'Humidity'}
                    ChannelValueProps={{ value: 54, units: '%' }}
                    iconSize={48}
                    iconBackgroundColor={Colors.white[50]}
                    fontSize={'normal'}
                />,
            ],
            sx: { maxWidth: '400px' },
        }}
        demoComponentChild={
            <List>
                <ListItem>
                    <ListItemText primary="Body Content" />
                </ListItem>
            </List>
        }
        config={exampleConfig2}
        previewContainerSx={{ alignItems: 'center' }}
    />
);

export default exampleConfig2Render;
