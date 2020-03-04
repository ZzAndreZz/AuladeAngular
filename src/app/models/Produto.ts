export class Produto {
    constructor(
        public cod: number,
        public desc: string,
        public regAnvisa: string,
        public controlado: boolean,
        public cod_grupo: number) { }
}