import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export function App() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <button
                            style={{
                                width: 80,
                                height: 35,
                                backgroundColor: "#996dff",
                                margin: 20,
                                border: "none",
                                display: "flex",
                            }}
                        >
                            <a
                                href="/login"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    width: "100%",
                                    height: "100%",
                                    lineHeight: 2.5,
                                    fontWeight: "bold"
                                }}
                            >
                                Login
                            </a>
                        </button>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}