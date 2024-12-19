export class Users{
  id?:number;
  name?: string ;
  img?: string;
  position?:string;
  description?:string;
  state?:number; //active(green) = 1, out(orange) = 2, off(red) = 0,

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}
