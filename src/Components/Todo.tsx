import React, {useState} from 'react';
export type TodoProps = {
    name: string
    task: TaskProps[]
    removeTask: (id:number) => void
    /*filterTask:(nameBtn:string) => void*/
}
export type TaskProps = {
    id: number,
    title: string,
    isDone:boolean
}
type FilterProps = 'All'| 'Active'| 'Completed'

export const Todo = (props:TodoProps) => {
    const[filter, setFilter] = useState('All')

    let filteredTask = props.task

    if (filter === 'Active') filteredTask = props.task.filter(el => !el.isDone)
    if (filter === 'Completed') filteredTask = props.task.filter(el => el.isDone)

    const onClickHandler = (nameBtn:FilterProps) => {
        setFilter(nameBtn)
    }
    return (
        <div>
            <h3>{props.name}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul> {filteredTask.map(el => {

                const onClickHandler = () => {
                    props.removeTask(el.id)
                }
                return (
                    <li key={el.id}>
                        <button onClick={onClickHandler}>x</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )})}
            </ul>
            <div>
                <button onClick={()=>onClickHandler('All')}>All</button>
                <button onClick={()=>onClickHandler('Active')}>Active</button>
                <button onClick={()=>onClickHandler('Completed')}>Completed</button>
            </div>
        </div>
    );
};
