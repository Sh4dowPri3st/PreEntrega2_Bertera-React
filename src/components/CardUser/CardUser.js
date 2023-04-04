import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import "./CardUser.css";

const CardUser = (props) => {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "#FDFFAB", margin: '0.5rem' }}>
            <CardActionArea style={{ margin: '2rem' }}>
                <CardMedia 
                    component="img"
                    image={props.img}
                    alt="billeVerde"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {props.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardUser;