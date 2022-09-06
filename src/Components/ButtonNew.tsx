import React from 'react';

type ButtonNewProps = {
    titleBtn:string
    sent: () => void
    cloth: string
}
export const ButtonNew = (props:ButtonNewProps) => {
    const onClickBtn = () => {
        props.sent()
    }
    return (
        <button onClick={onClickBtn}>{props.titleBtn}</button>
    );
};
