import React from 'react';

export function Dashboard({ items}) {
    console.log(items);
    return (
        <div class="row">
            {items.map(({ name, number, pic, color }, index) => <Display
                name={name}
                number={number}
                pic={pic}
                color={color}
                id={index} />)}
        </div>
    );
}
function Display({ name, number, pic, color }) {
    const color1 = { borderLeft: `0.5rem solid ${color}` };   //getting color from the api
    const col = { color: `${color}` }
    return (         //getting name and number from api
        <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box" style={color1}>
                <div className="details" style={col}>
                    {name}<br />{number}

                </div>
                <div className="image">
                    <img src={pic} alt={name} />
                </div>
            </div>
        </div>
    );
}
