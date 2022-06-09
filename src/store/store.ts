import {makeObservable, observable} from "mobx";
import {IUsersData} from "../interfaces";

class Store {
    usersData: IUsersData = {
        login: null,
        password: null
    };
    numberRecovery: string | null = null;

    constructor() {
        makeObservable(this, {
            usersData: observable,
            numberRecovery: observable
        })
    }
}

export default new Store();
