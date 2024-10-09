import { createContext } from "react";

interface User {
  address: string | null,
  associated_to: string | null,
  cel: string,
  cep: string | null,
  city: string | null,
  code: string | null,
  complement: string | null,
  country: string | null,
  created_at: string,
  credit: number,
  credit_limit: number,
  doccument: string,
  email: string,
  id: string,
  name: string,
  neighborhood: string | null,
  plan: boolean,
  residence_number: string | null,
  roles: string[],
  uf: string | null,
  updated_at: string,
  value: number
}

export interface TitleInterface {
  bar_code: string,
  buyed_title_id: string | null,
  chances: number,
  created_at: string,
  deleted: boolean,
  dozens: string[],
  edition: {
    created_at: string,
    draw_date: string,
    draw_items: {
      created_at: string,
      edition_id: string,
      id: string,
      image: string | null,
      name: string,
      selected_dozens: string[],
      updated_at: string,
      user_id: string | null,
      value: number
    },
    id: string,
    image_key: string | null,
    image_url: string | null,
    name: string,
    order: number,
    selected_dozens: string[],
    status: string,
    updated_at: string,
  },
  edition_id: string,
  id: string,
  name: string,
  qr_code: string,
  updated_at: string,
  user_id: string | null,
  value: number
}

interface Context {
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  user: User | null,
  setToken: React.Dispatch<React.SetStateAction<string | null>>,
  token: string | null,
  setCart: React.Dispatch<React.SetStateAction<TitleInterface[][] | null>>,
  cart: TitleInterface[][] | null
}

export const AuthContext = createContext<Context | null>(null)
