export interface ChildProps {
    children: React.ReactNode;
  }

export interface way {
  id: number,
  name: string,
  load: string,
  typeLoad: string,
  get: string,
  send: string
}

export interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export interface Step2SendProps {
  location: {
    name: number[],
    name2: number[]
  },
  city: {
    name: string,
    name2: string
  },
  is_data: boolean,
  acceptance_date: string,
  delivery_date: string,
  product: {
    name:string
  },
  id_service: string,
  id_cargo: string
}


export interface cardProps {
  id: number,
  name: string,
  content: string,
  img: string,
  translations: {
    ru: {
      content: string,
      name: string
    },
    en: {
      content: string,
      name: string
    },
  }
}
export interface ProductType {
  name: string,
  count: number,
  length: string,
  width: string,
  height: string,
  weight: string
}
