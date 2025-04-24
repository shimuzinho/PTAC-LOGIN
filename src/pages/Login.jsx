import { useState } from 'react';

import styles from '../styles/forms.module.css';

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
        <div className={styles.containerGeral}>
            <form onSubmit={loginUser} className={styles.container}>
            <h1 className={styles.text}>Login</h1>
                <input 
                    placeholder='E-mail'
                    className={styles.input}
                    type='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input 
                    placeholder='Password'
                    className={styles.input}
                    type='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button className={styles.button}>Login</button>
                <Link to='/register'>Não tenho conta!</Link>
            </form>
        </div>
    )
};