import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import useTheme from '@material-ui/core/styles/useTheme';
import Button from '@material-ui/core/Button';
import { EmptyState } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { getLeftToRightIconTransform } from '../../src/utils';
import React, { useState } from 'react';

import * as Colors from '@pxblue/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        accordionPanel: {
            width: '392px',
            margin: '0 auto',
        },
        accordionRoot: {
            '& .MuiAccordionSummary-root': {
                borderBottom: `1px solid ${theme.palette.divider}`,
                height: '48px',
                minHeight: '48px',
            },
        },
        accordionHeaderTitile: {
            color: `${Colors.blue[500]}`,
        },
        accordionDetails: {
            padding: `${theme.spacing(5)}px ${theme.spacing(3)}px`,
        },
    })
);

export const withinACard = (): StoryFnReactReturnType => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [expanded, setExpanded] = useState(true);

    return (
        <div className={classes.accordionPanel}>
            <Accordion
                expanded={expanded}
                classes={{ root: classes.accordionRoot }}
                onClick={(): void => setExpanded(!expanded)}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography variant={'subtitle2'} className={classes.accordionHeaderTitile}>
                        Device Usage
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <EmptyState
                        icon={<HelpOutline fontSize={'inherit'} style={getLeftToRightIconTransform()} />}
                        title={'No Devices Found'}
                        description={
                            'After you add devices to this repository, we will show your recent device activities here.'
                        }
                        actions={
                            <Button
                                variant={'contained'}
                                color={'primary'}
                                onClick={action('Button Clicked')}
                                startIcon={<AddIcon />}
                            >
                                {'Add Device'}
                            </Button>
                        }
                    />
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

withinACard.story = { name: 'within a card' };
