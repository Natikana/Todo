import React from 'react';
type ButtonProps = {
    title: string
    onClickBtn:() => void
}
export const Button = (props:ButtonProps) => {
    const callBackButton = () => {
        props.onClickBtn()
    }
    return (
        <>
            <button onClick={callBackButton}>{props.title}</button>
        </>
    );
};

