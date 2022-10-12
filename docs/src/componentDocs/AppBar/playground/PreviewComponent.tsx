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

export const PreviewComponent = (): JSX.Element => {
    const appBarJson = useAppSelector((state: RootState) => state.componentsPropsState.appBarComponent);

    const appBarProps = createProps(appBarJson.props as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(appBarJson, propName, currentValue, 'props');

    const generateCodeSnippet = (): string => {
        const jsx = `<AppBar
    animationDuration={${appBarProps.animationDuration}}
    ${toggleDefaultProp('backgroundImage', `${getImage(appBarProps.backgroundImage)}`)}
    ${toggleDefaultProp('collapsedHeight', appBarProps.collapsedHeight)}
    ${toggleDefaultProp('expandedHeight', appBarProps.expandedHeight)}
    scrollContainerId={"${appBarProps.scrollContainerId}"}
    scrollThreshold={${appBarProps.scrollThreshold}}
    variant={"${appBarProps.variant}"}
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
                <Box
                    sx={{
                        overflow: 'hidden',
                        width: '100%',
                        maxWidth: 450,
                        maxHeight: 400,
                        position: 'relative',
                    }}
                >
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
