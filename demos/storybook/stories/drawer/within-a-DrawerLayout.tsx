import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { DrawerLayout } from '@brightlayer-ui/react-components';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerNavGroup } from '@brightlayer-ui/react-components/core/Drawer';
import { boolean, number, select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
// @ts-ignore
import EatonLogo from '../../assets/EatonLogo.svg';
import { DrawerStoryContext } from './util';
import { navGroupItems1 } from './with-basic-config';

export const inDrawerLayout = (context: DrawerStoryContext): StoryFnReactReturnType => (
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
                variant={select('variant', ['permanent', 'persistent', 'temporary'], 'permanent')}
                ModalProps={{
                    disableEnforceFocus: true,
                }}
            >
                <DrawerHeader
                    icon={<MenuIcon />}
                    titleContent={
                        <div style={{ paddingLeft: '20px', paddingTop: '15px' }}>
                            <Typography variant="subtitle2" style={{ fontWeight: 100 }}>
                                Brightlayer UI
                            </Typography>
                            <Typography variant="h6" style={{ marginTop: '-10px' }}>
                                DrawerLayout
                            </Typography>
                        </div>
                    }
                />
                <DrawerBody>
                    <DrawerNavGroup activeItem={context.state.selected} items={navGroupItems1} />
                </DrawerBody>
                <DrawerFooter>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={EatonLogo} style={{ margin: '10px' }} alt="Eaton Logo" height={50} width={'auto'} />
                    </div>
                </DrawerFooter>
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

inDrawerLayout.story = { name: 'within a Drawer Layout' };
