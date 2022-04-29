import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Cards extends Component {
    render() {
        // const { image, superhero, publisher } = this.props.heroe

        return (
            <div>
                <Card style={{ width: '18rem', color: 'black' }}>
                    {/* <Card.Img variant="top" /> */}
                    <Card.Body>
                        <Card.Title>
                            {/* {superhero} */}hola
                        </Card.Title>
                        <Card.Text>
                            {/* {publisher} */}hols
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}