export class Users{
  id?:number;
  name?: string ;
  img?: string;
  position?:string;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}
