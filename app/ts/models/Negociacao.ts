export class Negociacao {
  
  constructor( readonly data: Date, readonly quantidade: number, readonly valor: number){}

  get volume(){
    return this.quantidade * this.valor;
  }
}


// Obrigatoriamente tem uma data, quantidade e valor.
// Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado.
// Não pode ser modificada depois de realizada.
// _ convensão do js que não permite o acesso fora da class 
