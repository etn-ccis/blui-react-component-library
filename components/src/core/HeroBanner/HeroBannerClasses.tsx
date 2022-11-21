import generateUtilityClass from '@mui/material/generateUtilityClass';

export type HeroBannerClasses = {
    root?: string;
};

export type HeroBannerClassKey = keyof HeroBannerClasses;

export function getHeroBannerUtilityClass(slot: string): string {
    return generateUtilityClass('BluiHeroBanner', slot);
}
