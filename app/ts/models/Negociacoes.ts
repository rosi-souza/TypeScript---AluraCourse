class Negociaoes {
  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao){
    this._negociacoes.push(negociacao);
  }

  paraArray(){
    return this._negociacoes;
  }
}
