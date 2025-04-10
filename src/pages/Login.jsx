import { useState } from 'react';

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (event) => {
        event.preventDefault();
        try {

        } catch (err) {
            
        }
    }

    return (
        <>
            <form onSubmit={loginUser}>
                <input 
                    placeholder='E-mail'
                    type='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input 
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button>Login</button>
            </form>
        </>
    )
};