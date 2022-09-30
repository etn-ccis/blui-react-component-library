/* eslint-disable */
import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    createProps,
    getBodyFiller,
    getImage,
    hideDefaultPropsFromSnippet,
    removeEmptyLines,
} from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { AppBar } from '@brightlayer-ui/react-components/core/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';

export const PreviewComponent = (): JSX.Element => {
    const theme = useTheme();
    const appBarJson = useAppSelector((state: RootState) => state.componentsPropsState.appBarComponent);

    const appBarProps = createProps(appBarJson.props as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any, themeDefaultValue?: string | number): string =>
        hideDefaultPropsFromSnippet(appBarJson, propName, currentValue, 'props', themeDefaultValue);
        
    const generateCodeSnippet = (): string => {
        const jsx = `<AppBar
    ${toggleDefaultProp('animationDuration', appBarProps.animationDuration, theme.transitions.duration.standard)}
    ${toggleDefaultProp('backgroundImage', `${getImage(appBarProps.backgroundImage)}`)}
    ${toggleDefaultProp('collapsedHeight', appBarProps.collapsedHeight)}
    ${toggleDefaultProp('expandedHeight', appBarProps.expandedHeight)}
    scrollContainerId={"${appBarProps.scrollContainerId}"}
    ${toggleDefaultProp('scrollThreshold', appBarProps.scrollThreshold)}
    ${toggleDefaultProp('variant', appBarProps.variant)}
>
    <Toolbar>
        <Typography variant="h6">Title</Typography>
    </Toolbar>
</AppBar>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Box>
                    <AppBar
                        animationDuration={appBarProps.animationDuration}
                        backgroundImage={getImage(appBarProps.backgroundImage)}
                        collapsedHeight={appBarProps.collapsedHeight}
                        expandedHeight={appBarProps.expandedHeight}
                        scrollContainerId={appBarProps.scrollContainerId}
                        scrollThreshold={appBarProps.scrollThreshold}
                        variant={appBarProps.variant}
                    >
                        <Toolbar>
                            <Typography variant="h6">Title</Typography>
                        </Toolbar>
                    </AppBar>
                    <Box id={'appbarBodyFiller1'} sx={{ height: 400, overflow: 'scroll' }}>
                        {getBodyFiller()}
                    </Box>
                </Box>
            }
            code={generateCodeSnippet()}
        />
    );
};
