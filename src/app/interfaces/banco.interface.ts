export interface Banco {
    id: string;
    nombre: string;
}

export interface TipoCuenta{
    id: string;
    nombre: string;
}

export interface Region{
    comunas: Array<Comuna>;
    region: string;
}

export interface Comuna {
    comunas: string[];
}
