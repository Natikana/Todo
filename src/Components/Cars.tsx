import React from 'react';
type CarsProps = {
    manufacturer: string,
    model: string
}
type CarMainProps = {
    car : CarsProps[]
}
export const Cars = (props:CarMainProps) => {
    return (
        <div>
            <ul>
                {props.car.map((el, index) => <li key={index}>
                    <span>{el.model} </span>
                    <span>{el.manufacturer}</span>
                </li>)}
            </ul>
        </div>
    );
};
