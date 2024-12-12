export class ColumnKanban{
  index?:           number;
  titleColumn?:     string;
  card?:            CardKanban[];

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}


export class CardKanban{
  titleCard?:         string;
  description?:       string;
  startDate?:         string;
  endDate?:           string;
  progress?:          number;
  titleTask?:         string;
  Assignees?:         worker[];
  Comments?:          string;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}

export class worker{
  name?:              string;
  picture?:           string;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}
