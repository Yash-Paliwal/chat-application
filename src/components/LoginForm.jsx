import { useState } from 'react';
import axios from 'axios';

const Loginform = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "95ac8076-5d01-45ef-81ef-171a8a6c4acc", 'User-Name':username, 'User-Secret': password  };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            
            localStorage.setItem('username', username);
            localStorage.setItem('passsword', password);

            window.location.reload();
            setError('');
        } catch(error){
            setError('Oops, incorrect credentials')
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Yash Paliwal's Chat Application</h1>
                <form onSubmit = {handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  className="input" placeholder="UserName" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default Loginform;