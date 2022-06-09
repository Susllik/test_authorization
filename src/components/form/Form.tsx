import React, {useEffect} from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";
import Store from "../../store/store"
import {StyleComponent} from "./FormStyle";
import logo from '../../assets/logo.png'
import Button from '@material-ui/core/Button';
import Login from "../login/Login";
import {useNavigate, useLocation} from 'react-router-dom'
import RecoveryPassword from "../recoveryPassword/RecoveryPassword";
import {getRequest} from "../../controller/controller";
import ModalWindow from "../modalWindow/ModalWindow";
import {IStateLocation, IUsersData} from "../../interfaces";

const Form: React.FC = () => {
    const [textPrg, setTextPrg] = useState("Забыли пароль?");
    const [textBtn, setTextBtn] = useState("Войти");
    const [errorText, setErrorText] = useState("");
    const [isModal, setIsModal] = useState(false);
    const [userData, setUserData] = useState<IUsersData[]>([]);
    const location = useLocation();
    const navigate = useNavigate();
    const stateLocation = location.state as IStateLocation;

    const usersLogin = getCookie("usersLogin");
    const usersPassword = getCookie("usersPassword");

    const logIn = () => {
        switch (location.pathname) {
            case '/':
                userData.forEach((el: IUsersData) => {
                    if (el.login === Store.usersData.login && el.password === Store.usersData.password) {
                        navigate("/entrance");
                        if (!usersLogin || !usersPassword) {
                            document.cookie = 'usersLogin=' + Store.usersData.login;
                            document.cookie = 'usersPassword=' + Store.usersData.password;
                        }
                    } else {
                        setErrorText("Неправильный логин или пароль*")
                    }
                });
                break;
            case '/password':
                userData.forEach((el: IUsersData) => {
                    el.login === Store.numberRecovery
                        ? setIsModal(true)
                        : setErrorText("Данного номера не существует*")
                });
                break;
        }
    };

    function getCookie(name: string) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }


    const handleClick = (): void => {
        switch (location.pathname) {
            case '/':
                setTextPrg("Назад");
                setTextBtn("Позвонить");
                break;
            case '/password':
                navigate(-1);
                setTextPrg("Забыли пароль?");
                setTextBtn("Войти");
                break;
        }
    };

    useEffect((): void => {
        getRequest().then((res: IUsersData[]) => {
            return setUserData(res);
        })
    }, []);

    useEffect((): void => {
        setErrorText("");
    }, [location.pathname === "/"]);

    useEffect((): void => {
        setTextPrg("Забыли пароль");
        setTextBtn("Войти")
    }, [stateLocation?.period === "start"]);


    return <>
        <StyleComponent>
            <div className={"context"}>
                <div>
                    <img src={logo} alt="logo"/>
                    {location.pathname === '/password' ? <RecoveryPassword errorText={errorText}/> :
                        <Login usersPassword={usersPassword} usersLogin={usersLogin} error={errorText}/>}
                    <p className={"par"} onClick={handleClick}><Link to={"/password"}>{textPrg}</Link></p>
                    <Button variant="contained" onClick={logIn}>{textBtn}</Button>
                </div>
            </div>
        </StyleComponent>
        {isModal ? <ModalWindow/> : ""}
    </>
};
export default Form;
