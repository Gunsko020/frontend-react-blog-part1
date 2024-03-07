import './App.css'
import logo from './assets/logo-white.png'
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Post from "./pages/Post/Post.jsx";
import Overview from "./pages/Overview/Overview.jsx";
import Notfound from "./pages/NotFound/Notfound.jsx";



function App() {
    return (
        <div className="outer-container">
            <nav className="outer-container navigation">
                <ul className="options">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/overview">Alle posts</NavLink></li>
                    <li>
                        <NavLink to="/post">Nieuwe post maken</NavLink>
                    </li>
                </ul>
            </nav>
            <img src={logo} alt="Company logo"/>
            <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            <main>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/post/:id" element={<Post/>}></Route>
                <Route path="/overview" element={<Overview/>}></Route>
                <Route path="*" element={<Notfound/>}></Route>
            </Routes>
            </main>
        </div>
    )
}

export default App
