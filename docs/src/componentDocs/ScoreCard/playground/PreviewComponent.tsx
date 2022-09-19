import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { ScoreCard } from '@brightlayer-ui/react-components/core/ScoreCard';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import { Hero } from '@brightlayer-ui/react-components/core/Hero';
import { HeroBanner } from '@brightlayer-ui/react-components/core/HeroBanner';
import Cloud from '@mui/icons-material/Cloud';
import Favorite from '@mui/icons-material/Favorite';
import Humidity from '@brightlayer-ui/icons-mui/Moisture';
import List from '@mui/material/List';
import ListAlt from '@mui/icons-material/ListAlt';
import Mail from '@mui/icons-material/Mail';
import MoreVert from '@mui/icons-material/MoreVert';
import Notifications from '@mui/icons-material/Notifications';
import Search from '@mui/icons-material/Search';
import Temp from '@brightlayer-ui/icons-mui/Temp';
import { createProps, getImage, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';

import * as Colors from '@brightlayer-ui/colors';

export const PreviewComponent = (): JSX.Element => {
    const scoreCardJson = useAppSelector((state: RootState) => state.componentsPropsState.scoreCardComponent);

    const scoreCardProps = createProps(scoreCardJson.props as PropsType[]);
    const scoreCardOtherProps = createProps(scoreCardJson.otherProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(scoreCardJson, propName, currentValue, 'props');

    const actionItems = [
        <Search key={'search'} />,
        <Mail key={'mail'} />,
        <Notifications key={'notifications'} />,
        <Favorite key={'favorite'} />,
        <Cloud key={'cloud'} />,
        <MoreVert key={'morevert'} />,
    ];

    const heroes: JSX.Element[] = [
        <Hero
            key={'hero1'}
            icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
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
            iconBackgroundColor={Colors.white[50]}
            ChannelValueProps={{ value: 54, units: '%' }}
            iconSize={48}
            fontSize={'normal'}
        />,
    ];

    const showHeroSection = (noOfHeroes: number): string => {
        switch (noOfHeroes) {
            case 0:
                return '';
            case 1:
                return `badge={
            <HeroBanner>
                <Hero
                    key={'hero1'}
                    icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
                    label={'Temperature'}
                    iconSize={48}
                    iconBackgroundColor={Colors.white[50]}
                    ChannelValueProps={{ value: 98, units: "°F" }}
                    fontSize={'normal'}
                />
            <HeroBanner>
        }`;
            case 2:
                return `badge={
            <HeroBanner>
                <Hero
                    key={'hero1'}
                    icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
                    label={'Temperature'}
                    iconSize={48}
                    iconBackgroundColor={Colors.white[50]}
                    ChannelValueProps={{ value: 98, units: "°F" }}
                    fontSize={'normal'}
                />
                <Hero
                    key={'hero2'}
                    icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                    label={'Humidity'}
                    iconBackgroundColor={Colors.white[50]}
                    ChannelValueProps={{ value: 54, units: "%" }}
                    iconSize={48}
                    fontSize={'normal'}
                />
            <HeroBanner>
        }`;
            default:
                return '';
        }
    };

    const showActions = (actionLimit: number): string => {
        const a = [
            `<Search key={'search'} />`,
            `\n\t\t<Mail key={'mail'} />`,
            `\n\t\t<Notifications key={'notifications'} />`,
            `\n\t\t<Favorite key={'favorite'} />`,
            `\n\t\t<Cloud key={'cloud'} />`,
            `\n\t\t<MoreVert key={'morevert'} />`,
        ].slice(0, actionLimit);
        return a.join();
    };

    const generateCodeSnippet = (): string => {
        const jsx = `<ScoreCard
    sx={{ width: 400, flex: '0 0 auto' }}
    headerTitle={"${scoreCardProps.headerTitle}"}
    ${toggleDefaultProp('headerSubtitle', scoreCardProps.headerSubtitle)}
    ${toggleDefaultProp('headerInfo', scoreCardProps.headerInfo)}
    headerColor={"${scoreCardProps.headerColor}"}
    headerFontColor={"${scoreCardProps.headerFontColor}"}
    ${toggleDefaultProp('headerBackgroundImage', `${getImage(scoreCardProps.headerBackgroundImage)}`)}
    actionLimit={"${scoreCardProps.actionLimit}"}
    actionItems={[
        ${showActions(scoreCardProps.actionLimit)}
    ]}
    actionRow={
        <List style={{ padding: 0 }}>
            <InfoListItem dense chevron title={'View Location'} hidePadding />
        </List>
    }
    
    ${showHeroSection(scoreCardOtherProps.numberofHeroes)}
    ${toggleDefaultProp('badgeOffset', scoreCardProps.badgeOffset)}
>
    <List sx={{ padding: '.5rem 0' }}>
        <InfoListItem
            dense
            sx={{ height: '2.25rem' }}
            title={'0 Alarms'}
            icon={<Notifications color={'inherit'} />}
        />
        <InfoListItem
            dense
            sx={{ height: '2.25rem' }}
            fontColor={Colors.blue[500]}
            iconColor={Colors.blue[500]}
            title={'1 Event'}
            icon={<ListAlt color={'inherit'} />}
        />
        <InfoListItem
            dense
            sx={{ height: '2.25rem' }}
            title={'Online'}
            icon={<Cloud color={'inherit'} />}
        />
    </List>
</ScoreCard>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <ScoreCard
                    sx={{ width: 400, flex: '0 0 auto' }}
                    headerTitle={scoreCardProps.headerTitle}
                    headerSubtitle={scoreCardProps.headerSubtitle}
                    headerInfo={scoreCardProps.headerInfo}
                    headerColor={scoreCardProps.headerColor}
                    headerFontColor={scoreCardProps.headerFontColor}
                    headerBackgroundImage={getImage(scoreCardProps.headerBackgroundImage)}
                    actionLimit={scoreCardProps.actionLimit}
                    actionItems={actionItems}
                    actionRow={
                        <List style={{ padding: 0 }}>
                            <InfoListItem dense chevron title={'View Location'} hidePadding />
                        </List>
                    }
                    badge={<HeroBanner>{heroes.slice(0, scoreCardOtherProps.numberofHeroes)}</HeroBanner>}
                    badgeOffset={scoreCardProps.badgeOffset}
                >
                    <List sx={{ padding: '.5rem 0' }}>
                        <InfoListItem
                            dense
                            sx={{ height: '2.25rem' }}
                            title={'0 Alarms'}
                            icon={<Notifications color={'inherit'} />}
                        />
                        <InfoListItem
                            dense
                            sx={{ height: '2.25rem' }}
                            fontColor={Colors.blue[500]}
                            iconColor={Colors.blue[500]}
                            title={'1 Event'}
                            icon={<ListAlt color={'inherit'} />}
                        />
                        <InfoListItem
                            dense
                            sx={{ height: '2.25rem' }}
                            title={'Online'}
                            icon={<Cloud color={'inherit'} />}
                        />
                    </List>
                </ScoreCard>
            }
            code={generateCodeSnippet()}
        />
    );
};
