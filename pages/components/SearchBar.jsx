import React from 'react';
import {
  Container,
  TextField,
  Box,
  FormControl,
  Input,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useStateContext } from '../context/ContextProvider';

const SearchBar = () => {
  const { currentMode } = useStateContext();
  return (
    <FormControl
      sx={{
        mt: 3,
        bgcolor:
          currentMode === 'light'
            ? 'darkTextLightElements.main'
            : 'darkModeElements.main',
      }}
      fullWidth
      variant='outlined'
    >
      <Input
        placeholder='Search for a country'
        id='country'
        fullWidth
        variant='outlined'
        inputProps={{
          sx: {
            '&::placeholder': {
              color:
                currentMode === 'light'
                  ? 'lightModeText.main'
                  : 'darkTextLightElements.main',
            },
          },
        }}
        startAdornment={
          <InputAdornment
            position='start'
            sx={{
              color:
                currentMode === 'light'
                  ? 'lightModeText.main'
                  : 'darkTextLightElements.main',
            }}
          >
            <SearchIcon />
          </InputAdornment>
        }
        sx={{
          p: 1,
          color:
            currentMode === 'light'
              ? 'lightModeText.main'
              : 'darkTextLightElements.main',
        }}
      />
    </FormControl>
  );
};

export default SearchBar;
