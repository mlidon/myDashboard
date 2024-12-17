export class ModalEdit{
  id?:number;
  title?: string ;
  btnAccept?: string;
  btnCancel?:string;
  description?:string;
  startDate?:Date;
  startTime?:Date;
  progress?:number;
  users?: string;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}
