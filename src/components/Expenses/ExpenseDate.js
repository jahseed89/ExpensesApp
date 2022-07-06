import "./expenseDate.scss";

const ExpenseDate = (props)=>{

    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expenseDate">
            <div className="expenseDate__month">{month}</div>
            <div className="expenseDate__year">{year}</div> 
            <div className="expenseDate__day">{day}</div>
        </div>
    )
    

}
export default ExpenseDate;