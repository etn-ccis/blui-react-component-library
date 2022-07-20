import { createClassesData } from './helpers/classesHelpers';
import { createPropsData } from './helpers/propsHelpers';

export const drawerPropsData = [
    createPropsData('activeItem', "itemID for the 'active'", `string`, 'no', ''),
    createPropsData('classes', 'Style overrides', `DrawerClasses`, 'no', ''),
    createPropsData(
        'condensed',
        'Show condensed nav items without labels (`rail` variant only)',
        `boolean`,
        'no',
        'false'
    ),
    createPropsData('noLayout', 'Set to true if used without a `<DrawerLayout>`', `boolean`, 'no', `false`),
    createPropsData(
        'onItemSelect',
        'A callback function to execute whenever an item is clicked',
        `(id: string) => void`,
        'no',
        ''
    ),
];

export const drawerClassesData = [createClassesData('root', 'MUI Drawer style override for the root element')];
