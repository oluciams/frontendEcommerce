import { Card } from 'react-bootstrap';
import { Button as Btn } from './Button';

export const Cards = ({
    cardKey,
    cardTitle,
    cardValue,
    cardImage,
    text,
    variant,
    color }) => {
    return (
        <Card key={cardKey} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cardImage} />
        <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>{cardValue}</Card.Text>
            <Btn variant={variant} text={text} color={color} />             
        </Card.Body>
        </Card>
    )
}

