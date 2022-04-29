import { Url } from "./Url";

export const GetData = async () => {
    const respuesta = await fetch(Url)
    const datos = await respuesta.json()
    return datos
}