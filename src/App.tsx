import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Main from "@/pages/Main/Main";


export function App() { 
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
    );
}