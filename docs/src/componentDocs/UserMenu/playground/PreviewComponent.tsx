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
import Trex from '../images/trex.png';

export const PreviewComponent = (): JSX.Element => {
    const userMenuJson = useAppSelector((state: RootState) => state.componentsPropsState.userMenuComponent);

    const userMenuProps = createProps(userMenuJson.props as PropsType[]);
    const userMenuOtherProps = createProps(userMenuJson.otherProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(userMenuJson, propName, currentValue, 'props');

    const toggleAvatarSection = (showAvatarImage: boolean): JSX.Element =>
        showAvatarImage ? <Avatar src={Trex} alt={'User Avatar'} /> : <Avatar>AV</Avatar>;

    const toggleAvatarSnippet = (showAvatarImageSnippet: boolean): string =>
        showAvatarImageSnippet
            ? `avatar={<Avatar src={"../images/trex.png"} alt={"User Avatar"} />}`
            : `avatar={<Avatar>AV</Avatar>}`;

    const generateCodeSnippet = (): string => {
        const jsx = `<UserMenu
    ${toggleAvatarSnippet(userMenuOtherProps.showAvatarImage)}
    ${toggleDefaultProp('menuTitle', userMenuProps.menuTitle)}
    ${toggleDefaultProp('menuSubtitle', userMenuProps.menuSubtitle)}
    useBottomSheetAt={${userMenuProps.useBottomSheetAt}}
    menuGroups={[
        {
            items: [
                {
                    title: "Settings",
                    icon: <Settings />,
                },
                {
                    title: "Contact Us",
                    icon: <Email />,
                },
                {
                    title: "Log Out",
                    icon: <ExitToApp />,
                },
            ],
        },
    ]}
/>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <UserMenu
                    avatar={toggleAvatarSection(userMenuOtherProps.showAvatarImage)}
                    menuGroups={[
                        {
                            items: [
                                {
                                    title: 'Settings',
                                    icon: <Settings />,
                                },
                                {
                                    title: 'Contact Us',
                                    icon: <Email />,
                                },
                                {
                                    title: 'Log Out',
                                    icon: <ExitToApp />,
                                },
                            ],
                        },
                    ]}
                    menuTitle={userMenuProps.menuTitle}
                    menuSubtitle={userMenuProps.menuSubtitle}
                    useBottomSheetAt={userMenuProps.useBottomSheetAt}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
