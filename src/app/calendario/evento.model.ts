import EventoDetalhe from "./evento-detalhe.model"
export default interface Evento {
  dataInicio:string;
  dataFim:string;
  ativo:boolean;
  detalhe: EventoDetalhe;
}
