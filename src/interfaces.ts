export interface IFields {
    id: string;
    label: string;
    value: string | undefined
    validate: boolean;
}

export interface IStateLocation {
    period?: string;
}

export interface IUsersData {
    login: string | null | undefined;
    password: string | null |undefined;
}
