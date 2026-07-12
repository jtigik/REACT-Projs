// import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
// import { AboutPomodoro } from "./pages/AboutPomodoro";
// import { NotFound } from "./pages/NotFound";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {

    return (
        <Home />
        /* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPomodoro />} />
            <Route path="*" element={<NotFound />} />
        </Routes> */
    );
}
