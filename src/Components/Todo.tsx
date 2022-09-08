import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
export type TodoProps = {
    name: string
    task: TaskProps[]
    removeTask: (id:string) => void
    addMessage:(message:string)=> void
    message1:string
    setMessage1:(message1:string)=> void
}
export type TaskProps = {
    id: string,
    title: string,
    isDone:boolean
}
type FilterProps = 'All'| 'Active'| 'Completed'

export const Todo = (props:TodoProps) => {
    const[filter, setFilter] = useState('All')
    /*const[message, setMessage] = useState('')*/

    let filteredTask = props.task

    if (filter === 'Active') filteredTask = props.task.filter(el => !el.isDone)
    if (filter === 'Completed') filteredTask = props.task.filter(el => el.isDone)

    const onClickHandlerTsar = (nameBtn:FilterProps) => {
        setFilter(nameBtn)
    }

    const onclickInput = () => {
        props.addMessage(props.message1)
        props.setMessage1('')
    }
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMessage1(event.currentTarget.value)
    }
    const onKeyDownHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        return event.key === 'Enter' ? onclickInput() : ''
    }
    const onClickHandlerRemoveTask = (id:string) => {
        props.removeTask(id)
    }
    return (
        <div>
            <h3>{props.name}</h3>
            <div>
                <input value={props.message1}  onKeyDown={onKeyDownHandler} onChange={onChangeInput}/>
                <button onClick={onclickInput}>+</button>
            </div>
            <ul> {filteredTask.map(el => {
                return (
                    <li key={el.id}>
                        <button onClick={()=>onClickHandlerRemoveTask(el.id)}>x</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )})}
            </ul>
            <div>
                <button onClick={()=>onClickHandlerTsar('All')}>All</button>
                <button onClick={()=>onClickHandlerTsar('Active')}>Active</button>
                <button onClick={()=>onClickHandlerTsar('Completed')}>Completed</button>
            </div>
        </div>
    );
};
