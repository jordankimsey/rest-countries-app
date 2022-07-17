import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CountryCard = ({ country }) => {
  return (
    <Card sx={{ maxWidth: 225, height: 350 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image='/static/images/cards/contemplative-reptile.jpg'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h4' component='div'>
            Germany
          </Typography>
          <Typography variant='body1'>
            <Typography variant='subtitle1'>Population:</Typography> 81,770,900
          </Typography>
          <Typography variant='body1'>
            <Typography variant='subtitle1'>Region:</Typography> Europe
          </Typography>
          <Typography variant='body1'>
            <Typography variant='subtitle1'>Capital: </Typography>Berlin
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CountryCard;
