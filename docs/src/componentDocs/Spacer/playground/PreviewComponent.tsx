import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { Spacer } from '@brightlayer-ui/react-components/core/Utility/Spacer';
import { createProps } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import Box from '@mui/material/Box';

import * as Colors from '@brightlayer-ui/colors';
import Typography from '@mui/material/Typography';

export const PreviewComponent = (): JSX.Element => {
    const spacerJson = useAppSelector((state: RootState) => state.componentsPropsState.spacerComponent);

    const spacerProps = createProps(spacerJson.props as PropsType[]);
    const spacerOtherProps = createProps(spacerJson.otherProps as PropsType[]);

    const showFlexLayoutSnippet = (): string => `<Box>
    <Typography>Horizontal</Typography>
    <Box
        sx={{
            width: 300,
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            color: Colors.black[900],
        }}
    >
        <Spacer flex={${spacerProps.flex1}} sx={{ background: Colors.blue[300] }}>
            1
        </Spacer>
        <Spacer flex={${spacerProps.flex2}} sx={{ background: Colors.yellow[300] }}>
            2
        </Spacer>
        <Spacer flex={${spacerProps.flex3}} sx={{ background: Colors.red[300] }}>
            3
        </Spacer>
    </Box>
    <Typography sx={{ marginTop: 20 }}>Vertical</Typography>
    <Box
        sx={{
            width: 300,
            height: 150,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            color: Colors.black[900],
        }}
    >
        <Spacer flex={${spacerProps.flex1}} sx={{ background: Colors.blue[300] }}>
            1
        </Spacer>
        <Spacer flex={${spacerProps.flex2}} sx={{ background: Colors.yellow[300] }}>
            2
        </Spacer>
        <Spacer flex={${spacerProps.flex3}} sx={{ background: Colors.red[300] }}>
            3
        </Spacer>
    </Box>
</Box>
    `;

    const showStaticLayoutSnippet = (): string => `<Box>
    <Typography>Horizontal</Typography>
    <Box sx={{ width: 300, height: 50, display: 'inline', color: Colors.black[900] }}>
        <Spacer width={${spacerProps.size1}} sx={{ background: Colors.blue[300], display: 'inline-block' }}>
            1
        </Spacer>
        <Spacer width={${spacerProps.size2}} sx={{ background: Colors.yellow[300], display: 'inline-block' }}>
            2
        </Spacer>
        <Spacer width={${spacerProps.size3}} sx={{ background: Colors.red[300], display: 'inline-block' }}>
            3
        </Spacer>
    </Box>
    <Typography sx={{ marginTop: 20 }}>Vertical</Typography>
    <Box sx={{ width: 300, height: 300, color: Colors.black[900] }}>
        <Spacer height={${spacerProps.size1}} sx={{ background: Colors.blue[300] }}>
            1
        </Spacer>
        <Spacer height={${spacerProps.size2}} sx={{ background: Colors.yellow[300] }}>
            2
        </Spacer>
        <Spacer height={${spacerProps.size3}} sx={{ background: Colors.red[300] }}>
            3
        </Spacer>
    </Box>
</Box>
    `;

    const generateCodeSnippet = (): string => {
        const jsx = `${spacerOtherProps.useFlex ? showFlexLayoutSnippet() : showStaticLayoutSnippet()}`;
        return jsx;
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                spacerOtherProps.useFlex ? (
                    <Box>
                        <Typography>Horizontal Flex Layout</Typography>
                        <Box
                            sx={{
                                width: 300,
                                height: 50,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'stretch',
                                color: Colors.black[900],
                            }}
                        >
                            <Spacer flex={spacerProps.flex1} sx={{ background: Colors.blue[300] }}>
                                1
                            </Spacer>
                            <Spacer flex={spacerProps.flex2} sx={{ background: Colors.yellow[300] }}>
                                2
                            </Spacer>
                            <Spacer flex={spacerProps.flex3} sx={{ background: Colors.red[300] }}>
                                3
                            </Spacer>
                        </Box>
                        <Typography sx={{ marginTop: 20 }}>Vertical Flex Layout</Typography>
                        <Box
                            sx={{
                                width: 300,
                                height: 150,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'stretch',
                                color: Colors.black[900],
                            }}
                        >
                            <Spacer flex={spacerProps.flex1} sx={{ background: Colors.blue[300] }}>
                                1
                            </Spacer>
                            <Spacer flex={spacerProps.flex2} sx={{ background: Colors.yellow[300] }}>
                                2
                            </Spacer>
                            <Spacer flex={spacerProps.flex3} sx={{ background: Colors.red[300] }}>
                                3
                            </Spacer>
                        </Box>
                    </Box>
                ) : (
                    <Box>
                        <Typography>Horizontal Static Layout</Typography>
                        <Box sx={{ width: 300, height: 50, display: 'inline', color: Colors.black[900] }}>
                            <Spacer
                                width={spacerProps.size1}
                                sx={{ background: Colors.blue[300], display: 'inline-block' }}
                            >
                                1
                            </Spacer>
                            <Spacer
                                width={spacerProps.size2}
                                sx={{ background: Colors.yellow[300], display: 'inline-block' }}
                            >
                                2
                            </Spacer>
                            <Spacer
                                width={spacerProps.size3}
                                sx={{ background: Colors.red[300], display: 'inline-block' }}
                            >
                                3
                            </Spacer>
                        </Box>
                        <Typography sx={{ marginTop: 20 }}>Vertical Static Layout</Typography>
                        <Box sx={{ width: 300, height: 300, color: Colors.black[900] }}>
                            <Spacer height={spacerProps.size1} sx={{ background: Colors.blue[300] }}>
                                1
                            </Spacer>
                            <Spacer height={spacerProps.size2} sx={{ background: Colors.yellow[300] }}>
                                2
                            </Spacer>
                            <Spacer height={spacerProps.size3} sx={{ background: Colors.red[300] }}>
                                3
                            </Spacer>
                        </Box>
                    </Box>
                )
            }
            code={generateCodeSnippet()}
        />
    );
};
