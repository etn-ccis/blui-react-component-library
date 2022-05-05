import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type UserMenuClasses = {
    /** Styles applied to the root element. */
    root?: string;
    /** Styles applied to the avatarRoot element. */
    avatarRoot?: string;
    /** Styles applied to the header element. */
    header?: string;
    /** Styles applied to the headerRoot element. */
    headerRoot?: string;
    /** Styles applied to the menuTitle element. */
    menuTitle?: string;
    /** Styles applied to the navigation element. */
    navigation?: string;
    /** Styles applied to the navGroups element. */
    navGroups?: string;
    /** Styles applied to the noCursor element. */
    noCursor?: string;
    /** Styles applied to the bottomSheet element. */
    bottomSheet?: string;
};

export type UserMenuClassKey = keyof UserMenuClasses;

export function getUserMenuUtilityClass(slot: string): string {
    return generateUtilityClass('BluiUserMenu', slot);
}

const userMenuClasses: UserMenuClasses = generateUtilityClasses('BluiUserMenu', [
    'root',
    'avatarRoot',
    'header',
    'headerRoot',
    'menuTitle',
    'navigation',
    'navGroups',
    'noCursor',
    'bottomSheet',
]);

export default userMenuClasses;
