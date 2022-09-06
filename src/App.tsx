import React, {useState} from 'react';
import './App.css';
import {TaskProps, Todo} from "./Components/Todo";
import {Cars} from "./Components/Cars";
import {Money} from "./Components/Money";
import {FullInput} from "./Components/Input";
import {InputNew} from "./Components/InputNew";
import {ButtonNew} from "./Components/ButtonNew";

function App() {

    //const title2 = 'What to have'
    /*let tasks2 = [
        {id: 1, title: "I am happy", isDone: true},
        {id: 2, title: "I am busy", isDone: true},
        {id: 3, title: "You are cool", isDone: false}
    ]*/
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])
    const [message, setMessage] = useState([
        { message: 'Dima', title: "I am happy"},
        { message: 'Dana', title: "I am busy"},
        { message: 'Roma', title: "You are cool"}
    ])
    const addMessage = (newTitle:string) => {
        let newMessage = { message: 'Rima', title: newTitle}
        setMessage([newMessage,...message])
    }
    const [like, setLike] = useState([
        { look: 'dress'},
        { look: 'hat'},
        { look: 'short'}
    ])
    let [cloth, setCloth] = useState('')

    const addLook = (cloth:string) => {
        let newLook = {look:cloth}
        setLike([newLook,...like])

    }
    const sent = () => {
        addLook(cloth)
        setCloth('')
    }
    const title1 = 'What to learn'

    const [tasks1, setTask1] = useState<TaskProps[]>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])
    const removeTask = (id:number) => {
        setTask1(tasks1.filter(el => el.id !== id))
    }

    return (
        <div className="App">
            <Todo
                removeTask={removeTask}
                name={title1}
                task={tasks1}
            />
            <InputNew
                setCloth={setCloth}
                cloth={cloth}
            />
            <ButtonNew
                titleBtn={'addLook'}
                sent={sent}
                cloth={cloth}
            />
            {like.map((el, index) => <div key={index} style={{marginRight:'10px'}}>{el.look}</div>)}


            {/*<Cars car={topCars}/>
            <Money money={money} nameButton={'Dollars'}/>
            <FullInput
                changeTitle={addMessage}
            />
            {message.map((el, index) => <li key={index}>
                <span >{el.message} </span>
                <span >{el.title}</span>
            </li>)}*/}
        </div>
    );
}
export default App;
