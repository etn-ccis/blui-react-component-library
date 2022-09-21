/* eslint-disable */
import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { createProps, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { UserMenu } from '@brightlayer-ui/react-components/core/UserMenu';
import Avatar from '@mui/material/Avatar';
import Email from '@mui/icons-material/Email';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Settings from '@mui/icons-material/Settings';

import * as Colors from '@brightlayer-ui/colors';

export const PreviewComponent = (): JSX.Element => {
    const userMenuJson = useAppSelector((state: RootState) => state.componentsPropsState.userMenuComponent);

    const userMenuProps = createProps(userMenuJson.props as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(userMenuJson, propName, currentValue, 'props');

    return (
        <PreviewComponentWithCode
            previewContent={
                <UserMenu
                    avatar={<Avatar>AB</Avatar>}
                    menuGroups={[
                        {
                            items: [
                                {
                                    title: 'Settings',
                                    icon: <Settings />,
                                    onClick: (): void => {},
                                },
                                {
                                    title: 'Contact Us',
                                    icon: <Email />,
                                    onClick: (): void => {},
                                },
                                {
                                    title: 'Log Out',
                                    icon: <ExitToApp />,
                                    onClick: (): void => {},
                                },
                            ],
                        },
                    ]}
                    menuTitle={userMenuProps.menuTitle}
                    menuSubtitle={userMenuProps.menuSubtitle}
                    useBottomSheetAt={userMenuProps.useBottomSheetAt}
                />
            }
            code={'ss'}
        />
    );
};
