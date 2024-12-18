export class ModalListTask{
  id?:number;
  checked?: boolean;
  title?: string;
  description?:string;
  startDate?:Date;
  members?: People[];

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}

export class People{
  name?: string;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}
