import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class Entradas extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Título</h2>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item>Fuente</ListGroup.Item>
                            <ListGroup.Item>Contenido</ListGroup.Item>
                            <ListGroup.Item>Agregar</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Entradas;