// import { SvgIconProps } from '@material-ui/core';

// export type TODOFIXME = any;
// export type FrameworkFilter = 'all' | 'angular' | 'react' | 'react-native';
// export type DetailedIcon = {
//     name: string;
//     filename: string;
//     family: string[];
//     categories: string[];
//     style: string;
//     tags: string[];
//     description: string;
//     author: string;
//     size: number;
// };
// export type IconType = {
//     name: string;
//     iconFontKey: string;
//     type?: 'Outlined' | 'Two Tone' | 'Rounded' | 'Sharp' | 'Filled';
//     isMaterial: boolean;
//     tags: string[];
//     categories: string[];
//     Icon?: any;
// };
// export type MatIconList = {
//     [key: string]: (props: SvgIconProps) => JSX.Element;
// };
// export type IconSize = 18 | 24 | 36 | 48;
// export type IconColor = 'black' | 'blue' | 'gray' | 'white';

// export type ColorType = { category: 'ui' | 'branding'; name: string; weight: number };

// export type ItemTypeFilter = 'all' | 'design' | 'development';
// export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
// export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';
// export type Release = 'R16' | 'R17' | 'R18' | 'R19' | 'R20' | 'R21' | 'R22' | 'R23' | 'R24' | 'R25' | 'R26';

// export type RoadmapItem = {
//     name: string;
//     description: string;
//     year: string | number;
//     quarter: Quarter;
//     status: Status;
//     author?: string;
//     type?: ItemTypeFilter;
//     framework?: FrameworkFilter[];
// };
// export type RoadmapBucket = {
//     name: string;
//     description: string;
//     type?: ItemTypeFilter;
//     framework?: FrameworkFilter[];
//     items: RoadmapItem[];
// };

// export type AnnouncementData = {
//     id: number;
//     bannerContent: string;
//     startDate: Date;
//     endDate: Date;
//     devOnly: boolean;
// };

// export type Result = {
//     url: string;
//     title: string;
//     weight?: number;
//     text?: string;
// };

// /**
//  * For current maintainers and contributors (present or past)
//  */

// export type OtherContributor = {
//     /**
//      * Contributor Name
//      */
//     name: string;

//     /**
//      * Short description on what they did
//      */
//     role?: string;

//     /**
//      * An image to be used for their avatars
//      */
//     image?: string;
// };

// export type CurrentMaintainter = OtherContributor & {
//     /**
//      * A detailed description on the contributor role in the team
//      * current maintainers only
//      */
//     description?: string;

//     /**
//      * Contact info, social medias
//      * current maintainers only
//      */
//     contacts?: {
//         github?: string;
//         linkedIn?: string;
//     };
// };

export type propsType = {
    propName: string;
    inputType: string;
    inputValue: boolean | string | string[] | [];
    defaultValue?: string;
    propType: string;
    helperText: string;
    required: boolean;
};

export type componentType = {
    componentName: string;
    id?: string;
    parentId?: string;
    props?: propsType[];
    otherProps?: propsType[];
};
