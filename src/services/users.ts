import { api } from "./api";

interface Form {
  address?: string,
  city?: string,
  cep: string,
  uf?: string,
  neighborhood?: string,
  residence_number: string
}

export async function postUpdate(form: Form) {
  try {
    const { data } = await api.patch(`users`, form)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}