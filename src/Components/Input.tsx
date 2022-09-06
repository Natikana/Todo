import React, {ChangeEvent, useState} from 'react';

type InputProps = {
    message: string,
    title: string
}
export type InputMainProps = {
    changeTitle:(newTitle:string) => void

}
export const FullInput = (props:InputMainProps) => {

    const [title, setTitle] = useState<string>('')

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }
    const onClickHandler = () => {
        props.changeTitle(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title}  onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>

        </div>
    );
};
