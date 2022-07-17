// - Family: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
//- Weights: 300, 600, 800

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    //  Dark Blue (Dark Mode Elements):
    darkModeElements: {
      main: 'hsl(209, 23%, 22%)',
    },
    //  Very Dark Blue (Dark Mode Background):
    darkModeBackground: {
      main: 'hsl(207, 26%, 17%)',
    },
    // Very Dark Blue (Light Mode Text):
    lightModeText: {
      main: 'hsl(200, 15%, 8%)',
    },
    //Dark Gray (Light Mode Input):
    lightModeInput: {
      main: ' hsl(0, 0%, 52%)',
    },
    //Very Light Gray (Light Mode Background):
    lightModeBackground: {
      main: 'hsl(0, 0%, 98%)',
    },
    // White (Dark Mode Text & Light Mode Elements): 
    darkTextLightElements: {
        main: 'hsl(0, 0%, 100%)',
    
  },
},
  typography: {
    fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
    h4: {
      fontWeight: 800,
      fontSize: '22px'
    },
    body1: {
      fontWeight: 300,
    },
    subtitle1: {
      fontWeight: 600,
    },
    
},
});

export default theme;
