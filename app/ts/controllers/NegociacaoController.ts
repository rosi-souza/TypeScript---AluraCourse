import { NegociacoesView, MensagemView } from "../views/index";
import { Negociacoes, Negociacao } from "../models/index";

export class NegociacaoController {

  private _inputData: JQuery;
  private _inputQuantidade: JQuery;
  private _inputValor: JQuery;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _messagemView = new MensagemView('#mensagemView');
  
  constructor() {
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event) {
    
    event.preventDefault();
    let data = new Date(this._inputData.val().replace(/-/g, ','));

    if(!this._ehDiaUtil(data)){
      this._messagemView.update('Somente negociações em dias úteis, por favor!')
      return
    }

    const negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );
    this._negociacoes.adiciona(negociacao)
    this._negociacoesView.update(this._negociacoes);
    this._messagemView.update('Negociação enviada com sucesso!');
   
  }
  private _ehDiaUtil(data: Date){
    return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
  }
}

enum DiaDaSemana {
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  Domingo
}


