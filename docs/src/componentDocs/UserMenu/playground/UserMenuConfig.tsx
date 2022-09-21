import { ComponentType } from '../../../__types__';

export const userMenuConfig: ComponentType = {
    componentName: 'User Menu',
    props: [
        {
            propName: 'menuSubtitle',
            inputType: 'string',
            inputValue: 'Menu Subtitle',
            propType: 'string',
            helperText: 'Subtitle shown when menu is open',
            required: false,
        },
        {
            propName: 'menuTitle',
            inputType: 'string',
            inputValue: 'Menu Title',
            propType: 'string',
            helperText: 'Title shown when menu is open',
            required: false,
        },
        {
            propName: 'useBottomSheetAt',
            inputType: 'number',
            inputValue: 600,
            propType: 'number',
            helperText:
                'Window pixel width at which the responsive bottom sheet menu is triggered (set to 0 to disable responsive behavior)',
            required: false,
            defaultValue: 600,
            rangeData: {
                min: 0,
                max: 1000,
                step: 50,
            },
        },
    ],
    otherProps: [
        {
            propName: 'showAvatarImage',
            inputType: 'boolean',
            inputValue: false,
            propType: 'boolean',
            helperText: 'Show / hide image for avatar',
            required: false,
        },
    ],
};

export default userMenuConfig;
