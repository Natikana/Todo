import React from 'react';
import {Button} from "./Button";

type NewCompProps = {
    currentMoney: BanknotsProps[]
    changeMoneyCall:(nameMoney: Banknots) => void
}
type BanknotsProps = {
    banknots: string,
    value: number,
    number: string
}
type Banknots = 'Dollars' | 'RUBLS'| 'All'
export const NewComp = (props:NewCompProps) => {
    return (
        <div>
            {props.currentMoney.map((el, index) => {
                return (
                    <li key={index}>
                        <span>{el.banknots} </span>
                        <span>{el.value} </span>
                        <span>{el.number} </span>
                    </li>
                )
            })}
            <div style={{marginRight:'10px'}}>
                <Button title={'Dollars'} onClickBtn={()=>props.changeMoneyCall('Dollars')}/>
                <Button title={'RUBLS'} onClickBtn={()=>props.changeMoneyCall('RUBLS')}/>
                <Button title={'All'} onClickBtn={()=>props.changeMoneyCall('All')}/>
            </div>
        </div>
    );
};
