import React from 'react';
import { Box } from '@mui/material';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { DrawerHeader } from '@brightlayer-ui/react-components';
import { CodeBlock } from '../../../shared/CodeBlock';
import { createProps, getIcon } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
const topologyBgImage = require('../images/topology_40.png');
const farmBgImage = require('../images/farm.jpg');

export const PreviewComponent = (): JSX.Element => {
    const drawerHeaderJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerHeaderComponent);

    const drawerHeaderProps = createProps(drawerHeaderJson.props as PropsType[]);

    const getImage = (image: string): string => {
        switch (image) {
            case 'Pattern':
                return topologyBgImage;
            case 'Farm':
                return farmBgImage;
            case 'undefined':
                return 'undefined';
            default:
                return 'undefined';
        }
    };

    const jsx = `<DrawerHeader
    backgroundColor={"${drawerHeaderProps.backgroundColor}"}
    backgroundImage={"${getImage(drawerHeaderProps.backgroundImage)}"}
    backgroundOpacity={${drawerHeaderProps.backgroundOpacity}}
    divider={${drawerHeaderProps.divider}}
    fontColor={"${drawerHeaderProps.fontColor}"}
    icon={${drawerHeaderProps.icon}}
    subtitle={"${drawerHeaderProps.subtitle}"}
    title={"${drawerHeaderProps.title}"}>
</DrawerHeader>`;

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ width: 300 }}>
                        <DrawerHeader
                            backgroundColor={drawerHeaderProps.backgroundColor}
                            backgroundImage={getImage(drawerHeaderProps.backgroundImage)}
                            backgroundOpacity={drawerHeaderProps.backgroundOpacity}
                            divider={drawerHeaderProps.divider}
                            fontColor={drawerHeaderProps.fontColor}
                            icon={getIcon(drawerHeaderProps.icon)}
                            subtitle={drawerHeaderProps.subtitle}
                            title={drawerHeaderProps.title}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        overflow: 'auto',
                        boxSizing: 'border-box',
                        pt: 1,
                    }}
                >
                    <CodeBlock code={jsx} language="jsx" />
                </Box>
            </Box>
        </>
    );
};
