export class ColumnKanban{
  id?:                number;
  titleColumn?:       string;
  card?:              CardKanban[];

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}


export class CardKanban{
  id?:                number;
  idColumn?:          number;
  titleCard?:         string;
  description?:       string;
  startDate?:         Date;
  startTime?:         Date;
  progress?:          number;
  titleTask?:         string;
  edited?:            boolean;
  // Assignees?:         worker[];
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


export class Tasks{
  name?: string;
  completed?: boolean;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}
