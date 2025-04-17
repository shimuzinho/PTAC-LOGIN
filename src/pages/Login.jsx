import { useState } from 'react';

import { auth } from '../config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useNavigate, Link } from 'react-router-dom';
import { SignJWT } from 'jose';

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const loginUser = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);

            const secretKey = new TextEncoder().encode('gustavoélindo');

            const token = await new SignJWT({ user: 'admin' })
                .setProtectedHeader({ alg: 'HS256'})
                .setIssuedAt()
                .setExpirationTime('1h')
                .sign(secretKey);

            localStorage.setItem('token', token);
            navigate('/');
            alert('Logado com sucesso!');
        } catch (err) {
            alert('Erro no login ' + err)
        }
    }

    return (
        <>
            <h1>Login</h1>
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
                <Link to='/register'>Não tenho conta!</Link>
            </form>
        </>
    )
};