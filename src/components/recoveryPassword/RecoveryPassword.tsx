import React from 'react';
import {observer} from "mobx-react";
import Store from "../../store/store"
import TextField from '@material-ui/core/TextField';
import {makeObservable, action} from "mobx";
import IMask from 'imask';

interface IProps {
    errorText: string;
}

const RecoveryPassword = observer(class extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);
        makeObservable(this, {
            changeField: action
        });
    };

    changeField = (event: React.ChangeEvent<HTMLInputElement>) => {
        IMask(
            document.getElementById('recoveryPassword')!, {
                mask: '+{7} 000 000 00 00',
            });
        Store.numberRecovery = event.target.value;
    };

    render() {
        return <div>
            <form>
                <p className={"password_header"}>Восстановление пароля</p>
                <label htmlFor={"recoveryPassword"}><p>Введите номер телефона</p>
                    <TextField id={"recoveryPassword"}
                               variant="outlined"
                               className={'formControl'}
                               onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.changeField(event)}
                               error={this.props.errorText !== "" ? true: false }
                               helperText={this.props.errorText}
                    />
                </label>
            </form>


        </div>
    }
});
export default RecoveryPassword;