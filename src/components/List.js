import React, { Component } from "react";
import { Url } from "../helpers/Url";
import { MainCards } from "../styles/ListStyle";
import Cards from "./Cards";

export default class List extends Component {
    constructor() {
        super()
        this.state = {
            productos: []
        }
    }
    componentDidMount() {
        console.log('Se acaba de montar');
        this.getProductos()
    }
    getProductos  = async () => {
        const respuesta = await fetch(Url)
        const datos = await respuesta.json()
        console.log(datos)
        
        this.setState({
            productos : datos
        })
    }
    render() {
        return (
            <MainCards>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        this.state.productos.map((items, index) => (
                            <Cards producto={items} key={index}
                            />
                        ))
                    }
                    
                </div>
            </MainCards>
        );
    }
}