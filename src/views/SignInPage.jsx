import React from 'react'
import { Container, TextField, Button } from '@mui/material'

export default function SignInPage({logMeIn}) {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const url = 'http://127.0.0.1:5000/signin'
        const options = {
            method:"POST",
            headers:{
                Authorization:`Basic ${btoa(username+":"+password)}`
            }
        };

        const res = await fetch(url,options)
        const data = await res.json();
        if (data.status === 'ok') {
            const myUserInfo = data.data
            console.log(myUserInfo)
            logMeIn(myUserInfo)
        }

        return true
    }

    return (
        <div>
            <Container>
                <h1>Login</h1>

                <form
                    style={{ display: 'flex', flexDirection: 'column' }}
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
                        id="password"
                        label='Password'
                        variant='outlined'
                        name='password'
                        type='password'
                    />
                    <br />
                    <Button type='submit' variant='contained'>Submit</Button>
                </form>

            </Container>

        </div>
    )
}
