import {createStyles, makeStyles, Typography} from "@material-ui/core";
import {storiesOf} from '@storybook/react';
import React from 'react';
import {appliedTheme} from '../.storybook/config';
import {storyWrapper} from '../src/util';
const backgroundImage = require('../assets/circles-bg.svg');

export const stories = storiesOf('Intro/Welcome', module);
stories.addDecorator(storyWrapper);

const useStyles = makeStyles(() =>
   createStyles({
       root: {
           //@ts-ignore
           color: appliedTheme.palette.secondary[50],
           //@ts-ignore
           backgroundColor: appliedTheme.palette.primary[500],
           backgroundImage: `url(${backgroundImage})`,
           height: '100%',
           width: '100%',
           display: 'flex',
           alignContent: 'center',
           justifyContent: 'center'
       },
       container: {
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           textAlign: 'center',
       },
      icon: {
         textAlign: 'center'
      }
   })
);
stories.addParameters({
   options: {
       showPanel: false,
   },
});

stories.add('to pxblue', () => {
    const classes = useStyles();
    const icon = require('../assets/pxb-icon.svg');
    return (
       <div className={classes.root}>
           <div className={classes.container}>
              <div className={classes.icon}>
                 <img src={icon} alt="pxb-icon" className={'rotate'} />
                </div>
               <Typography variant={'h1'}>Power Xpert <strong>Blue</strong></Typography>
               <Typography variant={'h2'}>React Component Library</Typography>
           </div>
       </div>
    )
});
