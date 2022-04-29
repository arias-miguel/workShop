import { Url } from "./Url";
// const url = 'https://f-11.herokuapp.com/products'
export const GetData = async () => {
    const respuesta = await fetch(Url)
    const datos = await respuesta.json()
    console.log(datos)
    return datos
}