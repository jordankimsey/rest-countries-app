import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useStateContext } from '../context/ContextProvider';

const Header = () => {
  const { currentMode, setCurrentMode } = useStateContext();

  const toggleDarkMode = () => {
    setCurrentMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position='static'
        sx={{
          bgcolor:
            currentMode === 'light'
              ? 'darkTextLightElements.main'
              : 'darkModeElements.main',
        }}
      >
        <Toolbar>
          <Typography
            variant='h4'
            fontSize={22}
            color={
              currentMode === 'light'
                ? 'lightModeText.main'
                : 'darkTextLightElements.main'
            }
            component='div'
            sx={{ flexGrow: 1 }}
          >
            Where in the world?
          </Typography>
          <Button
            color={
              currentMode === 'light'
                ? 'darkModeElements'
                : 'darkTextLightElements'
            }
            onClick={toggleDarkMode}
            value={currentMode}
          >
            <DarkModeIcon />
            <Typography
              color={
                currentMode === 'light'
                  ? 'lightModeText.main'
                  : 'darkTextLightElements.main'
              }
              variant='body1'
              fontSize={16}
            >
              Dark Mode
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
