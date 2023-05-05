import React, { Component } from 'react'
import { TextField } from '@mui/material'
import { Box } from '@mui/material'
import { Container } from '@mui/material'
import { Divider } from '@mui/material'
import { Button } from '@mui/material'


export default function SignUpPage() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log(e.target.username.value)

        const url = 'http://127.0.0.1:5000/signup';
        
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        };


        const res = await fetch(url, options);
        const data = await res.json();
        if (data.status === 'ok') {
            // Show success msg
            console.log(data)
        }


    }
    return (
        <div className='side-margin'>
            
            <Container>
            <h1>Sign Up Page</h1>

            <form 
            style={{display:'flex',flexDirection:'column'}}
            onSubmit={handleSubmit}>
                <TextField
                    required
                    id="username"
                    label='Username'
                    variant='outlined'
                    name='username'
                />
                <br />
                <TextField
                    required
                    id="email"
                    label='Email'
                    variant='outlined'
                    name='email'
                />
                <br />
                <TextField
                    required
                    id="password"
                    label='Password'
                    variant='outlined'
                    name='password'
                    type='password'
                />
                <br />
                <TextField
                    required
                    id="confirmPassword"
                    label='Confirm Password'
                    variant='outlined'
                    name='confirmPassword'
                    type='password'
                />
                <br />
                <Button type='submit' variant='contained' >Submit</Button>
            </form>

            </Container>

        </div>
    )
}

