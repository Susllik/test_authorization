import React from 'react';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {StyleComponent} from "./EntranceStyle";
import NotificationWin from "../notification/NotificationWin"

const Entrance = () => {
    return <>
        <StyleComponent>
            <Link to={"/"}><Button variant="contained" className={"button"}>Выход</Button></Link>
        </StyleComponent>
        <NotificationWin/>
    </>
};

export default Entrance;