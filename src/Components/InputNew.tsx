import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';

type InputNewProps = {
    setCloth:Dispatch<SetStateAction<string>>
    cloth: string
}
export const InputNew = (props:InputNewProps) => {

    const onChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
        props.setCloth(event.currentTarget.value)
    }

    return (
        <input value={props.cloth}  onChange={onChangeInput}/>
    );
};
