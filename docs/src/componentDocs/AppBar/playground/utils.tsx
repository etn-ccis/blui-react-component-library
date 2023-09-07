import { Theme } from "@mui/material";
import { getImage, hideDefaultPropsFromSnippet } from "../../../shared";
import { removeEmptyLines } from "../../../components/Playground/utilities";

const toggleDefaultProp = (appBarJson: any, propName: string, currentValue: any, themeDefaultValue?: string | number): string =>
    hideDefaultPropsFromSnippet(appBarJson, propName, currentValue, 'props', themeDefaultValue);

export const generateCodeSnippet = (appBarJson: any, appBarProps: any, theme: Theme): string => {
    const jsx = `<AppBar
    ${toggleDefaultProp(appBarJson, 'animationDuration', appBarProps.animationDuration, theme.transitions.duration.standard)}
    ${toggleDefaultProp(appBarJson, 'backgroundImage', getImage(appBarProps.backgroundImage))}
    ${toggleDefaultProp(appBarJson, 'collapsedHeight', appBarProps.collapsedHeight)}
    ${toggleDefaultProp(appBarJson, 'expandedHeight', appBarProps.expandedHeight)}
    scrollContainerId={"appbarBodyFiller1"}
    ${toggleDefaultProp(appBarJson, 'scrollThreshold', appBarProps.scrollThreshold)}
    ${toggleDefaultProp(appBarJson, 'variant', appBarProps.variant)}
>
    <Toolbar>
        <Typography variant="h6">Title</Typography>
    </Toolbar>
</AppBar>`;
    return removeEmptyLines(jsx);
};
