import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <>
            <form onSubmit={registerUser}>
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
                <button>Register</button>
            </form>
        </>
    );
}