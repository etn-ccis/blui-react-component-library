import { HomePage, ComponentPreview } from '../pages';
import Home from '@mui/icons-material/Home';
import LooksOne from '@mui/icons-material/LooksOne';

export const PAGES = [
    {
        title: 'Home Page',
        route: '',
        component: HomePage,
        icon: Home,
    },
    {
        title: 'Component preview',
        route: 'component-preview',
        component: ComponentPreview,
        icon: LooksOne,
    },
];
