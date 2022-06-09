import React from 'react';
import {observer} from "mobx-react";
import Store from "../../store/store"
import TextField from '@material-ui/core/TextField';
import {action, makeObservable, observable} from "mobx";
import IMask from 'imask';
import {IFields} from "../../interfaces";

interface IProps {
    error: string;
    usersLogin: string | undefined;
    usersPassword: string | undefined;
}


const Login = observer(class extends React.Component<IProps> {
    fields: IFields[] = [
        {
            id: "login",
            label: "Введите логин",
            value: "",
            validate: false
        },
        {
            id: "password",
            label: "Введите пароль",
            value: this.props.usersPassword ? this.props.usersPassword : "",
            validate: false
        }
    ];
    isError: boolean = false;

    constructor(props: IProps) {
        super(props);
        makeObservable(this, {
            fields: observable,
            isError: observable,
            handleChange: action,
            errorFunction: action,
            setDefaultValueLogin: action
        });
        this.setDefaultValueLogin();
    };

    setDefaultValueLogin = () => {
        if (this.props.usersLogin) {
            this.fields[0].value = this.props.usersLogin
        } else if (Store.numberRecovery) {
            this.fields[0].value = Store.numberRecovery
        }
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>, el: IFields): void => {
        el.validate = false;
        IMask(
            document.getElementById('login')!, {
                mask: '+{7} 000 000 00 00',
            });
        el.value = event.target.value;
        el.value.length === 0 ? el.validate = true : el.validate = false;
        this.setUserData();
    };

    setUserData = (): void => {
        Store.usersData.login = this.fields[0].value;
        Store.usersData.password = this.fields[1].value;
    };

    errorFunction = (): void => {
        this.props.error ? this.isError = true : this.isError = false;
    };


    componentDidUpdate(): void {
        this.errorFunction();
    }

    render() {
        this.setUserData();
        return <div>
            <form>
                {this.fields.map((el: IFields) => {
                    return <label key={el.id} htmlFor={el.id}><p className={el.validate ? "error" : ""}>{el.label}</p>
                        <TextField id={el.id}
                                   variant="outlined"
                                   onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, el)}
                                   defaultValue={el.value}
                                   error={el.validate}
                        />
                    </label>
                })}
                <p className={"error"}>{this.isError ? this.props.error : ""}</p>
            </form>

        </div>
    }
});
export default Login;