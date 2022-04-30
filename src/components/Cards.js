import React, { Component } from "react";
import { Card,Button } from "react-bootstrap";

export default class Cards extends Component {
    render() {
        const { name, description, img, precio} = this.props.producto;
        const id = this.key
        return (
            <div>
                <Card style={{ width: '18rem', color: 'black', borderStyle:'none' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>
                            {name}
                        </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <div>$ {precio}/kg</div>
                    </Card.Body>
                    <Button variant="success" style={{ width: '70%', marginLeft:'15%'}} onClick={console.log(id)}>Agregar</Button>
                </Card>
            </div>
        );
    }
}