import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./expenseItem.scss";
import { useState } from "react";


const ExpenseItem = (props)=>{
    const [title, setTitle] = useState(props.title)

    const clickHandler = ()=>{
        setTitle('Updated');
    }
    return (
        <Card className="expenseItem">
            <ExpenseDate date={props.date}/>  
            <div className="expenseItem__description">
                <h2>{title}</h2>
                <div className="expenseItem__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card> 
    )
}

export default ExpenseItem; 
 