// import React from 'react';
// import { render, screen, cleanup } from '@testing-library/react';
// import 'jest-dom/extend-expect';
// import { AppBar } from './AppBar';
// // import MuiAppBar from '@mui/material/AppBar';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import * as BLUIThemes from '@brightlayer-ui/react-themes';
// import Typography from '@mui/material/Typography';
// import { ClassNames } from '@emotion/react';

// const theme = createTheme(BLUIThemes.blue);

// afterEach(cleanup);

// describe('AppBar', () => {
//     it('should render without crashing', () => {
//         render(
//             <ThemeProvider theme={theme}>
//                 <AppBar />
//             </ThemeProvider>
//         );
//     });

//     it('should render Typography title', () => {
//         render(
//             <ThemeProvider theme={theme}>
//                 <AppBar>
//                     <Typography variant="h6">AppBar</Typography>
//                 </AppBar>
//             </ThemeProvider>
//         );
//         const divElement = screen.getByText(/AppBar/i);
//         expect(divElement).toBeTruthy();
//     });

//     it('should render at the correct default size', () => {
//         render(
//             <ThemeProvider theme={theme}>
//                 <AppBar variant="snap"></AppBar>
//             </ThemeProvider>
//         );
//         const headerClass = AppBarClasses().expandedHeight.getComputedStyle;
//         const bluiAppBar = document.getElementsByClassName(headerClass);
//         const style = window.getComputedStyle(bluiAppBar[0]);
//         expect(style.height).toBe('200px');
//     });
// });
