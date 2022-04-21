import { generateUtilityClass } from '@mui/material';

export type HeroClasses = {
    root?: string;
    icon?: string;
    label?: string;
    values?: string;
};

export type HeroClassKey = keyof HeroClasses;

export function getHeroUtilityClass(slot: string): string {
    return generateUtilityClass('BluiHero', slot);
}
