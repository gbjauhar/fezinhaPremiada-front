import { api } from "./api";

interface FormData {
  name: string;
  doccument: string;
  email: string;
  cel: string;
  password: string;
  password_: string;
}


export async function postUser(form: FormData){
  const body = {
    name: form.name,
    email: form.email,
    password: form.password,
    cel: form.cel,
    doccument: form.doccument,
  };
  try {
    const {data} = await api.post("/users", body)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function postSignIn(form: Record<string, any>) {
  const body = {
    password: form.password,
    doccument: form.doccument,
  };
   try {
    const {data} = await api.post("/auth/doccument", body)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}