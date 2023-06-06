import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./tabs/Game";
import Home from "./tabs/Home";
import Leaderboard from "./tabs/Leaderboard";
import './style/style.css'

const RouteSwitch = () => {
    return (
        <BrowserRouter basename="/where-is-waldo">
            <Routes>
                <Route path='/' element={ <Home/>  } />
                <Route path='/game/:id' element={ <Game/>  } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;