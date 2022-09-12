/* eslint-disable */
import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { ScoreCard } from '@brightlayer-ui/react-components/core/ScoreCard';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import List from '@mui/material/List';
import Cloud from '@mui/icons-material/Cloud';
import ListAlt from '@mui/icons-material/ListAlt';
import Notifications from '@mui/icons-material/Notifications';
import { createProps, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import * as Colors from '@brightlayer-ui/colors';
export const PreviewComponent = (): JSX.Element => {
    const scoreCardJson = useAppSelector((state: RootState) => state.componentsPropsState.scoreCardComponent);

    const scoreCardProps = createProps(scoreCardJson.props as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(scoreCardJson, propName, currentValue, 'props');

    // const generateCodeSnippet = (): string => {
    //     const jsx = `<Drawer open={${scoreCardOtherProps.open}} activeItem={'Identity Management'}>
    //     <DrawerHeader
    //         icon={<Menu />}
    //         title={'Subheader Demo'}
    //         subtitle={'See the scoreCard below'}
    //     />
    //     <scoreCard ${toggleDefaultProp('divider', scoreCardProps.divider)} ${toggleDefaultProp(
    //         'hideContentOnCollapse',
    //         scoreCardProps.hideContentOnCollapse
    //     )}>
    //         <Box
    //             sx={{
    //                 p: 2,
    //             }}
    //         >
    //             Subheader Content Here
    //         </Box>
    //     </scoreCard>
    //     <DrawerBody>
    //         <DrawerNavGroup>
    //             <DrawerNavItem
    //                 icon={<Person />}
    //                 itemID={'Identity Management'}
    //                 title={'Identity Management'}
    //             />
    //             <DrawerNavItem
    //                 icon={<Today />}
    //                 itemID={'Calendar'}
    //                 title={'Calendar'} />
    //             <DrawerNavItem
    //                 icon={<Accessibility />}
    //                 title={'Accessibility'}
    //                 itemID={'Accessibility'} />
    //             <DrawerNavItem
    //                 icon={<NotificationsActive />}
    //                 title={'Notifications'}
    //                 itemID={'Notifications'}
    //             />
    //         </DrawerNavGroup>
    //     </DrawerBody>
    // </Drawer>`;

    //     return removeEmptyLines(jsx);
    // };

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
                    headerBackgroundImage={scoreCardProps.headerBackgroundImage}
                    actionLimit={scoreCardProps.actionLimit}
                    // actionItems={}
                    // actionRow={}
                    // badge={
                    //     <HeroBanner>
                    //         {heroes.slice(0, number('Number of Heroes', 1, { range: true, min: 0, max: 2, step: 1 }))}
                    //     </HeroBanner>
                    // }
                    badgeOffset={scoreCardProps.badgeOffset}
                >
                    <List style={{ padding: '.5rem 0' }}>
                        <InfoListItem
                            dense
                            style={{ height: '2.25rem' }}
                            title={'0 Alarms'}
                            icon={<Notifications color={'inherit'} />}
                        />
                        <InfoListItem
                            dense
                            style={{ height: '2.25rem' }}
                            fontColor={Colors.blue[500]}
                            iconColor={Colors.blue[500]}
                            title={'1 Event'}
                            icon={<ListAlt color={'inherit'} />}
                        />
                        <InfoListItem
                            dense
                            style={{ height: '2.25rem' }}
                            title={'Online'}
                            icon={<Cloud color={'inherit'} />}
                        />
                    </List>
                </ScoreCard>
            }
            code={'ss'}
        />
    );
};
