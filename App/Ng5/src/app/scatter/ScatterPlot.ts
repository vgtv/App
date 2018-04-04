
export interface Col {
  id: string;
  label: string;
  pattern: string;
  type: string;
  role: string;
}

export interface C {
  v: any;
  f: string;
}

export interface Row {
  c: C[];
}

export interface ScatterPlot {
  cols: Col[];
  rows: Row[];
}


