import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useStateContext } from '../context/ContextProvider';

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const FilterRegion = () => {
  const { currentMode } = useStateContext();
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='region'
        select
        label='Filter by Region'
        // value={currency}
        // onChange={handleChange}
        // sx={{
        //   bgcolor:
        //     currentMode === 'light'
        //       ? 'lightModeBackground.main'
        //       : 'darkModeElements.main',
        //     '&:label': {color: 'red'}
        // }}
        InputLabelProps={{
          sx: {
            color:
              currentMode === 'light'
                ? 'lightModeText.main'
                : 'darkTextLightElements.main',
          },
        }}
        sx={{
          bgcolor:
            currentMode === 'light'
              ? 'lightModeBackground.main'
              : 'darkModeElements.main',
          color:
            currentMode === 'light'
              ? 'lightModeText.main'
              : 'darkTextLightElements.main',
        }}
      >
        {regions.map((region) => (
          <MenuItem
            key={region}
            value={region}
            sx={{
              color:
                currentMode === 'light'
                  ? 'lightModeText.main'
                  : 'darkTextLightElements.main',
              bgcolor:
                currentMode === 'light'
                  ? 'lightModeBackground.main'
                  : 'darkModeElements.main',
              '&:hover': {
                bgcolor:
                  currentMode === 'light'
                    ? 'lightModeBackground.main'
                    : 'darkModeElements.main',
              },
            }}
          >
            <Box
              sx={{
                color:
                  currentMode === 'light'
                    ? 'lightModeText.main'
                    : 'darkTextLightElements.main',
              }}
            >
              {region}
            </Box>
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default FilterRegion;
