import BasicCard from '../components/Card'
import React, { Component } from 'react'
import { Box,Button } from '@mui/material';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            pokeInfo : {
                pokeNumber:25,
                pokeName:'Pikachu',
            }
        }
    }

    getPokemon = async (newPokeNum) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${newPokeNum}`);
        const data = await res.json();
        const newPokeName = data.name
        this.setState({pokeInfo:{pokeNumber:newPokeNum,pokeName:newPokeName}})
        return data.name
    }
  
    render() {
    return (
    <div className='side-margin'>
    <br />
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
    >
    <BasicCard pokeInfo={this.state.pokeInfo}/>
    <br />
    <Button
    variant='outlined'
    onClick={()=>{
        console.log(Math.floor(Math.random() * (1008 - 1) + 1))
        const newPokeNumber = Math.floor(Math.random() * (1008 - 1) + 1)
        const pokeName = this.getPokemon(newPokeNumber)
    }}
    >
        Get New Pokemon
    </Button>
    </Box>
    


    </div>
    )
  }
}
