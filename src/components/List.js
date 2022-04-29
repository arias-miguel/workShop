import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { GetData } from "../helpers/GetData";
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

    getProductos = async () => {
        // const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/'
        // const resp = await fetch(url)
        
        // // const data = await resp.json()
        // // const {results} = data

        // const { results } = await resp.json()
        console.table(GetData())
        console.log('datos')

        this.setState({
            productos : GetData
        })
    }

    render() {
        return (
            <Container>
                <h1 color="white" >Lista de productos</h1>
                <hr />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        this.state.productos.map((items, index) => (
                            <Cards producto={items} key={index}
                            />
                        ))
                    }
                </div>

            </Container>
        );
    }
}