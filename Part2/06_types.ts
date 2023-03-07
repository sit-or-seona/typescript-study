export type Name = string;

export type Car = {
  wheel: number;
  model: string;
};

export interface Bike {
  wheel: 2;
  model: string;
}

export type FunctionType = (a?: object) => void;
