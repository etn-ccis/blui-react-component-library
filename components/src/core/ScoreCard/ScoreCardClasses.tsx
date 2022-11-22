import generateUtilityClass from '@mui/material/generateUtilityClass';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';

export type ScoreCardClasses = {
    /** Styles applied to the root element. */
    root?: string;
    /** Styles applied to the actionItems. */
    actionItems?: string;
    /** Styles applied to the badgeWrapper. */
    badgeWrapper?: string;
    /** Styles applied to the bodyWrapper. */
    bodyWrapper?: string;
    /** Styles applied to the content. */
    content?: string;
    /** Styles applied to the header. */
    header?: string;
    /** Styles applied to the headerBackground. */
    headerBackground?: string;
    /** Styles applied to the headerContent. */
    headerContent?: string;
    /** Styles applied to the headerInfo. */
    headerInfo?: string;
    /** Styles applied to the headerTitle. */
    headerTitle?: string;
    /** Styles applied to the headerSubtitle. */
    headerSubtitle?: string;
};

export type ScoreCardClassKey = keyof ScoreCardClasses;

export function getScoreCardUtilityClass(slot: string): string {
    return generateUtilityClass('BluiScoreCard', slot);
}

const scoreCardClasses: ScoreCardClasses = generateUtilityClasses('BluiScoreCard', [
    'root',
    'actionItems',
    'badgeWrapper',
    'bodyWrapper',
    'content',
    'header',
    'headerBackground',
    'headerContent',
    'headerInfo',
    'headerTitle',
    'headerSubtitle',
]);

export default scoreCardClasses;
