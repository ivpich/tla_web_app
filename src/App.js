import './App.css';
import UserProfile from './UserProfile';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {
    const onClose = () => {
        tg.close();
    }

    useEffect(() => {
        tg.ready();
    }, [])


    const user = {
        avatar: '/circle_logo.png',
        firstName: 'Глеб',
        lastName: 'Суханов',
        occupation: 'TLA chief interlocker',
        role: 'Основатель',
        trustPoints: 75,
    }

    return (
        <div className="App">
            <UserProfile user={user}/>
            <button className="closeButton" onClick={onClose}>Закрыть профиль</button>
        </div>
    );
}

export default App;
