export class MenuSideNav{
  name?:     string;
  url?:      string;
  icon?:     string;
  children?: MenuSideNav[];

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}


export class InfoBank{
  title?:        string;
  value?:        number;
  rate?:         number;
  quantity?:     number;
  state?:        string;
  valueState?:   number;
  stateColor?:   string;
  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}

export class TableTransactionsBank{
  Id?:                number;
  name?:              string;
  action?:            string;
  account?:           string;
  amount?:            string;
  dateTransacciont?:  Date;
  stateColor?:        string;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}
