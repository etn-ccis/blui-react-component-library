import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { DrawerLayout } from '@pxblue/react-components';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerNavGroup } from '@pxblue/react-components/core/Drawer';
import { boolean, number, select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
// @ts-ignore
import EatonLogo from '../../assets/EatonLogo.svg';
import { DrawerStoryContext } from './util';
import { navGroupItems1 } from './with-basic-config';
import { useDarkMode } from 'storybook-dark-mode';
import EatonFooterLogoLight from '../../assets/EatonLogoLight.png';
import EatonFooterLogoDark from '../../assets/EatonLogoDark.png';

export const inDrawerLayout = (context: DrawerStoryContext): StoryFnReactReturnType => {
    const variant = select('variant', ['permanent', 'persistent', 'temporary', 'rail'], 'persistent');

    return (
        <DrawerLayout
            drawer={
                <Drawer
                    open={boolean('open', true)}
                    width={number('width', 350, {
                        range: true,
                        min: 200,
                        max: 700,
                        step: 50,
                    })}
                    variant={variant}
                    condensed={boolean('condensed (rail only)', false)}
                    ModalProps={{
                        disableEnforceFocus: true,
                    }}
                    activeItem={context.state.selected}
                >
                    <DrawerHeader
                        icon={<MenuIcon />}
                        titleContent={
                            <div
                                style={{
                                    paddingLeft: 16,
                                    paddingRight: 16,
                                    display: 'flex',
                                    height: '100%',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant={'subtitle2'} style={{ fontWeight: 100 }}>
                                    PX Blue
                                </Typography>
                                <Typography variant={'h6'} style={{ marginTop: -8 }}>
                                    DrawerLayout
                                </Typography>
                            </div>
                        }
                    />
                    <DrawerBody>
                        <DrawerNavGroup items={navGroupItems1} />
                    </DrawerBody>
                    {variant !== 'rail' && (
                        <DrawerFooter>
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                                <img
                                    src={useDarkMode() ? EatonFooterLogoDark : EatonFooterLogoLight}
                                    style={{
                                        margin: 16,
                                        marginRight: 30,
                                        marginLeft: 8,
                                    }}
                                    alt="Eaton Logo"
                                    height={28}
                                    width={'auto'}
                                />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography
                                        variant={'caption'}
                                    >{`Copyright \u00A9 Eaton ${new Date().getFullYear()}`}</Typography>
                                    <Typography variant={'caption'}>All Rights Reserved</Typography>
                                </div>
                            </div>
                        </DrawerFooter>
                    )}
                </Drawer>
            }
        >
            <div
                style={{
                    backgroundColor: '#777',
                    color: 'white',
                    height: '100%',
                    padding: '30px',
                    boxSizing: 'border-box',
                }}
            >
                <Typography variant={'h2'}>Body content goes here.</Typography>
            </div>
        </DrawerLayout>
    );
};

inDrawerLayout.story = { name: 'within a Drawer Layout' };
