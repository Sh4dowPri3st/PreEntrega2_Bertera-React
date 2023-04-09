import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const DigiCard= ({ datita }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={datita.img}
                    alt="green iguana"
                />  
                <CardContent>
                    <Typography 
                        gutterBottom variant="h5" 
                        component="div">
                        {datita.name}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="text.secondary">
                        {datita.level}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default DigiCard;