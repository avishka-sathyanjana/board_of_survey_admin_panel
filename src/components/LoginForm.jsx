import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth' ;

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sign in the user with the email and password, if successful display a message to the screen

            await signInWithEmailAndPassword(
                auth, email, password
            );
            setError('Successfully logged in!');
        }
        catch (error) {
            setError(error.message);    
        }
    }
            


    return(
        <div>
            <h2>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <button type='submit'>Login</button>

            </form>
        </div>
    );

}

export default LoginForm;
