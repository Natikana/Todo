import React, {useState} from 'react';
import {Button} from "./Button";
import {NewComp} from "./NewComp";

type MoneyProps = {
    money: BanknotsProps[]
    nameButton: string
}
type BanknotsProps = {
    banknots: string,
    value: number,
    number: string
}
type Banknots = 'Dollars' | 'RUBLS'| 'All'

export const Money = (props:MoneyProps) => {
    const [filterMoney, setFilterMoney] = useState<Banknots>('All')

        const changeMoney = (nameMoney: Banknots) => {
            setFilterMoney(nameMoney)
    }
    let currentMoney = props.money
    if (filterMoney === 'Dollars')  currentMoney = props.money.filter(el => el.banknots === 'Dollars')
    if (filterMoney === 'RUBLS')    currentMoney = props.money.filter(el => el.banknots === 'RUBLS')

    return (
        <div>
            <NewComp
                currentMoney={currentMoney}
                changeMoneyCall={changeMoney}
            />
        </div>
    );
};
