import { Card } from 'react-bootstrap';
import { Button as Btn } from './Button';

export const Cards = ({cardTitle, text, variant, color }) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Btn variant={variant} text={text} color={color} />             
        </Card.Body>
        </Card>
    )
}

