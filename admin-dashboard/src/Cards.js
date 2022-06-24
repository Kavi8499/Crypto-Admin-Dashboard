import React from 'react';
import { Card } from 'react-bootstrap';

export function Cards() {
    return (
        [{
            type: 'Primary',
            color: '#4e73df'
        },
        {
            type: 'Secondary',
            color: '#858796'
        },
        {
            type: 'Success',
            color: '#1cc88a'
        },
        {
            type: 'Danger',
            color: '#e74a3b'
        },
        {
            type: 'Warning',
            color: '#f6c23e'
        },
        {
            type: 'Info',
            color: '#36b9cc'
        },
        {
            type: 'Light',
            color: '#f8f9fc'
        },
        {
            type: 'Dark',
            color: '#5a5c69'
        }
        ].map((variant, idx) => (
            <div className="cards">
                <Card
                    bg={(variant.type).toLowerCase()}
                    key={idx}
                    text={(variant.type).toLowerCase() === 'light' ? 'dark' : 'white'}

                    className="mb-2"
                >

                    <Card.Body >
                        <Card.Title>{variant.type} </Card.Title>
                        <Card.Text>
                            {variant.color}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        ))
    );
}
