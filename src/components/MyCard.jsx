import React from 'react';
import Card from 'react-bootstrap/Card';
import Boton from './Boton';
function MyCard ({imagen, titulo, badgeColor, textButton}) {
    return (
        <>
            <Card >
                <Card.Img variant="top" src={imagen}
                />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Boton badgeColor={badgeColor} textButton={textButton}/>
                </Card.Body>
            </Card>
        </>
    );
};
export default MyCard;