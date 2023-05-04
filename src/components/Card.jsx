import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


export default function BasicCard(props) {
    // const = [count,setCount]
    let pokeNumber = props.pokeInfo.pokeNumber
    let pokeURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber}.png`
    // console.log(Object.keys(props))
    // console.log(props)
    return (
        <Card sx={{ minWidth:200 }}>
            <CardMedia
                sx={{ height: 200, padding: "1em 1em 0 1em", objectFit: "contain" }}
                image={pokeURL}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.pokeInfo.pokeName}
                </Typography>
            </CardContent>
        </Card>
    );
}