class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
// Obrigatoriamente tem uma data, quantidade e valor.
// Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado.
// Não pode ser modificada depois de realizada.
// _ convensão do js que não permite o acesso fora da class 
