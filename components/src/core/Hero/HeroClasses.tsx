import generateUtilityClass from '@mui/material/generateUtilityClass';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';

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

const heroClasses: HeroClasses = generateUtilityClasses('BluiHero', ['root', 'icon', 'label', 'values']);

export default heroClasses;
