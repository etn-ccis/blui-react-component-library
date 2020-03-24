import { CSSProperties } from '@material-ui/styles';
import React from 'react';
import { Card, Typography, Divider, Theme, makeStyles, createStyles } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flex: '1 1 0px',
        },
        flexColumn: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
        },
        header: {
            height: 100,
            overflow: 'hidden',
            backgroundColor: theme.palette.primary.main,
            position: 'relative',
        },
        headerContent: {
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            alignItems: 'flex-start',
            padding: theme.spacing(2),
        },
        headerTitle: {
            color: Colors.white[50], // this.fontColor(),
            fontWeight: 600,
            fontSize: '1.125rem',
        },
        headerSubtitle: {
            lineHeight: 1.4,
        },
        headerInfo: {
            fontWeight: 300,
        },
        headerBackground: {
            position: 'absolute',
            zIndex: 0,
            width: '100%',
            backgroundSize: 'cover',
            height: '100%',
            opacity: 0.3,
            backgroundPosition: 'center',
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
        },
        bodyWrapper: {
            flex: '1 1 0px',
        },
        badgeWrapper: {
            flex: '0 0 auto',
            marginRight: 16,
            marginLeft: 16,
        },
        actionItems: {
            marginLeft: theme.spacing(1.5),
            cursor: 'pointer',
        },
    })
);
export type ScoreCardClasses = {
    root?: string;
    actionItems?: string;
    badgeWrapper?: string;
    bodyWrapper?: string;
    content?: string;
    header?: string;
    headerBackground?: string;
    headerContent?: string;
    headerInfo?: string;
    headerTitle?: string;
    headerSubtitle?: string;
};

export type ScoreCordProps = {
    actionItems?: JSX.Element[];
    actionLimit?: number;
    actionRow?: JSX.Element;
    badge?: JSX.Element;
    badgeOffset?: number;
    classes?: ScoreCardClasses;
    headerBackgroundImage?: string;
    headerColor?: string;
    headerFontColor?: string;
    headerInfo?: string | JSX.Element;
    headerTitle: string;
    headerSubtitle?: string | JSX.Element;
    style?: CSSProperties;
};

export const ScoreCard: React.FC<ScoreCordProps> = (props) => {
    const defaultClasses = useStyles(props);
    const {
        actionLimit = 3,
        actionItems,
        actionRow,
        badge,
        badgeOffset = 0,
        headerBackgroundImage,
        children,
        classes = {},
        headerColor,
        headerFontColor,
        headerInfo,
        headerTitle,
        headerSubtitle,
        style,
    } = props;

    const fontColor = (): string => headerFontColor || Colors.white[50];

    const getBackgroundImage = (): JSX.Element | undefined => {
        if (headerBackgroundImage) {
            return (
                <div
                    className={clsx(defaultClasses.headerBackground, classes.headerBackground)}
                    style={{ backgroundImage: `url(${headerBackgroundImage})` }}
                />
            );
        }
    };

    const getHeaderInfo = (): JSX.Element | undefined => {
        if (!headerInfo) return;
        if (typeof headerInfo === 'string') {
            return (
                <Typography
                    noWrap
                    variant={'body2'}
                    style={{ color: fontColor() }}
                    className={clsx(defaultClasses.headerInfo, classes.headerInfo)}
                >
                    {headerInfo}
                </Typography>
            );
        }
        return headerInfo;
    };

    const getHeaderSubtitle = (): JSX.Element | undefined => {
        if (!headerSubtitle) return;
        if (typeof headerSubtitle === 'string') {
            return (
                <Typography
                    noWrap
                    variant={'body2'}
                    style={{ color: fontColor() }}
                    className={clsx(defaultClasses.headerSubtitle, classes.headerSubtitle)}
                >
                    {headerSubtitle}
                </Typography>
            );
        }
        return headerSubtitle;
    };

    const getHeaderText = (): JSX.Element => (
        <div className={defaultClasses.flexColumn} style={{ flex: '1 1 0px', overflow: 'hidden' }}>
            <Typography
                variant={'h6'}
                noWrap
                className={clsx(defaultClasses.headerTitle, classes.headerTitle)}
                style={headerFontColor ? { color: headerFontColor } : {}}
            >
                {headerTitle}
            </Typography>
            {getHeaderSubtitle()}
            {getHeaderInfo()}
        </div>
    );

    const getActionItems = (): JSX.Element[] | undefined => {
        if (actionItems) {
            return actionItems.slice(0, actionLimit).map((actionItem, index) => (
                <div
                    key={`${index}`}
                    className={clsx(defaultClasses.actionItems, classes.actionItems)}
                    data-test={'action-item'}
                >
                    {actionItem}
                </div>
            ));
        }
    };

    const getHeroes = (): JSX.Element | undefined => {
        if (badge) {
            return (
                <div
                    className={clsx(defaultClasses.badgeWrapper, classes.badgeWrapper)}
                    style={{
                        alignSelf: badgeOffset !== 0 ? 'flex-start' : 'center',
                        marginTop: badgeOffset,
                    }}
                    data-test={'badge-wrapper'}
                >
                    {badge}
                </div>
            );
        }
    };

    const getFooter = (): JSX.Element | undefined => {
        if (actionRow) {
            return (
                <>
                    <Divider />
                    {actionRow}
                </>
            );
        }
    };

    return (
        <Card className={clsx(defaultClasses.root, classes.root)} style={style} data-test={'card'}>
            <div
                data-test={'header'}
                className={clsx(defaultClasses.header, classes.header)}
                style={Object.assign({ color: fontColor() }, headerColor ? { backgroundColor: headerColor } : {})}
            >
                {getBackgroundImage()}
                <div className={clsx(defaultClasses.headerContent, classes.headerContent)}>
                    {getHeaderText()}
                    {getActionItems()}
                </div>
            </div>
            <div className={clsx(defaultClasses.content, classes.content)} data-test={'content'}>
                <div className={clsx(defaultClasses.bodyWrapper, classes.bodyWrapper)} data-test={'body-wrapper'}>
                    {children}
                </div>
                {getHeroes()}
            </div>
            {getFooter()}
        </Card>
    );
};

ScoreCard.displayName = 'ScoreCard';
