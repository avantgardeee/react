import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import s from "./components/Profile/Profile.module.css";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className={'app__wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app__wrapper_content'}>
                <Routes>
                    <Route path="/profile" element={<ProfileContainer />}>
                        <Route path=":userId" element={<ProfileContainer />} />
                    </Route>
                    <Route path="/dialogs*" element={<DialogsContainer
                    />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/users*" element={<UsersContainer/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/friends*" element={<Friends/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
