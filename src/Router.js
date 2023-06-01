// Router.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import MembersPage from './MembersPage';
import MainPage from './MainPage';
import NavBar from './NavBar';

function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/members" element={<MembersPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
