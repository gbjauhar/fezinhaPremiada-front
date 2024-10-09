import { TitleInterface } from "../context/AuthContext";
import { api } from "./api";

export interface Editions {
  id: string;
  name: string;
  value: number;
  image: string;
  created_at: string;
  updated_at: string;
  edition_id: string;
  edition: {
    id: string,
    name: string,
    order: number,
    draw_date: string,
    fisical_titles: string[],
    selected_dozens: string[],
    status: string,
    titles: TitleInterface[],
    created_at: string,
    updated_at: string
  }
}


export async function getDrawItems(): Promise<Editions[]> {
  try {
    const { data } = await api.get("draw-items")
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}