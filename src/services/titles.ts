import { TitleInterface } from "../context/AuthContext";
import { api } from "./api";

interface TitlesBuy {
  user_doccument: string | undefined,
  titles: string[],
  code: string,
  payment_form: string,
}

export async function getTitles(): Promise<TitleInterface[]> {
  try {
    const { data } = await api.get("/titles")
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function buyTitles(body: TitlesBuy) {
  try {
    const { data } = await api.patch("/titles/buy", body)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}