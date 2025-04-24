import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/forms.module.css';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigate();

    const registerUser = async (event) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigation('/login');
        } catch (err) {
            alert('Erro ao Cadastrar');
        }
    }

    return (
        <div className={styles.containerGeral}>
            <form onSubmit={registerUser} className={styles.container}>
                <h1 className={styles.text}>REGISTER</h1>
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
                <button className={styles.button}>Register</button>
            </form>
        </div>
    );
}