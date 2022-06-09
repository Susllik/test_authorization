import React from 'react';
import './App.css';
import Form from "./components/form/Form";
import {Routes, Route, Navigate} from 'react-router-dom'
import Entrance from "./components/entrance/Entrance";

function App() {
    return (
        <div>
            <Routes >
                <Route path={"/"} element={<Form/>}/>
                <Route path="password" element={<Form/>}/>
                <Route path="entrance" element={<Entrance/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>

        </div>
    );
}

export default App;
