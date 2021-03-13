import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () =>{
  if(!localStorage.getItem('username')) return <LoginForm />


  return (
    <ChatEngine
        height = "100vh"
        projectID="95ac8076-5d01-45ef-81ef-171a8a6c4acc"
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
